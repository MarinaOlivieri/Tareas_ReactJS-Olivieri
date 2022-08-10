export const dataFetch = (products) =>{
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            res(products)
        }, 2000)
    })
}