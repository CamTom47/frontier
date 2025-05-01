import React from "react";
import Post from "../Post/Post";

const PostContainer = (): React.JSX.Element => {
	return (
		<div className='flex w-7/8 gap-x-3'>
			{/* Personal Feed area */}
			<div className='w-1/2 bg-neutral-100 rounded-2xl'>
				<div className="" >
					<form className="bg-white m-10 w-7/8 h-60 rounded-2xl"
						action='
        submit'>
						<input type='text' placeholder="Create new post"/>
					</form>
						<button className="bg-white rounded-xl w-20" >Post</button>
				</div>
			</div>
			{/* following feed */}
			<div className='w-1/2 bg-neutral-100 rounded-2xl'>
				<Post></Post>
			</div>
		</div>
	);
};

export default PostContainer;
