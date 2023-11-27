import { IoArrowBackOutline as BackIcon } from "react-icons/io5";
import Link from "next/link";

const BackButton = () => {
	return (
		<Link href="/">
			<button className="flex items-center gap-1 hover:gap-1.5 transition-all duration-300 bg-white py-1.5 px-3 rounded border text-sm">
				<BackIcon />
				<span>Back</span>
			</button>
		</Link>
	);
};

export default BackButton;
