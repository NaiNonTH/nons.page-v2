---
title: This Website
scripts:
  - /site-info.js
---

## Site Info

**Note**: This site info only reloads on a new browser session. Once it's loaded on the current session, it will be cached using `sessionStorage`.

<dl class="row" id="site-info">
  <div>
    <dt>Updates</dt>
    <dd data-name="updates"><i class="shh">loading...</i></dd>
  </div>
  <div>
    <dt>Followers</dt>
    <dd data-name="followers"><i class="shh">loading...</i></dd>
  </div>
  <div>
    <dt>Views</dt>
    <dd data-name="views"><i class="shh">loading...</i></dd>
  </div>
  <div>
    <dt>Created at</dt>
    <dd data-name="created_at"><i class="shh">loading...</i></dd>
  </div>
  <div>
    <dt>Updated at</dt>
    <dd data-name="updated_at"><i class="shh">loading...</i></dd>
  </div>
</dl>

## Site Goals

When I made this website in the first place, I wanted my website to be small, simple, and fast, without crazy features like the others that I found on the internet. Hence, the tech stack used behind the scenes also complies with the following:

What I Code Is What I Get.
  ~ This means that I won't pick any modern JavaScript frameworks (even [Astro](https://astro.build)) for this website, as it outputs other scripts or HTML attributes outside of what I code.

Platform Independent.
  ~ This means that whenever I want to move from one web hosting service to another, it shouldn't be a hassle. Consequently, any tools that require me to get locked in won't be used here. This website also shouldn't include a database, which can make things harder to move.
  
Easy Maintenance.
  ~ This means that even if I forget about this website, it shouldn't fail or be at risk of vulnerabilities that require regular software updates in order to fix. As a result, this website shouldn't have any back-end or database.

With everything that I've said, this means that traditional SSG *(Static Site Generator)* is the best way to create my website.

This website is generated using [Lume](https://lume.land), a static site generator powered by [Deno](https://deno.com), and hosted on [Nekoweb](https://nekoweb.org), a free static web hosting service ~~for 😺cats~~. No bundlers are used.