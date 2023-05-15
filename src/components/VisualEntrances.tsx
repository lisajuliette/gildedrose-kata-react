import Grid from "./common/Grid";
import GridItem from "./common/GridItem";
import Image from "./common/Image";

type VisualEntrancesProps = {
  images: Array<{
    src: string;
    alt: string;
  }>;
};

const VisualEntrances = ({ images }: VisualEntrancesProps) => {
  return (
    <Grid>
      {images.map((image) => (
        <GridItem key={image.src} span={4} mdSpan={2}>
          <Image src={image.src} alt={image.alt} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default VisualEntrances;
