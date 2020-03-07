let aceitouTermosAntes = localStorage.getItem('aceitouTermos');

if (aceitouTermosAntes === null) 
{
    let nome = prompt('Olá, qual o seu nome?');
    let aceitouOsTermos = confirm(`
        Olá, ${nome}!
        Antes de usar o Cake, precisa que você aceite nossos termos de uso:
        1) Você aceita que este software foi feito no curso de JavaScript;
    `);

    if (!aceitouOsTermos) {
        alert(nome + ', para continuar é necessário que você aceite todas as condições!');
        window.close();
    }
    else {
        localStorage.setItem('aceitouTermos', true);
    }
}