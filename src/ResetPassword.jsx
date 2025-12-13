import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email || !token) {
      setError("Invalid or expired reset link");
      return;
    }

    if (!password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/api/v1/products/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Password reset successful!");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError(data.message || "Failed to reset password");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Reset Password</h2>
      {message && <p style={{ ...styles.message, color: "green" }}>{message}</p>}
      {error && <p style={{ ...styles.message, color: "red" }}>{error}</p>}
      <form onSubmit={handleReset} style={styles.form}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

const styles = {
  container: { width: "350px", margin: "60px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" },
  title: { textAlign: "center" },
  form: { display: "flex", flexDirection: "column" },
  input: { padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #aaa" },
  button: { padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "10px" },
  message: { textAlign: "center", fontSize: "14px" },
};
