import Image from "next/image";
import { useRouter } from "next/router";

export default function Project() {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<div className="max-w-[250px] rounded overflow-hidden shadow-lg" key={pid}>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{pid}</div>
			</div>
		</div>
	);
}
