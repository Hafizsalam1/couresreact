import React from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import Edit from "../../Edit/Edit";
import constants from "../../../constants";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { deleteCourse } from "../../../services/courseService";
import useMutation from "../../../hooks/useMutation";


const CourseItem = (props) => {
    const {title, description, typeId, level, duration, onDelete} = props;
    // const { id } = useParams();
    const navigate = useNavigate()
    // const { onMutation } = useMutation(deleteCourse,{
    //     onSuccess: () =>{},
    //     onError: () => {}
    //   });
    const handleClick = () => navigate(constants.ROUTES.EDIT_COURSE)
    // const onDelete = () => {
    //     // id = 1
    //     onMutation(id)
    //     navigate((constants.ROUTES.LOGIN)); 
    //   };
    
    return (
        <StyledListItem action>
            <Col>
                <h3 className="lead">{title}</h3>
                <p>{description}</p>
                <p>{typeId}</p>
                <p>{level}</p>
                <p>{duration}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary" onClick={handleClick}>Edit</Button>
                <Button variant="danger" onClick={onDelete}>Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}
export default React.memo(CourseItem);