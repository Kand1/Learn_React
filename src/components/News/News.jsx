import {useEffect} from "react";
import s from "./News.module.css"

const News = (props) => {
    useEffect(()=>{
        console.log("NEWS MOUNT")
        return ()=>{console.log("NEWS UNMOUNT")}
    })
    return <div className={s.item}>
        News
    </div>
}

export default News;