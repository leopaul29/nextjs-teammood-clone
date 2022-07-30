import Image from "next/image";
import { useRouter } from "next/router";

export default function Project({ projects }) {
	const router = useRouter();
	const { pid } = router.query;
	const project = projects[pid];
	console.log(projects);

	return (
		<div className="max-w-[250px] rounded overflow-hidden shadow-lg" key={pid}>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{project.name}</div>
			</div>
		</div>
	);
}

// getStaticPaths : https://nextjs.org/docs/basic-features/data-fetching/get-static-paths

export async function getStaticProps(context) {
	const projectData = await prisma.project.findMany();

	const projects = projectData.map((project) => ({
		...project,
	}));

	return {
		props: { projects },
	};
}
