
import { useEffect, useState } from 'react';
import './App.css';
import { fetchProductCategory, fetchProductData } from './User';
import { Flexsample } from './Flexsample';


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





  return (
    <div>
      <Flexsample></Flexsample>
    </div>
    // <div className=' vh-100'>
    //   <div className="container header-fontsize mt-2" >
    //     <div className="row my-3">
    //       <div className="col fw-bold float-start ">
    //         {/* <div className=" "> */}
    //         <span className="header-fontcolor-pink">M</span>oBoo<span className="header-fontcolor-pink">M</span>
    //         {/* </div> */}
    //       </div>
    //       <div className="col-4">
    //         <input></input>
    //       </div>
    //       <div className="col">
    //         <div className="d-inline mx-2">Store</div>
    //         <div className="d-inline mx-2">Account</div>
    //         <div className="d-inline mx-2">Wish List</div>
    //         <div className="d-inline mx-2">Basket</div>
    //       </div>
    //     </div>
    //     <div className="grdient">
    //       <div>Lorem lpsum</div>
    //       <div>Slash Sales beginf in June. Get up to 80% Discount on all products Read More</div>
    //     </div>

    //     <div className='category-input-containner'>
    //       <select className="form-select" aria-label="Default select example">
    //         <option selected value=''>Select Category</option>
    //         {
    //           categories.length === 0 ?
    //             <option>Error while fetching the data</option>
    //             :
    //             categories.map((item) => {
    //               return (
    //                 <option value={item}>{item}</option>
    //               )
    //             }
    //             )
    //         }
    //       </select>
    //     </div>


    //     <div id='products-container container'>
    //       <div className='containner'>
    //         <div className='row'>
    //           {
    //             productDetails.length == 0 ? <div>No records found</div> :
    //               productDetails.map((item) => {
    //                 return (
    //                   <div className="col" key={''}>
    //                     <div class="card">
    //                       <img src="https://cdn.dummyjson.com/product-images/6/1.png" class="card-img-top" alt="" />
    //                       <div class="card-body">
    //                         <h5 class="">{item.title}</h5>
    //                         <p class="card-text product-description" >{item.description.length > 40 ? item.description.slice(0,40).trim()+'...'  : item.description}</p>
    //                         <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 )

    //               })
    //           }


    //         </div>
    //         <div className='row'>
    //           <div className='col'>{product.id}</div>
    //           <div className='col'>{product.id}</div>
    //           <div className='col'>{product.id}</div>
    //         </div>
    //       </div>








    //       <div >
    //         d
    //         {/* <image href=''></image> */}

    //         {/* <img src="https://cdn.dummyjson.com/product-images/6/1.png" alt="Example" /> */}

    //       </div>

    //       {product.id}
    //     </div>
    //   </div>

    // </div>
  );
}

export default App;
