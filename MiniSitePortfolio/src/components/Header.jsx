import { NavLink } from "react-router-dom";
import '../App.css'
function Header(){
    const getActiveLinkClass = ({ isActive }) => {
        return isActive ? "nav-link active-link" : "nav-link";
    };

    return(
        <>
            <nav>
                <NavLink className={getActiveLinkClass} to="/">Главная</NavLink>
                <NavLink className={getActiveLinkClass} to="/about">Обо мне</NavLink>
                <NavLink className={getActiveLinkClass} to="/projects">Проекты</NavLink>

            </nav>
        </>
    );
}
export default Header;