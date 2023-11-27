/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from "react";
import Link from "next/link";
import ThreadCardContent from "./ThreadCardContent";

const ThreadCardItem = ({ post, counts, creator, isLast, onLimit }) => {
	const cardRef = useRef();

	useEffect(() => {
		if (!cardRef?.current) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (isLast && entry.isIntersecting) {
				onLimit();
				observer.unobserve(entry.target);
			}
		});

		observer.observe(cardRef.current);
	}, [isLast]);

	return (
		<Link href={`/${post?.id}`}>
			<div
				ref={cardRef}
				className="transition-all duration-300 cursor-pointer hover:scale-[101%] "
			>
				<ThreadCardContent post={post} counts={counts} creator={creator} />
			</div>
		</Link>
	);
};

export default ThreadCardItem;
