# Pablo Tain — FX Artist Portfolio

Personal portfolio website: **https://pablot07944.github.io**

Houdini FX, destruction, pyro and procedural environments.

## Structure

```
index.html            Home: intro, selected work, about, contact
project.html          Project page (video, description, stills, prev/next)
data/projects.js      ← list of projects — edit this to add or reorder work
css/style.css         Styles
js/main.js            Builds the home grid and project pages from data/projects.js
assets/
  img/                Headshot and general images
  cv/                 Downloadable CVs (PDF)
  projects/<slug>/    Stills and breakdown images for each project
```

## Adding a project

1. Upload the video to YouTube (Unlisted, ideally exported at 4K).
2. Copy a block in `data/projects.js` and fill in `slug`, `title`, `youtube` (the ID after `youtu.be/`), `tags` and `summary`.
3. Optional: put stills in `assets/projects/<slug>/` and list them in `images`.
4. Commit and push — GitHub Pages updates the site in about a minute.

## Contact

pablo.tain.santiag@gmail.com · [LinkedIn](https://www.linkedin.com/in/pablo-tain/)
