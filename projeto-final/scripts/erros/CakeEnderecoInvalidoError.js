// export function CakeEnderecoInvalidoError(endereco) {
//     if (!this instanceof CakeEnderecoInvalidoError) {
//         return new CakeEnderecoInvalidoError(endereco);
//     }

//     this.endereco = endereco;
//     this.message = `Não foi possível carregar o endereço: ${endereco}`;
// }

// Herança com funções contrutoras - ES5
// CakeEnderecoInvalidoError.prototype = Object.create(Error.prototype);

/* Classe de Erro Customizado */
export class CakeEnderecoInvalidoError extends Error {
    constructor(endereco) {
        super();
        this.endereco = endereco;
        this.message = `Não foi possível carregar o endereço: ${endereco}`;
    }
    toString() {
        return this.message + "\n\n" + this.stack;
    }
}