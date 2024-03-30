
import { useEffect, useState } from 'react';
import './App.css';
import { fetchProductCategory, fetchProductData } from './User';
import { Flexsample } from './Flexsample';
import { HeaderComponent } from './component/headerComponent';


function App() {
  const [categories, setCategories] = useState([])
  const [productDetails, setProductDetails] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const productDataResults = await fetchProductData()
      const productCategoryResults = await fetchProductCategory()

      console.log("fetchProductDataResults :", productDataResults)
      console.log("fetchProductCategoryResults :", productCategoryResults)



      if (productDataResults.status === 200) {
        setProductDetails(productDataResults.data.products)
        console.log("productDataResults.data.products :", productDataResults.data.products)

      } else {

      }

      if (productCategoryResults.status === 200) {
        setCategories(productCategoryResults.data)
        console.log("productCategoryResults.data :", productCategoryResults.data)
      } else {

      }

    }
    fetchData()


  }, [])

  let product = {
    "id": 6,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "discountPercentage": 11.02,
    "rating": 4.57,
    "stock": 83,
    "brand": "Apple",
    "category": "laptops",
    "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    "images": [
      "https://cdn.dummyjson.com/product-images/6/1.png",
      "https://cdn.dummyjson.com/product-images/6/2.jpg",
      "https://cdn.dummyjson.com/product-images/6/3.png",
      "https://cdn.dummyjson.com/product-images/6/4.jpg"
    ]
  }

  const StarRating = (rating) => {
    const stars = [];

    // Round the rating to the nearest half star
    const roundedRating = Math.round(rating * 2) / 2;

    // Fill stars based on rating
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push(<span key={i} className="filled">&#9733;</span>);
        // if (i < roundedRating - 0.5) {
        //   // Full star
        //   // stars.push(<span key={i} className="filled">&#9733;</span>);

        //   stars.push(<span key={i}>&#9733;</span>);
        // } else {
        //   // Half star
        //   stars.push(<span key={i}>&#9734;&#9733;</span>);
        //   // stars.push(<span key={i} className="half-filled">&#9734;&#9733;</span>);

        // }
      } else {
        // Empty star
        stars.push(<span key={i}>&#9734;</span>);
        // stars.push(<span key={i} className="empty">&#9734;</span>);

      }
    }

    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  };



  return (
    // <div>
    //   <Flexsample></Flexsample>
    // </div>
    <div className=' vh-100'>
      <div className="container header-fontsize mt-2" >

        <HeaderComponent />





          
        <div className="grdient">
          <div>Lorem lpsum</div>
          <div>Slash Sales beginf in June. Get up to 80% Discount on all products Read More</div>
        </div>

        <div className='category-input-containner'>
          <select className="form-select" onChange={() => { }}>
            <option selected value=''>Select Category</option>
            {
              categories.length === 0 ?
                <option>Error while fetching the data</option>
                :
                categories.map((item) => {
                  return (
                    <option value={item}>{item}</option>
                  )
                }
                )
            }
          </select>
        </div>


        <div id='products-container container'>
          <div className='containner'>
            <div className='row'>
              {
                productDetails.length == 0 ? <div>No records found</div> :
                  productDetails.map((item) => {
                    return (
                      <div className="col" key={''}>
                        <div class="card">
                          <img src={item.images[0]} class="card-img-top" alt="" />
                          <div class="card-body">
                            <div>
                              <h5 class="">{item.title}</h5>
                              <p class="card-text product-description" >{item.description.length > 40 ? item.description.slice(0, 40).trim() + '...' : item.description}</p>
                              {/* <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a> */}
                            </div>
                            <div>
                              <p>${item.price}</p>
                              {StarRating(item.rating)}
                            </div>
                          </div>

                        </div>
                      </div>
                    )

                  })
              }


            </div>
            <div className='row'>
              <div className='col'>{product.id}</div>
              <div className='col'>{product.id}</div>
              <div className='col'>{product.id}</div>
            </div>
          </div>








          <div >
            d
            {/* <image href=''></image> */}

            {/* <img src="https://cdn.dummyjson.com/product-images/6/1.png" alt="Example" /> */}

          </div>

          {product.id}
        </div>
      </div>

    </div>
  );
}

export default App;
