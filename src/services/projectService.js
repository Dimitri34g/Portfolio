const getProjects = async () => {
  try {
    const response = await fetch("/data/projects.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du chargement des projets :", error);
    return [];
  }
};

export { getProjects };
