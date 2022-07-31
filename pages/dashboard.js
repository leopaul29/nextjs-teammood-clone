import React from "react";
import Mood from "../components/Mood";
import prisma from "../lib/prisma";

export default function Dashboard({ project, users, moods }) {
	return (
		<div>
			<h4 className="text-gray-800 font-semibold text-xl mb-1.5">
				PROJECT: {project.name}
			</h4>

			<Mood moods={moods} users={users} />
		</div>
	);
}

export async function getStaticProps(context) {
	const projectData = await prisma.project.findUnique({
		where: {
			id: 1,
		},
	});

	const userData = await prisma.user.findMany();

	const users = userData.map((user) => ({
		...user,
	}));

	const moodsData = await prisma.mood.findMany({
		where: {
			projectId: 1,
		},
		orderBy: {
			date: "desc",
		},
	});

	return {
		props: {
			project: projectData,
			users: users,
			moods: JSON.parse(JSON.stringify(moodsData)),
		},
	};
}
