import VisualEntrances from "./VisualEntrances";
import Grid from "./common/Grid";
import GridItem from "./common/GridItem";
import Image from "./common/Image";
import TextBox from "./common/TextBox";
import { images } from "../utils/imageImports";

const ProductShowcase = () => {
  const showcaseImages = [
    { src: images.orb, alt: "Image of crystal orb" },
    { src: images.gems, alt: "Image of 3 gems" },
    { src: images.potion, alt: "Image of purple potion" },
  ];

  return (
    <Grid small id="showcase">
      <GridItem span={6} mdSpan={4}>
        <Image
          src={images.spurt}
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
        <VisualEntrances images={showcaseImages} />
      </GridItem>
    </Grid>
  );
};

export default ProductShowcase;
