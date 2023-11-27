import { useThreadViewStore } from "@/store/threadsViewStore";
import useStore from "@/store/useStore";
import Image from "next/image";

const Hero = () => {
	const viewOption = useStore(useThreadViewStore, (state) => state.viewOption);

	return (
		<>
			<div
				className="h-20 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage:
						"url(https://programming.dev/pictrs/image/d7711fb2-cb17-41cd-b06e-a6de83db25b7.jpeg?format=webp)",
				}}
			></div>
			<div className="bg-white px-5 sm:px-0">
				<div
					className={`flex items-start mx-auto py-4 gap-4 ${
						viewOption === "card" ? "max-w-4xl" : "max-w-6xl"
					}`}
				>
					<div className="min-w-max -mt-10">
						<Image
							src="https://programming.dev/pictrs/image/8140dda6-9512-4297-ac17-d303638c90a6.png?format=webp"
							alt="Programming Humor"
							width={100}
							height={100}
							className="rounded-full border-4 border-white"
						/>
					</div>
					<div className="flex flex-grow flex-col w-1/2 gap-1">
						<div className="text-xl font-bold">Programming</div>
						<span className="text-neutral-600 text-sm">
							Welcome to the main community in programming.dev!
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
