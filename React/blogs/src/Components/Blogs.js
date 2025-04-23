import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {
  //consume 
    const {posts, loading} = useContext(AppContext);

  return (
    <div>
        {
            loading ?
             (<Spinner/>) :
             
             (
                posts.length === 0?
                 (
                    <p>NO post found</p>
                 ) :
                  (posts.map( (posts) => (<div></div>)  
                  ))
             )
        }

      
    </div>
  )
}

export default Blogs
