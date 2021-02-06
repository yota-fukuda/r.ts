import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Jon", age: 24 },
  { name: "Alex", age: 25 },
];

const UserSerch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const founduser = users.find((user) => {
      return user.name === name;
    });
    setUser(founduser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSerch;
