import React from "react";
import FormInput from "../../components/FormInput/FormInput";
import {Form, Button, ButtonGroup} from "react-bootstrap"
import {StyledContainer, StyledTitle} from "./styles";
import constants from "../../constants";
import useEditCourseState from "./useEditState";
import { useNavigate, useParams } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import useAddCourseState from "../AddCourse/useAddCourseState";
import { editCourse } from "../../services/courseService";

const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "typeId", label: "Type Id", type: "text", placeholder: "Enter course type id" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter Course duration" }
];


const Edit = () =>{
    // const { id } = useParams();
    const navigate = useNavigate()
    const { onMutation } = useMutation(editCourse,{
        onSuccess: () =>{},
        onError: () => {}
      });

    
    const { getter, setter } = useAddCourseState();
    const onSubmit = (data) => {

        // console.log(getter)
        onMutation(getter)
        navigate((constants.ROUTES.COURSE_LIST)); 
      };
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setCourses((prevState) => {
    //         const newCourse = { ...getter };
    //         newCourse.title = {title}
    //         const newCourses = [...prevState];
    //         // const payload = {
    //         //     ...getter,
    //         // }
    //         newCourses.push(newCourse);
    //         return newCourses;
    //     })

    //     navigate((constants.ROUTES.COURSE_LIST)); 
    // }

    return(

        <StyledContainer>
        <StyledTitle>Edit type Page</StyledTitle>
        <Form >
            { FORM_LIST.map(item => (
                <FormInput
                    label={item.label}
                    type={item.type}
                    value={getter[item.id]}
                    onChange={setter[item.id]}
                    placeholder={item.placeholder}
                    id = {item.id}

                />
            )) }
            <ButtonGroup>
                <Button onClick={onSubmit} type= 'submit' variant="success" disabled={getter.isDisable}>
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