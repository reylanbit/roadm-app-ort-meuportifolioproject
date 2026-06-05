import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.github.com/users/reylanbit/repos?sort=updated&per_page=100', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-App'
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch repos');
    }

    const repos = await response.json();
    
    // Filter out forks and format the data
    const filteredRepos = repos
      .filter((repo: any) => !repo.fork)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'Sem descrição',
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: new Date(repo.updated_at).toLocaleDateString('pt-BR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }));

    return NextResponse.json(filteredRepos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json([], { status: 500 });
  }
}
