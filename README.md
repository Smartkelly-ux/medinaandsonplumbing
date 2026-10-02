# Medina & Son Plumbing Supply

## Run locally

**Prerequisite:** Node.js 20.19+ or 22.12+.

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the local development server:
   ```sh
   npm run dev
   ```

On Windows, if the project folder path contains `&`, append
`--script-shell=powershell.exe` to `npm run` commands to avoid command-shell
parsing issues (for example, `npm run dev --script-shell=powershell.exe`).

## Build and host

Create a production build with:

```sh
npm run build
```

Upload the contents of `dist/` to any static web host. The build has no server,
environment variables, or provider-specific runtime requirements. Relative
asset paths allow deployment from a domain root or a subdirectory.

To test the production build locally:

```sh
npm run preview
```
