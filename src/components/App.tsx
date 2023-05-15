import { css, Global, useTheme } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';
import Items from './Items';
import Hero from './Hero';
import Footer from './Footer';
import About from './About';
import ImageSection from './ImageSection';
import Notification from './Notification';
import ProductShowcase from './ProductShowcase';
import imageTavern1 from '../assets/images/tavern_interior.png';
import imageTavern2 from '../assets/images/tavern_interior2.png';
import { ItemsProvider } from './common/ItemsContext';

const App = () => {
	const theme = useTheme();

	const globalThemeStyles = css`
		${globalStyles}
		${theme.typography};

		body {
			background-color: ${theme.colors.background};
			color: ${theme.colors.primary};
		}

		a {
			color: ${theme.colors.primary};
			&:hover {
				color: ${theme.colors.highlight};
			}
		}

		.text--secondary,
		.text--secondary * {
			color: ${theme.colors.secondary};
		}

		.background--primary {
			background-color: ${theme.colors.primary};
		}
	`;

	return (
		<>
			<ItemsProvider>
				<Global styles={globalThemeStyles} />
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
