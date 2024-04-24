let calculadoraIniciada = false;

function Limpar() {
    document.getElementById('tela').value = 0;
    calculadoraIniciada = false;
}

function Calcular(tipo, valor) {
    if (!calculadoraIniciada) {
        document.getElementById('tela').value = '';
        calculadoraIniciada = true;
    }

    if (tipo === 'acao') {
        if (valor === '+' || valor === '*' || valor === '-' || valor === '/' || valor === '.') {
            document.getElementById('tela').value += valor;
        }
    } else if (tipo === 'valor') {
        document.getElementById('tela').value += valor;
    }
}


function Resultado() {
    var resultado_final = eval(document.getElementById('tela').value)
    document.getElementById('tela').value = resultado_final
}

