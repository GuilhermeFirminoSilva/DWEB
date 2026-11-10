let respostas = [];

      function salvarDados() {
        let idade = parseInt(document.getElementById("idade").value);
        let sexo = document.getElementById("sexo").value;
        let opiniao = parseInt(document.getElementById("opiniao").value);

        if (isNaN(idade) || idade <= 0) {
          alert("Digite uma idade válida!");
          return;
        }

        respostas.push({ idade: idade, sexo: sexo, opiniao: opiniao });

        document.getElementById("contador").innerText = respostas.length;

        document.getElementById("idade").value = "";

        if (respostas.length === 45) {
          calcularResultados();
        }
      }

      function calcularResultados() {
        let somaIdade = 0;
        let maisVelha = 0;
        let maisNova = 999;
        let qtdPessimo = 0;
        let qtdOtimoBom = 0;
        let fem = 0,
          masc = 0,
          outros = 0;

        for (let r of respostas) {
          somaIdade += r.idade;
          if (r.idade > maisVelha) maisVelha = r.idade;
          if (r.idade < maisNova) maisNova = r.idade;

          if (r.opiniao === 1) qtdPessimo++;
          if (r.opiniao === 4 || r.opiniao === 3) qtdOtimoBom++;

          if (r.sexo === "Feminino") fem++;
          else if (r.sexo === "Masculino") masc++;
          else outros++;
        }

        let mediaIdade = somaIdade / 5;
        let porcentagemOtimoBom = (qtdOtimoBom / 5) * 100;

        document.getElementById("resultados").innerHTML = `
                <hr>
                <h3>Resultados Finais:</h3>
                <p>Média de idade: ${mediaIdade.toFixed(1)} anos</p>
                <p>Pessoa mais velha: ${maisVelha} anos</p>
                <p>Pessoa mais nova: ${maisNova} anos</p>
                <p>Quantidade que respondeu péssimo: ${qtdPessimo}</p>
                <p>Porcentagem de ótimo e bom: ${porcentagemOtimoBom.toFixed(1)}%</p>
                <p>Mulheres: ${fem} | Homens: ${masc} | Outros: ${outros}</p>
             `;
    }