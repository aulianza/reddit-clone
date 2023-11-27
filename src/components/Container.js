import useViewOption from "@/hooks/useViewOption";

const Container = ({ children, className = "" }) => {
	const { viewOption, isLoaded } = useViewOption();

	if (!isLoaded) return null;

	const calculatedViewOption =
		viewOption !== "card" ? "max-w-6xl" : "max-w-4xl";

	return (
		<div
			className={`mx-auto py-5 px-5 sm:px-0 ${className} ${calculatedViewOption}`}
		>
			{children}
		</div>
	);
};

export default Container;
