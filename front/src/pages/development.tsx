import type { FC } from "react";
import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { developmentProjects } from "../config/projects";
import Project from "../components/cards/project";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

const developmentPage: FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      const query = params.get("q");
      if (query) {
        setSearch(query);
        searchRef.current!.value = query;
      }
    }
  }, []);

  function handleSearch() {
    const searchText = searchRef.current?.value.toLowerCase() as string;
    setSearch(searchText);
    const params = new URLSearchParams(location.search);
    params.set("q", searchText);

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  }

  return (
    <div>
      <Helmet>
        <title>Development</title>
      </Helmet>
      <header className="primary">
        <div className="container">
          <a className="btn small" href="/">
            Back to homepage
          </a>
          <h1>
            <span className="bg-primary-500 text-white text-bold text-padding">
              Development
            </span>{" "}
            projects
          </h1>
          <h2>Find some of the projects where I was a developer.</h2>
        </div>
      </header>

      <section className="container">
        <form className="small">
          <label htmlFor="search" className="hidden">
            Search
          </label>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search projects..."
            id="search"
            name="q"
            value={search}
            onChange={handleSearch}
          />
        </form>
        <div className="grid">
          {developmentProjects
            .filter((project) => {
              if (!search) return true;
              return project.name.toLowerCase().includes(search);
            })
            .map((project) => (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                key={project.slug}
              >
                <Project project={project} />
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default developmentPage;
