import prisma from "../../lib/prisma";

export default function Project({ project }) {
	return (
		<div>
			{JSON.stringify(project)}
			{project.name}
		</div>
	);
}

export const getStaticPaths = async () => {
	const data = await prisma.project.findMany();

	const paths = data.map((project) => {
		return {
			params: {
				id: project.id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;

	const data = await prisma.project.findUnique({
		where: {
			id: +id,
		},
	});

	return {
		props: { project: data },
	};
};
