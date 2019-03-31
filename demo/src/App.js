import React, { Component } from 'react'

import ReactCardPreview from 'react-card-preview';

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>React Card Preview</h1>
        <ReactCardPreview
          name="John Wayne"
          type="mastercard"
          expiry="11/23"
          cvc="112"
          lastFourDigits="4242"
        />
        <hr />
        <ReactCardPreview
          name="John Wayne"
          type="visa"
          expiry="11/23"
          cvc="112"
          lastFourDigits="4242"
        />
        <hr />
        <ReactCardPreview
          name="John Wayne"
          type="amex"
          expiry="11/23"
          cvc="112"
          lastFourDigits="4242"
        />
      </div>
    )
  }
}
