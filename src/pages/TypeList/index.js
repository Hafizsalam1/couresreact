import React from "react";
import {Button} from "react-bootstrap";

import {StyledListGroup, StyledText} from "./styles";
import TypeItem from "./TypeItem/index";
import { useLocation, useNavigate } from "react-router-dom"
import constants from "../../constants";


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
                    <TypeItem
                        typeName={item.typeName}
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

const TypeList = ({types}) => {
    const navigate = useNavigate()


    return (
        <>
            <h1>Type List Page</h1>
            {console.log(types.length)}
            <Button variant="success" onClick={()=>navigate(constants.ROUTES.ADD_TYPE)}>Add Type</Button>
            {types?.length > 0 ? <List data={types} /> : <Empty />}
        </>
    )
}

export default TypeList;