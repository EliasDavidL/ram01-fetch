import instances from "../Config/axios"

export async function getAll(){
    const res = await instances.get("character")
    console.log(res.data)
    return res.data
}