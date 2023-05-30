import { Global, useTheme } from "@emotion/react";
import GlobalStyles from "../styles/globalStyles";
import Items from "./Items";
import Hero from "./Hero";
import Footer from "./Footer";
import About from "./About";
import ImageSection from "./ImageSection";
import Notification from "./Notification";
import ProductShowcase from "./ProductShowcase";
import imageTavern1 from "../assets/images/tavern_interior.png";
import imageTavern2 from "../assets/images/tavern_interior2.png";
import { ItemsProvider } from "../context/ItemsContext";

const App = () => {
  const theme = useTheme();

  return (
    <>
      <ItemsProvider>
        <Global styles={GlobalStyles(theme)} />
        <Hero />
        <main>
          <About />
          <ImageSection imageUrl={imageTavern1} />
          <Items />
          <ImageSection imageUrl={imageTavern2} />
          <Notification />
          <ProductShowcase />
        </main>
        <Footer />
      </ItemsProvider>
    </>
  );
};

export default App;
