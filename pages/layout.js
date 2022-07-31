import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Script from "next/script";

export default function RootLayout({ children }) {
	return (
		<html>
			<body className="flex flex-col min-h-screen">
				<Header />
				<div className="container mt-20 flex-1 mx-auto p-8">{children}</div>
				<Footer />
				<Script
					id="stripe-js"
					src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
				/>
			</body>
		</html>
	);
}
