import prisma from "../../lib/prisma";

export default async function handler(req, res) {
	if (req.method === "POST") {
		// Get data submitted in request's body.
		const body = req.body;

		// Optional logging to see the responses
		// in the command line where next.js app is running.
		console.log("body: ", body);

		// Guard clause checks for first and last name,
		// and returns early if they are not found
		if (!body.user || !body.project || !body.mood) {
			// Sends a HTTP bad request error code
			return res.status(400).json({ data: "User, Project or mood not found" });
		}

		// validation
		if (body.user < 1 || body.user > 5) {
			res.status(401).send({ message: "Unauthorized" });
		}
		if (body.project != 1) {
			res.status(401).send({ message: "Unauthorized" });
		}
		if (body.mood < 1 || body.mood > 5) {
			res.status(401).send({ message: "Unauthorized" });
		}

		const mood = await prisma.mood.create({
			data: {
				userId: +body.user,
				projectId: +body.project,
				mood: +body.mood,
			},
		});

		// Found the name.
		// Sends a HTTP success code
		res.status(200).json(mood);
	} else {
		throw new Error(
			`The HTTP ${req.method} method is not supported at this route.`
		);
	}
}
