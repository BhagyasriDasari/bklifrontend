import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    redirect: false,
    error: null,
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { users, setUser } = this.props;

    // Check if user exists and password matches
    const matchedUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (matchedUser) {
      setUser(matchedUser);
      this.setState({ redirect: true, error: null });
    } else {
      this.setState({ error: "Invalid username or password" });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/dashboard" />;
    }

    return (
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            placeholder="Username"
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
