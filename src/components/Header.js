import React from "react";


function Header(props) {
    // console.log("home", props)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964__340.png" />
            </div>
        </div>
    )
}
export default Header