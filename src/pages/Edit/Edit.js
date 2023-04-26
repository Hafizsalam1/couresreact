import React from "react";
import FormInput from "../../components/FormInput/FormInput";
import {Form, Button, ButtonGroup} from "react-bootstrap"
import {StyledContainer, StyledTitle} from "./styles";
import { useLocation, useNavigate } from "react-router-dom"
import constants from "../../constants";
import useEditCourseState from "./useEditState";

const FORM_LIST = [
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "typeId", label: "Type Id", type: "text", placeholder: "Enter course type id" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter Course duration" }
]


const Edit = ({title, setCourses}) =>{
    const navigate = useNavigate()


    
    const { getter, setter } = useEditCourseState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCourses((prevState) => {
            const newCourse = { ...getter };
            newCourse.title = {title}
            const newCourses = [...prevState];
            // const payload = {
            //     ...getter,
            // }
            newCourses.push(newCourse);
            return newCourses;
        })

        navigate((constants.ROUTES.COURSE_LIST)); 
    }

    return(

        <StyledContainer>
        <StyledTitle>Edit type Page</StyledTitle>
        <Form>
            { FORM_LIST.map(item => (
                <FormInput
                    label={item.label}
                    type={item.type}
                    value={getter[item.id]}
                    onChange={setter[item.id]}
                    placeholder={item.placeholder}
                    key={item.id}
                />
            )) }
            <ButtonGroup>
                <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable}>
                    Submit
                </Button>
                <Button variant="secondary">
                    Cancel
                </Button>
            </ButtonGroup>
        </Form>
    </StyledContainer>
    )

    

    

}
export default Edit