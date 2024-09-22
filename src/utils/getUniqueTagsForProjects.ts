import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import projectFilter from "./projectFilter";

interface Tag {
  tag: string;
  tagName: string;
}

const getUniqueTagsForProjects = (projects: CollectionEntry<"project">[]) => {
  const tags: Tag[] = projects
    .filter(projectFilter)
    .flatMap(project => project.data.tags)
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

export default getUniqueTagsForProjects;
