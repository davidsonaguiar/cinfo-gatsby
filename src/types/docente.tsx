export type Docente = {
    id: string;
    nome: string;
    email: string;
    curriculoLattes: string;
    sitePessoal: string;
    areasDeAtuacao: string[];
    ativo: boolean;
    avatar: {
      url: string;
    };
    descricaoDoAvatar: string;
  }