import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { slugify } from '../../utils/slugify';
import Layout from '../../components/Common/Layout';

interface CountryListData {
  allCountry: {
    nodes: {
      name: { common: string; };
      cca3: string;
    }[];
  };
}

const CountriesPage: React.FC<PageProps<CountryListData>> = ({ data }) => {
  const countries = data.allCountry.nodes;

  return (
    <Layout>
      <h1>Countries</h1>
      <Link to={'/'}>
        <div>
          <button >Home</button>
        </div>
      </Link>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <Link to={`/countries/${slugify(country.name.common)}`}>
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default CountriesPage;

export const query = graphql`
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
`;
