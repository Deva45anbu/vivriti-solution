
export const HeaderComponent = () => {

    return (
        <div className="row my-3">
            <div className="col fw-bold float-start ">
                {/* <div className=" "> */}
                <span className="header-fontcolor-pink">M</span>oBoo<span className="header-fontcolor-pink">M</span>
                {/* </div> */}
            </div>
            <div className="col-4">
                <input></input>
            </div>
            <div className="col">
                <div className="d-inline mx-2">Store</div>
                <div className="d-inline mx-2">Account</div>
                <div className="d-inline mx-2">Wish List</div>
                <div className="d-inline mx-2">Basket</div>
            </div>
        </div>
    )
}