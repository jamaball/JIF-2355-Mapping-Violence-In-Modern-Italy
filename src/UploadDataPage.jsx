import React, {useState} from "react";


const UploadDataPage = () => {
  const [ JsonFileChanged, setJsonFileChanged ] = useState({});
  const [ JsonFile, setJsonFile ] = useState({});


  const onChangeHandler = event => {
    //check mime type
    if (event.target.files[0].type === "application/json"){
      const fileReader = new FileReader();
      fileReader.readAsText(event.target.files[0], "UTF-8");
      fileReader.onload = event => {
        setJsonFile(event.target.result);
        setJsonFileChanged(true);
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
    localStorage.removeItem("uploadedData");
    var error = document.getElementById("fileTypeError");
    error.textContent = "Uploaded Data reset";
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
    localStorage.setItem("uploadedData", JSON.stringify(geojson));
    if (JsonFileChanged) {
      var error = document.getElementById("fileTypeError");
      error.textContent = "Successfully uploaded!";
      var fileInput = document.getElementById("fileInput");
      fileInput.value = null;
      setJsonFileChanged(false);
    }
  }
  

    return (
      <div className = "col-md-4 m-auto">
        <div className="card card-body mt-5">
          <div class = "LoginAlign">
          <h2 className="text-center">Upload Data</h2>
            {/** 
            <h2>Title</h2>
            <input id = "inputRoundedEdge"/>
            <br></br>
            <br></br>
            <h2>Email</h2>
            <input id = "inputRoundedEdge"/>
            <br></br>
            <br></br>
            */}
            <div className="form=group">
              <label for="fileInput">Select a file:</label>
              
              <div>
                <input className="file"  type="file" id="fileInput"
                      onChange={onChangeHandler} />
                <br />
                <label id="fileTypeError"></label>
              </div>
   
            </div>
            
            <input className="ButtonLogin" type="submit" onClick={onClickHandler}/>
            <br />
            <button className="Button" onClick={removeData}>Remove Uploaded Data</button>
          </div>
        </div>
      </div>
    );
  };
    
  export default UploadDataPage;