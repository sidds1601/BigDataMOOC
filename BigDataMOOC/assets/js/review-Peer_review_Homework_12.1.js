var assessment = {
  preamble: 'When you write your review, please check that the student\'s response is relevant to the question asked. If not, answer \'No\' to the first question below.',

  questionsList: [
    {questionHTML: 'Did the student answer all parts of the question?',
     choices: ['Yes', 'No']},

    {questionHTML: 'Please provide feedback for this assessment.',
     multiLine: true,
     correctAnswerRegex: /.*/i
    }
  ],

  assessmentName: 'Peer_review_Homework_12.1',
  checkAnswers: false
}