import * as React from "react"
import { HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Error</h1>
      <p>Recurso não encontrado!</p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
