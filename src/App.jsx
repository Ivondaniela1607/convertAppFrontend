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
    setFile({
      file: e.target.files[0],
      fileName: e.target.files[0].name
    })
  
    
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('file', file.file, file.fileName);
    axios.post('..../api/upload', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload progress' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    })
  }   
  return (
  <div className="hero">
    <div className='containerHero'>
      <div className='containerImgHero'>
        <img src="/src/assets/animation_640_l7wjj8sa.gif" alt="pruebita" />
      </div>
      <div className='containerDetail'>
        <h1>Convert Apping</h1>
        <p>Convertidor automatizado para scripts de mySql a MongoDB. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, explicabo.</p>
        <div className='containerButtons'>
          {/* <a href="">Subir Archivo</a> */}
          <input 
            id='file-input' 
            type="file" 
            onChange={fileSelectedHandle}
          />
          <label htmlFor="file-input">
         {/*    <Tooltip title="Adjuntar un archivo">
              <IconButton  color='primary' component="span">
                
              </IconButton>
            </Tooltip> */}
          </label>
            {disable &&
              (<a
                variant='contained'
                onClick={onSubmit}
              >Aceptar
              </a>)
            }
        </div>
      </div>
    </div>
  </div>
  ) 

/* state = {
  select: null
} */
/*   state = {
    selectedFile: null
  }; */
  
   /*onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(this.state.selectedFile);
    axios.post("api/uploadfile", formData);
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>   
          <p>File Type: {this.state.selectedFile.type}</p>       
          <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
        );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  return (
    <div>
      <h1>
        GeeksforGeeks
      </h1>
      <h3>
        File Upload using React!
      </h3>
      <div>
        <input type="file" onChange={this.onFileChange} />
        <button onClick={this.onFileUpload}>
          Upload!
        </button>
      </div>
        {this.fileData()}
    </div>
  ); */
}

export default App
