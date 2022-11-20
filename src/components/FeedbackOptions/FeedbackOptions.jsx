import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const normalizedOptions = Object.keys(options);

  return (
    <ul>
      {normalizedOptions.map(option => {
        return (
          <li key={option}>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {option.toUpperCase()}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
