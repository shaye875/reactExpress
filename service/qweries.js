import {promises as fs} from 'fs'

const path = "./data/data.json"

export async function getData(){
    const data = await fs.readFile(path,"utf8")
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

async function getById(id){
    const arr = await getData()
    for(let item of arr){
        if(item.id === id){
            return item
        }
    }
    return false
}

async function updateById(id,user){
    const arr = await getData()
    for(let item of arr){
        if(item.id === id){
            arr.splice(arr.indexOf(item),user)
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


