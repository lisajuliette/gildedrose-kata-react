import Grid from "./common/Grid";
import GridItem from "./common/GridItem";
import Image from "./common/Image";
import TextBox from "./common/TextBox";
import { images } from "../utils/imageImports";

const About = () => (
  <Grid id="about">
    <GridItem span={6} mdSpan={4}>
      <Image src={images.alison} alt="Image of the Tavern Owner, Alison" />
    </GridItem>
    <GridItem span={6} mdSpan={6}>
      <TextBox>
        <h3>Welcome to my Inn, weary traveler.</h3>
        <p>
          Hello and welcome to the Gilded Rose! As the owner, it is my pleasure
          to invite you to experience the magic of our enchanting inn.
        </p>
        <p>
          We offer a fantastic selection of general goods and magical items that
          are sure to delight and inspire, as well as a cozy tavern where you
          can relax and enjoy delicious food and drink.
        </p>
        <p>
          At the Gilded Rose, we believe that magic is in the details. Our inn
          is filled with luxurious furnishings, enchanting decor, and a wide
          selection of general goods and magical items.
        </p>
      </TextBox>
    </GridItem>
    <GridItem span={4} mdSpan={6}>
      <TextBox>
        <p>
          At the Gilded Rose, we believe in providing a magical experience that
          transports you to a world of fantasy. Our cozy and intimate atmosphere
          is perfect for those looking to relax and unwind after a long journey.
        </p>
        <p>
          Where the aroma of hearty meals and the sound of clinking glasses fill
          the air. Our humble tavern prides itself on serving the finest food
          and drink that will leave your taste buds enchanted.
        </p>
      </TextBox>
    </GridItem>
    <GridItem span={8} mdSpan={6}>
      <Image src={images.bar} alt="Image of the Tavern Bar" />
    </GridItem>
  </Grid>
);

export default About;
