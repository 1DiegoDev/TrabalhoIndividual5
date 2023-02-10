const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForCSSProperties() {
  rl.question('Insira uma lista de propriedades CSS separadas por vírgulas ou escreva "sair" para encerrar: ', (answer) => {
    if (answer === 'sair') {
      console.log('Encerrando programa.');
      rl.close();
    } else {
      let cssProperties = answer.split(',');
      console.log('Propriedades CSS inseridas:');
      console.log(cssProperties);
      askForCSSProperties();
    }
  });
}

askForCSSProperties();