import React from "react";
import "../styles/Error.css"

function Error() {
    return (
        <>
            <div class="container-notfound">
                <h1>404 Not Found</h1>
                <h3>The page you are looking for could not be found.</h3>
                <button className="notfound-botton" ><a href="/">Go back to homepage</a></button>
            </div>
        </>

    );
}

export default Error;