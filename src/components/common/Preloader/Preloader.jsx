import spinner from "../../../assets/Spinner200px.svg";
import React from "react";
import s from "./Preloader.module.css"

let Preloader = (props) => {
    return <div className={s.preloader}>
        <div>Please wait</div>
        <img src = {spinner} />
    </div>
}

export default Preloader