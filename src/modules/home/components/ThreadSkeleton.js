import SkeletonLoader from "@/components/SkeletonLoader";

const ThreadSkeleton = () => {
	return (
		<div className="flex flex-col gap-2.5 !-mt-1">
			{new Array(5).fill(0).map((_, index) => (
				<SkeletonLoader key={index} height={109} />
			))}
		</div>
	);
};

export default ThreadSkeleton;
