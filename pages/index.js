import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import MoodForm from "../components/MoodForm";
import prisma from "../lib/prisma";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home({ projects, users }) {
	const [state, setState] = useState({});

	return (
		<div className="p-10 mx-auto max-w-4xl ">
			<Head>
				<title>PlanetScale & Hashnode Hackathon - Teammood clone</title>
				<meta
					name="description"
					content="PlanetScale & Hashnode Hackathon - Teammood clone"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<h1 className="text-6xl font-bold mb-4 text-center">Teammood clone</h1>
				<p className="mb-20 text-xl text-center">
					🔥 PlanetScale & Hashnode Hackathon 🔥
				</p>
			</main>
		</div>
	);
}

function Posts({ projects }) {
	return (
		<ul>
			{projects.map((project) => (
				<li key={project.id}>
					<Link
						href={`/project/${encodeURIComponent(
							project.name.replace(" ", "_")
						)}`}
					>
						<a>{project.name}</a>
					</Link>
				</li>
			))}
		</ul>
	);
}

export async function getStaticProps(context) {
	const projectData = await prisma.project.findMany();

	const projects = projectData.map((project) => ({
		...project,
	}));

	const userData = await prisma.user.findMany();

	const users = userData.map((user) => ({
		...user,
	}));

	const moods = [":&apos;(", ":(", ":|", ":)", ";)"];
	return {
		props: { projects, users },
	};
}
