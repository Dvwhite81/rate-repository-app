import { render, screen } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { parseCount } from '../../components/RepositoryItem/Stats/StatsRow';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      render(<RepositoryListContainer repositories={repositories} />);

      const first = repositories.edges[0].node;
      const second = repositories.edges[1].node;
      // Name
      const fullNames = screen.getAllByTestId('fullName');
      expect(fullNames[0]).toHaveTextContent(first.fullName);
      expect(fullNames[1]).toHaveTextContent(second.fullName);
      // Description
      const descriptions = screen.getAllByTestId('description');
      expect(descriptions[0]).toHaveTextContent(first.description);
      expect(descriptions[1]).toHaveTextContent(second.description);
      // Language
      const languages = screen.getAllByTestId('language');
      expect(languages[0]).toHaveTextContent(first.language);
      expect(languages[1]).toHaveTextContent(second.language);
      // Fork count
      const forks = screen.getAllByTestId('forks');
      expect(forks[0]).toHaveTextContent(parseCount(first.forksCount));
      expect(forks[1]).toHaveTextContent(parseCount(second.forksCount));
      // Star count
      const stars = screen.getAllByTestId('stars');
      expect(stars[0]).toHaveTextContent(parseCount(first.stargazersCount));
      expect(stars[1]).toHaveTextContent(parseCount(second.stargazersCount));
      // Rating
      const ratings = screen.getAllByTestId('ratings');
      expect(ratings[0]).toHaveTextContent(first.ratingAverage);
      expect(ratings[1]).toHaveTextContent(second.ratingAverage);
      // Review count
      const reviews = screen.getAllByTestId('reviews');
      expect(reviews[0]).toHaveTextContent(first.reviewCount);
      expect(reviews[1]).toHaveTextContent(second.reviewCount);

    });
  });
});
