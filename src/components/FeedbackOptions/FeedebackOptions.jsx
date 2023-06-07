import PropTypes from 'prop-types';

import {
  FeedbackList,
  FeedbackItem,
  FeedbackBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, increment }) => (
  <FeedbackList>
    {options.map((label, index) => (
      <FeedbackItem key={label}>
        <FeedbackBtn type="button" name={label} onClick={increment}>
          {label[0].toUpperCase() + label.slice(1)}
        </FeedbackBtn>
      </FeedbackItem>
    ))}
  </FeedbackList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  increment: PropTypes.func.isRequired,
};
