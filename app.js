const textarea = document.getElementById("textarea");
const tagsElem = document.getElementById("tags");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTag();

  if (e.key == "Enter") {
    setTimeout(() => {
      e.target.value = "";
      randomSelect();
    });
  }
});

function createTag() {
  const tags = textarea.value
    .split(",")
    .filter((x) => x.trim() !== "")
    .map((x) => x.trim());

  tagsElem.innerHTML = "";
  tags.forEach((tag) => {
    let span = document.createElement("span");
    span.classList.add("tag");
    span.innerText = tag;
    tagsElem.appendChild(span);
  });
}

function randomSelect() {
  let interval = setInterval(() => {
    let random = pickRandom();
    highlight(random);
    setTimeout(() => {
      unHighlight(random);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      let random = pickRandom();
      highlight(random);
    }, 100);
  }, 3000);
}

function pickRandom() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}

function unHighlight(tag) {
  tag.classList.remove("highlight");
}
