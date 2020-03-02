import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const EditProduct = () => {

    const [product, setProduct] = React.useState({
        name: '',
        price: '',
        id: '',
    })

    const { id } = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    const { productEdit } = useSelector(state => state.products);

    const handleChanges = event => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    React.useEffect(() => {
        if (productEdit) {
            setProduct(productEdit);
        }
    }, [productEdit]);

    React.useEffect(() => {
        if(!productEdit) {
            history.replace('/');
        }
    }, [id, history, productEdit])

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nombre del Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre..."
                                    name="name"
                                    value={product.name}
                                    onChange={handleChanges}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio $$$"
                                    name="price"
                                    value={product.price}
                                    onChange={handleChanges}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditProduct;
