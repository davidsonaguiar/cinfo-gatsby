import * as React from "react"
import Layout from "./components/layout"
import Title from "./components/title"
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image"
import { graphql, PageProps } from "gatsby"
import ViewNoticeCard from "./components/notice-card"

interface NoticeViewQuery {
  allMdx: {
    nodes: {
      frontmatter: {
        titulo: string;
        imagem_apresentacao: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          }
        }
        descricao_da_noticia: string;
      }
    }[]
  }
}

interface Props extends PageProps {
  data: NoticeViewQuery
}

export default function Home({ data }: Props) {

  const nodes = data.allMdx.nodes

  const noticeViews = nodes.map((node: any) => {
    return (
      <ViewNoticeCard 
        slug={node.id} 
        title={node.frontmatter.titulo}
        image={node.frontmatter.imagem_apresentacao.childImageSharp.gatsbyImageData}
        description={node.frontmatter.descricao_da_noticia}
      />
    )
  });

  return (
    <>
      <Layout>
        <div className="my-3 text-center">
          <Title>Coordenação de Informática - IFAL</Title>
        </div>
        <p className="mx-auto py-4 text-center">
          Nostrud ipsum cupidatat dolor in sit dolor. Dolor aute nulla Lorem occaecat nisi eu eu duis. Irure exercitation voluptate minim aliqua occaecat ea officia. Reprehenderit incididunt duis laboris fugiat tempor reprehenderit laborum aliquip velit dolore quis ex enim. Amet ut elit occaecat adipisicing nulla aliquip ut non.
          Fugiat commodo et et dolor laboris. Lorem nulla ex consequat proident nostrud sint qui. Et sit anim pariatur ut veniam non adipisicing culpa ut voluptate. Dolor duis ut elit officia dolor Lorem ipsum aliqua est aute duis voluptate nulla.
          Pariatur deserunt et qui eiusmod nisi cupidatat. Quis in aliqua eu id pariatur non id ex est sit. Culpa aliqua excepteur consectetur ad. Eiusmod dolor aliqua minim veniam aliquip deserunt excepteur consectetur id aute id.
          Minim sit voluptate amet est tempor eu.
        </p>
        <div className="py-6 flex justify-center items-center gap-12">
          <StaticImage 
            src="../images/logo02.png" 
            width={250} 
            alt="logo da CINFO" 
            className="object-cover"
          />
          <a href="https://www2.ifal.edu.br/">
            <StaticImage 
              src="../images/logo-ifal.png" 
              width={250} 
              alt="logo do IFAL" 
            />
          </a>
        </div>
        <div className="w-full p-6 bg-sky-950 border border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticeViews}
        </div>
      </Layout>
    </>
  )
}


export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {model: {eq: "notice"}}}) {
      nodes {
        frontmatter {
          titulo
          imagem_apresentacao {
            childImageSharp {
              gatsbyImageData
            }
          }
          descricao_da_noticia
          slug
        }
        id
      }
    }
  }
`


export function Head() {
  return <title>Home Page</title>
}
