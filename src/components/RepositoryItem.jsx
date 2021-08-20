export function RepositoryItem (props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default name'}</strong>
      <p> { props.repository?.description ?? 'Defaul description'}</p>
      <a href={props.repository?.link ?? ""} >Access Repo</a>
    </li>
  )
}