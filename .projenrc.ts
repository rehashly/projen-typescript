import { javascript, typescript } from 'projen'

const project = new typescript.TypeScriptProject({
  authorName: 'Haitham Gad',
  authorEmail: 'haitham@rehashly.com',
  authorOrganization: true,
  defaultReleaseBranch: 'main',
  description: "Rehashly's opinionated projen typescript project type.",
  name: 'rehashly-projen-typescript',
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageManager: javascript.NodePackageManager.NPM,
  packageName: '@rehashly/projen-typescript',
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

project.synth()
