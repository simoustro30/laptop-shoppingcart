import React, {Component} from 'react';
import slugify from 'slugify';
import USCurrencyFormat from './CurrencyFormat';

export default function FeatureOptions({
    item,
    feature,
    itemHash,
    checked,
    onUpdateFeature

})
{
    return(
        <div className="feature__item">
        <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={checked}
            onChange={e => onUpdateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
    </div>
    )
}

FeatureOptions.defaultProps = {
    item: {},
    feature: '',
    itemHash: '',
    checked: false
}