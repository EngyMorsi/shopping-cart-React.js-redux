import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from 'react-redux';



export default function Cart() {
    const cart = useSelector((state) => state);
    console.log(cart);
    const dispatch = useDispatch();
    const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.quantity;
      };
      const total = cart.reduce(addition, 0);
      
    return (
        <div className="cartContainer">
            <Link className="cart-link" to="/">

               Back To Shopping

            </Link>
            <div className="cart">
            {cart.map((item)=>{

               
                return(
                    
                    <div className="cartcad" key={item.id}>
                    <img src={` ../images/${item.image}`} alt="cart" />
                    <h4>{item.name}</h4>
                    <p>Price: EGP. {item.price}</p>
                    <p>Amout: EGP. {item.price*item.quantity}</p>
                    <button onClick={() => dispatch({ type: 'REMOVE', payload:item })}> Remove</button>

                    <div>
                    <button
                    onClick={() => dispatch({ type: "INC", payload: item })}> + 
                    </button>
                    <p>{item.quantity}</p>
                    <button
                    onClick={() => {
                        if (item.quantity > 1) {
                        dispatch({ type: "DEC", payload: item });
                        } else {
                        dispatch({ type: "REMOVE", payload: item });
                        }
                    }}
                    >
                    -
                    </button>
                    </div>
                    </div>
                  
                  
                );

                })}
            </div>
            {total > 0 && <h2>total:{total}</h2>}
        </div>
    )
}
