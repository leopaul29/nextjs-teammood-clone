import Link from "next/link";
import React from "react";

export default function Dashboard({ projects }) {
	console.log("test", projects);
	return (
		<div>
			<h1>Projects</h1>
			<ul>
				{projects.map((project) => {
					return (
						<li key={project.id}>
							<Link href={`/project/${project.id}`}>
								<a>{project.name}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export async function getStaticProps(context) {
	const projectData = await prisma.project.findMany();

	const projects = projectData.map((project) => ({
		...project,
	}));

	return {
		props: { projects },
	};
}
