import React, { Component, Fragment } from 'react'
import { ProductsDetails } from '../components/Products/ProductDetails'
import SuggestedProduct from '../components/Products/SuggestedProduct'

export class ProductDetailsPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
     <Fragment>

<ProductsDetails/>
<SuggestedProduct/>
     </Fragment>
    )
  }
}

export default ProductDetailsPage
