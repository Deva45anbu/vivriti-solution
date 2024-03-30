import { useEffect, useState } from "react";
import { fetchProductData } from "./User";

export const Flexsample = () => {
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
    const [productDetails, setProductDetails] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const productDataResults = await fetchProductData()

            console.log("fetchProductDataResults :", productDataResults)

            if (productDataResults.status === 200) {
                setProductDetails(productDataResults.data.products)
                console.log("productDataResults.data.products :", productDataResults.data.products)

            } else {

            }

        }
        fetchData()


    }, [])

    let array = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'ggggggggggggggggggggggggg', 11,
        12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
        36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
        72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
        84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
        96, 97, 98, 99
    ]
    return (
        <div className="container">

            {/* {
                array.map((item) => {
                    return (
                        <div className="m-4 items">{item}


                        </div>

                    )
                })
            } */}
            {
                productDetails.length === 0 ? <div>No records found</div> :
                    productDetails.map((item) => {
                        return (
                            <div className="m-4" key={''}>
                                <div class="card">
                                    <img src="https://cdn.dummyjson.com/product-images/6/1.png" class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <h5 class="">{item.title}</h5>
                                        <p class="card-text product-description" >{item.description.length > 40 ? item.description.slice(0, 40).trim() + '...' : item.description}</p>
                                        <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
                                    </div>
                                </div>
                            </div>
                        )

                    })
            }
        </div>
    )
}