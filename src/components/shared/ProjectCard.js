
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="card_container relative">
      <div className="relative h-72 cursor-pointer">
        <Image
          alt="Random"
          src={project.imgPath}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="overlay flex justify-center items-center ">
        <div className="text-center">
          <h1 className="text-xl font-semibold mt-5 text-white">Title</h1>
          <p className="text-sm uppercase text-white">Subtitle</p>
        </div>
      </div>
    </div>
  );
}
