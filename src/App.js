import "./App.css"; // src/App.js
import contacts from "./contacts.json";
import { useState } from "react"; //importing useState

//function to show only 5 contacts //Importing contacts, total 52 bring first 5 names
const actorsFive = contacts.splice(0, 5);

function App() {
  //const and variable, and hooks
  const [actors, setActors] = useState(actorsFive);

  return (
    <div className="App">
      <table className="tableActors">
        <thead>
        <h1>IronContacts</h1>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => {
            return (
              <tr key={actor.id}>
                <td>
                  <img
                    src={actor.pictureUrl}
                    width="100px"
                    height="120px"
                    alt="Actor"
                  />
                </td>

                <td> {actor.name} </td>
                <td> {Number(actor.popularity).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
