var assessment = {
  preamble: 'When you write your review, please check that the student\'s response is relevant to the question asked. If not, answer \'No\' to the first question below.',

  questionsList: [
    {questionHTML: 'Did the student answer all parts of the question?',
     choices: ['Yes', 'No']},

    {questionHTML: 'Please provide feedback for this assessment.',
     multiLine: true,
     correctAnswerRegex: /.*/i
    },

	{questionHTML: 'How much score(out of 100) would you assign to this assessment?',
	multiLine: false,
	correctAnswerRegex: /.*/i
	}
  ],

  assessmentName: 'Peer_review_Final',
  checkAnswers: false
}