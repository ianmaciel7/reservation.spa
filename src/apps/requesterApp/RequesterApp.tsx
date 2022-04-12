import React from "react";
import Layout from "../../shared/components/layout";
import RequireAuth from "../../shared/components/requireAuth";

function RequesterApp() {
  return (
    <RequireAuth>
      <div>RequesterApp</div>
    </RequireAuth>
  );
}

export default RequesterApp;
