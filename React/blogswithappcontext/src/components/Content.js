import React, { useContext } from 'react'
import { AppContext } from '../context/context'

const Content = () => {

    const {loading,posts} = useContext(AppContext);
  return (
    <div>
      {
        loading ? (<span>loading</span>) : (
            posts.Length === 0 ? (<p>no posts available</p>) : (
                posts.map((post)=>{return(
                    <div>
                        <p>{post.title}</p>
                    </div>
                )})
            )
        )
      }
    </div>
  )
}

export default Content
