// import { Auth0Provider } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Auth0ProviderWithHistory = ({ children }) => {
//   const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;
//   const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;

//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const onRedirectCallback = (appState) => {
//     navigate(appState?.returnTo || window.location.pathname);
//   };

//   return (
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       // this redirect is for development
//       redirectUri="http://localhost:3000/dashboard"
//       // this redirect is for live
//       // redirectUri="https://app-stock-investment-tracker.herokuapp.com/dashboard"
//       onRedirectCallback={onRedirectCallback}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };

// export default Auth0ProviderWithHistory;

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
