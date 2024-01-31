import Images from "./Images";

import sister from "../../assets/Image/sister.jpg";
import little_lesedi from "../../assets/Image/south_africa.png";
import race from "../../assets/Image/race.jpeg";

function TopSection() {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p>Have a little look.</p>
      <div className="flex justify-around mt-4">
        <Images title="Go karting" imagePath={race}/>
        <Images title="Me & My Sister" imagePath={sister}/>
        <Images title="Little Lesedi" imagePath={little_lesedi} hidden={true}/>
      </div>
    </div>
  );
}

export default TopSection;
