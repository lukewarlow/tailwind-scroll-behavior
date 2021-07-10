module.exports = function () {
	return function ({addUtilities, variants}) {
		const scrollBehaviors = {
			'.scroll-smooth': {
				'scroll-behavior': 'smooth'
			},
			'.scroll-auto': {
				'scroll-behavior': 'auto'
			},
		};

		addUtilities(scrollBehaviors, variants('scrollBehavior', ['motion-safe', 'motion-reduce']));
	}
}
