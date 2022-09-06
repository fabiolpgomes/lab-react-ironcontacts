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
      <thead>
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
                <img classeName="imgActor" src={actor.pictureUrl} alt="Actor" />
              </td>

              <td> {actor.name} </td>
              <td> {Number(actor.popularity).toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
}

export default App;
