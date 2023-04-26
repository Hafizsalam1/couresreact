import React from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";

const CourseItem = (props) => {
    const {title, description, typeId, level, duration} = props;
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
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}
export default React.memo(CourseItem);