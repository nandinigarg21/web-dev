import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";

const Home = () => {

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([]);

    const API_URL = "https://fakestoreapi.com/products";

    async function fetchProducData() {
        setLoading(true)

        try {

            const res = await fetch(API_URL)
            const data = await res.json();
            setPosts(data);     
        }
         catch (error) {
            console.log(error)
            setPosts([]);
        }

        setLoading(false);   
    }

    useEffect( () => {
        fetchProducData();

    },[])
    
    return(<div>
        {
            loading ? (<div><Spinner/></div>) : (<div>
                {
                    posts.length>0 ?
                     (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-3 min-h-[80vh]">
                        {
                            posts.map((post,index)=>(
                                <div key={index}>
                                   <Product post={post}/>
                                </div>
                            ))
                        }
                    </div>) :
                     (<div className="flex justify-center items-center"
                     >No Data Found</div>)
                }
            </div>)
        
            
            
            

        }
        
        
    </div>

    )
}
export default Home;


