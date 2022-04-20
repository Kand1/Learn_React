import {useEffect} from "react";
import s from "./Info.module.css"

const Info = (props) => {

    return <div>
        <div className={s.header}>
            Info
        </div>
        <div>
            <div className={s.item}>
                Этот проект не предусматривает регистрацию,
                но логирование происходит с помощью api.
            </div>
            <div className={s.item}>
                Вы можете изменить фотографию и поля About me / Contacts в профиле

            </div>
            <div className={s.item}>
                Вы можете изменить статус в профиле двойным нажатием по нему

            </div>
            <div className={s.item}>
                Вы можете подписаться на пользователя в разделе 'Users'

            </div>
            <div className={s.item}>
                Вы можете перейти к странице пользователя, нажатием на его аватарку

            </div>
            <div className={s.item}>
                На последних страницах раздела 'Users'  больше пользователей с аватарками и статусами

            </div>
            <div className={s.item}>

                Добавление постов с использованием api не реализованно,
                стоят заглушки и посты визуально добавляются
            </div>
            <div className={s.item}>
                Messages / News / Music / Settings - заглушки

            </div>
            <div className={s.item}>
                Есть различная валидация на input полях
                (обязательное поле при логине и максимальный размер содержимого)


            </div>


        </div>

    </div>
}

export default Info;