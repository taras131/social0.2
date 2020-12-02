import React from "react";


const withSuspenseHOC = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div>Loading....</div>}>
            <Component {...props}/>
        </React.Suspense>
    }
}

export default withSuspenseHOC;