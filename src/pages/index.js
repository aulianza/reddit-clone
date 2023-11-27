import Home from "@/modules/home";
import { NextSeo } from "next-seo";

const TITLE = "Reddit Clone - by Ryan Aulia";

const HomePage = () => {
	return (
		<>
			<NextSeo title={TITLE} description={TITLE} />
			<Home />;
		</>
	);
};

export default HomePage;
