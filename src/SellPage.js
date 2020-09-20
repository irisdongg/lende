import React from "react";

export default function SellPage(props) {
    return(
        <div className="sellpage">
            <br/>
            <br/>
            <label>Product Name </label>
            <input type="text" data-test="Name"/>
            <br/>
            <br/>
            <label> Description  </label>
            <input type="text" data-test="Description"/>
            <br/>
            <br/>
            <label htmlFor="img">Select image:  </label>
            <input type="file" id="img" name="img" accept="image/*"/>
            <div>
                <br/>
                <button>Submit</button>
            </div>

        </div>
    )
}
