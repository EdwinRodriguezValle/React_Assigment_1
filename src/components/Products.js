import React from "react";

function Products({label, img, title, price}){
    return(
        <div>
            <span>{label}</span>
            <img src={img} alt="title"/>
            <p>{title}</p>
            <h4>€{price}</h4>
        </div>
    );
}

export default Products;
