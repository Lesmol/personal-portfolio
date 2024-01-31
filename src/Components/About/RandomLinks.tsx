import milk_road from "../../assets/Image/milk_road.png";
import tony_dinh from "../../assets/Image/tony_dinh.png";
import indie_hackers from "../../assets/Image/indie_hackers.jpeg";
import paul_graham from "../../assets/Image/paul_graham.jpg";
import founders from "../../assets/Image/founders.jpeg";
import naval from "../../assets/Image/naval_ravikant.jpg";
import Link from "./Link";

function RandomLinks() {
  return (
    <div className="mt-8">
      <h1 className="text-xl text-primary">Random recommendations</h1>
      <div className="grid md:grid-cols-4 mt-4">
        <div className="">
          <Link
            imagePath={milk_road}
            alt="Milk man lying down"
            title="Milk Road"
            link="https://milkroad.com/daily/"
          />
          <Link
            imagePath={tony_dinh}
            alt="Tony Dinh twitter profile picture"
            title="Tony Dinh"
            link="https://news.tonydinh.com/"
          />
        </div>
        <div className="">
          <Link
            imagePath={indie_hackers}
            alt="Indie Hackers profile picture"
            title="Indie Hackers"
            link="https://www.indiehackers.com/podcasts"
          />
          <Link
            imagePath={paul_graham}
            alt="Paul Graham speaking"
            title="Paul Graham "
            link="https://paulgraham.com/articles.html"
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
