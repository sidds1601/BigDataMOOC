var assessment = {
  // HTML to display at the start of the page
  preamble: 'When you write your review, please check that the student\'s response is relevant to the question asked. If not, answer \'No\' to the first question below.',

  questionsList: [
    {questionHTML: 'Did the student answer all parts of the question?',
     choices: ['Yes', 'No']},

    {questionHTML: 'Please provide feedback for this assessment.',
     multiLine: true,
     correctAnswerRegex: /.*/i
    }
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_8.2',
  checkAnswers: false
}
