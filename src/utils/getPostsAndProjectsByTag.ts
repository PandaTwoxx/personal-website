import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getPostsAndProjectsByTag = (
  collection: CollectionEntry<"blog" | "project">[],
  tag: string
) => {
  return collection.filter(item => {
    if (!item.data.tags) return false;
    const slugifiedTags = item.data.tags.map(tag => slugifyStr(tag));
    return slugifiedTags.includes(slugifyStr(tag));
  });
};

export default getPostsAndProjectsByTag;
