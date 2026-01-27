import BlogHeading from "@/components/blog/blogHeading";
import Navbar from "@/components/navbar";

function page() {
  return (
    <>
      <Navbar />
      <article className="post-content mx-auto max-w-3xl p-4 text-custom-light-grey md:p-0 md:pb-4">
        <BlogHeading
          imgUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/php-tailwind-git.png"
          title="What we did wrong in this project: PHP, Tailwind, Git & GitHub"
          summary="We took on a client project and made some mistakes along the way. Here's what we learned."
          alt="Custom PHP Poster"
        />
        <h1 className="mb-2 mt-12 text-3xl text-white md:text-4xl">
          Introduction
        </h1>
        <p>
          I was approached by{" "}
          <a
            href="https://www.linkedin.com/in/tshiamo-ndlovu-21809625a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tshiamo Ndlovu
          </a>{" "}
          to help create a website for a local furniture store here in Pretoria.
          My role in particular was mainly to add responsiveness and a bit of
          CSS work here and there, but the bulk of the work was done by Tshiamo
          as he wanted to learn PHP for some work he has at school.
          <br />
          <br />
          In the week and a half, we had to work on this, we did deliver a
          finished product. What we did wrong has more to do with the
          development of this website. Let's discuss it...
        </p>

        <h3>Error #1: Not utilising Git and GitHub</h3>
        <p>
          I have used Git & GitHub on multiple projects of my own and have
          become quite familiar with it over my time using it. For the sake of
          staying on topic, I won't discuss why we didn't use it, but we
          definitely should've...
          <br />
          <br />
          Git and GitHub are incredibly useful tools when it comes to
          implementing changes, tracking changes, sharing changes and reverting
          to previous versions of the code. These are features we deprived
          ourselves of and oh boy was it a mission to replicate.
          <br />
          <br />
          Our way of tracking changes and sharing changes was sending zip files
          to each other over WhatsApp and that was very inconvenient when we
          wanted to merge the changes Tshiamo made with the changes I made. What
          would be a simple "git rebase" or "git merge" turned into sharing the
          file I changed and manually adding the lines into his file since he
          would've made changes in the same file as well.
          <br />
          <br />
          We did this frequently given how quickly we needed to work at the same
          time to deliver this site on time. I view the time spent manually
          adding the changes to be wasted time that would've been better spent
          on actual coding instead of merging.
        </p>

        <h3>Error #2: Not keeping it simple</h3>
        <p>
          We should've kept it simple from the get-go.
          <br />
          <br />
          I prefer using Tailwind CSS over vanilla CSS. Tailwind just simplifies
          a lot of what comes with writing CSS. Things like naming classes,
          styling them, media queries and that fluff.
          <br />
          <br />
          Since my job was to make the site responsive and minor CSS work, I
          insisted on using Tailwind given its ease and speed. Terrible idea...
          <br />
          <br />
          What was supposed to be quick and easy CSS work turned into changing
          and migrating all the CSS files to Tailwind classes, failing, and
          returning to vanilla CSS, but this time in-file CSS with the intention
          of later turning them to CSS files after cleaning up already existing
          CSS files.
          <br />
          <br />
          The reason we bailed on Tailwind was that we ran into a problem we
          felt we didn't have time to solve, so vanilla CSS was the next best
          option and we ran with it to completion.
          <br />
          <br />
          Looking back this was probably the best option anyway since we both
          know CSS and only I know Tailwind, picking what the majority know is
          always the best option.
        </p>

        <h3>Error #3: Not knowing a bit of everything</h3>
        <p>
          Throughout the project, our tasks often overlapped. There would be
          times when I needed to understand PHP and I didn't and times when
          Tshiamo needed to understand CSS and he did, but not fully.
          <br />
          <br />
          This is where I feel we could've saved time used for explaining and
          assisting and maybe we could've helped each other more than we did in
          our dedicated tasks.
          <br />
          <br />
          In a small team like the one we were, we need to be fully aware of
          everything to do with a project so we can identify things the other
          person may have not noticed. A peer review...we robbed ourselves of
          having "peer reviews" by not knowing everything.
          <br />
          <br />I believe a small team should be about splitting tasks for the
          sake of speed rather then specialisation, everyone should know a bit
          of everything instead of all of one thing and be clueless about the
          rest.
        </p>

        <h3>How did we manage to do it?</h3>
        <p>
          Great communication.
          <br />
          <br />
          Over the years, Tshiamo and I have worked together on multiple
          occasions (not exclusive to programming), so given how familiar we are
          with each other, exceptional communication allowed us to complete this
          project on time and with everything promised.
          <br />
          <br />
          If you're going to do a project the way we did, make sure your
          communication is that of a married couple because you'll be spending
          many hours together in frustration, looking line by line, file by file
          for the change that messed everything up.
        </p>

        <h2>Conclusion</h2>
        <p>
          <strong>To wrap things up</strong>, don't do it the way we did. Save
          yourself the frustration, late nights, and possibly conflict and use a
          version control system (git) and upload it to the cloud (GitHub), keep
          it simple and use tools that everyone knows, also know a bit of
          everything if you're working in a small team.
        </p>
      </article>
    </>
  );
}

export default page;
