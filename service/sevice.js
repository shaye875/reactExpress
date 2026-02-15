import { isInformation, isTypes } from "./validation.js";
import JWT from 'jsonwebtoken'
import 'dotenv/config'
import { create } from "./qweries.js";

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
        username:user.username,
        role:"admin"
    },
        process.env.SECRET,
        { expiresIn: "72h" }
    )
    return {token:token}
}