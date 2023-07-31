import PropTypes from 'prop-types';
import { BtnContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <BtnContainer>
            <Button type="button" name="good" $color='green' onClick={onLeaveFeedback}>Good</Button>
            <Button type="button" name="neutral" $color='grey' onClick={onLeaveFeedback}>Neutral</Button>
            <Button type="button" name="bad" $color='red' onClick={onLeaveFeedback}>Bad</Button>
        </BtnContainer>
        
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback:PropTypes.func.isRequired,
}