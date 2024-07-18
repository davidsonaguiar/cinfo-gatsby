import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";
import Markdown from "markdown-to-jsx";

interface NoticePageQuery {
    mdx: {
        body: string;
        frontmatter: {
            titulo: string;
            descricao_da_noticia: string;
            slug: string;
            descricao_imagem: string;
            imagem_apresentacao: {
                childImageSharp: {
                    gatsbyImageData: any;
                }
            }
        }
    }
}

interface Props extends PageProps {
    data: NoticePageQuery
}

export default function NoticePage({ data }: Props) {
    
    const body = data.mdx.body;
    const frontmatter = data.mdx.frontmatter;


    return (
        <Layout>
            <article className="max-w-3xl mx-auto">
                <div className="my-4">
                    <Title>{frontmatter.titulo}</Title>
                    <p>{frontmatter.descricao_da_noticia}</p>
                    <GatsbyImage 
                        image={frontmatter.imagem_apresentacao.childImageSharp.gatsbyImageData} 
                        alt={frontmatter?.descricao_imagem}
                        className="my-3 w-full"
                    />
                </div>
                <Markdown>{body}</Markdown>
            </article>
        </Layout>
    )
}

export const NoticePageQuery = graphql`
    query MyQuery($id: String) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                titulo
                descricao_da_noticia
                slug
                descricao_imagem
                imagem_apresentacao {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`