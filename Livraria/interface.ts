interface ILivro {
  titulo: string;
  ano: number;
  isbn: string;
  preco: number;
  autor: AutorLivro;
  editora: Editora;
  estoque: number;

  exibirLivro(): void;
  atualizarLivro(estoque: number): void;
}

interface IAutor {
  nome: string;
  idade: number;
  cpf: string;
  sexo: string;

  exibirAutor(): void;
}

interface IEditora {
  nome: string;
  telefone: string;
  email: string;
  cnpj: string;

  exibirEditora(): void;
}

class AutorLivro implements IAutor {
  nome: string;
  idade: number;
  cpf: string;
  sexo: string;

  constructor(nome: string, idade: number, cpf: string, sexo: string) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.sexo = sexo;
  }

  exibirAutor(): void {
    console.log(`Informações do Autor:`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Cpf: ${this.cpf}`);
    console.log(`Sexo: ${this.sexo}`);
  }
}

class Editora implements IEditora {
  nome: string;
  telefone: string;
  email: string;
  cnpj: string;

  constructor(nome: string, telefone: string, email: string, cnpj: string) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.cnpj = cnpj;
  }

  exibirEditora(): void {
    console.log(`Informações da Editora:`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Telefone: ${this.telefone}`);
    console.log(`Email: ${this.email}`);
    console.log(`CNPJ: ${this.cnpj}`);
  }
}

class LivroFisico implements ILivro {
  titulo: string;
  ano: number;
  isbn: string;
  preco: number;
  autor: AutorLivro;
  editora: Editora;
  estoque: number;

  constructor(titulo: string, ano: number, isbn: string, preco: number, autor: AutorLivro, editora: Editora, estoque: number) {
    this.titulo = titulo;
    this.ano = ano;
    this.isbn = isbn;
    this.preco = preco;
    this.autor = autor;
    this.editora = editora;
    this.estoque = estoque;
  }

  exibirLivro(): void {
    console.log(`Livro Físico: ${this.titulo} `);
    console.log(`Ano: ${this.ano} `);
    console.log(`ISBN: ${this.isbn}`);
    console.log(`Preço: R$${this.preco}`);
    console.log(`Estoque: ${this.estoque}`);
    this.autor.exibirAutor();
    this.editora.exibirEditora();
  }

  atualizarLivro(estoque: number): void {
    this.estoque = estoque;
    console.log(`Estoque atualizado para ${this.estoque} unidades.`);
  }
}

class Ebook implements ILivro {
  titulo: string;
  ano: number;
  isbn: string;
  preco: number;
  autor: AutorLivro;
  editora: Editora;
  estoque: number;
  private tam_arquivo: number;

  constructor(titulo: string, ano: number, isbn: string, preco: number, autor: AutorLivro, editora: Editora, estoque: number, tam_arquivo: number  ) {
    this.titulo = titulo;
    this.ano = ano;
    this.isbn = isbn;
    this.preco = preco;
    this.autor = autor;
    this.editora = editora;
    this.estoque = estoque;
    this.tam_arquivo = tam_arquivo;
  }

  exibirLivro(): void {
    console.log(`Ebook: ${this.titulo}`);
    console.log(`Ano: ${this.ano} `);
    console.log(`ISBN: ${this.isbn}`);
    console.log(`Preço: R$${this.preco}`);
    console.log(`Estoque: ${this.estoque}`);
    console.log(`Tamanho do Arquivo: ${this.tam_arquivo}MB`);
    this.autor.exibirAutor();
    this.editora.exibirEditora();
  }

  atualizarLivro(estoque: number): void {
    this.estoque = estoque;
    console.log(`Estoque foi atualizado! Agora ele possui ${this.estoque} unidades.`);
  }
}

class Livraria {
  private livros: ILivro[] = [];

  adicionarLivro(livro: ILivro): void {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado à livraria.`);
  }

  excluirLivro(isbn: string): void {
      for (let i = 0; i < this.livros.length; i++) {
        if (this.livros[i].isbn === isbn) {
          this.livros.splice(i, 1);
          console.log(`Livro com ISBN ${isbn} removido da livraria.`);
          return;
        }
      }
  
    console.log(`Livro com ISBN ${isbn} não encontrado.`);
  }

  venderLivro(isbn: string): void {
      for (let i = 0; i < this.livros.length; i++) {
        if (this.livros[i].isbn === isbn) {
          if (this.livros[i].estoque > 0) {
            this.livros[i].estoque -= 1;
            console.log(`Venda realizada: "${this.livros[i].titulo}" `);
          } else {
            console.log(`Livro "${this.livros[i].titulo}" está fora de estoque!`);
          }
          return;
        }
      }
    console.log(`Livro não encontrado.`);
}

}

const autor1 = new AutorLivro("Machado de Assis", 55, "123.456.789-00", "M");
const autor2 = new AutorLivro("Clarice Lispector", 40, "987.654.321-00", "F");

const editora1 = new Editora("Companhia das Letras", "11 99999-9999", "emmylinda@gmail.com", "12.345.678/0001-99");

const livro1 = new LivroFisico("Dom Casmurro", 1899, "1111", 49.90, autor1, editora1, 5);
const ebook1 = new Ebook("A Hora da Estrela", 1977, "2222", 19.90, autor2, editora1, 10, 5);

const livraria = new Livraria();
livraria.adicionarLivro(livro1);
livraria.adicionarLivro(ebook1);

livraria.venderLivro("1111");
livraria.venderLivro("1111");
livraria.venderLivro("2222");
