export const dynamic = "force-static";

const content = `# About Arjun Katwal

I'm a Software Developer from Kathmandu, Nepal, specializing in Android Development, Web Development, and Video Content Creation.

## Skills & Expertise

- **Android Development**: Building apps for the Nepali community with 4+ published apps
- **Web Development**: Creating e-commerce platforms and business websites
- **Video Content**: Producing engaging content for business marketing

## Tech Stack

- **Mobile**: Java, Kotlin, Android Studio
- **Web**: PHP, MySQL, WordPress, Next.js
- **Design**: Adobe Premiere Pro, After Effects, Photoshop

## Connect

- GitHub: [@arjunkatwal24](https://github.com/arjunkatwal24)
- LinkedIn: [@arjunkatwal24](https://linkedin.com/in/arjunkatwal24)
- X: [@arjunkatwal24](https://x.com/arjunkatwal24)
- Email: arjunkatwal24@gmail.com

## Portfolio

Visit [arjunkatwal.com.np](https://arjunkatwal.com.np) to see my work.`;

export async function GET() {
  return new Response(content, {
    headers: {
      "content-type": "text/markdown",
    },
  });
}
