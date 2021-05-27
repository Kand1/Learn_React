import {useEffect} from "react";


const News = (props) => {
    useEffect(()=>{
        console.log("NEWS MOUNT")
        return ()=>{console.log("NEWS UNMOUNT")}
    })
    return <div>
        News
    </div>
}

export default News;