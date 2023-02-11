import './ShoePage.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';




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
                <img src="https://img.stadiumgoods.com/15/25/25/05/15252505_43090336_2048.jpg" alt="shoe image" />
                <img src="https://img.stadiumgoods.com/15/25/25/05/15252505_43090344_2048.jpg" alt="shoe image" />
                <img src="https://img.stadiumgoods.com/15/25/25/05/15252505_43090360_2048.jpg" alt="shoe image" />
                <img src="https://img.stadiumgoods.com/15/25/25/05/15252505_43090382_2048.jpg" alt="shoe image" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id="1">
                  <img src="https://img.stadiumgoods.com/15/25/25/05/15252505_43090336_2048.jpg" alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="2">
                  <img src="https://img.stadiumgoods.com/15/25/25/05/15252505_43090344_2048.jpg" alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="3">
                  <img src="https://img.stadiumgoods.com/15/25/25/05/15252505_43090360_2048.jpg" alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="4">
                  <img src="https://img.stadiumgoods.com/15/25/25/05/15252505_43090382_2048.jpg" alt="shoe image" />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- card right --> */}
          <div className="product-contentShoe">
            <h2 className="product-titleShoe">Nike AF1 Supreme</h2>
            <a href="#" className="product-linkShoe">visit nike store</a>
            <div className="product-ratingShoe">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
              <span> 4.7(21)</span>
            </div>

            <div className="product-price">
              {/* <p className="last-price">Old Price: <span>$257.00</span></p> */}
              <p className="new-price">Precio: <span>$277</span></p>
            </div>

            <div className="product-detail">
              <h2>Descripción: </h2>
              <p>The Supreme x Nike Air Force 1 Low “Box Logo White” takes a less-is-more approach in design and is part of the “World Famous” streetwear brand’s Spring/Summer 2020 collaboration with Nike. Supreme tones down the use of aggressive branding and instead opts for a simple and subtle design, featuring the iconic red Box Logo on the heel of a standard white-on-white Air Force 1 Low. A silver “AF1” emblem covers the bottom of the laces near the perforated toe, while tonal Nike Air branding on the tongue tab and heel complete the look.</p>
              <p>Release date: Spring 2020.</p>
             
              <ul>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Color: <span>Blanco</span></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Disponibilidad: <span>En stock</span></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Categoría: <span>Sneakers</span></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg>Envío: <span>Worlwide</span></li>
               
              </ul>
            </div>

            <div className="purchase-info">
              <input type="number" min="0" defaultValue={1} />
              <button type="button" className="btn">
                Add to Cart <i className="fa fa-shopping-cart"></i>
              </button>
              {/* <button type="button" className="btn">Compare</button> */}
            </div>

            <div className="social-links">
              
              <p>Compartir: </p>
              
             
              <Link className='link-icon'  to="/">
                <i  className="fa fa-facebook-f"></i>
              </Link>
              <Link className='link-icon'  to="/">
                <i  className="fa fa-twitter"></i>
              </Link>
              <Link className='link-icon'  to="/">
                <i  className="fa fa-instagram"></i>
              </Link>
              <Link className='link-icon'  to="/">
                <i  className="fa fa-whatsapp"></i>
              </Link>
              <Link className='link-icon'  to="/">
                <i  className="fa fa-pinterest"></i>
              </Link>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}
export default ShoePage;