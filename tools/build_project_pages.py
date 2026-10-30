# Creates projects/<slug>/index.html for every project in data/projects.js,
# each with its own title, description and share image for LinkedIn, WhatsApp, etc.
# Run it after adding a project or changing a title or summary:  py tools/build_project_pages.py

import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://pablot07944.github.io"


def field(block, name):
    match = re.search(rf'{name}: "((?:[^"\\]|\\.)*)"', block)
    return match.group(1).replace('\\"', '"') if match else ""


def shorten(text, limit=160):
    if len(text) <= limit:
        return text
    return text[:limit].rsplit(" ", 1)[0].rstrip(" ,;:") + "…"


data = (ROOT / "data" / "projects.js").read_text(encoding="utf-8")
template = (ROOT / "project.html").read_text(encoding="utf-8")
blocks = re.findall(r"\n  \{.*?\n  \}", data.split("const PROJECTS = [", 1)[1], flags=re.S)

for block in blocks:
    slug, title, youtube = field(block, "slug"), field(block, "title"), field(block, "youtube")
    description = shorten(field(block, "summary") or f"{title} — FX work by Pablo Tain.")
    full_title = html.escape(f"{title} — Pablo Tain")
    description = html.escape(description)

    share = f"""<!-- share:start -->
  <meta name="description" content="{description}">
  <meta property="og:title" content="{full_title}">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="https://img.youtube.com/vi/{youtube}/maxresdefault.jpg">
  <meta property="og:url" content="{SITE}/projects/{slug}/">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <!-- share:end -->"""

    page = re.sub(r"<!-- share:start -->.*?<!-- share:end -->", lambda m: share, template, flags=re.S)
    page = page.replace("<title>Project — Pablo Tain</title>", f"<title>{full_title}</title>")
    page = page.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n  <base href="../../">')
    page = page.replace("<body>", f'<body data-slug="{slug}">')

    out = ROOT / "projects" / slug / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(page, encoding="utf-8", newline="\n")
    print(out.relative_to(ROOT))
