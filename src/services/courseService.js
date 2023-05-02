import restAPI from "../config/restAPI";

const LIMIT = 5

export const getCourses = (params) => {
    return restAPI.get(`/courses?_page=${params}&_limit=${LIMIT}`)
}

export const addCourse = (payload) =>{
    return restAPI.post("/courses", payload)
}

export const editCourse = (payload) =>{
    const {id, ...data} = payload
    return restAPI.put("/courses/"+id, data)
}

export const deleteCourse = (id) =>{
    return restAPI.delete(`/courses/${id}`)
}

