export function RepositoryItem (props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default name'}</strong>
      <p> { props.repository?.description ?? 'Defaul description'}</p>
      <a href={props.repository?.html_url ?? ""} >Access Repo</a>
    </li>
  )
}