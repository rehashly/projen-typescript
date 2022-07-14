import { RehashlyJsiiProject } from '@rehashly/projen-jsii'
const project = new RehashlyJsiiProject({
  author: 'Haitham Gad',
  authorAddress: 'haitham@rehashly.com',
  defaultReleaseBranch: 'main',
  devDeps: ['@rehashly/projen-jsii'],
  name: 'projen-typescript',
  packageName: '@rehashly/projen-typescript',
  repositoryUrl: 'https://github.com/rehashly/projen-typescript.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
})
project.synth()
