import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useDispatch } from 'react-redux/es/exports';
import { addToCart, removeFromCart } from './reducers/cartSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';



function App() {
  
  const { products } = data;
  const {cartItems} = useSelector(state=>state.cart)
 // const [cartItems, setCartItems] = useState([]);
 //console.log(cartItems)
  const dispatch = useDispatch()
  const onAdd = (product) => {
      dispatch(addToCart(product))
   
  };
  const onRemove = (product) => {
    dispatch(removeFromCart(product))
  
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
