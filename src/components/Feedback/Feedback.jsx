import React, { Component } from 'react';

import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedebackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { FeedbackContainer } from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counter = e => {
    const name = e.currentTarget.name;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  totalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  positiveStatistic = () => {
    return this.totalFeedback()
      ? ((this.state.good / this.totalFeedback()) * 100).toFixed(0)
      : 0;
  };

  render() {
    const totalValue = this.totalFeedback();

    return (
      <FeedbackContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            increment={this.counter}
          />
        </Section>

        <Section title="Statistics">
          {totalValue ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback}
              positivePercentage={this.positiveStatistic}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </FeedbackContainer>
    );
  }
}
