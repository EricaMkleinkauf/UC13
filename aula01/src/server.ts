import express, {Application, Request, Response }from "express"

const app: Application = express();

app.get('/',(req: Request, res: Response): void => {
    res.send("<h1> Ola mundo! </h1>") 
})

app.get('/nome', (req: Request, res: Response): void => {
    res.send("Ola pessoa!!")
})

app.listen(3000, () =>{
    console.log("Projeto rodando na porta 3000")
})

