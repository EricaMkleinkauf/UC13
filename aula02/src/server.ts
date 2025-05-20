
import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

const dataLog = (req: Request, res:Response, next: NextFunction) =>{
  let data: Date = new Date()
  console.log(`Requisicao feita em: ${data}`)
  next();
}

const porteiroMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`📢 Requisição recebida em: ${req.url}`);
  next(); // Permite a requisição continuar para a rota
};



//app.use(porteiroMiddleware);

// 🔹 Rota GET (Buscar dados)
app.get('/usuarios', (req: Request, res: Response) => {
  res.status(200).json({ mensagem: 'Lista de usuários' });
});
                          
// 🔹 Rota POST (Criar novo usuário)
app.post('/usuarios', (req: Request, res: Response) => {
  const { nome } = req.body;
  if (!nome) {
    res.status(400).json({ mensagem: 'Nome é obrigatório!' });
  }
  res.status(201).json({ mensagem: `Usuário ${nome} criado com sucesso!` });
});
 
app.get('/sobre', (req: Request, res: Response) =>{
    res.status(200).json({Nome: "erica", Idade: 17, descricao:"Aluna do ensino medio e tecnico"});
});



app.post('/comentarios', (req: Request, res: Response) =>{
    const {texto} = req.body;
    if(!texto){
        res.status(400).json({mensagem: "texto é obrigatorio!!!!!!!!!!!!!!!!"})
        return
    }
    res.status(201).json({mensagem:"Comentario recebido!"})
    return;
});

app.delete('/comentarios/:id', (req: Request, res: Response) =>{
  const { id }= req.params;
  res.status(204).json({mensagem: "comentario excluido!"})
});


app.listen(PORT, () => console.log(`🔥 Servidor rodando em http://localhost:${PORT}`));
