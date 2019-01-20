/*
import './index.css';

const CV = 1000;
// debugger; //SourceMap
console.log(`Course Value:${CV}`);
*/

import './index.css';
import {getUsers, deleteUser} from './api/userApi';


//Populate table of users via API call
getUsers().then(result =>{

    let userBody = "";

    result.forEach( users => {
        userBody+= ` <tr>
        <td><a href="#" data-id="${users.id}" class="deleteUser">Delete</a></td>
        <td>${users.id}</td>
        <td>${users.firstName}</td>
        <td>${users.lastName}</td>
        
        `
    });
    global.document.getElementById('users').innerHTML = userBody;

    const deleteLinks = global.document.getElementsByClassName('deleteUser');

    // Must use array.from to create a real array from a DOM collection
    // getElementsByClassname only returns an "array like" object
    Array.from(deleteLinks, link => {
      link.onclick = function(event) {
        const element = event.target;
        event.preventDefault();
        deleteUser(element.attributes["data-id"].value);
        const row = element.parentNode.parentNode;
        row.parentNode.removeChild(row);
      };
    });
  });

