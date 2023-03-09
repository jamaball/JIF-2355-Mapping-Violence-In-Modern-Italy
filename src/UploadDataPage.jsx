import React, {useState} from "react";

const UploadDataPage = () => {
  let [fileEvent, setFileEvent] = useState({});
  const [ JsonFile, setJsonFile ] = useState({});


  const onChangeHandler = event => {
    //check mime type
    if (event.target.files[0].type === "application/json"){
      setFileEvent(event);
      const fileReader = new FileReader();
      fileReader.readAsText(event.target.files[0], "UTF-8");
      fileReader.onload = event => {
        setJsonFile(event.target.result);
      };

      //remove error message
      var error = document.getElementById("fileTypeError");
      error.textContent = "";
    } else {
      //display wrong file type error
      var error = document.getElementById("fileTypeError")
      error.textContent = "invalid file type. Please upload a .json"
    }
  }

  const removeData = () => {
    //console.log(JSON.parse(localStorage.getItem("uploadedData")));
    localStorage.removeItem("uploadedData");
  }

  const onClickHandler = () => {
    /*
    https://stackoverflow.com/questions/61707105/react-app-upload-and-read-json-file-into-variable-without-a-server
    */
    let jsonData = JSON.parse(JsonFile);
    //console.log(jsonData);
    //geojson is the correct format of the json
    let geojson = {
      type: "FeatureCollection",
      features: [],
    };
    for (let i = 0; i < jsonData.length; i++) {
      geojson.features.push({
          "type": "Feature",
          "properties": {
              "id": jsonData[i].id,
              "date": jsonData[i].date,
              "location": jsonData[i].location,
              "weapon": jsonData[i].weapon,
              "conviction": jsonData[i].conviction,
              "description": jsonData[i].description
          },
          "geometry": {
              "type": "Point",
              "coordinates": jsonData[i].coordinates.coordinates
          },
      })
    }
    console.log(geojson);
    localStorage.setItem("uploadedData", JSON.stringify(geojson));
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
        <br />
        <button onClick={removeData}>Remove Uploaded Data</button>
      </div>
    );
  };
    
  export default UploadDataPage;