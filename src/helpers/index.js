import moment from "moment";

export const formatDate = (date) => {
	const currentDate = moment();
	const diff = moment.duration(currentDate.diff(date));

	if (diff.asSeconds() < 60) {
		return `${Math.floor(diff.asSeconds())} seconds ago`;
	} else if (diff.asMinutes() < 60) {
		return `${Math.floor(diff.asMinutes())} minutes ago`;
	} else if (diff.asHours() < 24) {
		return `${Math.floor(diff.asHours())} hours ago`;
	} else if (diff.asDays() < 30) {
		return `${Math.floor(diff.asDays())} days ago`;
	} else if (diff.asMonths() < 12) {
		return `${Math.floor(diff.asMonths())} months ago`;
	} else {
		return `${Math.floor(diff.asYears())} years ago`;
	}
};

export const generateNestedComments = (commentsRes) => {
	const commentMap = {};
	const topLevelComments = [];

	commentsRes.forEach((commentData) => {
		const { comment, creator, counts } = commentData;

		const updatedComment = {
			id: comment?.id,
			content: comment?.content,
			counts: { score: counts?.score },
			creator: { name: creator?.name, avatar: creator?.avatar },
			published: comment?.published,
			children: [],
		};

		commentMap[comment?.id] = updatedComment;

		const path = comment?.path?.split(".").slice(1);

		if (path.length === 1) {
			topLevelComments.push(updatedComment);
		} else {
			let parent = commentMap[path[0]];

			for (let i = 1; i < path.length - 1; i++) {
				parent = parent?.children?.find((c) => c.id === parseInt(path[i]));
				if (!parent) break;
			}

			if (parent) parent?.children?.push(updatedComment);
		}
	});

	return topLevelComments;
};

export const formatCount = (count) => {
	if (count < 1000) {
		return count;
	} else {
		const formatted = (count / 1000).toFixed(1);
		return `${formatted}K`;
	}
};
