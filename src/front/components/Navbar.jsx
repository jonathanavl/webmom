import { Link } from "react-router-dom";
export const Navbar = () => {

	return (
		<nav>
			<div className="navbar" >
				<Link to="/">
					<img
						src="https://www.marykay.es/-/media/images/mk/europe/spain/esuite/header/2024-new-mary-kay-logo-esuite-164x35.svg?la=es-ES&hash=C956432961C5A9C4943A8D72953D6D760CEE70B9"
						alt="Logo"
						style={{ width: "300px" }}
					/>				</Link>

			</div>
		</nav>
	);
};