import React, { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconMan,
  IconTerminal2,
  IconTool,
  IconPhone,
  IconBrandLinkedin,
  IconMail,
  IconPackage,
  IconX,
  IconGitFork,
  IconStar,
  IconBuilding,
  IconMapPin,
  IconLink,
  IconClock,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const BioSection = ({ githubData }) => (
  <div className="bg-purple-500/5 rounded-xl p-4 space-y-4 border border-purple-500/20">
    <div className="space-y-2">
      <h6 className="text-purple-400 font-semibold">About Me</h6>
      <p className="text-white/80 text-sm md:text-base leading-relaxed">
        {githubData.bio || "No bio available"}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      {githubData.company && (
        <div className="flex items-center gap-2 text-white/70">
          <IconBuilding className="w-4 h-4 text-purple-400" />
          <span>{githubData.company}</span>
        </div>
      )}
      {githubData.location && (
        <div className="flex items-center gap-2 text-white/70">
          <IconMapPin className="w-4 h-4 text-purple-400" />
          <span>{githubData.location}</span>
        </div>
      )}
      {githubData.blog && (
        <div className="flex items-center gap-2 text-white/70">
          <IconLink className="w-4 h-4 text-purple-400" />
          <a 
            href={githubData.blog.startsWith('http') ? githubData.blog : `https://${githubData.blog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            {githubData.blog}
          </a>
        </div>
      )}
      {githubData.twitter_username && (
        <div className="flex items-center gap-2 text-white/70">
          <IconBrandTwitter className="w-4 h-4 text-purple-400" />
          <a 
            href={`https://twitter.com/${githubData.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            @{githubData.twitter_username}
          </a>
        </div>
      )}
      <div className="flex items-center gap-2 text-white/70">
        <IconClock className="w-4 h-4 text-purple-400" />
        <span>Joined {new Date(githubData.created_at).toLocaleDateString()}</span>
      </div>
    </div>
  </div>
);

export function FloatingDockDemo() {
  const [showGithubModal, setShowGithubModal] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your GitHub username
  const GITHUB_USERNAME = "Manas-xt";

  const fetchGithubData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch user data
      const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
      const userData = await userResponse.json();

      // Fetch repositories
      const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`);
      const reposData = await reposResponse.json();

      setGithubData(userData);
      setRepos(reposData);
    } catch (err) {
      setError('Failed to fetch GitHub data');
      console.error('Error fetching GitHub data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showGithubModal) {
      fetchGithubData();
    }
  }, [showGithubModal]);

  const handleGithubClick = (e) => {
    e.preventDefault();
    setShowGithubModal(true);
  };

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#",
    },
    {
      title: "About Me",
      icon: (
        <IconMan className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#Projects",
    },
    {
      title: "Skills",
      icon: (
        <IconTool className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#icon-cloud",
    },
    {
      title: "Contact Me",
      icon: (
        <IconPhone className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#Contact",
    },
    {
      title: "Resume",
      icon: (
        <IconPackage className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#about",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "https://www.linkedin.com/in/manas-kumar-b23388300/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      target: "_blank",
    },
    {
      title: "GitHub",
      icon: (
        <div onClick={handleGithubClick}>
          <IconBrandGithub className="h-full w-full text-white/90 group-hover:text-white transition-colors"  onClick={handleGithubClick}/>
        </div>
      ),
      href: "#",
    },
    {
      title: "E-mail",
      icon: (
        <IconMail className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#background-lines",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center w-full z-40 fixed bottom-5 left-0 right-0">
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>

      {/* GitHub Modal */}
      {showGithubModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowGithubModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black/90 border border-purple-500/30 rounded-2xl w-full max-w-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-black/90 p-6 border-b border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-purple-400">
                GitHub Profile
              </h3>
              <button
                onClick={() => setShowGithubModal(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <IconX className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {loading ? (
                <div className="flex items-center justify-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-500"></div>
                </div>
              ) : error ? (
                <div className="text-red-400 text-center p-4">
                  {error}
                </div>
              ) : githubData && (
                <>
                  {/* Profile Header */}
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="relative group">
                      <img
                        src={githubData.avatar_url}
                        alt="GitHub Profile"
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-purple-500/30"
                      />
                      <div className="absolute inset-0 rounded-full bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="space-y-4 flex-1">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                          {githubData.name}
                          {githubData.hireable && (
                            <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                              Open to Work
                            </span>
                          )}
                        </h4>
                        <p className="text-purple-400">@{githubData.login}</p>
                      </div>

                      {/* GitHub Stats */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-purple-500/10 rounded-lg p-2">
                          <div className="text-purple-400 font-bold">Repositories</div>
                          <div className="text-white">{githubData.public_repos}</div>
                        </div>
                        <div className="bg-purple-500/10 rounded-lg p-2">
                          <div className="text-purple-400 font-bold">Followers</div>
                          <div className="text-white">{githubData.followers}</div>
                        </div>
                        <div className="bg-purple-500/10 rounded-lg p-2">
                          <div className="text-purple-400 font-bold">Following</div>
                          <div className="text-white">{githubData.following}</div>
                        </div>
                      </div>

                      {/* Visit Profile Button */}
                      <a
                        href={githubData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 
                          text-white rounded-lg transition-colors duration-200"
                      >
                        <IconBrandGithub className="w-5 h-5" />
                        Visit Profile
                      </a>
                    </div>
                  </div>

                  {/* Detailed Bio Section */}
                  <BioSection githubData={githubData} />

                  {/* Recent Repositories */}
                  <div className="space-y-3">
                    <h5 className="text-lg font-semibold text-purple-400">
                      Recent Repositories
                    </h5>
                    <div className="space-y-3">
                      {repos.map((repo) => (
                        <a
                          key={repo.id}
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 rounded-lg bg-purple-500/5 hover:bg-purple-500/10 
                            border border-purple-500/20 transition-colors duration-200"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h6 className="font-medium text-white flex items-center gap-2">
                              {repo.name}
                              {repo.language && (
                                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                                  {repo.language}
                                </span>
                              )}
                            </h6>
                            <div className="flex items-center gap-3 text-sm text-white/60">
                              <span className="flex items-center gap-1">
                                <IconStar className="w-4 h-4" />
                                {repo.stargazers_count}
                              </span>
                              <span className="flex items-center gap-1">
                                <IconGitFork className="w-4 h-4" />
                                {repo.forks_count}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-white/60">
                            {repo.description || 'No description available'}
                          </p>
                          {repo.topics && repo.topics.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {repo.topics.map((topic) => (
                                <span 
                                  key={topic}
                                  className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
