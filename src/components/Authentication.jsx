import React, { useState } from "react";
import "./Authentication.css";

// HOC: wraps any component and protects it
export const withAuthentication = (WrappedComponent) => {
  return function AuthProtected(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
      <div className="auth-container">
        <h2 className="title">Authentication Protected Page</h2>

        <div className="auth-buttons">
          <button
            className="btn"
            onClick={() => setIsAuthenticated(true)}
          >
            Login
          </button>

          <button
            className="btn btn-outline"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </button>
        </div>

        <div className="auth-content">
          {isAuthenticated ? (
            <WrappedComponent {...props} />
          ) : (
            <p className="denied">🚫 Access Denied</p>
          )}
        </div>
      </div>
    );
  };
};
