import React from "react";
import Pagination from "../components/Pagination/Pagination";
import useQuery from "../hooks/useQuery";
import {Button} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"
import constants from "../constants";


const withPagination = (Component, opts) =>{
    return (props) =>{
        const {onNavigate} = props;
        const [currentPage, onChangeCurrentPage] = React.useState(1)
        const navigate = useNavigate()
        const {data, refetch} = useQuery(opts.query, {
            params: currentPage
        })
        console.log(data)
        const handleClick = () =>{
            navigate((opts.routeAdd))
        }

        return(
            <div>
            <h1>{opts.title}</h1>
            <Button
                variant="success"
                // const route = {opts.routeAdd}
                onClick={handleClick}
            >
                Add Course
            </Button>
            {data.length > 0 ?
                    <Component {...props} data={data} refetch={refetch}/> :
                    <p>data masih kosong</p>
                }
            <Pagination
                onChangeCurrentPage={onChangeCurrentPage}
                currentPage={currentPage}
                totalPage={5}
            />
        </div>
        )


    }

}

export default withPagination