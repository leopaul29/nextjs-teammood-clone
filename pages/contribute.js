import React from "react";

export default function contribute({ projects, users, moods }) {
	return (
		<form>
			<ul
				className="stepper"
				data-mdb-stepper="stepper"
				data-mdb-stepper-type="vertical"
			>
				<li className="stepper-step stepper-active">
					<div className="stepper-head">
						<span className="stepper-head-icon"> 1 </span>
						<span className="stepper-head-text"> Select a user </span>
					</div>
					<div className="stepper-content">
						<select className="" name="userId">
							{users.map((user) => (
								<option value={user.id} key={user.id}>
									{user.username}
								</option>
							))}
						</select>
					</div>
				</li>
				<li className="stepper-step">
					<div className="stepper-head">
						<span className="stepper-head-icon"> 2 </span>
						<span className="stepper-head-text"> Select a project </span>
					</div>
					<div className="stepper-content">
						<select className="" name="projectId">
							{projects.map((project) => (
								<option value={project.id} key={project.id}>
									{project.name}
								</option>
							))}
						</select>
					</div>
				</li>
				<li className="stepper-step">
					<div className="stepper-head">
						<span className="stepper-head-icon"> 3 </span>
						<span className="stepper-head-text"> How is your day? </span>
					</div>
					<div className="stepper-content">
						<select className="" name="moodId">
							{moods.map((mood) => (
								<option value={mood.id} key={mood.id}>
									{mood.mood}
								</option>
							))}
						</select>
					</div>
				</li>
			</ul>
			<button
				type="submit"
				className="
	  px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
			>
				Submit
			</button>
		</form>
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

	const moods = [
		{ id: 1, mood: ":'(" },
		{ id: 2, mood: ":(" },
		{ id: 3, mood: ":|" },
		{ id: 4, mood: ":)" },
		{ id: 5, mood: ";)" },
	];
	return {
		props: { projects, users, moods },
	};
}
