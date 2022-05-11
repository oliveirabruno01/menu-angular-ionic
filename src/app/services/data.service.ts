import { Injectable } from '@angular/core';

const images_path = './assets/images/itens/';


export interface CategoriaObject {
  nome: string;
  thumbnail_src: string;
}

export interface Produto {
  nome: string;
  thumbnail_src: string;
  preco: string;
  descricao: string;
}


export interface ProdutosPorCategoria {
  nome: string;
  categoria: Produto[];
}


@Injectable({
  providedIn: 'root'
})

export class DataService {
  public categorias: CategoriaObject[] = [
    {
      nome: 'lanches',
      thumbnail_src: './assets/images/thumbnails/hamburguer.png',
    },
  
    {
      nome: 'entradas',
      thumbnail_src: './assets/images/thumbnails/prato-entrada.png',
    },
  
    {
      nome: 'refeições',
      thumbnail_src: './assets/images/thumbnails/refeicao.png',
    },
  
    {
      nome: 'sobremesas',
      thumbnail_src: './assets/images/thumbnails/sobremesa.png',
    },
  
    {
      nome: 'bebidas',
      thumbnail_src: './assets/images/thumbnails/bebida.png',
    }
  ];

  public itens: ProdutosPorCategoria[] = [
    {
      nome: "lanches",
      categoria: [
      {
        nome: 'Misto-Quente',
        thumbnail_src: images_path + 'lanches/misto-quente.png',
        preco: "R$12,00",
        descricao: "Misto-quente à moda do chef com presunto defumado, queijo Suíço e ervas finas.",
      },
      {
        nome: 'X-salada casal',
        thumbnail_src: images_path + 'lanches/x-tudo-casal.png',
        preco: "R$12,00",
        descricao: "Combo com dois x-tudo's e uma porção de fritas.",
      },
      {
        nome: 'Pastel',
        thumbnail_src: images_path + 'lanches/pastel.png',
        preco: "R$12,00",
        descricao: "Pastel frito na hora, vários sabores. Linha gourmet.",
      },
      {
        nome: 'Coxinha',
        thumbnail_src: images_path + 'lanches/coxinha.png',
        preco: "R$12,00",
        descricao: "Coxinha de 1kg com frango temperado e catupiry.",
      },
      {
        nome: 'Combo solo',
        thumbnail_src: images_path + 'lanches/combo-solo.png',
        preco: "R$12,00",
        descricao: "Combo com um x-salada, uma porção de fritas e ketchup.",
      },
      {
        nome: 'Vegano',
        thumbnail_src: images_path + 'lanches/vegano.png',
        preco: "R$12,00",
        descricao: "Hamburguer vegano de cenoura com salada e pão de brioche.",
      }]
    },
    {
      nome: "entradas",
      categoria: [
      {
        nome: 'Bruschetta Vegetariana',
        thumbnail_src: images_path + 'entradas/bruschetta-vegetariana.png',
        preco: "R$12,00",
        descricao: "Bruschetta vegetariana à moda do chef.",
      },
      {
        nome: 'Creme de Mandioquinha',
        thumbnail_src: images_path + 'entradas/creme-de-mandioquinha.png',
        preco: "R$12,00",
        descricao: "Creme de mandioquinha com ervas e pão de centeio.",
      },
      {
        nome: 'Guacamole com chips',
        thumbnail_src: images_path + 'entradas/guacamole-com-chips.png',
        preco: "R$12,00",
        descricao: "Guacamole de ervas com chips de batata com pimenta jalapeno.",
      },
      {
        nome: 'Salada Caprese',
        thumbnail_src: images_path + 'entradas/salada-caprese.png',
        preco: "R$12,00",
        descricao: "Salada Caprese caprichada.",
      },
      {
        nome: 'Salada de Polvo',
        thumbnail_src: images_path + 'entradas/salada-de-polvo.png',
        preco: "R$12,00",
        descricao: "Salada de polvo.",
      },
      {
        nome: 'Vol-al-vent de Camarão',
        thumbnail_src: images_path + 'entradas/vol-al-vent-camarao.png',
        preco: "R$12,00",
        descricao: "Vol-al-vent de camarão.",
      },]
    },
    {
      nome: "refeições",
      categoria: [
      {
        nome: 'Bacalhau com broa',
        thumbnail_src: images_path + 'refeicoes/bacalhau-com-broa-e-molho-trufado.png',
        preco: "R$12,00",
        descricao: "Bacalhau com broa esfarelada ao molho trufado.",
      },
      {
        nome: 'Ovos florentine',
        thumbnail_src: images_path + 'refeicoes/ovos-florentine.png',
        preco: "R$12,00",
        descricao: "Ovos florentine com tortilha de sequilho.",
      },
      {
        nome: 'Risoto de cogumelos',
        thumbnail_src: images_path + 'refeicoes/risoto-de-cogumelos.png',
        preco: "R$12,00",
        descricao: "Risoto de camarão moranga.",
      },
      {
        nome: 'Schinitzel de porco',
        thumbnail_src: images_path + 'refeicoes/schinitzel-de-porco.png',
        preco: "R$12,00",
        descricao: "Schinitzel de costela de porco defumada.",
      },
      {
        nome: 'Strogonoff de cogumelos',
        thumbnail_src: images_path + 'refeicoes/strogonoff-de-cogumelos.png',
        preco: "R$12,00",
        descricao: "Strogonoff de cogumelos da mamãe do chef.",
      },
      {
        nome: 'Strogonoff de frango',
        thumbnail_src: images_path + 'refeicoes/strogonoff-de-frango.png',
        preco: "R$12,00",
        descricao: "Strogonoff de frango com creme de lei e molho au dent"
      },]
    },
    {
      nome: "sobremesas",
      categoria: [
      {
        nome: 'Creme Bruleé',
        thumbnail_src: images_path + 'sobremesas/creme-brulee.png',
        preco: "R$12,00",
        descricao: "Creme Bruleé cremoso.",
      },
      {
        nome: 'Macarons de Vanilla',
        thumbnail_src: images_path + 'sobremesas/macarons-de-vanilla.png',
        preco: "R$12,00",
        descricao: "Macarons de vanilla de sabores variados.",
      },
      {
        nome: 'Manjar branco',
        thumbnail_src: images_path + 'sobremesas/manjar-branco.png',
        preco: "R$12,00",
        descricao: "Manjar branco com calda de ameixas secas e ameixas secas.",
      },
      {
        nome: 'Mosuse de chocolate',
        thumbnail_src: images_path + 'sobremesas/mousse-de-chocolate.png',
        preco: "R$12,00",
        descricao: "Mousse de chocolate amargo 80% cacau 20% monatina.",
      },
      {
        nome: 'Salada de frutas',
        thumbnail_src: images_path + 'sobremesas/salada-de-frutas.png',
        preco: "R$12,00",
        descricao: "Salada de frutas com mel. Contém frutas.",
      },
      {
        nome: 'Tiramissu',
        thumbnail_src: images_path + 'sobremesas/tiramissu.png',
        preco: "R$12,00",
        descricao: "Tiramissu",
      },]
    },
    {
      nome: "bebidas",
      categoria: [
      {
        nome: 'Chateau Baret',
        thumbnail_src: images_path + 'bebidas/chateau-baret.png',
        preco: "R$12,00",
        descricao: "Vinho tinto Chateau Baret.",
      },
      {
        nome: 'Chocolate quente',
        thumbnail_src: images_path + 'bebidas/chocolate-quente-organico.png',
        preco: "R$12,00",
        descricao: "Chocolate quente com marshmallows frios."
      },
      {
        nome: 'Martini',
        thumbnail_src: images_path + 'bebidas/martini-cocktail.png',
        preco: "R$12,00",
        descricao: "Cocktail Martini com azeitonas",
      },
      {
        nome: 'Moet & Chandom',
        thumbnail_src: images_path + 'bebidas/moet-chandom.png',
        preco: "R$12,00",
        descricao: "Champagne Moet & Chandom."
      },
      {
        nome: 'Moscatel Rosé',
        thumbnail_src: images_path + 'bebidas/moscatel-rose.png',
        preco: "R$12,00",
        descricao: "Vinho Moscatel Rosé."
      },
      {
        nome: 'Vinho Coté des Roses',
        thumbnail_src: images_path + 'bebidas/vinho-cote-des-roses.png',
        preco: "R$12,00",
        descricao: "Vinho Coté des Roses. Safra de 2022."
      },]
    },
    {
      nome: "especial",
      categoria: [
        {
          nome: 'Promocional',
          thumbnail_src: images_path + 'especial/promocional.png',
          preco: "R$12,00",
          descricao: "Promoção do dia com entrada de guacamole e chips, risoto de cogumelos como entrada, e um creme brulée de sobremesa. ",
        },
      ]
    }
  ];

  constructor() { }

  public getCategoriasList(): CategoriaObject[] {
    return this.categorias;
  }

  public getCategoriaByNome(nome: string): CategoriaObject {
    return this.categorias[nome]!;
  }

  public getCategoriaItem = (nome : string) => this.itens.find(item => item.nome === nome);

  public getProdutos = () => {
    var all_itens: Produto[] = [];
    this.itens.forEach((categoria) => {all_itens = all_itens.concat(categoria.categoria)});
    return all_itens;
  }

  public getCategoriaProdutos = (nome: string) => {
    const final_itens: ProdutosPorCategoria = this.getCategoriaItem(nome)!;
    return final_itens.categoria;
  }

  public getProduto = (nome: string) => this.getProdutos().find(m => m.nome === nome);
}
