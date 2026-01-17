# vite-plugin-image-srcset

Simple Vite plugin to generate `srcset` attributes for responsive images.

Import a single image and get `src` + `srcSet` for 1x/2x/3x pixel densities.

## Installation

```bash
npm install -D vite-plugin-image-srcset
# or
pnpm add -D vite-plugin-image-srcset
```

## Setup

### 1. Add plugin to Vite config

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import { srcSetPlugin } from 'vite-plugin-image-srcset';

export default defineConfig({
  plugins: [srcSetPlugin()],
});
```

### 2. Add types (TypeScript)

Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["vite-plugin-image-srcset/client"]
  }
}
```

Or add a reference in your `vite-env.d.ts`:

```ts
  /// <reference types="vite/client" />
+ /// <reference types="vite-plugin-image-srcset/client" />
```

## Usage

### File structure

The plugin expects images with `@2x` and `@3x` suffixes:

```
assets/
  icon.png      # 1x (base)
  icon@2x.png   # 2x
  icon@3x.png   # 3x
```

### Import with `?srcset` query

```tsx
import icon from './assets/icon.png?srcset';

// icon = { src: '/assets/icon.png', srcSet: '/assets/icon.png 1x, /assets/icon@2x.png 2x, /assets/icon@3x.png 3x' }
```

### React example

```tsx
import icon from './assets/icon.png?srcset';

function App() {
  return <img {...icon} alt="Icon" />;
}
```

### HTML example

```ts
import icon from './assets/icon.png?srcset';

document.body.innerHTML = `<img src="${icon.src}" srcset="${icon.srcSet}" alt="Icon" />`;
```

## API

The plugin transforms imports with `?srcset` query into an object:

```ts
interface ImageSrcSet {
  src: string; // URL to 1x image
  srcSet: string; // srcset string: "url1 1x, url2 2x, url3 3x"
}
```

## Supported formats

- `.png`
- `.jpg`

## License

MIT
