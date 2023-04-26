import React from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";

const CourseItem = (props) => {
    const {typeId, typeName, level, duration} = props;
    return (
        <StyledListItem action>
            <Col>
                <h3 className="lead">{typeId}</h3>
                <p>{typeName}</p>
                <p>{level}</p>
                <p>{duration}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}
export default React.memo(CourseItem);