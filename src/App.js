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
      <div>
        <div class = "FilteringHeaders">
          <Link class = "ButtonLogin" to="/">Map</Link>
          {/* <Link class = "ButtonLogin" to="/LoginPage">Login</Link> */}
          {/* <Link class = "ButtonLogin" to="/RegisterPage">Register</Link>*/} 
          <Link class = "ButtonLogin" to="/UploadDataPage">Upload Data</Link>
          <Link class = "ButtonLogin" to="/LoginPage">Admin</Link>
        </div>
        <Routes>
          <Route exact path="/" element={< MapPage />}></Route>
          <Route exact path="/LoginPage" element={< LoginPage />}></Route>  
          <Route exact path="/RegisterPage" element={< RegisterPage />}></Route>
          {/* <Route element={<PrivateRoute/>}> */}
            <Route exact path="/AdminPage" element={< AdminPage />}></Route>
          {/* </Route> */}
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
