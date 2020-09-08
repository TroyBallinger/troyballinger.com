window.addEventListener('DOMContentLoaded', (_event) => {
	getLastUpdatedDateFromGitHub();
	listPublicReposFromGitHub();
});

async function getLastUpdatedDateFromGitHub() {
	fetch('https://api.github.com/repos/TroyBallinger/troyballinger.github.io/commits/master').then(res => {
		return res.json();
	}).then(lastCommitJSON => {
		// Pull out date of last commit to master branch
		let dateAndTime = lastCommitJSON['commit']['author']['date'];
		let date = dateAndTime.split('T')[0];

		// Errors will short-circuit this function, so only valid date will be shown
		document.getElementById('last-updated').innerHTML = `Last updated: ${date}`;
	}).catch(_err => {
		// GitHub API error or parse error
	});
}

async function listPublicReposFromGitHub() {
	fetch('https://api.github.com/users/TroyBallinger/repos').then(res => {
		return res.json();
	}).then(reposArray => {
		// Pull every public repository from my profile
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

		// Either parsing error(s) or no public repositories
		if (projectsList.childElementCount == 0) {
			throw 'Failed to populate projects list';
		}

		document.getElementById('projects').style.display = 'block';
	}).catch(_err => {
		// GitHub API error or population failure
	});
}

function callThisIfYouKnowHow() {
	// I dare you
	let scrambled = 'Xibu(t!vq!gfmmpx!efw@';

	let unscrambled = Array.from(scrambled).map(char => {
		return String.fromCharCode(char.charCodeAt() - 1);
	}).join('');

	return unscrambled;
}