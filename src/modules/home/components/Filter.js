import { SORT_OPTIONS, VIEW_OPTIONS, viewOptionsIcons } from "@/constant";
import { useThreadViewStore } from "@/store/threadsViewStore";
import useStore from "@/store/useStore";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown as ArrowDownIcon } from "react-icons/md";

const Filter = ({ sortBy, onSort }) => {
	const { setViewOption } = useThreadViewStore();
	const viewOption = useStore(useThreadViewStore, (state) => state.viewOption);

	const [showViewOptions, setShowViewOptions] = useState(false);

	const handleShowViewOption = () => setShowViewOptions(!showViewOptions);

	return (
		<div className="flex items-center justify-between gap-1 border border-neutral-300 rounded transition-all duration-300 cursor-pointer bg-white p-3">
			<div className="flex gap-1 items-center text-[15px] font-medium">
				{SORT_OPTIONS?.map((sort, index) => (
					<div
						key={index}
						className={`flex gap-1 items-center hover:bg-neutral-200 py-1 px-2.5 rounded-full ${
							sortBy === sort?.value && "bg-neutral-100 text-blue-500"
						}`}
						onClick={() => onSort(sort?.value)}
					>
						{sort?.icon}
						<span>{sort?.label}</span>
					</div>
				))}
			</div>
			<div className="relative group">
				<div
					className="flex items-center hover:bg-neutral-100 py-1 px-2.5 rounded-full"
					onClick={handleShowViewOption}
				>
					{viewOptionsIcons[viewOption]}
					<ArrowDownIcon className="text-neutral-500" />
				</div>

				{showViewOptions && (
					<div className="flex flex-col absolute top-9 -right-3 z-10 rounded bg-white shadow border">
						{VIEW_OPTIONS?.map((option, index) => (
							<div
								key={index}
								className="flex items-center gap-2 px-3 py-1.5 hover:bg-neutral-100 text-sm border-b"
								onClick={() => {
									setViewOption(option);
									handleShowViewOption();
								}}
							>
								{viewOptionsIcons[option]}
								<span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Filter;
