interface RepositoryItemProps{
  repository: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem (props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default name'}</strong>
      <p> {props.repository?.description ?? 'Defaul description'}</p>
      <a href={props.repository?.html_url ?? ""} >Access Repo</a>
    </li>
  )
}