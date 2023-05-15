import { useTheme } from "@emotion/react";
import Grid from "./common/Grid";
import GridItem from "./common/GridItem";
import Image from "./common/Image";
import imageGoblin from "../assets/images/goblin.png";

const Notification = () => {
  const theme = useTheme();

  return (
    <div className="background--primary text--secondary">
      <Grid small>
        <GridItem span={8} mdSpan={4}>
          <h3>Tread lightly traveller</h3>
          <p>
            The Gilded Rose has been beset by an enraged goblin. In an
            insta-rage he made off with a great haul of our wares, and so our
            supplies are limited.
          </p>
          <p css={theme.typography.body}>
            Be warned, brave traveller, for this angry goblin still lurks in the
            shadows, and mayhap will think to take more than just wares if given
            the chance.
          </p>
        </GridItem>
        <GridItem span={4} mdSpan={4}>
          <Image src={imageGoblin} alt="Image of Insta-Rage Goblin" />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Notification;
