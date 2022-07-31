import React from "react";

function Footer() {
	return (
		<footer className="w-full text-center border-t border-grey p-4 pin-b">
			<div className="text-gray-700 text-center p-4">
				© 2022 Copyright: Teammood [Clone] -{" "}
				<a href="https://planetscale.com/?utm_source=hashnode&utm_medium=hackathon&utm_campaign=announcement_article">
					PlanetScale
				</a>{" "}
				and{" "}
				<a href="https://hashnode.com/?source=planetscale_hackathon_announcement">
					Hashnode
				</a>{" "}
				hackathon
			</div>
		</footer>
	);
}

export default Footer;
