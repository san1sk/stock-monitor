import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

const ProtectedRoute = ({ element }) => {
  const Component = withAuthenticationRequired(element, {
    onRedirecting: () => <Loading />,
  });

  return <Component />;
};

export default ProtectedRoute;