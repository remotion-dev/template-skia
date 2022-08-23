# Remotion video

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <img src="https://github.com/remotion-dev/logo/raw/main/withtitle/element-0.png">
  </a>
</p>

Welcome to your Remotion project!

## Commands

**Install Dependencies**

```console
npm install
```

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Upgrade Remotion**

```console
npm run upgrade
```

## Using server-side rendering

This template uses a [custom Webpack override](https://www.remotion.dev/docs/webpack). If you are using server-side rendering, you need to import `enableSkia` from `@remotion/skia/enable` and pass it to [`bundle()`](https://www.remotion.dev/docs/bundle) (if using SSR) and [`deploySite()`](https://www.remotion.dev/docs/lambda/deploysite) (if using Lambda):

```ts
bundle(entry, () => undefined, {
	webpackOverride: (config) => enableSkia(config),
});
// or
deploySite({
	webpackOverride: (config) => enableSkia(config),
});
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help [on our Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
