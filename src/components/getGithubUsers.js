
import React, { useState, useEffect } from "react";

function GetGithubUser() {
  const [gitUserName, setGitUserName] = useState("");
  const [gitUseData, setGitUseData] = useState([]);

  // useEffect(() => {
  
  // },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/babuchirra12/repos`)
    .then((response) => response.json())
    .then((res) => {
      console.log("res", res);
     setGitUseData({ gitUseData: res });
     console.log("gitUseData",gitUseData)
    })
    .catch((error) => console.log(error));
   
  };
  const handleChange = (event) => {
    setGitUserName(event.target.value);
  };
  return (
    <div className="App">
      <h1>Test</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter github username: </label>
        <input type="text" value={gitUserName} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
      <div style={{ width: "80%", margin: "auto", backgroundColor: "gray" }}>
        <table>
          <thead>
            <tr>
              <th>Repo Name </th>
              <th>Description </th>
              <th>Description </th>
            </tr>
          </thead>
          {gitUseData && gitUseData.map((item, i) => {
            return (
              <tbody>
                <tr key={i}>
                      <td>{item.full_name}</td>
                      <td>{item.languages_url}</td>
                      <td>{item.description}</td>
                    </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default GetGithubUser;
