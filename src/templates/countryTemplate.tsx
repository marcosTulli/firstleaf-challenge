import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import Layout from '../components/Common/Layout';

interface CountryData {
  country: {
    name: { common: string; };
    region: string;
    population: number;
    capital?: string[];
    flags: { svg: string; };
  };
}

const CountryTemplate: React.FC<PageProps<CountryData>> = ({ data }) => {
  const country = data.country;

  return (
    <Layout>
      <h1>{country.name.common}</h1>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} width="200" />
      <Link to={'/countries'}>
        <div>
          <button >
            Back to list
          </button>
        </div>
      </Link>
    </Layout>
  );
};

export default CountryTemplate;

export const query = graphql`
  query($name: String!) {
    country(name: { common: { eq: $name } }) {
      name {
        common
      }
      region
      population
      capital
      flags {
        svg
      }
    }
  }
`;
