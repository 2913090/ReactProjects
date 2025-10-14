import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../App.css'
function SingleProjectPage(){
    const params = useParams();
    const getActiveLinkClass = ({ isActive }) => {
        return isActive ? "nav-link active-link" : "nav-link";
    };
    return(
        <>
            <h1>Проект № {params.projectId}</h1>
            <NavLink className={getActiveLinkClass} to="/projects">Вернуться к списку проектов</NavLink>
        </>
    )
}
export default SingleProjectPage;