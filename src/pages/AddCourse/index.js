import React from "react";
import FormInput from "../../components/FormInput/FormInput";
import {Form, Button, ButtonGroup} from "react-bootstrap"
import {StyledContainer, StyledTitle} from "./styles";
import useAddCourseState from "./useAddCourseState";
import { useLocation, useNavigate } from "react-router-dom"
import constants from "../../constants";
import { addCourse } from "../../services/courseService";
import useMutation from "../../hooks/useMutation";






const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "typeId", label: "Type Id", type: "text", placeholder: "Enter course type id" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter Course duration" }
]




const AddCourse = ({onNavigate, setCourses}) => {
    const navigate = useNavigate()


    
    const { getter, setter } = useAddCourseState();
    const {onMutation, loading} = useMutation(addCourse, {
        onSuccess: () =>navigate((constants.ROUTES.COURSE_LIST)),
        onError: () => {}
    })

    const onSubmit = () =>{
        onMutation(getter)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCourses((prevState) => {
            const newCourse = { ...getter };
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
        <StyledTitle>Add Course Page</StyledTitle>
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
                <Button variant="success" onClick={onSubmit} disabled={getter.isDisable}>
                    Submit
                </Button>
                <Button variant="secondary" onClick={() => onNavigate("/")}>
                    Cancel
                </Button>
            </ButtonGroup>
        </Form>
    </StyledContainer>
    )





}
export default AddCourse