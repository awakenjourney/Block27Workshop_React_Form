import { useState } from "react";

const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Hello");

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const result = await response.json();
      setToken(result.token);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h2> Sign Up</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:{" "}
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn btn-primary btn-lg btn-block">Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
