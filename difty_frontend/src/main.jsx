import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Gift } from "./Gift.jsx";
import { ChooseBg } from "./chooseBg.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
	path: "/generated_gift",
	element: <Gift />
  },
  {
	path: "/choose-bg",
	element: <ChooseBg />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
