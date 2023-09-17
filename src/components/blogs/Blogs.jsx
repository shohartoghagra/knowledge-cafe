import React, { useEffect, useState } from 'react';

const blogs = () => {
const [allBlogs,setAllBlogs] = useState([]);

useEffect( () =>{
fetch('data.json')
.then(res=>res.json())
.then(data=>setAllBlogs(data));

},[])

    return (
        <div>
         
        </div>
    );
};

export default blogs;