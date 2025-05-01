//Utility
import React from "react";
import { Link } from "react-router";

//Components

const Navbar = (): React.JSX.Element => {
	let currentUser = {};
	return (
		<div className='flex w-full bg-green-500 mb-5 h-15'>
			{currentUser ? (
				<div className="flex justify-between w-full px-8">
					<div className='hamburger'>
						<span className="border-2 w-1/2"></span>
						<span className="border-2 w-1/2"></span>
						<span className="border-2 w-1/2"></span>
					</div>
          <div>
            Frontier
            </div>
					<div className='bg-white size-12 rounded-full text-center'>
            <p className="text-lg">T</p>
            </div>
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
