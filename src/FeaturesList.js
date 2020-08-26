import React from 'react'
import FeatureItem from './FeatureItem'
import FEATURES from './Features';
function FeaturesList({ features, onUpdateFeature, selected }) {
	features = FEATURES
	const featureItems = Object.keys(features).map((feature, idx) => {
		const featureHash = feature + '-' + idx
		const options = features[feature]
		return (
			<FeatureItem
				key={featureHash}
				feature={feature}
				options={options}
				onUpdateFeature={onUpdateFeature}
				selected={selected}
			/>
		)
	})
	return (
		<form className="main__form">
			<h2>Customize your laptop</h2>
			{featureItems}
		</form>
	)
}

export default FeaturesList