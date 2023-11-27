import ThreadDetail from "@/modules/home/components/ThreadDetail";
import { getThreadDetail } from "@/services";

const ThreadDetailPage = ({ data }) => {
	return <ThreadDetail data={data} />;
};

export default ThreadDetailPage;

export async function getServerSideProps(context) {
	const postId = context?.query?.id;

	try {
		const data = await getThreadDetail(postId);

		return {
			props: {
				data,
			},
		};
	} catch (error) {
		return {
			props: {
				error: error.message,
			},
		};
	}
}
