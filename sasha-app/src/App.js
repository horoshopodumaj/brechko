import { useState } from "react";
import "./App.css";
import { IntlProvider } from "react-intl";
import NavBar from "./components/navbar/NavBar";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import GlobalContext from "./contexts/GlobalContext";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
    const [currentLocale, setCurrentLocale] = useState(
        localStorage.getItem("language") || LOCALES.EN
    );
    return (
        <GlobalContext.Provider value={{ currentLocale, setCurrentLocale }}>
            <IntlProvider
                onError={(err) => {
                    if (err.code === "MISSING_TRANSLATION") {
                        //console.warn("Missing translation", err.message);
                        return;
                    }
                    throw err;
                }}
                messages={messages[currentLocale]}
                locale={currentLocale}
                defaultLocale={LOCALES.EN}>
                <div className="App">
                    <NavBar />
                    <div className="app__box">
                        <Home />
                    </div>
                    <Footer />
                </div>
            </IntlProvider>
        </GlobalContext.Provider>
    );
}

export default App;
