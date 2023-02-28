# Problem

I've created a basic backend integration setup. However during development, images in App.tsx aren't working. They're being fetched from the current port (8000), where they don't exist.

`http://localhost:8000/dist/vite.svg`
`http://localhost:8000/assets/react.svg`

For the Vite logo, the src is set to `dist/vite.svg` to make this work for production.

I can't tell if this is a bug or how this would be solved with config.

This bug was reported earlier here by @Zehua-Chen and @jessarcher [https://github.com/vitejs/vite/issues/7778](in this issue), but I could not find an answer on how to actually resolve this problem.

## To test development:

- `yarn backend-mock-dev`
- `yarn dev`
- View `localhost:8000`

## To test production:

- `yarn backend-mock-prd`
- View `localhost:8000`
