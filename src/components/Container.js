import { useThreadViewStore } from "@/store/threadsViewStore";
import useStore from "@/store/useStore";

const Container = ({ children, className = "" }) => {
	const viewOption = useStore(useThreadViewStore, (state) => state.viewOption);

	return (
		<div
			className={`mx-auto py-5 px-5 sm:px-0 ${className} ${
				viewOption === "card" ? "max-w-4xl" : "max-w-6xl"
			}`}
		>
			{children}
		</div>
	);
};

export default Container;
