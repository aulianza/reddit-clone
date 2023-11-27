import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ height, className = "" }) => {
	return (
		<Skeleton
			className={className}
			height={height}
			baseColor="#fcfcfc"
			highlightColor="#efefef"
		/>
	);
};

export default SkeletonLoader;
