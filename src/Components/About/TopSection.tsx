import Images from "./Images";

function TopSection() {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-primary">Have a little look.</p>
      <div className="flex justify-between mt-4">
        <Images
          src="https://cloudresumeresources.blob.core.windows.net/resumeimages/ad6e0b37-45b8-4239-bb81-66916845ee04.jpeg"
          alt="Outing with friends"
        />
        <Images
          src="https://cloudresumeresources.blob.core.windows.net/resumeimages/sister.jpg"
          alt="A picture of me and my sister"
        />
        <Images
          src="https://cloudresumeresources.blob.core.windows.net/resumeimages/IMG_8459.jpeg"
          alt="Posing in the woods"
          hidden={true}
        />
      </div>
    </div>
  );
}

export default TopSection;
