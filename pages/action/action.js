

export const authenticate=(userName)=>{
    return {
        type:"AUTHENTICATE",
        userName:userName
    }
}

export const unauthenticate=()=>{
    return {
        type:"UNAUTHENTICATE",
        userName:""
    }
}