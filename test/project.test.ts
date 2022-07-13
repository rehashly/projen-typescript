import { RehashlyTypeScriptProject } from '../src'

test('RehashlyTypeScriptProject', () => {
  const project = new RehashlyTypeScriptProject({
    name: 'example-typescript-project',
    authorName: 'Author',
    authorEmail: 'author@example.com',
    description: 'test project',
  })

  expect(project.prettier).toBeTruthy()
})
