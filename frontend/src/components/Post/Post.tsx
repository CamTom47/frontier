import React from "react";

const Post = (): React.JSX.Element => {
	return (
		<div className="bg-green-200 m-5">
			<div className="flex ">
				<p>date</p>
				<p>User</p>
			</div>
			<p>Post Text Here</p>
			<p>hashtags</p>
		</div>
	);
};

export default Post;
