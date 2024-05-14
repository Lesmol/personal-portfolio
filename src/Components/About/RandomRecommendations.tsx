import milk_road from "../../../public/Image/milk_road.png";
import google from "../../../public/Image/google.jpg";
import paul_buchheit from "../../../public/Image/paul_buchheit.jpg";
import paul_graham from "../../../public/Image/paul_graham.jpg";
import founders from "../../../public/Image/founders.jpeg";
import naval from "../../../public/Image/naval_ravikant.jpg";
import Link from "./Link";

function RandomLinks() {
  return (
    <div className="mt-8">
      <h1 className="text-xl text-primary">Random recommendations</h1>
      <div className="grid md:grid-cols-4 mt-4">
        <div className="">
          <Link
            imagePath={google}
            alt="Google logo"
            title="Stevey's Rant"
            link="https://gist.github.com/chitchcock/1281611"
          />
          <Link
            imagePath={milk_road}
            alt="Milk man lying down"
            title="Milk Road"
            link="https://milkroad.com/daily/"
          />
        </div>
        <div className="">
          <Link
            imagePath={paul_buchheit}
            alt="Paul Buchheit face"
            title="Paul Buchheit"
            link="https://paulbuchheit.blogspot.com/2009/01/overnight-success-takes-long-time.html"
          />
          <Link
            imagePath={paul_graham}
            alt="Paul Graham speaking"
            title="Paul Graham"
            link="https://paulgraham.com/selfindulgence.html"
          />
        </div>
        <div className="">
          <Link
            imagePath={founders}
            alt="Founders profile picture"
            title="Founders"
            link="https://www.founderspodcast.com/"
          />
          <Link
            imagePath={naval}
            alt="Naval Ravikant profile picture"
            title="Naval Ravikant"
            link="https://www.navalmanack.com/"
          />
        </div>
      </div>
    </div>
  );
}

export default RandomLinks;
