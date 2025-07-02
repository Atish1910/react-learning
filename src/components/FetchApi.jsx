import React, { useEffect, useState } from 'react';
const API_URL = "https://api.escuelajs.co/api/v1/products";
const FetchApi = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const fetchProducts = async () => {
        try{
            const response = await fetch(API_URL); 
            const data = await response.json();
            console.log(data);
            setProducts(data);
        }catch(error) {
            console.log(error);
        }
    } 

    useEffect(() => {
        fetchProducts()
    }, [])


    const filterProducts = products.filter((p) => 
        p.title.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>
          <div className="container">
            <div className="row">
                <form >
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                </form>
                <ul>
                    {
                        filterProducts.length == 0 ? (
                            <p>no product found</p>
                        ) : (
                            filterProducts.map((p) => {
                                return(
                                    <li key={p.id}>{p.title}</li>
                                )
                            })
                        )
                    }
                </ul>
            </div>
            </div>  
        </>
    );
};

export default FetchApi;