import React from 'react'

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: any = await res.json();
    console.log(users);
  return (
    <>
    <div>UserPage</div>
    <p>{new Date().toLocaleTimeString()}</p>
    <ul>
        {(users.length > 0) && users.map((elem: any)  => {
            return <li key={elem.id}>{elem.name}</li>
        })}
    </ul>
    </>
  )
}

export default UserPage;