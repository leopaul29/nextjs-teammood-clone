import React from "react";
import prisma from "../lib/prisma";
import Router from "next/router";

export default function contribute1({ projects, users, moods }) {
	const handleSubmit = async (event) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		try {
			// Get data from the form.
			const data = {
				user: event.target.user.value,
				project: event.target.project.value,
				mood: event.target.mood.value,
			};

			// Send the data to the server in JSON format.
			const JSONdata = JSON.stringify(data);

			// API endpoint where we send form data.
			const endpoint = "/api/form";

			// Form the request for sending data to the server.
			const options = {
				// The method is POST because we are sending data.
				method: "POST",
				// Tell the server we're sending JSON.
				headers: {
					"Content-Type": "application/json",
				},
				// Body of the request is the JSON data we created above.
				body: JSONdata,
			};
			// Send the form data to our forms API on Vercel and get a response.
			const response = await fetch(endpoint, options);

			// Get the response data from server as JSON.
			// If server returns the name submitted, that means the form works.
			const result = await response.json();
			console.log(result);
			if (result) {
				await Router.push("/dashboard");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
				<form onSubmit={handleSubmit}>
					<div className="form-group mb-6">
						<select
							name="user"
							className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							aria-label="Default select example"
							required
						>
							<option selected value="">
								Select a user
							</option>
							{users.map((user) => (
								<option value={user.id} key={user.id}>
									{user.username}
								</option>
							))}
						</select>
					</div>
					<div className="form-group mb-6">
						<select
							name="project"
							className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							aria-label="Default select example"
							required
						>
							{/* <option selected value="">
								Select a project
							</option> */}
							{projects.map((project) => (
								<option value={project.id} key={project.id}>
									{project.name}
								</option>
							))}
						</select>
					</div>
					<div className="form-group form-check text-center mb-6">
						<select
							name="mood"
							className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							aria-label="Default select example"
							required
						>
							<option selected value="">
								How are you today?
							</option>
							{moods.map((mood) => (
								<option value={mood.id} key={mood.id}>
									{mood.mood}
								</option>
							))}
						</select>
					</div>
					<button
						type="submit"
						className="
      w-full
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
			</div>
		</>
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
