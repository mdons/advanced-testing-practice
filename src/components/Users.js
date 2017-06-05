import React from 'react';

function Users(props) {
  var usersDivs = null;
  if(props.users){
    var sorted = props.users.sort((a,b) => {
      return a[props.sortOn] > b[props.sortOn];
    });
    usersDivs = sorted.filter(function(u){
      return !props.firstNameFilter || 
      (props.firstNameFilter && 
      u.first_name.indexOf(props.firstNameFilter) > -1);
    })
    usersDivs = usersDivs.map(function(u,i){
      return <li key={i}>{u.first_name} {u.last_name}</li>
    })
  }
  return (
      <div>
        <h1>Users</h1>
       <ul>{usersDivs}</ul>
      </div>
  );
}

export default (Users);