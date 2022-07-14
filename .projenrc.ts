import { RehashlyJsiiProject } from '@rehashly/projen-jsii'

const project = new RehashlyJsiiProject({
  author: 'Haitham Gad',
  authorAddress: 'haitham@rehashly.com',
  defaultReleaseBranch: 'main',
  description: "Rehashly's opinionated projen TypeScript project type.",
  devDeps: ['@rehashly/projen-jsii'],
  keywords: ['projen', 'typescript'],
  name: 'projen-typescript',
  packageName: '@rehashly/projen-typescript',
  repositoryUrl: 'https://github.com/rehashly/projen-typescript.git',
})

project.synth()
