import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import CreateExercise from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercise.component";
import ExercisesList from "./components/exercises-list.component";
function App() {
  return (
      <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/user" component={CreateUser} />
      <Route path="/create" component={CreateExercise}/>
      <Route path="/edit/:id" component={EditExercise}/>
      <Route path="/" component={ExercisesList}/>
      </div> 
      </Router>
    
  );
}

export default App;
