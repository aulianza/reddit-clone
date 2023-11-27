import useViewOption from "@/hooks/useViewOption";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const { viewOption, isLoaded } = useViewOption();

	if (!isLoaded) return null;

	const maxWidthClass = viewOption === "card" ? "max-w-4xl" : "max-w-6xl";

	return (
		<header className="fixed top-0 z-10 w-full py-3 px-5 h-14 shadow bg-white">
			<div className={`flex justify-between mx-auto ${maxWidthClass}`}>
				<Link href="/">
					<div className="font-medium text-lg cursor-pointer">
						programming.dev
					</div>
				</Link>
				<div className="flex gap-2 items-center">
					<Image
						src="https://aulianza.id/images/aulianza.png"
						alt="aulianza"
						width={25}
						height={25}
						className="rounded-full"
					/>
					<a href="https://aulianza.id" target="_blank">
						<span className="text-neutral-700 hover:underline underline-offset-2">
							aulianza
						</span>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
