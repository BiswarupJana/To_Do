import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignupPage } from "./page/SignupPage";
import { HomePage } from "./page/HomePage";
import { LoginPage } from "./page/LoginPage";
import { Root } from "./page/Root";

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
  return <RouterProvider router={router} />;
}
export default App;
