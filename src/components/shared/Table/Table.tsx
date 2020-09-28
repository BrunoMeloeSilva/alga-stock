import React from "react";
import "./Table.scss";

const Table = () => {
    return <table className="AppTable">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th className="right">Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Batata</td>
                <td>R$ 10,50</td>
                <td className="right">34</td>
            </tr>
            <tr>
                <td>Potato</td>
                <td>$2.25</td>
                <td className="right">40</td>
            </tr>
        </tbody>
    </table>
}

export default Table