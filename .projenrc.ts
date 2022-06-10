import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Haitham Gad',
  authorAddress: 'haitham@rehashly.com',
  defaultReleaseBranch: 'main',
  name: 'projen-github-typescript',
  packageManager: javascript.NodePackageManager.NPM,
  packageName: '@rehashly/projen-github-typescript',
  description: 'Rehashly\'s opinionated projen GitHub typescript project type.',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/rehashly/projen-github-typescript.git',
  deps: ['projen'],
  devDeps: ['fs-extra', '@types/fs-extra', 'glob'],
  peerDeps: ['projen'],
});
project.synth();
