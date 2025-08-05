import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedProjects = (projects: CollectionEntry<"project">[]) => {
  return projects
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.pubDatetime).getTime() / 1000
        ) - Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );
};

export default getSortedProjects;
