import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProductAction } from '../../redux/actions/products';

const NewProduct = () => {

    // State del componente
    const [product, setProduct] = React.useState({
        name: '',
        price: '',
    })

    const { name, price } = product

    // Utilizar useDispatch y crear una función
    const dispatch = useDispatch();

    const handleAddProduct = (item) => {
        dispatch(createNewProductAction(item));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    }

    /**
     * Manejo de completado del formulario
     * @param {event} event Evento del formulario
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar formulario
        if (name.trim() === '' || price <= 0) {
            return;
        }

        handleAddProduct(product);
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center mb-4 font-weight-bold">
                            Agregar un nuevo producto
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nombre del Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre..."
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio $$$"
                                    name="price"
                                    value={price}
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Añadir
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProduct;