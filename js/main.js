// Renders the home grid and the project page from data/projects.js

const thumb = id => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function card(p, featured) {
  return `
    <a class="card${featured ? " featured" : ""}" href="project.html?p=${p.slug}">
      <div class="thumb"><img src="${thumb(p.youtube)}" alt="${esc(p.title)}" loading="lazy"><span class="play"></span></div>
      <div class="card-info">
        <h3>${esc(p.title)}</h3>
        <p>${p.tags.map(esc).join(" · ")}</p>
      </div>
    </a>`;
}

// Home page
const featured = document.getElementById("featured");
if (featured) {
  featured.innerHTML = card(PROJECTS[0], true);
  document.getElementById("grid").innerHTML = PROJECTS.slice(1).map(p => card(p)).join("");
}

// Project page
const page = document.getElementById("project");
if (page) {
  const slug = new URLSearchParams(location.search).get("p");
  const i = PROJECTS.findIndex(p => p.slug === slug);
  if (i === -1) {
    location.replace("index.html#work");
  } else {
    const p = PROJECTS[i];
    const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    document.title = `${p.title} — Pablo Tain`;

    page.innerHTML = `
      <a href="index.html#work" class="back">← All work</a>
      <div class="player">
        <iframe src="https://www.youtube-nocookie.com/embed/${p.youtube}?rel=0&modestbranding=1&playsinline=1"
          title="${esc(p.title)}" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="project-info">
        <div>
          <h1>${esc(p.title)}</h1>
          <p class="project-tags">${p.tags.map(esc).join(" · ")}</p>
        </div>
        <div>
          ${p.summary ? `<p class="project-summary">${esc(p.summary)}</p>` : ""}
          ${p.details.length ? `<ul class="project-details">${p.details.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
        </div>
      </div>
      ${p.images.length ? `<div class="gallery">${p.images.map(f =>
        `<img src="assets/projects/${p.slug}/${esc(f)}" alt="${esc(p.title)}" loading="lazy">`).join("")}</div>` : ""}
      <nav class="pager">
        <a href="project.html?p=${prev.slug}"><span>Previous</span>${esc(prev.title)}</a>
        <a href="project.html?p=${next.slug}" class="next"><span>Next</span>${esc(next.title)}</a>
      </nav>`;
  }
}
