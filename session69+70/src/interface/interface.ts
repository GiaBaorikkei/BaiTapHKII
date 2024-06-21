export interface Product{
    id: number,
    status: string,
    name: string,
    quantity: number,
    price:string,
    introduce: string
}
export interface Action {
    type: string,
    payload: any,
}
