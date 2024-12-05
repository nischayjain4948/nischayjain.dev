
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../projectData";


export default function Projects() {
  return (
    <section className="text-center p-10">
      <h1 className="text-4xl font-bold">My Projects</h1>
      <p className="mt-4 text-lg text-gray-600">
        Here are some of the projects I&apos;ve worked on.
      </p>

      <section className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((data,i)=>{
          return <ProjectCard
            key={i}
            title={data.title}
            description={data.description}
            link={data.link}
            image={data.image}
          />
        })}
      </section>
    </section>
  );
}
