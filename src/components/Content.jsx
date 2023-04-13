import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home'
import Watch from './pages/Watch';
import { Component } from 'react';
import { videos } from './backend/consts';
import Modal from './Modal';
import { styles } from './style';
import { navLink } from './consts';

export default function Content() {
  return (
    <div className='w-full'>
      <div className={``}>
        <Routes>
          {
            navLink.map((nav)=>(
              <Route path={nav.path} element={nav.element}></Route>
            ))
          }
        </Routes>
      </div>
    </div>
  );
}