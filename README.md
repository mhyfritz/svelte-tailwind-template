# Svelte & Tailwind CSS Template

This is a project template for [Svelte](https://svelte.dev) and [Tailwind CSS](https://github.com/tailwindcss/tailwindcss) apps.
It lives at https://github.com/mhyfritz/svelte-tailwind-template and is a fork from
[the official Svelte project template](https://github.com/sveltejs/template)—kudos to the original authors!

## Content

- [Svelte](https://github.com/sveltejs/svelte) v3 with a [Rollup](https://github.com/rollup/rollup) setup
- [Tailwind CSS](https://github.com/tailwindcss/tailwindcss) v1.4
  - [PostCSS](https://github.com/postcss/postcss) setup with [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [Purging of unused CSS](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css)
  - _optional_ [Tailwind UI setup](https://tailwindui.com/documentation) that adds
    - `@tailwindcss/ui` plugin (and in extension [`@tailwindcss/custom-forms`](https://github.com/tailwindcss/custom-forms))
    - [Inter](https://rsms.me/inter/) font family

## Installation

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit mhyfritz/svelte-tailwind-template svelte-tailwind-app

# for the Tailwind UI setup:
# npx degit mhyfritz/svelte-tailwind-template#tailwind-ui svelte-tailwind-app

cd svelte-tailwind-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-tailwind-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
