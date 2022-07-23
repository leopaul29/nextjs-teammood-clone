import Image from 'next/image';

export default function Project({ project }) {
  const { name, users } = project;

  return (
    <div
      className="max-w-[250px] rounded overflow-hidden shadow-lg"
      key={project.id}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
    </div>
  );
}
