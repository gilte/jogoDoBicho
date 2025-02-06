const bichos = {
    1: { nome: 'Avestruz', grupo: 1 },
    2: { nome: 'Águia', grupo: 2 },
    3: { nome: 'Burro', grupo: 3 },
    4: { nome: 'Borboleta', grupo: 4 },
    5: { nome: 'Cachorro', grupo: 5 },
    6: { nome: 'Cabra', grupo: 6 },
    7: { nome: 'Carneiro', grupo: 7 },
    8: { nome: 'Cavalo', grupo: 8 },
    9: { nome: 'Elefante', grupo: 9 },
    10: { nome: 'Galo', grupo: 10 },
    11: { nome: 'Gato', grupo: 11 },
    12: { nome: 'Jacaré', grupo: 12 },
    13: { nome: 'Leão', grupo: 13 },
    14: { nome: 'Macaco', grupo: 14 },
    15: { nome: 'Porco', grupo: 15 },
    16: { nome: 'Pavão', grupo: 16 },
    17: { nome: 'Peru', grupo: 17 },
    18: { nome: 'Tigre', grupo: 18 },
    19: { nome: 'Urso', grupo: 19 },
    20: { nome: 'Veado', grupo: 20 },
    21: { nome: 'Vaca', grupo: 21 },
    22: { nome: 'Búfalo', grupo: 22 },
    23: { nome: 'Burro', grupo: 23 },
    24: { nome: 'Cavalo', grupo: 24 },
    25: { nome: 'Galo', grupo: 25 }
};

document.getElementById('consultarBtn').addEventListener('click', function() {
    const milharesInput = document.getElementById('milhares').value.trim();
    const milhares = milharesInput.split(/[\s,]+/); // Split por espaço ou vírgula
    const resultados = document.getElementById('tabelaResultados').getElementsByTagName('tbody')[0];
    resultados.innerHTML = ''; // Limpa resultados anteriores
    let invalidMilharFound = false;

    milhares.forEach(milhar => {
        if (/^\d{4}$/.test(milhar)) { // Verifica se a milhar tem 4 dígitos
            const grupo = parseInt(milhar.slice(0, 1));
            if (bichos[grupo]) {
                const row = resultados.insertRow();
                row.insertCell(0).textContent = milhar;
                row.insertCell(1).textContent = bichos[grupo].nome;
                row.insertCell(2).textContent = bichos[grupo].grupo;
            } else {
                invalidMilharFound = true;
            }
        } else {
            invalidMilharFound = true;
        }
    });

    if (invalidMilharFound) {
        document.getElementById('resultado').textContent = 'Algumas milhares são inválidas ou não foram encontradas.';
    } else {
        document.getElementById('resultado').textContent = 'Consulta realizada com sucesso!';
    }
});

document.getElementById('limparBtn').addEventListener('click', function() {
    document.getElementById('milhares').value = '';
    document.getElementById('tabelaResultados').getElementsByTagName('tbody')[0].innerHTML = ''; // Limpa resultados
    document.getElementById('resultado').textContent = '';
});
