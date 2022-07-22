import login from "../../utils/userDAO"

export default async function handler(req, res){

    const user = {
        username: req.body.username,
        senha: req.body.senha
    }

    const response = await login(user.username, user.senha)

    res.status(200).json(response)
}