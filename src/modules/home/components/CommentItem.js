import { formatDate } from "@/helpers";
import Image from "next/image";
import {
	RxThickArrowUp as UpvoteIcon,
	RxThickArrowDown as DownvoteIcon,
} from "react-icons/rx";

const iconSize = 20;

const CommentItem = ({
	published,
	content,
	creator,
	counts,
	children = [],
}) => {
	return (
		<div className="flex items-start gap-3">
			<Image
				src={
					creator?.avatar ??
					"https://programming.dev/static/68330f7/assets/icons/icon-96x96.png"
				}
				alt={creator?.name}
				width={30}
				height={30}
				className="w-max rounded-full bg-neutral-100 border"
			/>
			<div className="flex flex-col gap-2">
				<div className="flex gap-1 text-neutral-500 text-xs">
					<span className="hover:underline">{creator?.name}</span>
					<span>•</span>
					<span>{formatDate(published) ?? ""}</span>
				</div>
				<p className="text-neutral-700 text-sm whitespace-pre-line">
					{content}
				</p>
				<div className="flex items-center gap-2 pb-2">
					<UpvoteIcon
						size={iconSize}
						className="hover:text-red-500 cursor-pointer"
					/>
					<span className="text-sm">{counts?.score ?? 0}</span>
					<DownvoteIcon
						size={iconSize}
						className="hover:text-blue-500 cursor-pointer"
					/>
				</div>
				{children?.map((child, index) => (
					<CommentItem key={index} {...child} />
				))}
			</div>
		</div>
	);
};

export default CommentItem;
