import {useEffect} from "react";
import s from "./Info.module.css"

const Info = (props) => {

    return <div>
        <div className={s.header}>
            Info
        </div>
        <div className={s.item}>
            Этот проект не предусматривает регистрацию,
            но логирование происходит с помощью api.
            <p/>
            Вы можете изменить фотографию в профиле
            <p/>
            Вы можете изменить статус в профиле двойным нажатием по нему
            <p/>
            Вы можете подписаться на пользователя в разделе 'Users'
            <p/>
            Вы можете перейти на страницу пользователя кликнув по его фото
            <p/>
            Добавление постов с использованием api не реализованно,
            стоят заглушки и посты визуально добавляются
            <p/>
            Messages / News / Music / Settings - заглушки
            <p/>
            Есть различная валидация на всех input полях
            (обязательное поле при логине и максимальный размер содержимого)
            <p/>


        </div>

    </div>
}

export default Info;