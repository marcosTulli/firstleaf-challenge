import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import Layout from '../components/Common/Layout';
import * as styles from './countryTemplate.module.scss';

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
      <div className={styles.buttonContainer}>
        <Link to={'/countries'}>
          <button style={{ borderColor: '$primary-color', color: '$primary-color' }}>{'< '}Back to list</button>
        </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{country.name.common}</h1>
          <p>Region:{country.region}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Capital:{country.capital?.[0]}</p>
          <img src={country.flags.svg} alt={`${country.name.common} flag`} width="200" />
        </div >
      </div >
    </Layout >
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
