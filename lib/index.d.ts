/**
 * @class ReactCardPreview
 */
import * as React from 'react';
import './styles.css';
export declare type CardTypes = 'visa' | 'mastercard' | 'amex' | 'discover' | 'jcb' | 'dinersclub' | 'maestro' | 'laser' | 'unionpay' | 'elo' | 'hipercard';
export declare type Props = {
    name: string;
    lastFourDigits: string;
    expiry: string;
    cvc?: string;
    type?: CardTypes;
};
export default class ReactCardPreview extends React.Component<Props, any> {
    render(): JSX.Element;
}
