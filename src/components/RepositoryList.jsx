import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const githubApiUrl = 'https://api.github.com/users/gabrielcastello/repos'

export function RepositoryList () {

  const [repositories, setRepositories] = useState([])

  // useEffect(() => {
  //   fetch(`${githubApiUrl}`)
  //     .then(response => response.json())
  //     .then(data => setRepositories(data))
  // }, []/* <-- Variables being watched */)

  useEffect(async () => {
    try {
      const response = await fetch(githubApiUrl)
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }
      const repositories = await response.json()
      setRepositories(repositories)
    } catch (e) {
      console.error(e.message);

    }
  },[])


  return (
    <section className="repositoryList">
      <h1>Repos List</h1>
      <ul>
        {
          repositories.map(repo => (<RepositoryItem key={repo.id} repository={repo} />))
        }
      </ul>
    </section>
  )
}