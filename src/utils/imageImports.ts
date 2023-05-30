import vestImage from "../assets/images/vest.png";
import brieImage from "../assets/images/brie.png";
import elixirImage from "../assets/images/potion_a.png";
import weaponImage from "../assets/images/weapon.png";
import ticketsImage from "../assets/images/tickets.png";
import manacakeImage from "../assets/images/manacake.png";
import goblinImage from "../assets/images/goblin.png";
import alisonImage from "../assets/images/alison.png";
import barImage from "../assets/images/tavern_bar.png";
import tavern1Image from "../assets/images/tavern_interior.png";
import tavern2Image from "../assets/images/tavern_interior2.png";
import heroImage from "../assets/images/tavern.png";
import orbImage from "../assets/images/orb.png";
import gemsImage from "../assets/images/gems.png";
import potionImage from "../assets/images/potion_c.png";
import spurtImage from "../assets/images/spurt.png";

interface ImageImports {
  [key: string]: string;
}

export const images: ImageImports = {
  vest: vestImage,
  brie: brieImage,
  elixir: elixirImage,
  weapon: weaponImage,
  tickets: ticketsImage,
  manacake: manacakeImage,
  goblin: goblinImage,
  alison: alisonImage,
  bar: barImage,
  tavern1: tavern1Image,
  tavern2: tavern2Image,
  hero: heroImage,
  orb: orbImage,
  gems: gemsImage,
  potion: potionImage,
  spurt: spurtImage,
};
