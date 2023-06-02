import PropTypes from 'prop-types';
import {
  Item,
  Label,
  List,
  Percentage,
  Section,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">Upload stats</Title>}

      <List className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} className="item">
              <Label className="label">{label}</Label>
              <Percentage className="percentage">{percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
