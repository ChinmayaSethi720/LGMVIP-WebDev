import React from 'react'
import loader from './loader.gif'

const Users = ({ loading, users }) => {
  const base = {
    display: 'grid',
    gridTemplateColumns: 'repeat(' + 3 + ',' + 1 + 'fr)',
  };
  return loading ? (
    <div id="main" align="center">
      <img src={loader} alt="Loaading.." className="loader" />
    </div>
  ) :
    (
      <div id="main" style={base}>

        {users.map(user =>
          <div className="members" key={user.id}>
            {
              console.log(user)
            }

            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">{user.first_name} {user.last_name}</h1>
            <p className="email">{user.email}</p>
            <p>User ID: {user.id}</p>
          </div>
        )
        }
      </div>
    )
}

export default Users;