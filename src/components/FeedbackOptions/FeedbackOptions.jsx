import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, ButtonOption } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
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
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
