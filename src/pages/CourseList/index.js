import React from "react";
import {Button} from "react-bootstrap";

import {StyledListGroup, StyledText} from "./styles";
import CourseItem from "./CourseItem/index";
import { useLocation, useNavigate } from "react-router-dom"
import constants from "../../constants";
import useQuery from "../../hooks/useQuery";
import withPagination from "../../hoc/withPagination";
import useMutation from "../../hooks/useMutation";
import {deleteCourse, getCourses} from "../../services/courseService";



// import courseList from "../../fixtures/courseList.json";
// import {StyledContainer} from "../../components";

const Empty = () => (
    <StyledText>Data masih Kosong...</StyledText>
)


const List = (props) => {
    const {data, refetch} = props
    const {onMutation: onDelete} = useMutation(deleteCourse, {
        onSuccess: refetch
    })

    const onEditHandler = (id) => () => {


    }

    const onDeleteHandler = (id) => () => {
        const isOk = window.confirm("Are you sure to delete this course?")
        console.log(id)
        if (isOk) onDelete(id)
    }

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
                        onDelete={onDeleteHandler(item.id)}
                        key={index}
                        
                    />
                )
                })}
        </StyledListGroup>
    )
}

const CourseList = () => {
    const {data: courses} = useQuery(getCourses,{})

    const navigate = useNavigate()


    return (
        <>
            <h1>Course List Page</h1>
            {console.log(courses.length)}
            <Button variant="success" onClick={()=>navigate(constants.ROUTES.ADD_COURSE)}>Add Course</Button>
            {courses?.length > 0 ? <List data={courses} /> : <Empty />}
        </>
    )
}

// export default CourseList

export default withPagination(List, {
    query: getCourses,
    title: "Course List Page",
    routeAdd: constants.ROUTES.ADD_COURSE
})