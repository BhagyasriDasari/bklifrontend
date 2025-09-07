import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    redirect: false,
    error: null,
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const { addUser } = this.props;

    if (password.length < 4) {
      this.setState({ error: "Password must be at least 4 characters" });
      return;
    }

    if (!email.includes("@")) {
      this.setState({ error: "Enter a valid email address" });
      return;
    }

    addUser({ username, email, password }); // now also saving email
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/login" />;
    }

    return (
      <div className="card">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            required
          />
          {this.state.error && <div className="error">{this.state.error}</div>}
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
