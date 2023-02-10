import './ShoePage.css';
import { useEffect } from "react";

function ShoePage() {

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
    const displayWidth = document.querySelector(".img-showcaseShoe img:first-child")
      .clientWidth;

    document.querySelector(".img-showcaseShoe").style.transform = `translateX(${-(imgId - 1) * displayWidth
      }px)`;
  }


  window.addEventListener("resize", slideImage);  

  




  return (



    <div>
      <div className="card-wrapperShoe">
        <div className="cardShoe">
          {/* <!-- card left --> */}
          <div className="product-imgsShoe">
            <div className="img-display">
              <div className="img-showcaseShoe">
                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id="1">
                  <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="2">
                  <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="3">
                  <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="4">
                  <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- card right --> */}
          <div className="product-contentShoe">
            <h2 className="product-titleShoe">nike shoes</h2>
            <a href="#" className="product-linkShoe">visit nike store</a>
            <div className="product-ratingShoe">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>4.7(21)</span>
            </div>

            <div className="product-price">
              <p className="last-price">Old Price: <span>$257.00</span></p>
              <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
            </div>

            <div className="product-detail">
              <h2>about this item: </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
              <ul>
                <li>Color: <span>Black</span></li>
                <li>Available: <span>in stock</span></li>
                <li>Category: <span>Shoes</span></li>
                <li>Shipping Area: <span>All over the world</span></li>
                <li>Shipping Fee: <span>Free</span></li>
              </ul>
            </div>

            <div className="purchase-info">
              <input type="number" min="0" defaultValue={1} />
              <button type="button" className="btn">
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
              <button type="button" className="btn">Compare</button>
            </div>

            <div className="social-links">
              <p>Share At: </p>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}
export default ShoePage;