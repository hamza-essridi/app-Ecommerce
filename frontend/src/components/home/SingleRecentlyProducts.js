import { useState, useCallback, useEffect } from "react";
import "./SingleProduct.css";



const SingleRecentlyProducts = (props) => {
    const [recentlyViewed, setRecentlyViewed] = useState({
        id: "",
        name: "",
        price: "",
        discountRate: "",
        review: "",
        image: "",
    });

    const fetchHandler = useCallback(async (id) => {

        const response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json();

        // console.log(data);
        setRecentlyViewed({
            id: data.id,
            name: data.name,
            price: data.price,
            discountRate: data.discountRate,
            review: data.review,
            image: data.imageName,
        });
        console.log(recentlyViewed)

    }, []);

    useEffect(() => {
        fetchHandler(props.id);

    }, [fetchHandler]);


    let srcImage = recentlyViewed.image.split("-")[0];

    return (<>
        <div className="single-wid-product">
            <a href="single-product.html">
                <img
                    // src={`/produts-img/apple/apple-ipad-97-2017.jpg`}
                    src={`/produts-img/${srcImage}/${recentlyViewed.image}`}
                    alt={recentlyViewed.name}
                    className="product-thumb"
                />
            </a>
            <h2>
                <a href="single-product.html">{recentlyViewed.name}</a>
            </h2>
            <div className="product-wid-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div>
            <div className="product-wid-price">
                {/* <ins>${finaleprice}</ins> */}
                <ins>$1000</ins>
                <del>${recentlyViewed.price}</del>
            </div>
        </div>
    </>);
}
export default SingleRecentlyProducts;