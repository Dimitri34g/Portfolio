export const getSettings = async () => {
  try {
    const response = await fetch("/data/settings.json"); // Accéder à public/data/settings.json
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des préférences de thème :",
      error
    );
    return { theme: "light" }; // Valeur par défaut en cas d'erreur
  }
};

export const saveSettings = async (theme) => {
  try {
    console.log("Sauvegarde du thème sélectionné :", theme);
    // Note : Impossible d'écrire directement dans un fichier JSON en local depuis le front-end
    // Simule l'envoi des préférences à un backend
  } catch (error) {
    console.error(
      "Erreur lors de la sauvegarde des préférences de thème :",
      error
    );
  }
};
