# samis7th.github.io

Meu site de portfólio, publicado em **https://samis7th.github.io**. Ele funciona em português e inglês, com um botão para trocar de idioma, e tem tema claro e escuro.

## Estrutura

- `src/i18n.tsx`: todos os textos do site em português e inglês, além dos links. Para editar o conteúdo, mexa só neste arquivo.
- `src/components/`: as seções da página (início, sobre, impacto, especialidades, experiência, projetos e contato).
- `src/assets/`: estilos SCSS e imagens.

## Rodando

```bash
npm ci
npm start        # http://localhost:3000
npm run build    # gera a pasta build/
```

## Publicação

- O código-fonte fica na branch `source`.
- A branch `main` guarda só o conteúdo da pasta `build/`, que é o que o GitHub Pages publica.

## Créditos

Baseado no [react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) de Yuji Sato (licença MIT). Adaptado com idiomas PT/EN, novas seções e conteúdo próprio.
