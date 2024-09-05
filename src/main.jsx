import {BrowserRouter} from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.scss";
import UserProvider from "./store/user/Context";

createRoot(document.getElementById("root")).render(
    <UserProvider>

        <BrowserRouter>
            <App />
        </BrowserRouter>

    </UserProvider>
);