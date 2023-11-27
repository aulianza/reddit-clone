import { useThreadViewStore } from "@/store/threadsViewStore";
import ThreadCardItem from "./ThreadCardItem";
import useStore from "@/store/useStore";

const ThreadList = ({ data, onLimit }) => {
	const viewOption = useStore(useThreadViewStore, (state) => state.viewOption);

	const gap = viewOption === "card" ? "gap-3" : "gap-0";

	return (
		<div className={`flex flex-col ${gap}`}>
			{data?.map((item, index) => (
				<ThreadCardItem
					key={index}
					isLast={index === data.length - 1}
					onLimit={onLimit}
					{...item}
				/>
			))}
		</div>
	);
};

export default ThreadList;
