import Arrow from "../../assets/arrow.svg";

import Project from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectCard(props: Props) {
  return (
    <article className="card bg-white">
      <div className="image">
        <img src={props.project.thumbnail} />
        {props.project.href && (
          <div className="links">
            <a className="icon" href={props.project.href} target="_blank">
              <span>Visit the website</span>
              <img src={Arrow} />
            </a>
          </div>
        )}
      </div>
      <a href={props.project.slug} className="content text-gray-900">
        <h1>{props.project.name}</h1>
        <p>{props.project.description}</p>
        <span className="link">View the project</span>
      </a>
    </article>
  );
}
