import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProductList(props) {
    const [shop, setShop] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        console.log('product list useEffect!!');
        setShop(props.data);
        console.log('categories useEffect');
        setCategories(props.data);
    }, [props.data]);

    var products_jsx = [];
    if (shop != null) {
        products_jsx = shop.map((item) => (

            <div class="col-md-4">
                <div className='card m-3'>
                    <img className=" w-100" src={item.user_id} />
                    <div className="text-center">
                        <p class="title h5 text-center">{item.receipt_id}</p>
                        <p className=" category text-center text-danger">{item.receipt_bying_date}</p>



                    </div>
                </div>
            </div>

        ));
    }
    return (
        <div className="row">

            {products_jsx}

        </div>
    );
}

export default ProductList;
