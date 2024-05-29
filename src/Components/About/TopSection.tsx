import Images from "./Images";

function TopSection() {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-primary">Have a little look.</p>
      <div className="flex justify-between mt-4">
        <Images
          src="https://cloudresumeresources.blob.core.windows.net/resumeimages/race.jpeg"
          alt="Go karting with friends"
        />
        <Images
          src="https://cloudresumeresources.blob.core.windows.net/resumeimages/sister.jpg"
          alt="A picture of me and my sister"
        />
        <Images
          src="https://cloudresumeresources.blob.core.windows.net/resumeimages/south_africa.png"
          alt="The South African flag on the Burg Khalifa"
          hidden={true}
        />
      </div>
    </div>
  );
}

export default TopSection;
