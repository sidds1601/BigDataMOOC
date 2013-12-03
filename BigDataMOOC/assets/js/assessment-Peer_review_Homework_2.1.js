var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 2.1 - List of Nifty Big Data Applications</h3>',

  questionsList: [
    {questionHTML: '<p>List 5 applications areas (values of X in X-Informatics with examples) that you find most interesting</p>',
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_2.1',
  checkAnswers: false
}