import React from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import Edit from "../../Edit/Edit";
import constants from "../../../constants";
import { useLocation, useNavigate } from "react-router-dom"


const CourseItem = (props) => {
    const {title, description, typeId, level, duration} = props;
    const navigate = useNavigate()
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
                <Button variant="primary" onClick={()=>navigate(constants.ROUTES.EDIT_COURSE)}>Edit</Button>
                <Button variant="danger">Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}
export default React.memo(CourseItem);