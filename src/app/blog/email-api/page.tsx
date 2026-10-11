import PostLayout from "@/components/blog/postLayout";

function page() {
  return (
    <PostLayout
      id="email-api"
      imgUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/email-api-cover.png"
      title="From One Lambda to Four: How My Market Emails Grew Up"
      summary="How my twice-weekly market update email went from one .NET Lambda to a Spring Boot Email API on AWS, and what I'd write differently now"
      alt="Java, .NET, Python, Rust, Terraform and AWS logos on a coloured gradient"
    >
      <p>Every Tuesday and Thursday at 9am, a little email slides into my inbox 📬. It tells me what the stocks I own (or am eyeing 👀) opened at, how far they've moved in the last month, and what the rand is doing against the dollar.</p>
      <p>It solves no big problem. Nobody asked for it. I just wanted to keep an eye on the market without opening five apps before my coffee, so I built it.</p>
      <p>This is the story of that email: how it started as one Lambda doing <em>everything</em>, how it turned into four small pieces with one job each, and what I'd write differently now that I've grown a bit as an engineer.</p>
      <h2>V1: one Lambda to rule them all 🧙‍♂️</h2>
      <p>The first version was a single C# (.NET 8) Lambda, <a href="https://github.com/Lesmol/legacy-market-data_lambda" target="_blank" rel="noopener noreferrer">legacy-market-data_lambda</a>. It was a one-function band, and on every run it would:</p>
      <ol>
        <li>Ask Polygon.io for each ticker's opening price today and one month ago, nudging weekend dates back to Friday 📅.</li>
        <li>Grab the USD/ZAR rate for the previous market day.</li>
        <li>Build the email's HTML by gluing strings together in code 🧵.</li>
        <li>Fire it off through Amazon SES to recipients hardcoded right there in the function.</li>
      </ol>
      <p>And it worked! The free tier only allows 5 requests a minute, so after every 4 calls it would nap for 60 seconds 😴. Slow, but reliable. The catch: everything lived in one place, so changing a ticker, adding a subscriber or moving a pixel in the email meant redeploying the whole thing.</p>
      <h2>So why rebuild something that works? 🤔</h2>
      <p>Honest answer: to learn. The bank I work at runs on Java and Spring, and I wanted more reps with both outside of work hours 🏋️. Rewriting a C# service that already worked was the perfect excuse.</p>
      <p>Once I started, porting one big function felt wrong, so I pulled it apart:</p>
      <ul>
        <li><strong>Fetching data</strong> is a scheduled job that calls an API and does some maths. Python is quick to write and perfect for that.</li>
        <li><strong>Sending email</strong> is the part I wanted in Java, as a Spring Boot service.</li>
        <li><strong>Config</strong> like tickers and subscribers moved out of code and into DynamoDB, so changing them no longer means a redeploy.</li>
      </ul>
      <p>The Email API is also meant to grow. It's my <strong>personal</strong> email service: whenever I build and host another side project that needs to send something, it gets its own endpoint and template here 📮. Anything that isn't personal (work, a client, someone else's product) gets its own separate service. This one is just for me.</p>
      <h2>V2: four pieces, one job each 🧩</h2>
      <p>In V2 every part does one thing, and the Email API has no idea where its data comes from. It just gets handed numbers and makes them pretty 💅.</p>
      <figure>
        <a href="/blog/email-api/v2-architecture.svg" target="_blank" rel="noopener noreferrer">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/blog/email-api/v2-architecture-stacked.svg"
              width={440}
              height={548}
            />
            <img
              src="/blog/email-api/v2-architecture.svg"
              alt="EventBridge triggers the market-data Lambda, which calls Polygon.io and reads tickers and subscribers from DynamoDB, then POSTs to API Gateway. An authoriser Lambda checks the API key, the gateway forwards to the Email API, and the Email API sends through Amazon SES."
              width={880}
              height={330}
            />
          </picture>
        </a>
      </figure>
      <p>EventBridge wakes up the <a href="https://github.com/Lesmol/market-data_lambda" target="_blank" rel="noopener noreferrer">market-data Lambda</a> at 07:00 UTC (09:00 here in South Africa) on Tuesdays and Thursdays. It reads the tickers and subscribers from a DynamoDB config table, then asks Polygon for yesterday's opening price and the price about 30 days earlier for each ticker. It still sleeps every 4 calls 😴, works out the percentage change, adds the USD/ZAR rate and POSTs the lot to the Email API with an <code>x-api-key</code> header.</p>
      <p>That request hits API Gateway first, where a tiny <a href="https://github.com/Lesmol/market-financials-auth_lambda" target="_blank" rel="noopener noreferrer">Python authoriser</a> checks the key against its own DynamoDB table. No key in the table, no entry. Once it's through, the Email API renders the email and hands it to SES to deliver 🚀.</p>
      <h2>Inside the Email API 🔧</h2>
      <p>The <a href="https://github.com/Lesmol/email-api_springboot" target="_blank" rel="noopener noreferrer">Email API</a> is a small Spring Boot 4 app on Java 25. Right now it has exactly one endpoint, <code>POST /api/v1/send-market-update</code>, which takes the stocks, the forex rate and who to send it to:</p>
      <pre>
        <code>{`{
  "stocks": [
    { "symbol": "UBER", "open": "75.40", "pastOpen": "70.20", "percentageDifference": "7.41" }
  ],
  "forex": { "ticker": "USDZAR", "openingPrice": 18.45 },
  "recipients": ["me@example.com"]
}`}</code>
      </pre>
      <h3>Making it pretty with Thymeleaf 🎨</h3>
      <p>V1 glued HTML strings together in C#. V2 keeps the layout in a Thymeleaf template, <code>market-report.html</code>. Every stock becomes a little card with its current open, its open a month ago and the % change, plus a green-edged card for USD/ZAR 💚. The service drops the data into a Thymeleaf <code>Context</code>, renders the template and passes the HTML to SES:</p>
      <pre>
        <code>{`Context context = new Context();
context.setVariables(request.variables());

String htmlBody = templateEngine.process(request.templateName(), context);

SendEmailRequest sendEmailRequest = SendEmailRequest.builder()
        .fromEmailAddress("updates@lvmolemi.com")
        .destination(d -> d.toAddresses(request.to()))
        .content(c -> c.simple(m -> m
                .subject(s -> s.data(request.subject()).charset("UTF-8"))
                .body(b -> b.html(h -> h.data(htmlBody).charset("UTF-8")))
        ))
        .build();

sesClient.sendEmail(sendEmailRequest);`}</code>
      </pre>
      <p>Each recipient gets their own email, and if one fails it's logged and the rest still go out. Want to change the layout? Edit an HTML file, not Java 🙌.</p>
      <h3>A whole Spring Boot app…on Lambda? 🤯</h3>
      <p>Yep. I wanted a normal Spring Boot app, not a rewrite into a Lambda handler. The <a href="https://github.com/awslabs/aws-lambda-web-adapter" target="_blank" rel="noopener noreferrer">AWS Lambda Web Adapter</a> makes that work: it's copied into the container as a Lambda extension, starts the app on port 8080 and translates Lambda events into plain HTTP requests 🪄.</p>
      <pre>
        <code>{`FROM amazoncorretto:25-al2023
WORKDIR /app

COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:1.0.0-rc1 /lambda-adapter /opt/extensions/lambda-adapter
COPY target/email-api-*.jar app.jar

ENV PORT=8080
ENTRYPOINT ["java", "-Xmx512m", "-jar", "app.jar"]`}</code>
      </pre>
      <p>The one setting that matters is <code>AWS_LWA_REMOVE_BASE_PATH=/prod</code>. API Gateway sticks the stage name on the front of the path, and the adapter peels it off so Spring still sees <code>/api/v1/send-market-update</code>. The function gets 2 GB of memory and a 50-second timeout. Full disclosure: those numbers were pulled out of thin air 🎲. Cold starts don't really matter for something that runs twice a week, and the emails have shown up every single time ✅.</p>
      <p>A GitHub Actions workflow builds the image and pushes it to Amazon ECR when I trigger it by hand from the <code>develop</code> branch.</p>
      <h2>Then vs now: how my Java has changed 🌱</h2>
      <p>Since writing the Email API, I built <a href="https://github.com/Lesmol/customer-statements_springboot" target="_blank" rel="noopener noreferrer">customer-statements_springboot</a>, the project I put together for my software engineer promotion at Capitec. Putting the two side by side is a bit like reading your old school essays 😅. Nothing in the Email API is <em>broken</em>, but here's what past-me did that present-me would do differently.</p>
      <h3>1. Records instead of inheritance 🧬</h3>
      <p>The market update request extends a <code>BaseEmailRequest</code> class, held together with Lombok getters, setters and hand-written constructors, just so every request shares a <code>recipients</code> list. Meanwhile the stocks and forex payloads are already records. In customer-statements I lean on records for responses and config, nesting them where it helps. Today I'd write:</p>
      <pre>
        <code>{`public record MarketUpdateRequest(
        @NotEmpty List<@Valid StockData> stocks,
        @NotNull @Valid ForexData forex,
        @NotEmpty List<@Email String> recipients) { }`}</code>
      </pre>
      <p>One immutable type, no inheritance, and the shape of the request is readable at a glance 👀.</p>
      <h3>2. Actually validating input 🛡️</h3>
      <p>The Email API takes <code>@RequestBody MarketUpdateRequest</code> and trusts it completely. An empty recipient list or a missing forex block sails straight through to Thymeleaf 🫠. In customer-statements, requests are <code>@Valid</code> with Jakarta constraints, and I even wrote a custom <code>@ValidStatementFile</code> validator that checks the content type, the PDF magic bytes and a 10 MB size limit. Validation failures come back as a tidy 400 listing what was wrong. The Email API deserves the same, starting with that <code>@Valid</code> above.</p>
      <h3>3. Config in config, not in code ⚙️</h3>
      <p>The Email API hardcodes its sender address, the SES region (<code>Region.AF_SOUTH_1</code>), the subject and the email title (which, fun fact, says "Weekly Market Insights" on an email that goes out twice a week 🙃). Its <code>application.yaml</code> holds just the app name. In customer-statements everything tuneable lives in typed <code>@ConfigurationProperties</code> records like <code>ApplicationConfigurationProperties</code> and <code>UserServiceProperties</code>. For the Email API that would look like:</p>
      <pre>
        <code>{`@ConfigurationProperties("email")
public record EmailProperties(String fromAddress, String region, String marketUpdateSubject) { }`}</code>
      </pre>
      <p>That also matters for where this API is headed: every new endpoint brings its own template and subject, and those belong in config, not scattered through the service 📮.</p>
      <h3>4. Errors that tell the truth 🚨</h3>
      <p>Three things I'd fix in the Email API's error handling:</p>
      <ul>
        <li>The service catches a failure per recipient, logs it and carries on, then returns <strong>200 OK</strong> no matter what. If every email failed, the caller would never know 🤷.</li>
        <li>The catch-all handler is declared for <code>Exception</code> but takes a <code>RuntimeException</code> parameter, and it sends <code>e.getMessage()</code> back to the caller on a 500, leaking internals.</li>
        <li>The package is called <code>excpetion</code>. Yes. Typo'd. Since day one 🙈.</li>
      </ul>
      <p>Customer-statements has specific exceptions (<code>DocumentNotFoundException</code>, <code>ForbiddenException</code>, <code>S3UploadException</code>…) each mapped to the right status (404, 403, 413, 503 when a downstream service is down), and the generic 500 hides the details. For the Email API I'd return a result that says which recipients got their email, and use a 502 or 207-style response when some didn't.</p>
      <h3>5. Tests that test something 🧪</h3>
      <p>The Email API's only test is <code>contextLoads()</code>. Customer-statements has Mockito unit tests for <code>StatementService</code> and <code>RedisService</code> that check the happy path, the failure paths and the order things happen in. The Email API is small enough that a few tests would cover it: mock <code>SesV2Client</code>, check one email goes out per recipient, check a partial failure is reported, and check the template renders with sample data.</p>
      <h3>6. Consistent types 🔢</h3>
      <p>Forex <code>openingPrice</code> is a <code>BigDecimal</code>, but stock <code>open</code>, <code>pastOpen</code> and <code>percentageDifference</code> are all <code>String</code>s. Strings are easy to drop into a template, but they push all the number formatting onto whoever calls the API. Today I'd make them all <code>BigDecimal</code> and format them in the template.</p>
      <h3>Bonus round: the gateway I <em>won't</em> bring here 🚪</h3>
      <p>Customer-statements has its own <code>api-gateway</code> module, and I'm quite proud of it. It's built on Spring Cloud Gateway and is the single front door for three services:</p>
      <ul>
        <li>🔐 It's an OAuth2 resource server, so every request needs a valid JWT from <a href="https://dexidp.io/" target="_blank" rel="noopener noreferrer">Dex</a>, the OIDC provider. Only <code>/api/auth/**</code> is open, so people can log in.</li>
        <li>🪪 A <code>ClaimToHeaderFilter</code> decodes the token's <code>sub</code> claim into a user id and forwards it downstream as an <code>X-User-Id</code> header. The services behind it never touch tokens; they just read a header.</li>
        <li>🗺️ Routes are plain config: <code>/api/auth/**</code> goes to login-service, <code>/api/statements/**</code> to statement-service, <code>/api/users/**</code> to user-service.</li>
      </ul>
      <p>Would I put that in front of the Email API? Nope 🙅. Here there's one service and one caller, and the caller is a machine, not a person logging in. AWS API Gateway plus a small API-key authoriser already does exactly that job, and a second always-on Spring app on Lambda would just add another cold start and more to maintain. Still, it's the clearest example of how much my thinking about auth and service boundaries has grown since the Email API.</p>
      <h2>Plot twist: Polygon is now Massive 🦣</h2>
      <p>While this project sat on the back burner 🔥, my data provider changed its name. On 30 October 2025, <a href="https://massive.com/blog/polygon-is-now-massive" target="_blank" rel="noopener noreferrer">Polygon.io became Massive</a>, with a new API home at <code>api.massive.com</code> running alongside the old <code>api.polygon.io</code>.</p>
      <p>The good news: my fetcher still calls <code>api.polygon.io</code> and it still works 🎉. Massive said existing keys stay valid and the old domain keeps working "for an extended period". The not-so-good news: that same announcement said they plan to phase out the old endpoints in 2026, with plenty of notice first. When I checked <a href="https://massive.com/changelog" target="_blank" rel="noopener noreferrer">their changelog</a> in October 2026, there was still no shutdown date for <code>api.polygon.io</code>, and the daily open/close endpoint I use (<code>/v1/open-close/&#123;ticker&#125;/&#123;date&#125;</code>) is still in <a href="https://massive.com/docs/rest/stocks/aggregates/daily-ticker-summary" target="_blank" rel="noopener noreferrer">the docs</a> with no deprecation notice.</p>
      <p>So it isn't urgent, but it's on the list 📝. Because the paths are the same, the fix should be tiny: swap the base URL in the market-data Lambda to <code>api.massive.com</code> before Massive turns the old one off.</p>
      <h2>Infra things I'd do differently 🏗️</h2>
      <p>It works, but I built parts of it while I was still learning the tools, and it shows in a few spots.</p>
      <p><strong>The gateway setup.</strong> The Email API lives on the API Gateway I'd already built for my Market Financials project, behind a catch-all <code>ANY /&#123;proxy+&#125;</code> route. I picked that while I was still figuring out API Gateway configuration. I understand it a lot better now, and my <a href="https://github.com/Lesmol/statement-analysis_terraform" target="_blank" rel="noopener noreferrer">Statement Analysis Terraform</a> is a better picture of how I'd set it up today.</p>
      <p><strong>Terraform layout.</strong> The <a href="https://github.com/Lesmol/market-financials-lambda_terraform" target="_blank" rel="noopener noreferrer">market-financials Terraform</a> is flat: one folder of <code>.tf</code> files split by resource type. For a project this small that's fine. Next time I'd use modules, which is how we structure infrastructure where I work and what I've moved to on newer projects.</p>
      <p><strong>The Rust authoriser.</strong> There's a <a href="https://github.com/Lesmol/market-financials-auth-rust_lambda" target="_blank" rel="noopener noreferrer">Rust version of the authoriser</a> in my GitHub, but it isn't deployed, and confession time: I didn't really write it. I was only a few days into <em>The Rust Programming Language</em> and getting it working with Lambda was beyond me at the time, so I had Claude generate it 🤖. Since then I've worked through Codewars challenges and I'm getting comfy with Cargo. The plan is to bin that version and write my own.</p>
      <p><strong>Subscribers.</strong> There are two subscribers, and I add them by typing straight into DynamoDB. Fine for two people; anything bigger would need a proper subscribe flow.</p>
      <h2>That's a wrap 🎬</h2>
      <p>From the inbox, nothing changed: same email, same numbers, same 9am ping 📬. Under the hood, it took me from one C# function to a scheduled Python job, an authoriser, a Spring Boot service on Lambda and the Terraform holding it all together. It got me more Java and Spring practice outside of work, which was the whole point. And looking back at it next to my promotion project is a nice reminder of how far I've come 🌱.</p>
      <p>Next up, whenever it leaves the back burner: the Massive URL swap, validation and proper errors, a few real tests, and a new endpoint the next time one of my side projects needs to send an email 📮. Personal projects don't need a big problem to be worth building ✨.</p>
      <h3>All the code 🧑‍💻</h3>
      <ul>
        <li><a href="https://github.com/Lesmol/email-api_springboot" target="_blank" rel="noopener noreferrer">email-api_springboot</a>: the Email API</li>
        <li><a href="https://github.com/Lesmol/market-data_lambda" target="_blank" rel="noopener noreferrer">market-data_lambda</a>: the scheduled Python fetcher</li>
        <li><a href="https://github.com/Lesmol/market-financials-auth_lambda" target="_blank" rel="noopener noreferrer">market-financials-auth_lambda</a>: the Python authoriser</li>
        <li><a href="https://github.com/Lesmol/market-financials-lambda_terraform" target="_blank" rel="noopener noreferrer">market-financials-lambda_terraform</a>: gateway, authoriser and Email API infrastructure</li>
        <li><a href="https://github.com/Lesmol/market-data_terraform" target="_blank" rel="noopener noreferrer">market-data_terraform</a>: schedule, fetcher and config table</li>
        <li><a href="https://github.com/Lesmol/legacy-market-data_lambda" target="_blank" rel="noopener noreferrer">legacy-market-data_lambda</a>: the original .NET version</li>
        <li><a href="https://github.com/Lesmol/customer-statements_springboot" target="_blank" rel="noopener noreferrer">customer-statements_springboot</a>: the promotion project I compared against</li>
      </ul>
    </PostLayout>
  );
}

export default page;
