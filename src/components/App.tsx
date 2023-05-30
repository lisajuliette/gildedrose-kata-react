import { Global, useTheme } from "@emotion/react";
import GlobalStyles from "../styles/globalStyles";
import Items from "./Items";
import Hero from "./Hero";
import Footer from "./Footer";
import About from "./About";
import ImageSection from "./ImageSection";
import Notification from "./Notification";
import ProductShowcase from "./ProductShowcase";
import { ItemsProvider } from "../context/ItemsContext";
import { images } from "../utils/imageImports";

const App = () => {
  const theme = useTheme();

  return (
    <>
      <ItemsProvider>
        <Global styles={GlobalStyles(theme)} />
        <Hero />
        <main>
          <About />
          <ImageSection imageUrl={images.tavern1} />
          <Items />
          <ImageSection imageUrl={images.tavern2} />
          <Notification />
          <ProductShowcase />
        </main>
        <Footer />
      </ItemsProvider>
    </>
  );
};

export default App;
