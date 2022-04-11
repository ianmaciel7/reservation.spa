import React from "react";
import RequireAuth from "../../shared/components/requireAuth";

function RequesterApp() {
  return (
    <RequireAuth>
      <div>RequesterApp</div>
    </RequireAuth>
  );
}

export default RequesterApp;
