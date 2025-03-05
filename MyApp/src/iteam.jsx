import { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useParams } from "react-router";
import { fetchPosts } from "./Redux/reducer";

const Iteam=()=>{
    const dispatch=useDispatch();
    const { id } = useParams()
    console.log(id);
    const {posts,status,error}=useSelector(state=>state.posts);
    const[data,setData]=useState(posts);
    useEffect(()=>{
           if(status =="idle"){
               dispatch(fetchPosts())
           }
           setData(posts.filter((e)=>{
            if(e.id==parseInt(id)){
                console.log("true");
                return e;
            }
           }))
         
       },[status,dispatch])
     
     
       
    return(
        <>
        <h4 style={{width:"50rem", height:"auto"}} className="m-auto text-success">Selected Iteam : {data[0].title}</h4>
      <div  style={{width:"50rem", height:"auto"}} className="m-auto bg-dark text-white border border-dark rounded overflow-hidden d-flex flex-column">
        <img src={`https://picsum.photos/200?random=${data[0].id}`} alt="" />
        <div className="w-100 d-flex flex-column p-1">
          <p className="text-center w-100"> User ID :{data[0].userId}</p>
        <p className="w-100">Title:{data[0].title}</p>
          <p className="w-100"> Body:{data[0].body} </p>
        </div>
      </div>
        </>
    )   
}
export default Iteam;