import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../Supabaseconffig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid username or password");
    } else {
      // Store the session data in localStorage
      localStorage.setItem("userSession", JSON.stringify(data.session));
      navigate("/form");
    }
  };

  useEffect(() => {
    // Check if there's a session in localStorage
    const session = localStorage.getItem("userSession");
    if (session) {
      // Redirect if session is present
      navigate("/form");
    }
  }, [navigate]);

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;
