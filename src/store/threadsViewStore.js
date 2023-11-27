import { VIEW_OPTIONS } from "@/constant";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useThreadViewStore = create()(
	devtools(
		persist(
			(set) => ({
				viewOption: VIEW_OPTIONS[0],
				setViewOption: (option) => set(() => ({ viewOption: option })),
			}),
			{
				name: "thread-view",
			}
		)
	)
);
