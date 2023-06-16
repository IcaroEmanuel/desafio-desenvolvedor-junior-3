import express from "express";

const app = express();

const posts = [
  {
    id: 1,
    title: 'Node.Js, o framework que permite rodar Javascript fora do navegador',
    content: 'Conteúdo da publicação',
    autor: 'Ícaro Emanuel',
  },
];

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
})

export default app;
