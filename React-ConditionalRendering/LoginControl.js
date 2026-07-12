import React, { useState } from "react";

function LoginControl() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    if (isLoggedIn) {
        return (
            <div>
                <h2>Welcome back</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            <h2>Please sign up.</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginControl;
