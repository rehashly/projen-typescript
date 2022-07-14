import { basename, resolve } from 'path'
import { RehashlyTypeScriptProject } from '../src'

test('project name is set correctly', () => {
  const project = new RehashlyTypeScriptProject({
    name: 'projen-typescript',
    authorName: 'Some Author',
    defaultReleaseBranch: 'main',
  })

  expect(project.name).toBe(basename(resolve('.')))
})
