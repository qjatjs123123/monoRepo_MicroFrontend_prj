declare module 'vite-plugin-eslint' {
  import { Plugin } from 'vite';
  interface EslintPluginOptions {
    failOnError?: boolean;
    failOnWarning?: boolean;
    lintOnStart?: boolean;
    cache?: boolean;
    include?: string | string[];
    exclude?: string | string[];
  }
  function eslintPlugin(options?: EslintPluginOptions): Plugin;
  export default eslintPlugin;
}
