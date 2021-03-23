import React from "react";


import "./homepage.scss"
import Directory from "../../components/directory/directory"

function HomePage({history}) {
    return (<div className="homepage">
                <Directory history={history}/>
            </div>);
}

export default HomePage;