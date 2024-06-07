import React, { useState } from "react";

// import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";

const menuVariants = {
	hidden: {
		x: "100%",

		/* opacity: 0,
		transition: {
			duration: 0.3,
		}, */
	},
	show: {
		x: 0,

		// opacity: 1,

		transition: {
			ease: [0.6, 0.01, -0.05, 0.9],
			// duration: 0.3,
		},
	},
	/* visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	}, */
};

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="text-primary xl:hidden">
			{/* nav open button */}
			<div
				onClick={() => setIsOpen(!isOpen)}
				className="text-3xl cursor-pointer"
			>
				<CgMenuRight />
			</div>

			{/* menu */}
			<motion.div
				variants={menuVariants}
				initial="hidden"
				animate={isOpen ? "show" : "hidden"}
				className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
			>
				{/* icon */}
				<div
					onClick={() => setIsOpen(false)}
					className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
				>
					<IoMdClose />
				</div>

				{/* menu list */}
				<ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</motion.div>
		</nav>
	);
};

export default MobileNav;
