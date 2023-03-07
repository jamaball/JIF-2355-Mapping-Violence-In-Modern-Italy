import React, {useState} from "react";

const UploadDataPage = () => {
  let [file, setFile] = useState({});


  const onChangeHandler = event => {
    //check mime type
    if (event.target.files[0].type === "application/json"){
      setFile(event.target.files[0]);
      var error = document.getElementById("fileTypeError");
      error.textContent = "";
    } else {
      //display wrong file type error
      var error = document.getElementById("fileTypeError")
      error.textContent = "invalid file type. Please upload a .json"
    }
  }

  const onClickHandler = () => {
    console.log(file)
  }
  

    return (
      <div class = "LoginAlign">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Upload Data</h1>
        <br></br>
        <br></br>
        <h2>Title</h2>
        <input id = "inputRoundedEdge"/>
        <br></br>
        <br></br>
        <h2>Email</h2>
        <input id = "inputRoundedEdge"/>
        <br></br>
        <br></br>
        <label for="myfile">Select a file:</label>
        <br></br>
        <input type="file" id="myfile" name="myfile"
               onChange={onChangeHandler} />
        <br />
        <label id="fileTypeError"></label>
        <br />
        
        <input type="submit" onClick={onClickHandler}/>
      </div>
    );
  };
    
  export default UploadDataPage;