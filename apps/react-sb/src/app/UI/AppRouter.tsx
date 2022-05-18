import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../../context";
import Navbar from "../components/navbar/navbar";
import Login from "../pages/login/login";
import Product from "../pages/product/product";
import { privateRoutes, publicRoutes } from "../routes/routes";

const AppRouter = () => {
    const { isAuth } = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" element={<Navbar />}>

                {isAuth
                    ?
                    privateRoutes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.component}
                            key={route.path}
                        />
                    ))
                    :
                    publicRoutes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.component}
                            key={route.path}
                        />
                    ))
                }

                <Route
                    path="*"
                    element={
                        isAuth ? <Product /> : <Login />
                    }
                />
            </Route>
        </Routes>
    )
}

export default AppRouter;