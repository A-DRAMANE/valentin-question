import { dataInterface } from "@/interfaces"

const strorage = window.localStorage

export const getData = ()=> {
    const data = strorage.getItem("data")
    if (data) {
        const response:dataInterface = JSON.parse(data)
        return response
    }else{
        return false
    }
}