import Head from "next/head";
import { useState } from "react";
import prisma from "../lib/prisma";

export default function Home({ projects, users }) {
	const [state, setState] = useState({});

	return (
		<div>
			<Head>
				<title>PlanetScale & Hashnode Hackathon - Teammood clone</title>
				<meta
					name="description"
					content="PlanetScale & Hashnode Hackathon - Teammood clone"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="p-10 mx-auto max-w-4xl">
				<h1 className="text-6xl font-bold mb-4 text-center">Teammood clone</h1>
				<p className="mb-20 text-xl text-center">
					🔥 PlanetScale & Hashnode Hackathon 🔥
				</p>
				<form className="form-flow ">
					<div className="select-user">
						<label className="block">
							<span className="text-gray-700">Select a user</span>
							<select
								className="block w-full mt-1
                "
								name="userId"
							>
								{users.map((user) => (
									<option value={user.id} key={user.id}>
										{user.username}
									</option>
								))}
							</select>
						</label>
					</div>
					<div className="select-project">
						<label className="block">
							<span className="text-gray-700">Choose your project</span>
							<select
								className="block w-full mt-1
                "
								name="projectId"
							>
								{projects.map((project) => (
									<option value={project.id} key={project.id}>
										{project.name}
									</option>
								))}
							</select>
						</label>
					</div>
					<div className="select-mood">
						<label className="block">
							<span className="text-gray-700">How is your day?</span>
							<select
								className="block w-full mt-1
                "
								name="mood"
							>
								<option>:&apos;(</option>
								<option>:(</option>
								<option>:|</option>
								<option>:)</option>
								<option>;)</option>
							</select>
						</label>
					</div>
					<submit className="button">Submit</submit>
				</form>
			</main>

			<footer></footer>
		</div>
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
