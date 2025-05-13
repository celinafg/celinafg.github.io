import type { CollectionEntry } from "astro:content";

export function getPrevNextPost(
  allProjects: CollectionEntry<"projects">[] | CollectionEntry<"experiments">[],
  currentSlug: string
): {
  prev: CollectionEntry<"projects"> | CollectionEntry<"experiments"> | null;
  next: CollectionEntry<"projects"> | CollectionEntry<"experiments"> | null;
} {
  const nonDraftPosts = [...allProjects].filter((post) => !post.data.draft);

  const sortedPosts = nonDraftPosts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const currentIndex = sortedPosts.findIndex(
    (post) => post.slug === currentSlug
  );

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev:
      currentIndex < sortedPosts.length - 1
        ? sortedPosts[currentIndex + 1]
        : null,
    next: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
  };
}
