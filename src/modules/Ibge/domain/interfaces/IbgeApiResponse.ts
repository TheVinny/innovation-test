export interface IbgeApiResponse {
  id: number;
  nome: string;
  microrregiao: {
    id: number;
    nome: string;
    mesorregiao: {
      id: number;
      nome: string;
      UF: {
        id: 33;
        sigla: string;
        nome: string;
        regiao: {
          id: 3;
          sigla: string;
          nome: string;
        };
      };
    };
  };
  string: {
    id: number;
    nome: string;
    string: {
      id: number;
      nome: string;
      UF: {
        id: number;
        sigla: string;
        nome: string;
        regiao: {
          id: number;
          sigla: string;
          nome: string;
        };
      };
    };
  };
}
