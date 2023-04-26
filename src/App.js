import logo from './logo.svg';
import './App.css';
import AddCourse from "./pages/AddCourse/index";
import CourseList from "./pages/CourseList/index";
import React from 'react';
import Login from './pages/Login';


function App() {

  // const DATA = [
  //   {title: "titla 1", description:"Description"},
  //   {title: "title2", description:"description2"}
  // ]

  // const [screenName, setScreenName] = React.useState('');
  // let ScreenComponent;
  // let props = {};

  // const [course, setCourse] = React.useState(DATA)


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

  return(
    <div>
      <Login/>
    </div>
  )



}

export default App;
