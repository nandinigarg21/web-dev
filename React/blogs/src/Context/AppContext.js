import { createContext, useState } from "react";
import { baseUrl } from "../BaseUrl";

export const AppContext = createContext();




const AppContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogsPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}? pages=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }

    setLoading(false);
  }

  function handlerPageChange(page) {
    setPage(page);
    fetchBlogsPosts(page);
  }

  const context = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogsPosts,
    handlerPageChange,
  }

  return (
    
      <AppContext.Provider value={context}>{children}</AppContext.Provider>
    
  )
}

export default AppContextProvider
