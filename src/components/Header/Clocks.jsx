import s from "./Clocks.module.css";
import {useEffect, useState} from "react";



const Clocks = () => {
    let [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
            //console.log("Clocks working")
        }, 1000)

        return  () => {clearInterval(timer)
            //console.log("CLOCKS UNMOUNT")
        }
    }, [])
    return <div className={s.clocks}>
        It is {time}
    </div>

}

export default Clocks