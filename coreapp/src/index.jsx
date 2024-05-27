import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./assets/icons/remixicon.css";
import "./assets/less/core-theme.less";

import App from "./App";
import { ThemeProvider } from '@contexts/themeContext'; // Ensure this path is correct

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}> {/* Use a more descriptive fallback if needed */}
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider> {/* Wrap App component with ThemeProvider */}
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </Suspense>,
    document.getElementById("root")
);
