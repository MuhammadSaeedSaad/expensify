import React from "react";
import ReactDom from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <p>you are authenticated</p> : <p>you are not authenticated</p> }
            { props.isAuthenticated && <WrappedComponent { ...props }></WrappedComponent> }
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);

ReactDom.render(<AuthInfo isAuthenticated={false} info="the details" />, document.getElementById("app"));