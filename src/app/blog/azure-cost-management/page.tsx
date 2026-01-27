import BlogHeading from "@/components/blog/blogHeading";
import Navbar from "@/components/navbar";

function page() {
  return (
    <div className="container mx-auto max-w-3xl items-center p-4 md:p-0 md:pb-4">
      <Navbar backButton={true} backPath="/blog#azure" />
      <article className="post-content text-custom-light-grey">
        <BlogHeading
          imgUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/azure.png"
          title="How I keep my Azure bill under $0.01"
          summary="A description of how I keep my Azure bill low with multiple resources being used"
          alt="Custom Azure Poster"
        />
        <h1 className="mb-2 mt-12 text-3xl text-white md:text-4xl">
          Introduction
        </h1>
        <p>
          In the name of not dragging you along what could be a concise answer,
          I'll give you the short answer now. It's a combination of using free
          tiers, a budget (and carefully monitoring it), understanding the
          pricing of the services and just less traffic.
        </p>

        <h3>Personal projects vs Commercial projects</h3>
        <p>
          How I use Azure is for personal projects and they tend to use fewer
          resources than commercial projects. This however doesn't mean that
          you'll automatically pay less than 1 cent for the resources you do use
          since there are ways you can engineer the resources to pay more
          without using more.
          <br />
          <br />
          One way of doing this is with telemetry data (logs, app monitoring or
          client information).
          <br />
          <br />
          A big part of commercial projects is collecting data on how the app
          runs and how people interact with it. With that in mind, you can
          assume that I am clueless about how my apps run and how people
          interact with them and you wouldn't be wrong.
          <br />
          <br />I won't lie, it would be nice to know, but it wouldn't add much
          value to me. My apps are too small to collect telemetry data that will
          make any meaningful difference, which would not be the case for
          commercial projects that deal with thousands if not millions of users
          compared to my 10 on a good month, the number 10 is a guess by the
          way, I don't know how many people view my apps.
        </p>

        <h3>"Generous" free tiers</h3>
        <p>
          Upon signing up to Azure, you get a free tier for 12 months on popular
          service. These services include database offerings (Postegre, MySQL,
          etc.), servers (VMs), and many more specialised services. After 12
          months, these free tiers are either removed or made "less generous"
          and some services always have a free tier, like CosmosDB.
          <br />
          <br />
          But even free tiers can come with additional costs if you don't know
          what you're doing. I've heard horror stories regarding Azure Key
          Vaults.
          <br />
          <br />
          As an example of additional costs; static web apps under the F1 plan
          (Free) don't come with a CDN so while my website might be fast to load
          in South Africa, it's a little slow in Australia. But you can get the
          CDN if you pay.
          <br />
          <br />
          You also sacrifice a few things you would get if you were a paying
          customer, things like an SLA, which guarantees that your services will
          always be available.
        </p>

        <h3>Understand the Pricing</h3>
        <p>
          I've spent countless hours on the{" "}
          <a
            href="https://azure.microsoft.com/en-us/pricing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Azure Pricing Page
          </a>{" "}
          and{" "}
          <a
            href="https://www.reddit.com/r/AZURE"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/Azure Subreddit
          </a>{" "}
          reading and calculating how much a service would cost me and questions
          other people have asked to figure it out.
          <br />
          <br />
          If there is one thing to put extra focus on, it's the knowledge you
          get from these 2 resources. You'll understand what is being charged
          and why, in some cases, you might learn a thing about how the service
          works. There is no substitute for being informed.
        </p>

        <h3>The Services Are Just Cheap</h3>
        <p>
          I can think of one service that I use that isn't under a free tier and
          is just so cheap that I don't spend money on it...{" "}
          <a
            href="https://azure.microsoft.com/en-us/pricing/details/storage/blobs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Azure Blob Storage
          </a>
          .
          <br />
          <br />
          I currently have a Terraform state file and a few images I use on this
          website under the Hot access tier (you pay less for read/write
          operations and more for storage under this tier), but since the total
          storage I use amounts to less then 4MB and the price for read/write
          operations is priced at per 10,000...
          <br />
          <br />I pay fractions of a cent for storage AND read/write operations
          every month. Now, although I am accumulating costs every day (as you
          can see by the bars) the amounts are in the $0,0052 range each day. I
          assume Microsoft is just letting it accumulate to a point where they
          can charge me $1, but right now my invoice amounts to $0,00 every
          month.
        </p>

        <h3>Budgets</h3>
        <p>
          How budgets work is you set alerts on either forecasted or actual
          dollar amounts relative to the money you've budgeted to spend. When an
          alert is triggered it sends an email informing you and you'll act
          accordingly.
          <br />
          <br />I currently have a budget in place with the budgeted amount
          being $1, which was increased from 1 cent after an alert was
          triggered.
        </p>

        <h3>Why Microsoft Wants Me To Use Azure For Free</h3>
        <p>
          This is my personal opinion, but I think Microsoft benefits a lot by
          allowing people like myself to use Azure for free.
          <br />
          <br />
          The 1st benefit they get is a pool of talent that knows how to use
          Azure, this pool of talent is not for Microsoft to hire, but for
          companies using Azure to hire. Azure is a product that requires
          expertise to use and if businesses found it difficult to use they
          wouldn't use it.
          <br />
          <br />
          By having a pool of talent for businesses to hire from, businesses
          won't be reluctant to adopt Azure since they can always hire someone
          with the expertise to do it, assuming it's better for the business to
          use Azure over physical servers.
          <br />
          <br />
          The 2nd benefit is much more nuanced, but still a benefit since they
          offer credits for it. Azure makes the bulk of its money from selling
          services to big businesses; think Adobe, BMW or Netflix. These
          businesses pay Azure millions, which pales in comparison to my measly
          $80.
          <br />
          <br />
          By allowing people like me to use and gain experience with Azure for
          very little money, if I were to start a business I would use Azure for
          my infrastructure needs and if my business succeeds I would pay Azure
          10s of thousands if not millions for their services.
          <br />
          <br />
          Azure doesn't care about a dude using 5MB of storage and 60 minutes of
          compute per month, they care about the Netflix's of the world with
          Petabytes of files to store and billions to spend. What they need me
          for is to work for Netflix and supply them with the Azure expertise
          they lack.
          <br />
          <br />
          You can see Azure's focus on targeting businesses with the{" "}
          <a
            href="https://www.microsoft.com/en-us/startups"
            target="_blank"
            rel="noopener noreferrer"
          >
            credit program they have for startups
          </a>
          .
        </p>

        <h2>Conclusion</h2>
        <p>
          <strong>To wrap things up</strong>, if you know what you're doing it's
          very hard to spend real money in Azure for personal projects. You can
          easily spend less than $80 even for the more "resource-intensive"
          personal projects...unless you're running some infinite loop or your
          project goes viral without having set a budget, in that case, the sky
          is the limit.
        </p>
      </article>
    </div>
  );
}

export default page;
