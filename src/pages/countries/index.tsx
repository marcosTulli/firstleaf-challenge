import * as React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { slugify } from '../../utils/slugify';
import Layout from '../../components/Common/Layout';
import { FixedSizeList as List } from 'react-window';
import * as styles from './index.module.scss';

interface CountryListData {
  allCountry: {
    nodes: {
      name: { common: string; };
      flags: { svg: string; };
      cca3: string;
    }[];
  };
}

const CountriesPage: React.FC<PageProps<CountryListData>> = ({ data }) => {
  const countries = data.allCountry.nodes;

  const renderRow = ({ index, style }: { index: number; style: React.CSSProperties; }) => {
    const country = countries[index];

    return (
      <div style={style} key={country.cca3} >
        <Link to={`/countries/${slugify(country.name.common)}`} className={styles.country}>
          <img src={country?.flags?.svg} alt={`${country.name.common} flag`} width="20" height='15' />
          {country.name.common}
        </Link>
      </div>
    );
  };

  return (
    <Layout>
      <Link to={'/'}>
        <div>
          <button className={styles.button}> {'<'} Home</button>
        </div>
      </Link>
      <p className={styles.title}>Countries</p>
      <List
        height={400}
        itemCount={countries.length}
        itemSize={50}
        width="30%"
      >
        {renderRow}
      </List>
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
        flags {
          svg
        }
      }
    }
  }
`;
