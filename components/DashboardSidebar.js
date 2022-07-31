import Link from "next/link";
import React from "react";

export default function DashboardSidebar() {
	return (
		<div>
			<h5>DashboardSidebar</h5>
			<ul>
				<Link
					href="/dashboard/1"
					aria-current="true"
					className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
				>
					project 1
				</Link>
				;
			</ul>
		</div>
	);
}
