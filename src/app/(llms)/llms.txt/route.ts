import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/data/blog";

const allPosts = getAllPosts();

const content = `# Arjun Katwal's Portfolio

> Android Developer and Web Developer from Kathmandu, Nepal, building apps and websites that solve real problems for the Nepali community.

- [About](${SITE_INFO.url}/about.md): Learn about my skills, experience, and how to connect
- [Experience](${SITE_INFO.url}/experience.md): My journey in software development and video content creation
- [Projects](${SITE_INFO.url}/projects.md): Android apps, web platforms, and video projects

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md): ${item.metadata.description}`).join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "content-type": "text/markdown",
    },
  });
}
