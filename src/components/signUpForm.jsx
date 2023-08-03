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
      setUsername("");
      setPassword("");
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
        <div>
          <label>
            {/* Username:{" "} */}
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Username"
            />
          </label>
        </div>

        <div>
          <label>
            {/* Password:{" "} */}
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password"
            />
          </label>
        </div>

        <div>
          {" "}
          <button className="btn btn-outline-primary">Submit</button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
