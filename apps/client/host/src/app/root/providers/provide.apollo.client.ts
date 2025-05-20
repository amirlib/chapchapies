import { provideApollo } from 'apollo-angular';
import { inject } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client';
import { FRAGMENTS } from '@chapchapies/client-schema';

export const provideApolloClient = () => {
	const cache = new InMemoryCache({
		possibleTypes: FRAGMENTS.default.possibleTypes,
	});

	return provideApollo(
		() => {
			const httpLink = inject(HttpLink);

			return {
				cache,
				link: httpLink.create({ uri: '/graphql' }),
			};
		},
		{ useInitialLoading: true, useMutationLoading: true },
	);
};
