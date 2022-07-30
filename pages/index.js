import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import MoodForm from "../components/MoodForm";
import prisma from "../lib/prisma";
import Script from "next/script";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home({ projects, users }) {
	const [state, setState] = useState({});

	return (
		<div className="p-10 mx-auto max-w-4xl flex flex-col min-h-screen">
			<Head>
				<title>PlanetScale & Hashnode Hackathon - Teammood clone</title>
				<meta
					name="description"
					content="PlanetScale & Hashnode Hackathon - Teammood clone"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="mt-20 flex-1 mx-auto p-8">
				<h1 className="text-6xl font-bold mb-4 text-center">Teammood clone</h1>
				<p className="mb-20 text-xl text-center">
					🔥 PlanetScale & Hashnode Hackathon 🔥
				</p>
				{/* <Posts projects={projects} />
				<MoodForm users={users} projects={projects} /> */}
			</main>

			<Footer />
			<Script
				id="stripe-js"
				src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
			/>
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
