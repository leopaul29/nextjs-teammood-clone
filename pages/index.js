import Head from 'next/head';
import { useState } from 'react';
import Project from '../components/Project';
import User from '../components/User';
import prisma from '../lib/prisma';

export default function Home({ projects, users }) {
const [state, setState] = useState({})
  
  return (
    <div>
      <Head>
        <title>PlanetScale & Hashnode Hackathon - Teammood clone</title>
        <meta name="description" content="PlanetScale & Hashnode Hackathon - Teammood clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 mx-auto max-w-4xl">
        <h1 className="text-6xl font-bold mb-4 text-center">Teammood clone</h1>
        <p className="mb-20 text-xl text-center">
          🔥 PlanetScale & Hashnode Hackathon 🔥
        </p>
        <div className="select-user">
          <h2>Select a user</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center  gap-4">
          {users.map((user) => (
            <User user={user} key={user.id} />
            ))}
        </div>
        </div>
        <div className="select-project">
          <h2>Select a project</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center  gap-4">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
            ))}
        </div>
            </div>
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const projectData = await prisma.project.findMany()
  
  const projects = projectData.map((project) => ({
    ...project
  }));

  const userData = await prisma.user.findMany()
  
  const users = userData.map((user) => ({
    ...user
  }));
  return {
    props: { projects, users },
  };
}
