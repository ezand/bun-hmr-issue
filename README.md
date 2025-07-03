# Bun HMR Issue

Small project showing hot-reloading issue in workspaces project.

## Start dev server

```bash
cd apps/app
bun dev
```

## Make changes

- First make changes to the component ui lib in `packages/form/src/button/button.tsx`. It will hot-load correctly multiple times ✅
- Then make changes to the component in the app, `apps/app/src/App.tsx`. It will hot-reload correctly multiple times ✅
- Then make a change to the `Button` component in the lib again. It will not hot-reload anymore ⛔️

## Screencast

I've also recorded [screencast](SCREENCAST.mp4) showing the issue
