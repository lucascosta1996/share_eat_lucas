import { addDecorator, addParameters, configure } from '@storybook/react'
import myTheme from './myTheme.js'

function loadStories() {
	const req = require.context('../components/stories', true, /\.stories\.js$/);
	req.keys().forEach(filename => req(filename));
}

addParameters({
	options: {
		name: 'Share eat Lucas',
		theme: myTheme
	}
});

const Decor = storyFn => <div style={{ padding: 20 }}>{storyFn()}</div>;

addDecorator(Decor);

configure(loadStories, module);

const splitPoints = points => {
	const grade = points / 2;
	const half = grade % 1 > 0.0001;
	return new Array(5).fill().map((_, i) => {
		if (grade >= i + 1) return 'full';
		if (grade < i + 1 && half) return 'half';
		return 'blank';
	});
};