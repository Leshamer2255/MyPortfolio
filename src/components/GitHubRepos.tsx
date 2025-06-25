'use client';

import { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  fork: boolean;
}

export default function GitHubRepos({ username = 'Leshamer2255', count = 6 }: { username?: string; count?: number }) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${count}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
          setError(null);
        } else {
          setError('GitHub API error');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Network error');
        setLoading(false);
      });
  }, [username, count]);

  if (loading) return <div className="text-center text-gray-500 py-8">Loading GitHub projects...</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;
  if (!repos.length) return <div className="text-center text-gray-500 py-8">No repositories found.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map(repo => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-500"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-lg text-blue-600 dark:text-blue-400">{repo.name}</span>
            {repo.language && <span className="text-xs bg-gray-200 dark:bg-gray-700 rounded px-2 py-0.5 ml-2">{repo.language}</span>}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 min-h-[40px]">{repo.description || 'No description'}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>⭐ {repo.stargazers_count}</span>
            {repo.fork && <span className="italic">Fork</span>}
          </div>
        </a>
      ))}
    </div>
  );
} 