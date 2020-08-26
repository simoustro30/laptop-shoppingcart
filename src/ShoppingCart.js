import React from 'react';
import USCurrencyFormat from './CurrencyFormat';

function ShoppingCart({selected}){
    const shoppingCartItems = Object.keys(selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = selected[feature];
    
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
            )
        })
    return <>{shoppingCartItems}</>
    }

export default ShoppingCart