import { makeTemplate } from './vue-template';
import { expect } from 'chai';
import vueIndex from './vueIndex';

it('should create default code', () => {
	const result = makeTemplate({ npmId: '@bit/bit.javascript.raw.code-generator' });

	result.files['Index.vue'] = result.files['Index.vue']
		.replace(/\t/g, '').replace(/  /g, ''); // tabs and double-spaces removed for comparison

	const target = {
		files: {
			'Index.vue': vueIndex
				.replace(/\t/g, '').replace(/  /g, '') // tabs and double-spaces removed for comparison
		},
		mainFile: 'Index.vue',
	};

	expect(JSON.stringify(result)).to.deep.equal(
		JSON.stringify(target)
	);
});
