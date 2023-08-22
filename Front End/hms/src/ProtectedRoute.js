import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    var isLoggedIn = false; 
    var isLoggedInFromSessionStorage = sessionStorage.getItem("isLoggedIn");
    if (isLoggedInFromSessionStorage != null) {
        if (isLoggedInFromSessionStorage == "true") {
            isLoggedIn = true;
        }
    }

    if (isLoggedIn)
        {   
            return <Outlet></Outlet>;
        }
        else {
            return <Navigate to={"/login"} replace={true}/>
        }
   
}

export default ProtectedRoute;