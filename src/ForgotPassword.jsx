import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("http://localhost:3000/api/v1/products/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Reset link sent to your email!");
      } else {
        setMessage(data.message || "Failed to send reset email");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Forgot Password</h2>
      {message && <p style={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

const styles = {
  container: { width: "350px", margin: "60px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" },
  title: { textAlign: "center" },
  form: { display: "flex", flexDirection: "column" },
  input: { padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #aaa" },
  button: { padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "10px" },
  message: { textAlign: "center", fontSize: "14px", color: "green" },
};
