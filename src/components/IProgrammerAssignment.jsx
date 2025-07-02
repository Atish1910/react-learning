import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_URL = "https://api.escuelajs.co/api/v1/products"
const IProgrammerAssignment = () => {
    const [users, setUsers] = useState([]);
    const [serchTerm, setSearchTerm] = useState("");
    const [allposts, setAllposts] = useState([]);
    const [filterPost, setFilterpost] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            try{
                const res = await axios.get(API_URL);
                setUsers(res.data);
            }catch(error){
                console.log(`Error While Fetching Api ${error}`);
                setUsers([]);
            }
        }
        fetchApi();
    }, []);




    return (
        <>
          <section>
            <div className="container">
                <div className="row border mb-5 py-5">
                    <form >
                        <input type="text" onChange={(e) => setSearchTerm(e.target.value)}  placeholder='Please Enter Your Title' className='form-control' />
                    </form>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-lg-4 border">

                    <ul>
                        {
                            users.map((u) => {
                                return(
                                    <li  className='text-bold border py-2'>{u.title}</li>
                                )
                            })
                        }
                    </ul>
                        </div>
                </div>
            </div>
            </section>  
        </>
    );
};

export default IProgrammerAssignment;