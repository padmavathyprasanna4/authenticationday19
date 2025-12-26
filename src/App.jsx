import React from "react";
import { withAuthentication } from "./components/Authentication.jsx";

// This is the protected page/component
function SecretPage() {
  return (
    <div>
      <h3>✅ Welcome!</h3>
      <p>This is a protected page. Only authenticated users can see this.</p>
    </div>
  );
}

// Wrap protected component with the HOC
const ProtectedSecretPage = withAuthentication(SecretPage);

export default function App() {
  return <ProtectedSecretPage />;
}
