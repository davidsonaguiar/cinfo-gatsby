import { Tag } from "./tag";

export type NoticeView = {
    id: string
    slug: string;
    title: string;
    descricaoDaNoticia: string;
    imagemDeApresentacao: {
      url: string;
    };
    descricaoDaImagemDeApresentacao: string;
    tags: Tag[];
  }