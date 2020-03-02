import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {

    const { name, price, id } = item;

    return ( 
        <tr>
            <td scope="col">{name}</td>
            <td scope="col"><span className="font-weight-bold">$ {price}</span></td>
            <td scope="col" className="acciones">
                <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}
 
export default Product;
