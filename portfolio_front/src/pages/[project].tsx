import { useParams } from "react-router";
import { Project as ProjectModel } from "../utils/project";
import type { Project, Image } from "../types/project";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ProjectPage() {
  const params = useParams();
  if (!params.project) {
    window.location.href = "/404";
    return <></>;
  }

  const project: Project | undefined = ProjectModel.find(params.project);
  if (!project) {
    window.location.href = "/404";
    return <></>;
  }

  return (
    <>
      <header
        className="custom"
        style={{ "--color": project.color } as React.CSSProperties}
      >
        <div className="container grid">
          <div>
            <h1>{project.name}</h1>
            <h2>{project.description}</h2>
            <div className="btn-list">
              {((project.sourceAvailableAt &&
                project.sourceAvailableAt !== project.href) ||
                (project.href && !project.sourceAvailableAt)) && (
                <a
                  className="btn custom"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ "--color": project.color } as React.CSSProperties}
                >
                  Voir le projet
                </a>
              )}
              {project.sourceAvailableAt && (
                <a
                  className="btn custom"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ "--color": project.color } as React.CSSProperties}
                >
                  Voir le code source
                </a>
              )}
            </div>
          </div>
          <div>
            <img src={project.thumbnail} alt={"Image de " + project.name} />
          </div>
        </div>
      </header>
      {project.technologies && (
        <section className="container project">
          <h1>{project.isDesign ? "Apps" : "Tech Stack"}</h1>
          <div className="grid cols-auto center">
            {project.technologies.map((technology) => (
              <div className="tech" key={technology.name}>
                <img src={technology.logo} alt={"Logo de " + technology.name} />
                <h3>{technology.name}</h3>
              </div>
            ))}
          </div>
        </section>
      )}
      {project.sections &&
        project.sections.map((section, key) => (
          <section className="container project" key={"section_" + key}>
            <h1>{section.title}</h1>
            {section.description && <h2>{section.description}</h2>}
            {section.content}
          </section>
        ))}

      {project.images && (
        <section className="container project">
          <h1>Images</h1>
          <ResponsiveMasonry columnsCountBreakPoints={{ 600: 1, 900: 2 }}>
            <Masonry gutter="24px">
              {project.images.map((image: Image, key) => (
                <img
                  className="picture"
                  src={typeof image === "object" ? image.src : image}
                  alt={typeof image === "object" ? image.alt : "Image " + key}
                  key={"image_" + key}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </section>
      )}
    </>
  );
}
