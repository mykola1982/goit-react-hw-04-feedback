import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, ButtonOption } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const normalizedOptions = Object.keys(options);

  return (
    <ButtonList>
      {normalizedOptions.map(option => {
        return (
          <ButtonItem key={option}>
            <ButtonOption type="button" onClick={() => onLeaveFeedback(option)}>
              {option.toUpperCase()}
            </ButtonOption>
          </ButtonItem>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
