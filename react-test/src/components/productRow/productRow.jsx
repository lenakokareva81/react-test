import React from 'react';

import styles from './productRow.module.css'

function ProductRow({ product }) {
    console.log(product.images[0])


    return (<div>

        <div className={styles.table}>
            <div>{product.brand}</div>
            <div> {product.title}</div>
            <div > {product.price}</div>
            <div><img src={product.images[0]} alt="картинка" className={styles.img} /> </div>

        </div>


    </div>
    );

}


export default ProductRow;