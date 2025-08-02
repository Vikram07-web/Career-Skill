const languageSelect = document.getElementById("languageSelect");
const output = document.getElementById("output");

// Function to render roadmap
function renderRoadmap(lang) {
  const data = roadmapData[lang];

  if (!data) {
    output.innerHTML = "<p>No data found for this language.</p>";
    return;
  }

  output.innerHTML = `
    <div class="roadmap-section">
      <h2>✅ ${lang}</h2>

      <h3>📘 Beginner Topics</h3>
      <ul>
        ${data.beginner?.map(t => `<li><a href="${t.link}" target="_blank">${t.topic}</a></li>`).join('') || "<li>No topics available</li>"}
      </ul>
      
      <h3>📗 Intermediate Topics</h3>
      <ul>
        ${data.intermediate?.map(t => `<li><a href="${t.link}" target="_blank">${t.topic}</a></li>`).join('') || "<li>No topics available</li>"}
      </ul>
      
      <h3>📕 Advanced Topics</h3>
      <ul>
        ${data.advanced?.map(t => `<li><a href="${t.link}" target="_blank">${t.topic}</a></li>`).join('') || "<li>No topics available</li>"}
      </ul>
    </div>
    
    <div class="roadmap-section">
      <h3>💡 Mini Projects</h3>
      <ul>
        ${data.projects?.map(p => `<li>${p}</li>`).join('') || "<li>No projects available</li>"}
      </ul>
    </div>
    
    <div class="roadmap-section">
      <h3>🎓 Certifications</h3>
      <ul>
        ${data.certs?.map(c => `<li>${c}</li>`).join('') || "<li>No certifications available</li>"}
      </ul>
    </div>
  `;
}

// Event listener for language selection
languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  renderRoadmap(lang);
});
