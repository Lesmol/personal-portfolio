import BlogHeading from "@/components/blog/blogHeading";
import Navbar from "@/components/navbar";

function page() {
  return (
    <>
      <Navbar />
      <article className="post-content mx-auto max-w-3xl p-4 text-custom-light-grey md:p-0 md:pb-4">
        <BlogHeading
          imgUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/aws.png"
          title="Migrating over to Next.js, AWS and more..."
          summary="Updating my website and migrating to Next.js and AWS"
          alt="Custom AWS Poster"
        />
        <h1 className="mb-2 mt-12 text-3xl text-white md:text-4xl">
          Introduction
        </h1>
        <p>
          My website needed a serious update, not just the tech behind it but
          also how it looked. It needed a fresh, modern design that matched my
          current skills. I believe a website should show off a developer's
          abilities, both in coding and creativity.
        </p>

        <h3>Why Switch to Next.js?</h3>
        <p>
          I really like how Next.js works. It has built-in routing, server-side
          rendering (SSR), and client-side rendering (CSR). Plus, I get full
          control over what gets generated and where.
          <br />
          <br />
          One big reason I chose Next.js is that I want to use it for most of my
          future projects. To be clear, I'm using Next.js only for front-end
          development. For the back end, I prefer "enterprise" languages like C#
          and Java because they're strong and reliable.
          <br />
          <br />
          Job security is another reason, but that's a story for another time...
          <br />
          <br />
          Some say, "Everything that can be done in JavaScript will eventually
          be done in JavaScript." I'm not completely sold on that idea—at least
          not yet.
        </p>

        <h3>Moving to AWS</h3>
        <p>
          Since I started learning about cloud computing, I've wanted to use
          both of the top providers. Why? Honestly, I don't know, it just feels
          right.
          <br />
          <br />
          Switching to AWS isn't just about using what I've learned; it's also
          my way of testing more complex setups. I'm talking about
          big-company-level architecture, on my tiny website that gets about
          three visitors a month (all of whom are me, on different devices). -
          Sometimes, someone stumbles across my site through LinkedIn and is
          impressed that I bought a .com domain. Maybe that small effort makes
          them explore my site a bit. If that's you—thank you, my friend! But I
          digress...
          <br />
          <br />
          My main goal was to get hands-on experience, which I did. But in the
          end, it doesn't really matter which cloud provider you use—as long as
          your site is online and cheap to maintain.
          <br />
          <br />
          Right now, the only thing I host on AWS is the images on my site. The
          actual website is on{" "}
          <a
            href="http://sevalla.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sevalla
          </a>{" "}
          because I realized hosting a Next.js site with SSR on AWS is tricky if
          you want to do it automatically.
          <br />
          <br />
          My first attempt was using an EC2 instance, and it worked! I set up my
          GitHub to update the site whenever I pushed code to main. All I had to
          do was create a cron job and BOOM! I had a working CD system.
          <br />
          <br />
          The problem? It was going to cost too much, and wasting money on
          unnecessary infrastructure would bring shame upon me in the eyes of
          the AWS gods. So, I shut it down.
          <br />
          <br />
          Next, I thought about using AWS Amplify. But then I got a $50 credit
          from{" "}
          <a
            href="http://sevalla.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sevalla
          </a>
          , and... well, here we are. 😁
          <br />
          <br />
          The AWS migration isn't finished, but I'll get there in the next few
          months.
        </p>

        <h3>The Design</h3>
        <p>
          The design is simple and that's exactly what I wanted.
          <br />
          <br />
          I could add crazy animations that make you wonder what you're looking
          at and how it was done. But that would make my life harder as a
          developer.
          <br />
          <br />
          My goal is to push out code and move on to the next project. This site
          isn't a big deal, but it took me months to finish because I was busy
          building other things.
          <br />
          <br />
          The design is based on v1 but looks better. Darker colors, fewer
          rounded borders, a bit more animation, some gradients, and just the
          right amount of blue to keep things interesting.
          <br />
          <br />
          The first version (v1) helped me land a job. The current version (v2)
          is all about showing my skills and my love for writing, building, and
          design.
          <br />
          <br />
          How did I come up with the original design? I copied another site,
          made small changes over time, then finally did a full redesign to make
          it my own. I also added a blog and a projects page while removing my
          resume page.
          <br />
          <br />
          There's still a lot I want to add, but at some point, I'll stop
          maintaining this site and switch to Notion, like{" "}
          <a
            href="https://leoradvinsky.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leo Radvinsky
          </a>
          . But we're not there yet...
        </p>

        <h2>Conclusion</h2>
        <p>
          <strong>To wrap things up</strong>, this site is my testing ground for
          new ideas, projects, and whatever I find interesting. Let's see how it
          evolves over time.
        </p>
      </article>
    </>
  );
}

export default page;
