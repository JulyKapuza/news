import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {App} from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import { ThemeProvider, createTheme } from "@mui/material/styles";



const theme = createTheme({
  palette: {
    primary: {
      main: "#1a237e",
    },
    secondary: {
      main: "#e8eaf6",
    },
  
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/news">
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
              <ThemeProvider theme={theme}>
                <App />
              </ThemeProvider>
            </I18nextProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
