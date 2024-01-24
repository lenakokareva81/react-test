import styles from './productTable.module.css'
import ProductRow from '../productRow/productRow';
function ProductTable({ productArray }) {
    console.log(productArray)


    return (
        <div>
            {productArray.map((product) => < ProductRow product={product} key={product.id} />)}
        </div>
    );

}


export default ProductTable;