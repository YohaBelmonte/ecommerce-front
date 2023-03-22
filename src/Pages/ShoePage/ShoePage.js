import "./ShoePage.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useHome from "../../Utils/useHome";
import NavBarComponent from "../../components/Navbar/Navbar";
import useCart from "../../Utils/useShoppingCart";
import Footer from "../../components/Footer/Footer";

function ShoePage() {
  //  //hook
  const { product } = useHome();
  const { cart } = useCart();

  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(
      ".img-showcaseShoe img:first-child"
    ).clientWidth;

    document.querySelector(".img-showcaseShoe").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  window.addEventListener("resize", slideImage);

  const selectShoeId = localStorage.getItem("selectShoe");

  const MapShoe = product.find((item) => {
    if (item._id == selectShoeId) {
      return item;
    }
  });


  return (
    <div>
      <NavBarComponent size={cart.length} />
      <div className="card-wrapperShoe">
        <div className="cardShoe">
          {/* <!-- card left --> */}
          <div className="product-imgsShoe">
            <div className="img-display">
              <div className="img-showcaseShoe">
                <img src={MapShoe?.image} alt="shoe image" />
                <img src={MapShoe?.image2} alt="shoe image" />
                <img src={MapShoe?.image3} alt="shoe image" />
                <img src={MapShoe?.image4} alt="shoe image" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id="1">
                  <img src={MapShoe?.image} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="2">
                  <img src={MapShoe?.image2} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="3">
                  <img src={MapShoe?.image3} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="4">
                  <img src={MapShoe?.image4} alt="shoe image" />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- card right --> */}
          <div className="product-contentShoe">
            <h2 className="product-titleShoe">{MapShoe?.name}</h2>
            <a href="#" className="product-linkShoe">
              visit nike store
            </a>
            <div className="product-ratingShoe">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
              <span> {MapShoe?.rating}</span>
            </div>

            <div className="product-price">
              <p className="new-price">
                Precio: <span>$ {MapShoe?.price}</span>
              </p>
            </div>

            <div className="product-detail">
              <h2>Descripción: </h2>
              <p>{MapShoe?.description}</p>

              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="green"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>{" "}
                  Color: <span>Blanco</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="green"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>{" "}
                  Disponibilidad: <span>En stock</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="green"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>{" "}
                  Categoría: <span>Sneakers</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="green"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>{" "}
                  Envío: <span>a domicilio a cualquier país</span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              <input type="number" min="0" defaultValue={1} />
              <button type="button" className="btn">
               Añadir al carrito <i className="fa fa-shopping-cart"></i>
              </button>

            </div>

            <div className="social-links">
              <p>Compartir: </p>

              <Link className="link-icon" to="/">
                <i className="fa fa-facebook-f"></i>
              </Link>
              <Link className="link-icon" to="/">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link className="link-icon" to="/">
                <i className="fa fa-instagram"></i>
              </Link>
              <Link className="link-icon" to="/">
                <i className="fa fa-whatsapp"></i>
              </Link>
              <Link className="link-icon" to="/">
                <i className="fa fa-pinterest"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ShoePage;
