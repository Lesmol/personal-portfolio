import Images from "./Images";

import sister from "../../assets/Image/sister.jpg";
import south_africa from "../../assets/Image/south_africa.png";
import race from "../../assets/Image/race.jpeg";

function TopSection() {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-primary">Have a little look.</p>
      <div className="flex justify-between mt-4">
        <Images src={race} alt="Go karting with friends"/>
        <Images src={sister} alt="A picture of me and my sister"/>
        <Images src={south_africa} alt="The South African flag on the Burg Khalifa" hidden={true}/>
      </div>
    </div>
  );
}

export default TopSection;
