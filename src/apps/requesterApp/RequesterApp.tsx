import React from "react";
import RequireAuth from "../../shared/auth/requireAuth";

function RequesterApp() {
  return (
    <RequireAuth>
      <div>RequesterApp</div>
    </RequireAuth>
  );
}

export default RequesterApp;
