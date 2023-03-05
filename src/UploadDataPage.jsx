import React from "react";

const UploadDataPage = () => {
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
        <form action="/action_page.php" 
            enctype="multipart/form-data">
    
            <label for="myfile">Select a file:</label>
    
            <input type="file" id="myfile" 
                name="myfile" multiple="multiple" />
            
            <br /><br />
        
            <input type="submit" />
        </form>
      </div>
    );
  };
    
  export default UploadDataPage;