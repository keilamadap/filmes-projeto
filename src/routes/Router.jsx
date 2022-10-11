import Config from "../pages/Config"
import MainPage from "../pages/MainPage"

const Router = () => {
    return (
        <Router>
            <Routes>
                <Route path="/config" element={Config} />
                <Route exact path="/" element={MainPage} />
            </Routes>
        </Router>
    )
}