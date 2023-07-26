const Card = (props) => {

    return (<>
        <div className="single-product-area">
            <div className="zigzag-bottom"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="product-content-right">
                            <div className="woocommerce">

                            {props.children}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Card;