import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProductAction } from '../../redux/actions/products';

const NewProduct = () => {

    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch(createNewProductAction());
    }

    /**
     * Manejo de completado del formulario
     * @param {event} event Evento del formulario
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        handleAddProduct();
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
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio $$$"
                                    name="price"
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