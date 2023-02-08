import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
// import products from "../../data/Products";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";

const ShopSection = () => {
    // const [products, setProducts] = ueState([]);
    // useEffect(() => {
    //     const fetchproducts = async ()=>{
    //         const {data}= await axios.get ("/api/product")
    //         setProducts(data);
    //     }
    //     fetchproducts();
    // }, []);

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct())
    }, [dispatch]);
    return (
        <div>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 article">
                            <div className="shopcontainer row">
                                {loading ? (
                                    <p>Loading...</p>
                                ) : error ? (
                                    <p>Error:{error}</p>
                                ) : (
                                    <div>
                                        {products.map((product) => (
                                            <div
                                                className="shop col-lg-4 col-md-6 col-sm-6"
                                                key={product._id}
                                            >
                                                <div className="border-product">
                                                    <Link to={`/products/${product._id}`}>
                                                        <div className="shopBack">
                                                            <img src={product.image} alt={product.name} />
                                                        </div>
                                                    </Link>

                                                    <div className="shoptext">
                                                        <p>
                                                            <Link to={`/products/${product._id}`}>
                                                                {product.name}
                                                            </Link>
                                                        </p>

                                                        <Rating
                                                            value={product.rating}
                                                            text={`${product.numReviews} reviews`}
                                                        />
                                                        <h3>${product.price}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                                }
                                {/* Pagination */}
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSection;