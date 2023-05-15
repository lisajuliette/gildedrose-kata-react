import VisualEntrances from "./VisualEntrances";
import Grid from "./common/Grid";
import GridItem from "./common/GridItem";
import Image from "./common/Image";
import TextBox from "./common/TextBox";
import imageOrb from "../assets/images/orb.png";
import imageGems from "../assets/images/gems.png";
import imagePotion from "../assets/images/potion_c.png";
import imageSpurt from "../assets/images/spurt.png";

const ProductShowcase = () => {
  const images = [
    { src: imageOrb, alt: "Image of crystal orb" },
    { src: imageGems, alt: "Image of 3 gems" },
    { src: imagePotion, alt: "Image of purple potion" },
  ];

  return (
    <Grid small id="showcase">
      <GridItem span={6} mdSpan={4}>
        <Image
          src={imageSpurt}
          alt="Image of Spurt Plushie, from The Mighty Nein"
        />
      </GridItem>
      <GridItem span={6} mdSpan={6}>
        <TextBox>
          <h3>Discover a Treasure Trove of items</h3>
          <p>
            The Gilded Rose offers a fantastic selection of general goods and
            magical items that are sure to enchant and delight. From potions and
            spellbooks to fine linens and jewelry, our selection is second to
            none.
          </p>
        </TextBox>
        <VisualEntrances images={images} />
      </GridItem>
    </Grid>
  );
};

export default ProductShowcase;
