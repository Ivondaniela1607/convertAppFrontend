import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Button, IconButton, Tooltip} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import reactLogo from './assets/react.svg'
import './App.css'

const initialValues = {
  file: null,
  fileName: '',
  fileUrl:  ''
}

let disable = false

function App() {
  const [file, setFile,  count, setCount, state, setState] = useState(initialValues);

  const fileSelectedHandle = (e) => {
    disable = true;
    console.log("disable", disable)
    setFile({
      file: e.target.files[0],
      fileName: e.target.files[0].name
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('file', file.file, file.fileName);
    axios.post('http://localhost:3000/sql/', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload progress' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    })
  }   
  return (
  <div className="hero">
    <div className='containerHero'>
      <div className='containerImgHero'>
        <img src="src/assets/animation_640_l7wjj8sa.gif" alt="animation transfer" />
      </div>
      <div className='containerDetail'>
        <h1>Migración App</h1>
        <p> Migración de un modelo de datos de MySQl a MongoDB a través de
            la extracción de información en tuplas en archivos JSON a archivos
            BSON
        </p>
        <div className='containerButtons'>
          <input 
            id='file-input' 
            type="file" 
            onChange={fileSelectedHandle}
            accept=".sql"
          />
          {
            disable && (
              <a
                variant='contained'
                onClick={onSubmit}
              >Aceptar
              </a>)
            }
        </div>
      </div>
    </div>
  </div>) 
}

export default App
