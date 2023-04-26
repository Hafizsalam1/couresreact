import logo from './logo.svg';
import './App.css';
import AddCourse from "./pages/AddCourse/index";
import CourseList from "./pages/CourseList/index";
import React from 'react';
import Login from './pages/Login';

import constants from './constants';
import {Routes, Route, Navigate, Outlet} from "react-router-dom"
import NavBar from './pages/NavBar';
import AddType from './pages/AddType/index';
import TypeList from './pages/TypeList/index';
import Edit from './pages/Edit/Edit';


const {ROUTES} = constants;

const ProtectedRoute = (props) =>{
  const {isLoggedIn} = props
  if(!isLoggedIn){
    return<Navigate to={ROUTES.LOGIN} replace = {true}/>
  }
  return(
    <>
    <Outlet/>
    </>
  )
}



function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)


  const DATA = [
    {title: "titla 1", description:"Description"},
    {title: "title2", description:"description2"}
  ]


  const DATATYPE = []

  // const [screenName, setScreenName] = React.useState('');
  // let ScreenComponent;
  // let props = {};

  const [course, setCourse] = React.useState(DATA)
  const [type, setType] = React.useState(DATATYPE)
  const [titlea, setTitlea] = React.useState("title")


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route element={<Login/>} path = {ROUTES.LOGIN}/>
        <Route element={<ProtectedRoute isLoggedIn = {isLoggedIn}/>}>
        <Route element = {<AddCourse setCourses={setCourse}/>} path = {ROUTES.ADD_COURSE}/>
        <Route element = {<CourseList courses={course}/>} path = {ROUTES.COURSE_LIST}/>
        <Route element = {<AddType setTypes={setType}/>} path = {ROUTES.ADD_TYPE}/>
        <Route element = {<TypeList types={type}/>} path = {ROUTES.TYPE_LIST}/>
        <Route element = {<Edit title={titlea}/>} path = {ROUTES.EDIT_COURSE}/>
        </Route>
      </Routes>
    </div>
  );




  // switch (screenName){
  //   case "course-list":
  //     ScreenComponent = CourseList;
  //     props = {
  //       courses:course
  //     }
  //     break;
  //   case "add-course":
  //     ScreenComponent = AddCourse;
  //     props = {
  //       setCourses:setCourse
  //     }  
  //     break;
    
  //   default:
  //     ScreenComponent = CourseList;
  //     props = {
  //       courses:course
  //     }


  // }

  // const onNavigate = (screenName) =>{
  //   setScreenName(screenName)
  // }



  // return <ScreenComponent{...props} onNavigate = {onNavigate}/>

  // return(
  //   <div>
  //     <Login/>
  //   </div>
  // )



}

export default App;
