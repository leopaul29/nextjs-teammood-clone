// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../lib/prisma.js";

export default async function handler(req, res) {
	if (req.method === "GET") {
		try {
			let data;
			console.log("req", req.query);
			const { id } = req.query;
			if (id) {
				data = await prisma.project.findUnique({
					where: {
						id: +id,
					},
				});
			} else {
				data = await prisma.project.findMany({});
			}

			return res.status(200).json({ data });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: "Something went wrong" });
		}
	} else {
		return res.status(405).json({ msg: "Method not allowed" });
	}
}
