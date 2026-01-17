declare module '*.png?srcset' {
  type ImageSrcSet = import('./dist/index').ImageSrcSet;
  const srcset: ImageSrcSet;

  export default srcset;
}

declare module '*.jpg?srcset' {
  type ImageSrcSet = import('./dist/index').ImageSrcSet;
  const srcset: ImageSrcSet;

  export default srcset;
}
