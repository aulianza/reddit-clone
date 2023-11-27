import {
	FaFire as HotIcon,
	FaSun as NewIcon,
	FaBoltLightning as TopIcon,
} from "react-icons/fa6";

import {
	MdOutlineViewAgenda as CardIcon,
	MdOutlineViewStream as ListIcon,
	MdOutlineViewHeadline as CompactIcon,
} from "react-icons/md";

const iconSize = 22;

export const SORT_OPTIONS = [
	{
		label: "Hot",
		value: "Hot",
		icon: <HotIcon />,
	},
	{
		label: "New",
		value: "New",
		icon: <NewIcon />,
	},
	{
		label: "Top",
		value: "TopAll",
		icon: <TopIcon />,
	},
];

export const VIEW_OPTIONS = ["card", "list", "compact"];

export const viewOptionsIcons = {
	card: <CardIcon size={iconSize} />,
	list: <ListIcon size={iconSize} />,
	compact: <CompactIcon size={iconSize} />,
};
