import Head from "next/head";

export default function Home() {
	return (
		<div className="p-10 mx-auto max-w-4xl ">
			<Head>
				<title>PlanetScale & Hashnode Hackathon - Teammood clone</title>
				<meta
					name="description"
					content="PlanetScale & Hashnode Hackathon - Teammood clone"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<h1 className="text-6xl font-bold mb-4 text-center">Teammood clone</h1>
				<p className="mb-20 text-xl text-center">
					🔥 PlanetScale & Hashnode Hackathon 🔥
				</p>
			</main>
		</div>
	);
}
