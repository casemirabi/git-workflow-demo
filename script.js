const commits = [
  "feat: add hero section",
  "feat: add workflow section",
  "style: improve layout",
  "docs: update readme"
];

let index = 0;

function showCommit() {
  const output = document.getElementById("commit-output");
  output.textContent = commits[index];
  index = (index + 1) % commits.length;
}