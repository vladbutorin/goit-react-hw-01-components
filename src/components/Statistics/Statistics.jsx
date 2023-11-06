import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Title>{title}</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} style={{ backgroundColor: createColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};
