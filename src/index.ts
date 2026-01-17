import path from 'node:path';
import { type Plugin } from 'vite';

interface ImageSrcSet {
  srcSet: string;
  src: string;
}

function srcSetPlugin(): Plugin {
  return {
    name: 'vite-plugin-image-srcset',
    enforce: 'pre',
    transform(_, id) {
      if (!id.includes('?srcset')) {
        return null;
      }

      const [filePath] = id.split('?');
      const ext = path.extname(filePath);
      const baseName = path.basename(filePath, ext);
      const dir = path.dirname(filePath);

      const x1 = filePath;
      const x2 = `${dir}/${baseName}@2x${ext}`;
      const x3 = `${dir}/${baseName}@3x${ext}`;

      return {
        code: `
          import x1 from '${x1}?url';
          import x2 from '${x2}?url';
          import x3 from '${x3}?url';

          export default {
            srcSet: \`\${x1} 1x, \${x2} 2x, \${x3} 3x\`,
            src: x1,
          };
        `,
        map: null,
      };
    },
  };
}

export { srcSetPlugin };
export type { ImageSrcSet };
