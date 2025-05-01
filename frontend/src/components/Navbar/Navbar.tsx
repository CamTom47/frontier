//Utility
import React from "react";
import { Link } from "react-router";

//Components

const Navbar = (): React.JSX.Element => {
	let currentUser = {};
	return (
		<div className='flex w-80% bg-green-500 my-8 mx-30 h-20 rounded-full'>
			{currentUser ? (
				<div className='flex justify-between items-center w-full px-8'>
					<button className='flex flex-col gap-y-1'>
						<div className='border-2 w-8 rounded-2xl '></div>
						<div className='border-2 w-8 rounded-2xl '></div>
						<div className='border-2 w-8 rounded-2xl '></div>
					</button>
					<div className="flex justify-center items-baseline gap-x-3">
						<Link className='text-3xl' to={'/'}>Frontier</Link>
						<input className="bg-neutral-100 rounded-full h-10 text-xl text-center" type="text" placeholder="Search" />
					</div>
					<button className='flex justify-center items-center bg-neutral-100 size-16 rounded-full text-3xl'>T</button>
				</div>
			) : (
				<div>
					<p>not</p>
					<Link className='NavbarLink' to='/signup'>
						Sign Up
					</Link>
					<Link className='NavbarLink' to='/login'>
						Login
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
