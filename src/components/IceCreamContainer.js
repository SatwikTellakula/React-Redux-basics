import React from 'react'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'
import {connect} from 'react-redux'

function IceCreamContainer (props) {
    return (
        <div>
          <h1>Number of IceCreams -{props.numOfIceCreams}</h1>
          <button onClick={props.buyIceCream}>Buy IceCreams</button>
        </div>
    )
}

const mapStateToProps=(state) =>{
  return {
  numOfIceCreams:state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps=(dispatch) =>{
  return {
    buyIceCream:()=>dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)