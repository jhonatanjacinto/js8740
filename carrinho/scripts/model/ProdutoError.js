export class ProdutoError extends Error {
    constructor(mensagem) {
        super();
        this.message = mensagem;
    }
    toString() {
        return this.message;
    }
}