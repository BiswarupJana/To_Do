import React, { createContext, useContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignupPage } from "./page/SignupPage";
import { HomePage } from "./page/HomePage";
import { LoginPage } from "./page/LoginPage";
import { Root } from "./page/Root";

const AuthContext = createContext({
  isLogedin: false,
  setIsLogedin: () => {},
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  const [isLogedin, setIsLogedin] = useState(false);
  return (
    <AuthContext.Provider value={{ isLogedin, setIsLogedin }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default App;
