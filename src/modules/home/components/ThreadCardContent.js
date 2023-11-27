import {
	RxThickArrowUp as UpvoteIcon,
	RxThickArrowDown as DownvoteIcon,
} from "react-icons/rx";
import {
	PiShareFat as ShareIcon,
	PiBookmarkSimple as SaveIcon,
} from "react-icons/pi";
import { FaRegCommentAlt as CommentsIcon } from "react-icons/fa";
import { formatCount, formatDate } from "@/helpers";
import useStore from "@/store/useStore";
import { useThreadViewStore } from "@/store/threadsViewStore";
import Image from "next/image";

const iconSize = 22;

const ThreadCardContent = ({ post, counts, creator, isDetailPage = false }) => {
	const viewOption = useStore(useThreadViewStore, (state) => state.viewOption);

	return (
		<div
			className={`flex gap-1 border-b bg-white rounded ${
				!isDetailPage && "border-neutral-300"
			} ${
				!isDetailPage && viewOption === "card"
					? "border hover:border-neutral-400"
					: "border-b border-neutral-200 rounded-sm"
			}`}
		>
			<div
				className={`flex items-center gap-2 p-3 bg-neutral-50 rounded-tl rounded-bl ${
					!isDetailPage && viewOption === "compact"
						? "flex-row w-[100px] justify-center"
						: "flex-col"
				}`}
			>
				<UpvoteIcon
					size={iconSize}
					className="hover:text-red-500 cursor-pointer"
				/>
				<span className="text-sm">{formatCount(counts?.score) ?? 0}</span>
				<DownvoteIcon
					size={iconSize}
					className="hover:text-blue-500 cursor-pointer"
				/>
			</div>
			{!isDetailPage && post?.thumbnail_url && viewOption === "list" && (
				<Image
					src={post?.thumbnail_url}
					alt={post?.name}
					width="100"
					height="100"
				/>
			)}
			<div
				className={`flex flex-col gap-2 p-3 flex-grow ${
					!isDetailPage && viewOption === "compact"
						? "flex-col-reverse gap-0.5"
						: " gap-2"
				}`}
			>
				<span className="flex flex-wrap gap-1 text-neutral-500 text-xs">
					Posted by
					<i className="not-italic hover:underline">{creator?.name ?? ""}</i>
					{formatDate(post?.published) ?? ""}
				</span>
				<h2 className="text-neutral-900 font-medium">{post?.name ?? ""}</h2>
				{isDetailPage && (
					<p className="whitespace-pre-line py-2 text-neutral-800 text-[15px]">
						{post?.body}
					</p>
				)}
				{(isDetailPage || viewOption === "card") && post?.thumbnail_url && (
					<Image
						src={post?.thumbnail_url}
						alt={post?.name}
						width="300"
						height="300"
					/>
				)}
				{(isDetailPage || viewOption !== "compact") && (
					<div className="flex items-center gap-2 text-[13px] text-neutral-600">
						<div className="flex gap-1.5 items-center hover:bg-neutral-100 w-fit rounded p-1">
							<CommentsIcon />
							<span>
								{formatCount(counts?.comments) ?? 0} Comment
								{counts?.comments > 1 && "s"}
							</span>
						</div>
						<div className="flex gap-1.5 items-center hover:bg-neutral-100 w-fit rounded p-1">
							<ShareIcon size={18} />
							<span>Share</span>
						</div>
						<div className="flex gap-1.5 items-center hover:bg-neutral-100 w-fit rounded p-1">
							<SaveIcon size={18} />
							<span>Save</span>
						</div>
					</div>
				)}
			</div>
			{!isDetailPage && viewOption === "compact" && (
				<div className="flex gap-1.5 items-center w-fit rounded py-1 px-5 text-neutral-500">
					<CommentsIcon />
					<span className="text-sm">{formatCount(counts?.comments) ?? 0}</span>
				</div>
			)}
		</div>
	);
};

export default ThreadCardContent;
