import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForProject } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const projects = await getCollection("project").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return projects.map(project => ({
    params: { slug: slugifyStr(project.data.title) },
    props: project,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForProject(props as CollectionEntry<"project">), {
    headers: { "Content-Type": "image/png" },
  });
