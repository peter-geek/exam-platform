import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { showDialogue } from "../functions/dialogue";

import Router from "next/router";
import CustomPrompt from "../components/CustomPrompt";
import CustomPreloader from "../components/CustomPreloader";
import { showpreloader } from "../functions/CustomPreloader";

Router.events.on("routeChangeStart", showpreloader);
Router.events.on("routeChangeComplete", showpreloader);
Router.events.on("routeChangeError", showpreloader);

// console.log(process.env.HOST_URL);
function MyApp({ Component, pageProps }) {
	return (
		<Component {...pageProps}>
			<CustomPrompt />
			<CustomPreloader />
		</Component>
	);
}

export default MyApp;
