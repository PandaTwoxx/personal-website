import type { CollectionEntry } from "astro:content";
import getSortedProjects from "./getSortedProjects";
import { slugifyAll } from "./slugify";

const getProjectsByTag = (projects: CollectionEntry<"project">[], tag: string) =>
  getSortedProjects(
    projects.filter(project => slugifyAll(project.data.tags).includes(tag))
  );

export default getProjectsByTag;
