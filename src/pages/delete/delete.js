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


const Delete = () =>{
    const { id } = useParams();
    const navigate = useNavigate()
    const { onMutation } = useMutation(editCourse,{
        onSuccess: () =>{},
        onError: () => {}
      });

    
    const { getter, setter } = useAddCourseState();
    const onSubmit = () => {
        onMutation(id)
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
                    key={item.id}
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
export default Delete