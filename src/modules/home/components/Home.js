/* eslint-disable react-hooks/exhaustive-deps */
import Container from "@/components/Container";
import ThreadList from "./ThreadList";
import Hero from "./Hero";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import { useGetThreads } from "@/services";
import ThreadSkeleton from "./ThreadSkeleton";

const Home = () => {
	const [sort, setSort] = useState("Hot");
	const [page, setPage] = useState(1);
	const [threadsList, setThreadsList] = useState([]);

	const { data, isLoading } = useGetThreads({
		limit: 10,
		community_name: "programming",
		page,
		sort,
	});

	const handleSortChange = (newSort) => {
		setThreadsList([]);
		setSort(newSort);
		setPage(1);
	};

	useEffect(() => {
		if (data?.data?.posts) {
			setThreadsList([...threadsList, ...data?.data?.posts]);
		}
	}, [data]);

	return (
		<div className="pb-10">
			<Hero />
			<Container className="space-y-5">
				<Filter sortBy={sort} onSort={handleSortChange} />
				<ThreadList data={threadsList} onLimit={() => setPage(page + 1)} />
				{isLoading && <Loader page={page} />}
			</Container>
		</div>
	);
};

export default Home;

const Loader = ({ page }) => {
	return (
		<>
			{page === 1 ? (
				<ThreadSkeleton />
			) : (
				<div className="text-center py-2 text-neutral-500">Loading...</div>
			)}
		</>
	);
};
