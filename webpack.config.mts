import { composePlugins, withNx } from '@nx/webpack';

// Nx plugins for webpack.
module.exports = composePlugins(
	withNx({
		compiler: 'swc',
	}),
);
