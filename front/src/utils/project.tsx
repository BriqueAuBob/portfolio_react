import { developmentProjects, designProjects } from "../config/projects";

const projects = [...developmentProjects, ...designProjects];

export class Project {
  static find(slug: string) {
    return projects.find((project) => project.slug === slug);
  }
}
