
import Card from "../components/Card";
import { products } from '../data';

const Cards = () => {
  // const API_URL = "https://fakestoreapi.com/products"

  // const [loading, setLoading] = useState(false);
  // const [posts,setPosts] = useState([]);

  // async function fetchProductData() {


  //   setLoading(true);

  //   try {
  //     const data = (await fetch(API_URL)).json();
  //     setPosts(data);
  //   } catch (error) {
  //     console.log(error);
  //     console.log("api");


  //   }

  //   setLoading(false);


  // }

  // useEffect(()=>{
  //   fetchProductData();
  // },[])
  return (
    <div>
      {
        // loading ? (<div>loading</div>) : (products.length === 0 ? (<div>nothing to shop</div>) : ())

        products.map((product) => (
          <Card key={product.id} product={product} />
        )
        )
      }
    </div>
  )
}

export default Cards
