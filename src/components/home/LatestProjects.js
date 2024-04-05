import SeeAllButton from "../shared/SeeAllButton";
import ProjectCard from "../shared/ProjectCard";

export default function LatestProjects({ latestProjects }) {
  return (
    <div className="mt-36 lg:mx-28">
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-slate-600">Latest Projects</h1>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {latestProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-28 flex justify-center">
        <SeeAllButton btnName="See all projects" path="/projects" />
      </div>
    </div>
  );
}
