import { createContext, useState } from "react";


export const AppContext = createContext();

function AppContextProvider({children}){

    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [pages,setPages] = useState(null);

    
    
    async function fetchBlogs(page=1) {

        const url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`

        
        setLoading(true);

        try {
            const data = (await fetch(url)).json();
            console.log(data);
            setPage(data.page);
            setPages(data.totalPages);
            setPosts(data.posts);

        } catch (error) {
            console.log(error);
        }

        setLoading(false);
        
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogs(page);
    }

   

    const value = {
        posts,setPosts,
        loading,setLoading,
        page,setPage,
        pages,setPages
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>

}

export default AppContextProvider;