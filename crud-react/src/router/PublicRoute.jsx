import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import NotFounded from '../views/NotFounded';
import Citas from '../views/Citas/Citas';
import Create from '../views/Create/Create';
import Update from '../views/Update/Update';

export default class PublicRoute extends React.Component {
  render()  {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Citas/>}/>
                <Route path="/create:app" element={<Create/>}/>
                <Route path="/update:app/:id" element={<Update/>}/>
                <Route path="*" element = {<NotFounded/>}/>
            </Routes>
          
        </Router>
      );
    }
}