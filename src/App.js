import contacts from './contacts.json';
import { useState } from "react";
import './App.css';

const firstFive = contacts.slice(0,5);
function App() {
  
  const [contactsList, setContactsList] = useState(firstFive);
  // console.log(contactsList);
  
  const addRandomContact = () => {
    const visibleIds = contactsList.map((cont) => cont.id);
    console.log("VISIBLES IDS", visibleIds);
    const contactsElegibles = contacts.filter(cont => !visibleIds.includes(cont.id));
    const random = Math.floor(Math.random()* contactsElegibles.length);
    console.log("RANDOM", random);
    const newContact = contactsElegibles[random];
    console.log("NEW CONTACT", newContact);
    
    const contactsUpdate = [...contactsList, newContact];
    setContactsList(contactsUpdate);
    //console.log(setContactsList(contactsUpdate));
  }

  const sortByName = () => {
    const copyContact = [...contactsList];
    const sortName = copyContact.sort((a,b)=> a.name > b.name ? 1: -1);
    console.log("SORTING", sortName);
    setContactsList(sortName)
  }

  const sortByPopularity = () => {
    const copyContact = [...contactsList];
    const sortPopularity = copyContact.sort((a,b) => b.popularity - a.popularity )
    console.log("SORTING POPULARITY", sortPopularity);
    setContactsList(sortPopularity)
  }

  const deleteContact = (id) =>{
    const newArr = contactsList.filter((contact)=>{
      return contact.id !== id;
    });
    setContactsList(newArr);
  }
//   const deleteMovie = (movieId)=>{
//     console.log("deleteMovie ", movieId);
//     const moviesArray = movies.filter(movie => {
//         return movie._id != movieId;
//     })
//     setMovies(moviesArray);
// }




  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      {/* <tbody> */}
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
        <th>Actions</th>
      </tr>
      {/* </tbody> */}
     {contactsList.map((contact) => (
      <tbody>
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl} alt=""/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>{contact.wonOscar && "🏆"}</td>
          <td>{contact.wonEmmy && "🎖"}</td>
          <td><button onClick={()=>{deleteContact(contact.id)}}>Delete</button></td>
          {/* {Object.values(contact).map((cont) => <td>{cont}</td>)} */}
        </tr>
      </tbody>
     ))}




    </div>
  );
}

export default App;
