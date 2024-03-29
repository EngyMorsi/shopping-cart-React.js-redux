
const Reducer = (cart = [] , action) =>{
    if(action.type === 'ADD'){
        let tempCart = cart.filter((item)=>item.id===action.payload.id)
        console.log(tempCart);
     
        if(tempCart < 1){

            return [...cart , action.payload]
        }else{

            return cart
        }

    }if(action.type === 'REMOVE'){
        return cart.filter((item)=> item.id !== action.payload.id)
    }
      if (action.type === 'INC') {
      let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return tempcart;
    }
    if (action.type === 'DEC') {
        let tempcart = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return tempcart;
      }
    return cart ;

}
export default Reducer;