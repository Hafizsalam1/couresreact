import React from "react";
import {Button} from "react-bootstrap";

import {StyledListGroup, StyledText} from "./styles";
import CourseItem from "./CourseItem/index";

// import courseList from "../../fixtures/courseList.json";
// import {StyledContainer} from "../../components";

const Empty = () => (
    <StyledText>Data masih Kosong...</StyledText>
)

const List = (props) => {
    const {data} = props
    return (
        <StyledListGroup>
            {data.map((item, index) => {
                return (
                    <CourseItem
                        title={item.title}
                        description={item.description}
                        typeId={item.typeId}
                        level={item.level}
                        duration={item.duration}
                        key={index}
                    />
                )
                })}
        </StyledListGroup>
    )
}

const CourseList = ({onNavigate, courses}) => {
    return (
        <>
            <h1>Course List Page</h1>
            {console.log(courses.length)}
            <Button variant="success" onClick={() => onNavigate("add-course")}>Add Course</Button>
            {courses?.length > 0 ? <List data={courses} /> : <Empty />}
        </>
    )
}

export default CourseList;