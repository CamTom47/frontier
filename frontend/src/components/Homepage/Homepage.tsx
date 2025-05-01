import React from "react";

import Dashboard from "../Dashboard/Dashboard";
import PostContainer from "../PostContainer/PostContainer";

const Homepage = (): React.JSX.Element => {
	let currentUser = {};

	return (
			!currentUser ? (
				<div className="">
					<p>Homepage</p>
				</div>
			) : (
				<div className="flex justify-center w-full">
					<PostContainer></PostContainer>
				</div>
			)
	);
};

export default Homepage;
