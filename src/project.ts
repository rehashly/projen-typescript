import { basename, resolve } from 'path'
import { javascript, typescript } from 'projen'

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param {...any} objects - Objects to merge
 *
 * @returns {any} New object with merged key/values
 */
function merge(...objects: any[]): any {
  const isObject = (obj: any) => obj && typeof obj === 'object'

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key]
      const oVal = obj[key]

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal)
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = merge(pVal, oVal)
      } else {
        prev[key] = oVal
      }
    })

    return prev
  }, {})
}

export interface RehashlyTypeScriptProjectOptions
  extends typescript.TypeScriptProjectOptions {}

/**
 * Create a rehashly TypeScript project.
 *
 * @pjid typescript-project
 */
export class RehashlyTypeScriptProject extends typescript.TypeScriptProject {
  constructor(options: RehashlyTypeScriptProjectOptions) {
    const projectName = basename(resolve('.'))
    const tsconfig = {
      compilerOptions: {
        incremental: true,
        forceConsistentCasingInFileNames: true,
        typeRoots: ['./node_modules/@types', './src/types'],
        baseUrl: './src',
      },
    }

    super(
      merge(
        {
          authorOrganization: true,
          copyrightOwner: 'Rehashly, LLC',
          copyrightPeriod: new Date().getFullYear().toString(),
          defaultReleaseBranch: 'main',
          gitignore: ['.env*'],
          license: 'MIT',
          name: projectName,
          npmAccess: javascript.NpmAccess.PUBLIC,
          packageManager: javascript.NodePackageManager.NPM,
          packageName: `@rehashly/${projectName}`,
          prettier: true,
          prettierOptions: {
            settings: {
              singleQuote: true,
              semi: false,
            },
          },
          projenrcTs: true,
          tsconfig,
          tsconfigDev: tsconfig,
          deps: ['projen'],
          peerDeps: ['projen'],
        },
        options
      )
    )
  }
}
