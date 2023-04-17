import React from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";

const CourseItem = ({data}) => {
    return (
        <StyledListItem action>
            <Col>
                <h3 className="lead">{data?.title}</h3>
                <p>{data?.description}</p>
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