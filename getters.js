const BASE_URL = "https://api.github.com";

const populateLastUpdatedDate = async () => {
  fetch(`${BASE_URL}/repos/TroyBallinger/troyballinger.github.io/commits/main`)
    .then((res) => res.json())
    .then((latestCommitData) => {
      // Get date of last commit
      const date = latestCommitData["commit"]["author"]["date"].split("T")[0];

      document.getElementById(
        "last-updated"
      ).innerHTML = `Last updated: ${date}`;
    })
    .catch((_err) => {
      // GitHub API error or parse error
    });
};

// Pull every public repository from my profile
const populateProjects = async () => {
  fetch(`${BASE_URL}/users/TroyBallinger/repos`)
    .then((res) => res.json())
    .then((reposArray) => {
      const projectsList = document.getElementById("projects-list");

      reposArray.forEach((repo) => {
        const newBullet = document.createElement("li");
        const repoLink = document.createElement("a");

        try {
          repoLink.href = repo.html_url;
          repoLink.innerHTML = repo.name;
        } catch (_err) {
          // Parse error
          return;
        }

        projectsList.appendChild(newBullet);
        newBullet.appendChild(repoLink);
      });

      // Parsing error(s) or no public repositories
      if (projectsList.childElementCount == 0) {
        document.getElementById("projects").style.display = "none";
      }
    })
    .catch((_err) => {
      // GitHub API error or population failure
    });
};

window.addEventListener("DOMContentLoaded", (_event) => {
  populateLastUpdatedDate();
  populateProjects();
});
