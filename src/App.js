import './App.css';
import React , { useEffect } from 'react';
import MapPage from "./MapPage"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import AdminPage from './AdminPage';
import UploadDataPage from './UploadDataPage';

import {Provider} from 'react-redux';
import store from './store';
import PrivateRoute from "./PrivateRoute";

import { loadUser } from "./actions/auth"

import {
  HashRouter as Router,
  Routes,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <>
      <Provider store={store}>
      <Router>
        <div class = "FilteringHeaders">
          <h1 id="PageTitle">&nbsp;Mapping Violence in Early Modern Italy</h1>
         
            <Link class = "ButtonLogin NavBarButtons" to="/UploadDataPage">Upload Data</Link>
            <Link class = "ButtonLogin NavBarButtons" to="/LoginPage">Admin</Link>
            <Link class = "ButtonLogin NavBarButtons" to="/">Map</Link>
        <Routes>
          <Route exact path="/" element={< MapPage />}></Route>
          <Route exact path="/LoginPage" element={< LoginPage />}></Route>  
          <Route exact path="/RegisterPage" element={< RegisterPage />}></Route>
            <Route exact path="/AdminPage" element={< AdminPage />}></Route>
          {/* <Route 
            path="/"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          ></Route> */}
          <Route exact path="/UploadDataPage" element={< UploadDataPage />}></Route>
        </Routes>
        
      </div>
      </Router>
      </Provider>
    </>
  
  )

}
