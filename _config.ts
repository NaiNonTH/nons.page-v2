import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import extract_date from "lume/plugins/extract_date.ts";
import nav from "lume/plugins/nav.ts";
import redirects from "lume/plugins/redirects.ts";
import terser from "lume/plugins/terser.ts";
import google_fonts from "lume/plugins/google_fonts.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
import inline from "lume/plugins/inline.ts";
import validate_html from "lume/plugins/validate_html.ts";
import feed from "lume/plugins/feed.ts";
import minify_html from "lume/plugins/minify_html.ts";
import filter_pages from "lume/plugins/filter_pages.ts";

import { figure } from "npm:@mdit/plugin-figure@0.22.2";
import { format } from "npm:date-fns";

const lumeOptions = {
  src: "www",
  dest: "nons.page",
  location: new URL("https://nons.page"),
};

const markdown = {
  plugins: [[figure, { focusable: false }]],
};

const site = lume(lumeOptions, { markdown });

site.add([".css", ".js", ".png", ".jpg", ".webp", ".svg", ".ico"]);

site.process([".md"], (pages) => {
  for (const page of pages) {
    if (!page.sourcePath.startsWith("/updates/content")) continue;

    page.data.title = format(new Date(page.data.basename), "PPP");
  }
});

const now = new Date().getTime();
const birthday = new Date("2005-03-21").getTime();

site.data("age", new Date(now - birthday).getFullYear() - 1970);
site.data("cacheBust", Date.now());

site.use(date());
site.use(extract_date());
site.use(nav());
site.use(redirects());
site.use(terser());
site.use(
  google_fonts({
    fonts:
      "https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap",
    subsets: ["latin"],
    cssFile: "/fonts.css",
  }),
);
site.use(lightningcss());
site.use(metas());
site.use(inline());
site.use(validate_html());
site.use(
  feed({
    output: "/blog/feed.xml",
    query: "blog !index",
    sort: "date=desc",
    info: {
      title: "NaiNonTheN00b1's Blog",
      description:
        "A place where I would write my thoughts, interests, and things that is going on.",
      published: new Date(),
      lang: "en",
      hubs: undefined,
      generator: true,
      authorName: "NaiNonTheN00b1",
      authorUrl: "https://nons.page",
    },
    items: {
      updated: undefined,
      authorName: "NaiNonTheN00b1",
      authorUrl: "https://nons.page",
    },
  }),
);
site.use(
  feed({
    output: "/updates/feed.xml",
    query: "updates !index",
    sort: "basename=desc",
    info: {
      title: "NaiNonTheN00b1's Site Updates",
      description: "Lists all NaiNonTheN00b1's personal website updates",
      published: new Date(),
      lang: "en",
      hubs: undefined,
      generator: true,
      authorName: "NaiNonTheN00b1",
      authorUrl: "https://nons.page",
    },
    items: {
      published: "=basename",
      updated: undefined,
      authorName: "NaiNonTheN00b1",
      authorUrl: "https://nons.page",
    },
  }),
);
site.use(minify_html());
site.use(
  filter_pages({
    fn: (page) => {
      const { tags } = page.data;
      return tags ? !tags.includes("updates") : true;
    },
  }),
);

export default site;
