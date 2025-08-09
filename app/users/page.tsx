import React from "react";

interface TypiData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: TypiData[] = await res.json();
  console.log(users);
  return (
    <>
      <div>UserPage</div>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.length > 0 &&
          users.map((elem: TypiData) => {
            return <li key={elem.id}>{elem.name}</li>;
          })}
      </ul>
    </>
  );
};

export default UserPage;
