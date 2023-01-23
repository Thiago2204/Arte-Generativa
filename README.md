# Arte-Generativa

## Motivo
Durante a semana do FCI da Universidade Presbiteriana Mackenzie, participei de um concurso de arte generativa em JavaScript, tivemos uma sessão os Labs da Apple Developer Academy, resolvi optar por esse caminho, apresentando o projetinho no dia seguinte, durante uma exposições.

## Funcionamento
- O Script funciona com base em 4 funções principais a `Setup`, `Draw`, `Branch` e `Branch Component`.
- Criei 2 variável `var cor1` e `var cor2` a primeira vai ser a cor do desenho gerado e a segundo a cor do Background, passei seus devidos parâmetros em RGB.
- `var tamanho` foi a terceira variável criada, sendo o background e tendo o tamanho de 1000 pixels
- A Função `Translate` reposiciona o elemento na direção vertical e horizontal com sua Altura dividida por 2 e seu comprimento dividido por 2.
- A Função `Rotate` rotaciona o elemento em 90 graus.
- Em `angle = random(angle-30, angle+20);` Os parâmetros vão o mesmo angulo +20 ou -30 para gerar galhos aleatoriamente para a árvore
- `if (len > 2) ` foi um laço que basicamente altera se o angulo vai ser positivo ou negativo, conforme o 'Len'
- `var incrementadora` `var fungo`  São 2 novas  variáveis que vão ser usadas no ultimo laço 
- Aqui ela vai rotacionar aleatoriamente, onde `(var i = 0; i < amount; i++)` = `true` ele vai rotacionar aleatoriamente em `rotate(random(fungo - 180, fungo)` onde vai ser a var fungo - 180 graus.
- Com isso criando infinitos tipos de desenvolvimentod de fungo.
  
## Execução
- O script foi escrito e executado no [P5JS](https://editor.p5js.org/ThiagoEst22/sketches/0Bl8NwpTt) sem a necessidade de incluir nenhuma biblioteca

## inspiração
- Me Inspirei no jogo The Last of Us, lançado pela Naughty Dog em 2013 
- No Fungo [Cordyceps](https://pt.wikipedia.org/wiki/Cordyceps) sendo um fungo real que "zumbifica" as formigas, as matando e controlando suas funções motoras para infectar mais organismos, tendo seus atributos muito exagerados para o game e sendo inofensivo a humanos.
- A intenção era fazer uma alusão a cena abaixo:

[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://www.youtube.com/watch?v=3gQnEQHA8jg)

## Visual Gerado
![image](https://user-images.githubusercontent.com/80297158/213952108-62cd2b6a-aa65-44ed-8a30-9098d2abab2b.png)
