import React from "react";
import "./Table.scss";
import Products from "./Table.mockdata";

const headers = [
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price' },
    { key: 'stock', value: 'Available Stock' }
]

const Table = () => {
    return <table className="AppTable">
        <thead>
            <tr>
                {
                    headers.map(header => <th key={header.key}>{header.value}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                Products.map(Product => <tr>
                    <td>{Product.name}</td>
                    <td>{Product.price}</td>
                    <td className="right">{Product.stock}</td>
                </tr>)
            }
        </tbody>
    </table>
}

export default Table