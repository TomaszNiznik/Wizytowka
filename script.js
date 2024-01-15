function showSection(sectionId) {
  // Uzyskaj wszystkie zakładki.
  const sections = document.querySelectorAll("section");

  // Ustaw wszystkie zakładki jako ukryte.
  for (const section of sections) {
    section.classList.add("hidden");
  }

  // Wyświetl wybraną zakładkę.
  document.getElementById(sectionId).classList.remove("hidden");
}

