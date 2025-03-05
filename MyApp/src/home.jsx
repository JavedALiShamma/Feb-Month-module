import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./Redux/reducer";
import styles from "./style.module.css"
import { createSearchParams, useNavigate, useParams } from "react-router";

const Home=()=>{
    const navigate=useNavigate();
    const handleClick=(e)=>{
      navigate({
        pathname:`/iteam/${e.target.id}`
      })
    }
    const dispatch=useDispatch();
    const {posts,status,error}=useSelector(state=>state.posts);
    useEffect(()=>{
        if(status =="idle"){
            dispatch(fetchPosts())
        }
    },[status,dispatch])
  console.log(posts);
    if(status=="pending") return (<h1>Loading...</h1>)
    return(
       <>
       <h2 className="display-2"> Home Page</h2>
       <div className="w-100 d-flex gap-3 flex-wrap">
            {posts.map(post=>(
            
                <div id={post.id} onClick={handleClick} style={{width:"200px",height:"auto", fontSize:"10px" ,cursor:"pointer"}} className="d-flex flex-column border rounded bg-dark text-white text-m" key={post.id}>
                        <img id={post.id} className="w-100 border" src={`https://picsum.photos/200?random=${post.id}`}></img>
                        <div id={post.id} className="w-100 p-2 d-flex flex-column">
                            <p id={post.id} className="text-center">
                            userID:{post.userId}
                            </p>
                            <p id={post.id}>

                            Title:{post.title}
                            </p>
                            <p>

                            body:{post.body}
                            </p >
                        </div>
                </div>
            ))}
       </div>
       </>
    )
}
export default Home;