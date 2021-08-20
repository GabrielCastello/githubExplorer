import { RepositoryItem } from "./RepositoryItem"

const repository = {
  name: 'nnform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList () {
  return (
    <section className="repositoryList">
      <h1>Repos List</h1>
      <ul>
        <RepositoryItem
          repository={repository}/>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}