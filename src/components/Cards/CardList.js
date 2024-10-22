import React, { useState, useEffect } from "react";
import { getProjects } from "../services/projectService";
import Card from "./Card";

function CardList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div className="card-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}

export default CardList;
