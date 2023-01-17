declare module '*.svg' {
  const content: unknown;
  export default content;
}

declare module '*.css' {
  const content: unknown;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
