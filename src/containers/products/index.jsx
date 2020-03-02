import React from 'react';

import { useDispatch, useSelector } from 'react-redux';import { getAllProducts } from '../../redux/actions/products';
import Product from '../../components/product';
;

const Products = () => {

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);

    React.useEffect(() => {
        const loadProducts = () => dispatch(getAllProducts());
        loadProducts();
    }, [])

    return (
        <React.Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => (
                        <Product item={item} key={item.id} />
                    ))}
                </tbody>
            </table>
            {loading ? <p className="uppercase text-center text-primary">cargando....</p> : null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un Error</p> : null}
        </React.Fragment>
    );
}
 
export default Products;
