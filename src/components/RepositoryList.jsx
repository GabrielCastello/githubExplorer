const RepositoryName = 'unform1'

export function RepositoryList () {
  return (
    <section className="repositoryList">
      <h1>Repos List</h1>
      <ul>
        <li>
          <strong>{RepositoryName}</strong>
          <p> Forms in React</p>
          <a href="">Access Repo</a>
        </li>
      </ul>
    </section>
  )
}