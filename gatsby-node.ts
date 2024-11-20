import axios from 'axios';
import path from 'path';
import { GatsbyNode } from 'gatsby';
import { slugify } from './src/utils/slugify';
import { ICountry } from './src/types/Country';

interface GraphQLResult {
    data: {
        allCountry: {
            nodes: ICountry[];
        };
    };
    errors?: any;
}

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;
    const response = await axios.get<ICountry[]>('https://restcountries.com/v3.1/all');
    const countries = response.data;

    countries.forEach((country) => {
        createNode({
            ...country,
            id: createNodeId(`country-${country.cca3}`),
            parent: null,
            children: [],
            internal: {
                type: 'Country',
                contentDigest: createContentDigest(country),
            },
        });
    });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const countryTemplate = path.resolve(`src/templates/countryTemplate.tsx`);

    const result = await graphql(`
    query {
      allCountry {
        nodes {
          name {
            common
          }
          cca3
        }
      }
    }
  `);

    const data = result as GraphQLResult;

    if (data.errors) {
        throw data.errors;
    }

    const countries: ICountry[] = data.data.allCountry.nodes;

    countries.forEach((country) => {
        const slug = slugify(country.name.common);
        createPage({
            path: `/countries/${slug}`,
            component: countryTemplate,
            context: {
                name: country.name.common,
            },
        });
    });
};
