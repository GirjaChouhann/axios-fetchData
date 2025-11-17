import { useEffect, useState } from 'react'
 import axios from "axios";
const AxiosData = () => {


    const[data,setData] = useState([])


    const getData= async()=>{
    
        try{
               let res=  await axios.get("https://jsonplaceholder.typicode.com/posts")
           setData(res.data)
        }
        catch(error){
    console.log(error)
        }
    }


    const handleDelete= async()=>{
        try{ 
           await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`) 
            setData((prev)=>prev.filter((item)=>item.id!==id))
        }
        catch(error){ console.log(  "delete error" ,error)}
    }

    useEffect(()=>{
        getData()
    },[])
  return (
   <>
   <h1>post</h1>
       {
        data.map((item)=>(
           
            <div key={item.id}>
         <li >{item.title}</li> 
         <button onClick={()=>handleDelete()}>  delete</button>
            </div>
              
        ))

      
        
       }

   </>
  )
}

export default AxiosData



