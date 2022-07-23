import Head from 'next/head';
import Project from '../components/Project';
import prisma from '../lib/prisma';

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name="description" content="PlanetScale Quickstart for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 mx-auto max-w-4xl">
        <h1 className="text-6xl font-bold mb-4 text-center">Next.js Starter</h1>
        <p className="mb-20 text-xl text-center">
          🔥 Shop from the hottest items in the world 🔥
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center  gap-4">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await prisma.project.findMany()
  
  const projects = data.map((project) => ({
    ...project
  }));
  return {
    props: { projects },
  };
}
