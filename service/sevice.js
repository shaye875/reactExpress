import { isInformation, isTypes } from "./validation.js";
import JWT from 'jsonwebtoken'
import 'dotenv/config'
import { create,updateById,getById} from "./qweries.js";

export async function postLogin(user) {

    if (!isInformation(["username", "password"], user)) {
        return { "false": "mossimg information" }
    }
    console.log(user);

    if (!isTypes({ username: "", password: "" }, user)) {
        return { "false": "one or more types not good" }
    }
    const id = await create(user)
    const token = JWT.sign({
        id: id,
        username: user.username,
        role: "admin"
    },
        process.env.SECRET,
        { expiresIn: "72h" }
    )
    return { token: token }
}

export async function writhTask(token, task) {
    let reslut
    const verify = JWT.verify(token, process.env.SECRET, (err, deccod) => {
        reslut = deccod
    })
    const id = reslut.id
    if(await updateById(id,task)){
        return {true:"add"}
    }
    return {false:"you not exist"}
}

export function midllware(req, res, next) {
    const { token } = req.body
    JWT.verify(token, process.env.SECRET, (err, deccod) => {
        if (err) {
            res.status(400)
            res.json({ "false": "false" })
        }
        else {
            next()
        }
    })
}

export async function getAllMessages(token){
    let reslut
    const verify = JWT.verify(token, process.env.SECRET, (err, deccod) => {
        reslut = deccod
    })
    const id = reslut.id
    return await getById(id)
}