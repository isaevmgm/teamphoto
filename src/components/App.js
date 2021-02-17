<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadAlbums } from '../redux/actions';
import Albums from './Albums';
import Photos from './Photos';
import { Route } from 'react-router-dom';
=======
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadAlbums} from "../redux/actions";
import Album from "./Album";
import Photos from "./Photos";
import {Route} from 'react-router-dom';

>>>>>>> 6d5f3d5f3a90ac3fa3576a54499136bceed7c7f9

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums());
  }, []);

  return (
<<<<<<< HEAD
    <Route path="/:id?">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Albums />
          </div>
          <div className="col">
            <Photos />
=======
      <Route path="/:id?">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Album />
            </div>
            <div className="col">
              <Photos />
            </div>
>>>>>>> 6d5f3d5f3a90ac3fa3576a54499136bceed7c7f9
          </div>
        </div>
      </div>
    </Route>
  );
}

export default App;
