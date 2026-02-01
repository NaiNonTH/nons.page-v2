---
title: I Just Made A Really Bad HTML Playground
---

You can try it out at [pg.nons.page](https://pg.nons.page)

When I want to put up a quick design of something, like a simple background or component idea, I typically will create a new tab with a blank page then start working on it using the DevTools. It kind of works, but I experience an issue; moving an already existing element into an empty element is impossible, and I don't like that. So I wanted to code myself a simple HTML playground that I can write simple HTML, CSS, and JavaScript code quickly without having to use DevTools or use a full-blown IDE.

I set up the project using [Vite](https://vite.dev), because its dev server with HMR is really great, and it has a template for me as a headstart. Since I need to use an editor library, the [CodeMirror](https://codemirror.net), I also need a bundler, and Vite is also a bundler itself, which is brilliant.

There's nothing really interesting about the code though. I just follow the CodeMirror API, add some keybindings, give it some styling, and that's it.

It's not perfect though. First of all, the JS payload is pretty big, making CSS loads much slower, resulting in a brief moment of a plain HTML layout. Also, not being able to indent the code using the `Tab` key is kind of annoying, but I think I can get used to it.

**Update:** I just added a loading screen that will only disappear when everything is loaded. This should look better while the CSS is loading.