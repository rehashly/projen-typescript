import { javascript, typescript } from 'projen'

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

type RehashlyTypeScriptProjectOptions = Optional<
  typescript.TypeScriptProjectOptions,
  'defaultReleaseBranch'
>

/**
 * Create a rehashly TypeScript project.
 *
 * @pjid rehashly-typescript-project
 */
export class RehashlyTypeScriptProject extends typescript.TypeScriptProject {
  constructor(options: RehashlyTypeScriptProjectOptions) {
    super({
      ...options,
      authorOrganization: true,
      defaultReleaseBranch: 'main',
      npmRegistryUrl: 'https://npm.pkg.github.com',
      packageManager: javascript.NodePackageManager.NPM,
      prettier: true,
      prettierOptions: {
        settings: {
          singleQuote: true,
          semi: false,
        },
      },
      projenrcTs: true,
      deps: ['projen'],
      peerDeps: ['projen'],
    })
  }
}
