import React, { Component } from "react";

class Dashboard extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;

    return (
      <div className="card">
        <h2>Dashboard 🎉</h2>
        <p>Welcome back, {user?.username}!</p>
        <button onClick={this.handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    );
  }
}

export default Dashboard;
