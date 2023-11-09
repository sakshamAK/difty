import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GenerateMessage from "./GenerateMessage.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SharableLink } from "./SharableLink.jsx";
import { Waitlist } from "./waitlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/generate_message",
    element: <GenerateMessage />,
  },
  {
	path: "/:id",
	element: <SharableLink />
  },
  {
	path: "/waitlist",
	element: <Waitlist />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
