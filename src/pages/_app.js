import Layout from "@/components/layouts";
import { soraSans } from "@/styles/fonts";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 10 * 10000,
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<style jsx global>
				{`
					html {
						--sora-font: ${soraSans.style.fontFamily};
					}
				`}
			</style>
			<QueryClientProvider client={queryClient}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</QueryClientProvider>
		</>
	);
}
