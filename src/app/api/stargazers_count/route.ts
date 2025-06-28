export async function GET() {
  const data = await fetch(
    "https://api.github.com/repos/arjunkatwal24/portfolio",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "User-Agent": "arjunkatwal.com.np",
      },
      next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    }
  );
  const json = await data.json();
  return Response.json({
    stargazers_count: json?.stargazers_count ?? -1,
  });
}
