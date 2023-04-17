import React from "react";
import {Button} from "react-bootstrap";

import {StyledListGroup, StyledText} from "./styles";
import CourseItem from "./components/CourseItem";

import courseList from "../../fixtures/courseList.json";
import {StyledContainer} from "../../components";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data}) => {
    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <CourseItem data={item} key={item?.courseId} />
            ))}
        </StyledListGroup>
    )
}

const CourseList = ({onNavigate, courses}) => {
    return (
        <StyledContainer>
            <Button variant="success" onClick={() => onNavigate("/add-course")}>Add Course</Button>
            {courses?.data?.length > 0 ? <List data={courses?.data} /> : <Empty />}
        </StyledContainer>
    )
}

export default CourseList;