import s from './Header.module.css';
import header_pict from '../../assets/images/header_pict_p_1.jpg'

const Header = () => {
    return <header className = {s.header}>
        <img src= {header_pict}></img>
    </header>
}

export default Header;