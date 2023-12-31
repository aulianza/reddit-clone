import ThreadDetail from "@/modules/home/components/ThreadDetail";
import { getThreadDetail } from "@/services";
import { NextSeo } from "next-seo";

const DESCRIPTION = "Reddit Clone - by Ryan Aulia";

const ThreadDetailPage = ({ data }) => {
	const title = data?.post_view?.post?.name ?? "";

	return (
		<>
			<NextSeo title={`${title} - ${DESCRIPTION}`} description={DESCRIPTION} />
			<ThreadDetail data={data} />
		</>
	);
};

export default ThreadDetailPage;

export async function getServerSideProps(context) {
	const postId = context?.query?.id;

	try {
		const res = await fetch(`https://programming.dev/api/v3/post?id=${postId}`);
		const data = await res.json();

		return {
			props: {
				data,
			},
		};
	} catch (error) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
}
