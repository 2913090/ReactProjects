import { NavLink } from "react-router-dom";
import '../App.css'
function ProjectsPage(){
    const getActiveLinkClass = ({ isActive }) => {
        return isActive ? "nav-link active-link" : "nav-link";
    };
    return (
        <>
            <h2>Мои проекты</h2>
            <ul>
                <li><NavLink to="/projects/1">Проект 1</NavLink></li>
                <li><NavLink to="/projects/2">Проект 2</NavLink></li>
            </ul>
        </>
    );
}
export default ProjectsPage;