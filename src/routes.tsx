import React, { useContext } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./assets/styles/global.scss"
import { Auth } from "./components/auth/auth.component"
import Footer from "./components/layout/footer.component"
import Header from "./components/layout/header.component"
import HomePage from "./pages/home.page"
import NotFoundPage from "./pages/notfound.page"
import { StoreContext } from "./store.context"

const RoutesComponent: React.FC = () => {
    const { authStore } = useContext(StoreContext)

    return (
        <Router>
            <div className="page-container">
                <Header title='Noir Footwear' />
                <div className="content-wrap">
                    <Routes>
                        {
                            authStore.isAuthenticated() ?
                                <>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/login" element={<Auth />} />
                                    <Route path="*" element={<NotFoundPage />} />
                                </> : <Route path="*" element={<Auth />} />
                        }
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default RoutesComponent