import BlogHeading from "@/components/blog/blogHeading";
import Navbar from "@/components/navbar";

function page() {
  return (
    <>
      <Navbar />
      <article className="post-content mx-auto max-w-3xl p-4 text-custom-light-grey md:p-0 md:pb-4">
        <BlogHeading
          imgUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/openai-next-dotnet.png"
          title="I tried an Open Source AI model for Image Recognition"
          summary="How my attempt at using an Open Source AI model went"
          alt="Custom Azure Poster"
        />
        <h1 className="mb-2 mt-12 text-3xl text-white md:text-4xl">
          Introduction
        </h1>
        <p>
          <strong>For context,</strong> I want to upload an image of a pothole
          and have an AI model categorize the pothole as either minor, moderate
          or severe. We are aware of OpenAI's API, but I wanted to do this for
          very cheap and what's cheaper than free?
          <br />
          <br />
          Here's how it went.
        </p>
        <h3>Open Source AI Model</h3>
        <p>
          Since OpenAI rocked the world, many open-source models started coming
          out of the woodwork.
          <br />
          <br />
          I had heard that AI models are run on GPUs and all I have at my
          disposal is a Core i7 Dell laptop and an M2 Mac Mini. I also heard of
          the popular AI models, namely Google's Gemma, Meta's LLama and Elon
          Musk's Grok.
          <br />
          <br />
          These open-source models would allow me to run my little project
          locally without incurring costs so I went with it, expecting the model
          to execute my queries slowly. I underestimated how slow it would be!
          <br />
          <br />
          I wanted to go with Llama but ended up going with Llava for reasons I
          won't get into here. So off I went.
          <br />
          <br />
          I installed Ollama went to my terminal and installed Llava with the
          lowest amount of parameters they had - 7 Billion parameters.
          <br />
          <br />I chose 7B parameters because more parameters require better,
          more expensive, hardware.
        </p>
        <figure>
          <img
            src="https://lvmp-v2.s3.af-south-1.amazonaws.com/xnapper-gradient-terminal.png"
            alt="Downloading Llava Model Terminal"
          />
        </figure>
        <h3>Running the Model</h3>
        <p>
          Now that everything is set up, let's run the model and get my result.
          I wrote my Python script, downloaded the pothole images and ran it. -
          I'll be honest, I thought my laptop was capable enough to run a 7B
          parameters AI model with a little struggle and 1 minute tops.
          <br />
          <br />
          The model did run, but it consumed 4GB of my RAM, 60-70% of my CPU
          processing power, a solid 5-10 minutes of my time AND the result
          wasn't even that good, which is expected from an AI model with 7B
          parameters.
          <br />
          <br />
          An AI model of this size usually needs some prompt engineering and a
          couple of re-runs to get it right. Which is unacceptable in my case.
        </p>
        <figure>
          <img
            src="https://lvmp-v2.s3.af-south-1.amazonaws.com/xnapper-gradient-code.png"
            alt="Python scriopt running Llava model"
          />
        </figure>
        <figure>
          <img
            src="https://lvmp-v2.s3.af-south-1.amazonaws.com/xnapper-gradient-output.png"
            alt="Model Output Terminal"
          />
        </figure>{" "}
        <figure>
          <img
            src="https://lvmp-v2.s3.af-south-1.amazonaws.com/pothole.jpg"
            alt="Pothole Image"
          />
        </figure>
        <h3>OpenAI's GPT 4o-mini</h3>
        <p>
          At this point, I accepted I wouldn't be able to do it for free, so I
          went to OpenAI's API website and found GPT-4o mini model. It was love
          at first read!
          <br />
          <br />
          And it was cheap, very cheap. You can look for yourself. This is when
          I realised what OpenAI is doing with their API is insane.
          <br />
          <br />
          They have many different models they offer under their API. Some we've
          gotten exposure to through ChatGPT. They all have their strengths and
          weaknesses, but you will without a doubt find something for your use
          case.
          <br />
          <br />I wanted a small, cheap and smart model that could handle small
          tasks with vision capabilities. My first answer was Llava which is:
          free, small, not so cheap (for me) and not so smart. But the real
          answer is GPT-4o mini which meets all my requirements.
        </p>
        <h2>Conclusion</h2>
        <p>
          <strong>To wrap things up</strong>, the purpose of doing all this is
          to build an application that will: allow citizens to take a picture of
          a pothole -&gt; upload it to a government website -&gt; have the AI
          categorize the severity of the pothole for government to send someone
          to repair severe-grade potholes.
          <br />
          <br />
          Looking back at it the open-source model would have been a much worse
          solution.
          <br />
          <br />I would have to pay to run this model on a server and it would
          likely be more expensive than using OpenAI's API.
        </p>
      </article>
    </>
  );
}

export default page;
