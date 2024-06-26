import React, { useContext } from "react";

// import images
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import Image5 from "../img/portfolio/5.png";
import Image6 from "../img/portfolio/6.png";

// import link
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";

// import cursor context
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
	const { handleMouseEnter, handleMouseLeave } = useContext(CursorContext);

	return (
		<motion.section
			initial={{ opacity: 0, y: "100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={transition1}
			className="section"
		>
			<div className="container mx-auto h-fulll ">
				{/* text & img wrapper */}
				<div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
					{/* text */}
					<motion.div
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						initial={{ opacity: 0, y: "-80%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-80%" }}
						transition={transition1}
						className="flex flex-col lg:items-start"
					>
						<h1 className="h1">Portfolio</h1>

						<p className="mb-12 max-w-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
							<br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>

						<Link
							to={"/contact"}
							className="btn mb-[30px] mx-auto lg:mx-0"
						>
							Hire me
						</Link>
					</motion.div>

					{/* image grid */}
					<div
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						className="grid grid-cols-2 lg:gap-2"
					>
						{/* image 1 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								src={Image1}
								alt="portfolio"
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
							/>
						</div>

						{/* image 2 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								src={Image2}
								alt="portfolio"
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
							/>
						</div>

						{/* image 3 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								src={Image3}
								alt="portfolio"
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
							/>
						</div>

						{/* image 4 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								src={Image4}
								alt="portfolio"
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
							/>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Portfolio;
