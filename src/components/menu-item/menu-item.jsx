import React from "react";
import "./menu-item.scss";
import {withRouter} from "react-router-dom";

function MenuItem(props) {

  return (
        <div 
        onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
          className={`${props.size} menu-item`}>
          

            <div 
              className="background-image" 
              style= {{backgroundImage:`url(${props.imageUrl})`}}>
            </div>
            
            <div 
                className="content">
                  
                  <h1 className="title">{props.title.toUpperCase()}</h1>
                  <span className="subtitle">SHOP NOW</span>
            </div>

        </div>
);
}

export default withRouter(MenuItem);
