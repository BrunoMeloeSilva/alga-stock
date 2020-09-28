export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Cookie 1',
        price: 1.25,
        stock: 20
    },
    {
        id: 2,
        name: 'Cookie 2',
        price: 1.25,
        stock: 20
    }
    ,
    {
        id: 3,
        name: 'Cookie 3',
        price: 1.25,
        stock: 20
    }
]

export default Products