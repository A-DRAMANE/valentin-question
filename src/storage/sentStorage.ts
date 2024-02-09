
const strorage = window.localStorage

export const setData = async (data:string)=>{
    strorage.setItem("data",data)
    return true
}