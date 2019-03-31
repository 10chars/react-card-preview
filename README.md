# react-card-preview

> React credit card preview component

[![NPM](https://img.shields.io/npm/v/react-card-preview.svg)](https://www.npmjs.com/package/react-card-preview) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-card-preview
```
```bash
yarn add react-card-preview
```

## Usage

```tsx
import * as React from 'react';
import ReactCardPreview from 'react-card-preview';

class MyComponent extends React.Component {
  render () {
    return (
      <ReactCardPreview
        name="Tom Jones"
        type="mastercard"
        expiry="11/23"
        cvc="112"
        lastFourDigits="4242"
      />
    );
  }
}
```
## Props
| value  | default  |  description |
|---|---|---|
| name  | -  | Card holder name  |
| type  |  unknown  | Credit card brand * see Card Types  |
| expiry  | -  | Date string (MM/YY) |
| cvc  | -  |  Card cvc |
| lastFourDigits  | -  |   |

## Card Types
* visa
* mastercard
* amex
* discover
* jcb
* dinersclub
* maestro
* laser
* unionpay
* elo
* hipercard

## License

MIT © [10chars](https://github.com/10chars)
