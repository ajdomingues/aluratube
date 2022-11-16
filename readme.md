## AluraTube
- Criado como exercício de projeto na imersão React da Alura de 2022.

Aula 1:
### A Web, os componentes e o Deploy
- Apresentação do projeto:
    - Plataforma de vídeos
    - Materiais:
        - Projeto no Figma
        - NextJS
        - GitHub
- Iniciando o projeto
Ativando os arquivos necessários rodando os comandos:

```ps
npminstallnext react react-dom
```

Depois vem os componentes:

```ps
npm install --save styled-components 
```

- Criação do projeto no GitHub
- Upload no GitHub
- Link com Vercel e publicação
- Desafio do banner

Aula 2:
## Entendo State e fazendo a busca do Aluratube
- Criação e adionando função na barra de busca de vídeos

Aula 3:
## Implementando Dark Mode Com Context API
- Criação do dark mode switch
Aula 4:
## Criando nossos próprios Hooks
- Criação e organização do formulário para cadastrar novos vídeos
- Criação de Custom Hooks

Aula 5:
## Useeffect e Supabase
- Tabela video criada no Supabase
- Banco de dados via Supabase
- Configurações do supabase no projeto, adicionando os complementos via comandos:
```js
npm install @supabase/supabase-js 
```
A implementação no projeto pode ser feita utilizando a receita do próprio Supabase:

Import:

```js
import { createClient } from '@supabase/supabase-js' 
```
Variáveis:
```js
const supabaseUrl = 'https://ivwptwduqxtxhylwgkuu.supabase.co' 
const supabaseKey = process.env.SUPABASE_KEY 
const supabase = createClient(supabaseUrl, supabaseKey) 
```

- Processo para identificar as thumbnails dos vídeos usando o retorno duma function. Poderia ter sido usado essa:
```js
busca info de vídeos do YouTube, dados gerais
function getVideoId(url) {
        const getVideoId = url.split("v=")[1];
        const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
        return videoId.substring(0, ampersandPosition);
    }
    return videoId;
}
```

Mas retornaria mais dados que precisariamos. Sendo mais simples usar essa:

```js
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}
```
- Implementação e teste do insert de dados na tabela criada no Supabase
- Aplicação do useeffect
- Separação de funções dentro de classe de serviços