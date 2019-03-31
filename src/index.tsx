/**
 * @class ReactCardPreview
 */

import * as React from 'react'
import './styles.css';

export type CardTypes =
'visa'
| 'mastercard'
| 'amex'
| 'discover'
| 'jcb'
| 'dinersclub'
| 'maestro'
| 'laser'
| 'unionpay'
| 'elo'
| 'hipercard';

export type Props = {
  name: string;
  lastFourDigits: string;
  expiry: string;
  cvc?: string;
  type?: CardTypes;
 }

export default class ReactCardPreview extends React.Component<Props, any> {
  render() {
    const { lastFourDigits, name, type, expiry, cvc } = this.props;
    return (
      <div key="Cards" className="rccs">
        <div
          className={[
            'rccs__card',
            `rccs__card--${type || 'unknown'}`,
          ].join(' ').trim()}
        >
          <div className="rccs__card--front">
            <div className="rccs__card__background" />
            <div className="rccs__issuer" />
            <div
              className={[
                'rccs__cvc__front',
              ].join(' ').trim()}
            >
              {cvc}
            </div>
            <div
              className={[
                'rccs__number',
                'rccs__number--large',
                'rccs--focused',
               'rccs--filled',
              ].join(' ').trim()}
            >
              **** **** **** {lastFourDigits}
            </div>
            <div
              className={[
                'rccs__name',
                'rccs--focused',
                'rccs--filled',
              ].join(' ').trim()}
            >
              {name}
            </div>
            <div
              className={[
                'rccs__expiry',
                'rccs--focused',
                'rccs--filled',
              ].join(' ').trim()}
            >
              <div className="rccs__expiry__value">{expiry}</div>
            </div>
            <div className="rccs__chip" />
          </div>
        </div>
      </div>
    )
  }
}
