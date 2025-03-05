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
     
      console.log("data",data);
       
    return(
        <>
      <div className="w-50">
        <p>{data[0].title}</p>
      </div>
        </>
    )   
}
export default Iteam;