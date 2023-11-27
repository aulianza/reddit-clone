import axios from "axios";
import { useQuery } from "react-query";

const BASE_URL = "https://programming.dev/api/v3/";

const axiosInstance = axios.create({
	headers: {
		"Content-Type": "application/json",
	},
});

export const useGetThreads = (params) => {
	return useQuery(["threads", params], () =>
		axiosInstance.get(BASE_URL + "post/list", { params })
	);
};

export const useGetComments = (params) => {
	return useQuery(["comments", params], () =>
		axiosInstance.get(BASE_URL + "comment/list", { params })
	);
};

export const getThreadDetail = async (postId) => {
	try {
		const response = await axiosInstance.get(`${BASE_URL}post?id=${postId}`);
		return response?.data;
	} catch (error) {
		console.error("Error:", error.response?.data);
		throw new Error(error.message);
	}
};
