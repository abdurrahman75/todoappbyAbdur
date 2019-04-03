import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import CreateTodo from "./components/create-todo";
import EditTodo from "./components/edit-todo";
import TodosList from "./components/todo-list";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component{
  
  render() {
     return (
         <Router>
           <div>
            <Navbar />
              <div className="footer">
              <Footer />
              </div>
            

           <Route exact path="/"  component={TodosList} />
           <Route path="/edit/:id" component={EditTodo} />
           <Route path="/create-todo" component={CreateTodo} />

         </div>
         </Router>
    
      
    );
  }
}

export default App;
