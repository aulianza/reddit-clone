import Container from "@/components/Container";
import ThreadCardContent from "./ThreadCardContent";
import CommentList from "./CommentList";
import BackButton from "@/components/BackButton";

const ThreadDetail = ({ data }) => {
	const { post_view } = data || {};

	return (
		<Container className="space-y-3">
			<BackButton />
			<ThreadCardContent {...post_view} isDetailPage />
			<CommentList post_id={post_view?.post?.id} />
		</Container>
	);
};

export default ThreadDetail;
