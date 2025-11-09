import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./context/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import toast, { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <Toaster position="bottom-right" />
        <App />
      </UserContext>
    </QueryClientProvider>
  </StrictMode>
);
