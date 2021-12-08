window.addEventListener('DOMContentLoaded', (_event) => {
	getLastUpdatedDateFromGitHub();
	listPublicReposFromGitHub();
});

async function getLastUpdatedDateFromGitHub() {
	fetch('https://api.github.com/repos/TroyBallinger/troyballinger.github.io/commits/master').then(res => {
		return res.json();
	}).then(lastCommitJSON => {
		// Get date of last commit
		let dateAndTime = lastCommitJSON['commit']['author']['date'];
		let date = dateAndTime.split('T')[0];

		document.getElementById('last-updated').innerHTML = `Last updated: ${date}`;
	}).catch(_err => {
		// GitHub API error or parse error
	});
}

// Pull every public repository from my profile
async function listPublicReposFromGitHub() {
	fetch('https://api.github.com/users/TroyBallinger/repos').then(res => {
		return res.json();
	}).then(reposArray => {
		let projectsList = document.getElementById('projects-list');

		reposArray.forEach(repo => {
			let newBullet = document.createElement('li');
			let repoLink = document.createElement('a');

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
			throw 'Failed to populate projects list';
		}

		document.getElementById('projects').style.display = 'block';
	}).catch(_err => {
		// GitHub API error or population failure
	});
}