import { useGetComments } from "@/services";
import CommentItem from "./CommentItem";
import { generateNestedComments } from "@/helpers";

const CommentList = ({ post_id }) => {
	const { data, isLoading } = useGetComments({
		post_id,
		max_depth: 9,
		sort: "Hot",
	});
	const commentsRes = data?.data?.comments || [];
	const comments = generateNestedComments(commentsRes);

	if (isLoading)
		return (
			<div className="flex justify-center py-3 text-neutral-600 text-sm">
				Loading comments...
			</div>
		);

	return (
		<div className="flex flex-col gap-5 border bg-white rounded p-3">
			{comments.map((comment, index) => (
				<CommentItem key={index} {...comment} />
			))}
		</div>
	);
};

export default CommentList;
