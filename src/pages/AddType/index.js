import React from "react";
import FormInput from "../../components/FormInput/FormInput";
import {Form, Button, ButtonGroup} from "react-bootstrap"
import {StyledContainer, StyledTitle} from "./styles";
import useAddTypeState from "./useAddTypeState";
import { useLocation, useNavigate } from "react-router-dom"
import constants from "../../constants";





const FORM_LIST = [
    { id: "typeId", label: "Type Id", type: "text", placeholder: "Enter typeId" },
    { id: "typeName", label: "TypeName", type: "text", placeholder: "Enter typeName" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter type level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter type duration" }
]




const AddType = ({onNavigate, setTypes}) => {
    const navigate = useNavigate()


    
    const { getter, setter } = useAddTypeState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTypes((prevState) => {
            const newType = { ...getter };
            const newTypes = [...prevState];
            // const payload = {
            //     ...getter,
            // }
            newTypes.push(newType);
            return newTypes;
        })

        navigate((constants.ROUTES.TYPE_LIST)); 
    }

    return(

        <StyledContainer>
        <StyledTitle>Add type Page</StyledTitle>
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
                <Button variant="secondary" onClick={() => onNavigate("/")}>
                    Cancel
                </Button>
            </ButtonGroup>
        </Form>
    </StyledContainer>
    )





}
export default AddType