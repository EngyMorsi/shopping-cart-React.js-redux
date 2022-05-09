import React from 'react';
import { Data } from "./Data";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from 'react-redux';







export default function Products() {

    const cart = useSelector((state) => state);
    console.log(cart);
    const dispatch = useDispatch();
   
    return (
        <div className="productConatiner">
            <div className="navigation">
              <Link to="/cart">
                  Go To your cart

              </Link>
            </div>
            <div className="products">
                {Data.map((item)=>{

                item.quantity=1;
                return(
                    
                    <div className="product" key={item.id}>
                    <img src={` ../images/${item.image}`} alt="cart" />
                    <h4>{item.name}</h4>
                    <p> EGP. {item.price}</p>
                    <button onClick={() => dispatch({type: 'ADD', payload: item}) }>Add To Cart</button>
                    </div>
                    
                 
                );

                })}
            </div>
        </div>
    );
};
