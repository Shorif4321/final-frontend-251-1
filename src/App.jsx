import { RouterProvider } from "react-router-dom";
import "./App.css";
import "react-day-picker/style.css";

import router from "./route/Router/Router";

function App({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}

export default App;
