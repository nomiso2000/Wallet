import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import {
  StatisticsWrapper,
  StatHeader,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './StylesForStatistics';

import RandomColor from './RandomColor';

const Statistics = ({ stats, title }) => {
  return (
    <StatisticsWrapper className="statistics">
      <StatHeader className="title">{title}</StatHeader>

      <StatList className="stat-list">
        {stats.map(stat => (
          <ThemeProvider key={stat.id} theme={{ color: RandomColor }}>
            <StatItem>
              <StatLabel>{stat.label}</StatLabel>
              <StatPercentage>{stat.percentage}%</StatPercentage>
            </StatItem>
          </ThemeProvider>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
Statistics.defaultProps = {
  title: 'Upload stats',
};
export default Statistics;
