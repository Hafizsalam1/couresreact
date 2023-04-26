import constants from "../constants";
import { Link } from "react-router-dom";

const MENU = [
    {path: constants.ROUTES.COURSE_LIST, text:"Course List"},
    {path: constants.ROUTES.LOGIN, text:"login"},
    {path: constants.ROUTES.ADD_COURSE, text:"add course"},
    {path: constants.ROUTES.ADD_TYPE, text:"add type"},
    {path: constants.ROUTES.TYPE_LIST, text:"type list"}


]

const NavBar = () =>{

    return(
        <nav>
            {MENU.map(menu =>(
                <Link style = {{marginRight: 10}}
                to={menu.path}
                // state={{
                //     title:"from NavBar"
                // }}
                >{menu.text}</Link>
            ))}
        </nav>
    )


}
export default NavBar