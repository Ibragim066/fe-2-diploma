
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import AppProvider from "./AppProvider";
import MainPage from "./pages/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



export default function App() {
    return (
        <AppProvider>
           <Router>
            <Header />
           <MainPage /> 
           <Footer />
        </Router> 
        </AppProvider>  
    );
}

