import React from "react";
import {connect} from 'react-redux'
import { addToCart, removeToCart } from "../service/actions/actions";

function Home(props) {
    // console.log("props", props)
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.91-img.com/pictures/145323-v4-reliance-jiophone-next-mobile-phone-large-1.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => { props.addToCartHandler({ price: 1000, name: 'i phone 12' }) }}>Add To Cart</button>
                    <button className="remove-cart-btn" onClick={() => { props.removeToCartHandler() }}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=state=>({
    // data:state.cardItems
    })
    
    const mapDispatchToProps=dispatch=>({
        addToCartHandler:data=>dispatch(addToCart(data)),
        removeToCartHandler:data=>dispatch(removeToCart(data))
    
    })
export default connect(mapStateToProps, mapDispatchToProps)(Home)