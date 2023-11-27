import { useEffect, useState } from "react";
import useStore from "@/store/useStore";
import { useThreadViewStore } from "@/store/threadsViewStore";

const useViewOption = () => {
	const viewOptionFromStore = useStore(
		useThreadViewStore,
		(state) => state.viewOption
	);
	const [isLoaded, setIsLoaded] = useState(false);
	const [viewOption, setViewOption] = useState(null);

	useEffect(() => {
		if (viewOptionFromStore !== undefined) {
			setViewOption(viewOptionFromStore);
			setIsLoaded(true);
		}
	}, [viewOptionFromStore]);

	return { viewOption, isLoaded };
};

export default useViewOption;
