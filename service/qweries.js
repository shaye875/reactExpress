import {promises as fs} from 'fs'

const path = "./data/data.json"
const pathmessages = "./data/messaes.json"

export async function getData(){
    const data = await fs.readFile(path,"utf8")
    const arr = await JSON.parse(data)
    return arr
}

export async function getMessages(){
    const data = await fs.readFile(pathmessages,"utf8")
    const arr = await JSON.parse(data)
    return arr
}

export async function create(user){
    const arr = await getData()
    user["id"] = arr.length + 1
    arr.push(user)
    await fs.writeFile(path,JSON.stringify(arr))
    return arr.length
}

export async function getById(id){
    const arr2 = []
    const arr = await getMessages()
    for(let item of arr){
        if(item.id === id){
            arr2.push(item)
        }
    }
    return arr2
}

export async function updateById(id,task){
    const arr = await getData()
    for(let item of arr){
        if(item.id === id){
            const messaes = await getMessages()
            messaes.push({id:id,task:task})
            await fs.writeFile(pathmessages,JSON.stringify(messaes))
            await fs.writeFile(path,JSON.stringify(arr))
            return true
        }
    }
    return false
}

async function deleteById(id){
    const arr = await getData()
    for(let item of arr){
        if(item.id === id){
            arr.splice(arr.indexOf(item))
            return true
        }
    }
    return false
}


