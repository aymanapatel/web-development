import { useEffect, useState } from "react";

const UseEffectWithDataHooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  if (data) {
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h1> Github API not working </h1>
    </div>
  );
};

export default UseEffectWithDataHooks;
