import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  state = {
    user: null, // will hold logged in user
    users: [],  // registered users
  };

  setUser = (user) => {
    this.setState({ user });
  };

  addUser = (newUser) => {
    this.setState((prev) => ({
      users: [...prev.users, newUser],
    }));
  };

  logout = () => {
    this.setState({ user: null });
  };

  render() {
    const { user, users } = this.state;

    return (
      <Router>
        <div className="app">
          <header className="topbar">
            <span className="brand">🌈 My App</span>
            <nav>
              <Link className="link" to="/login">
                Login
              </Link>
              <Link className="link" to="/register">
                Register
              </Link>
              <Link className="link" to="/dashboard">
                Dashboard
              </Link>
            </nav>
          </header>

          <main className="main">
            <Routes>
              <Route path="/" element={<Navigate to="/register" />} />

              <Route
                path="/login"
                element={
                  <Login
                    setUser={this.setUser}
                    users={users}
                    user={user}
                  />
                }
              />

              <Route
                path="/register"
                element={<Register addUser={this.addUser} />}
              />

              <Route
                path="/dashboard"
                element={
                  user ? (
                    <Dashboard user={user} logout={this.logout} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            </Routes>
          </main>

          <footer className="footer">© 2025 My App</footer>
        </div>
      </Router>
    );
  }
}

export default App;
