import PropTypes from 'prop-types';
import { StatisticsCard } from 'components/StatisticsCard/StatisticsCard';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(stat => {
          return (
            <StatisticsListItem key={stat.id}>
              <StatisticsCard item={stat} />
            </StatisticsListItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
