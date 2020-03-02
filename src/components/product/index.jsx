import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct, getEditProduct } from '../../redux/actions/products';
import Swal from 'sweetalert2';

const Product = ({ item }) => {

    const { name, price, id } = item;
    const history = useHistory();

    const dispatch = useDispatch();

    const handleDelete = () => {
        Swal.fire({
            title: '¿Confirme, desea eliminar este elemento?',
            text: "Esta acción no puede revertirse",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar'
        }).then((result) => {
            if (result.value) {
                dispatch(deleteProduct(id));
            }
        })
    }

    const handleSendToEdition = () => {
        dispatch(getEditProduct(item))
        history.replace(`/products/edit/${id}`);
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <button
                    type="button"
                    onClick={handleSendToEdition}
                    className="btn btn-primary mr-2"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}
 
export default Product;
