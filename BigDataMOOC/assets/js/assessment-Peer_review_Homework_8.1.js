var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 8.1 - How to Search the Web</h3>',

  questionsList: [
    {questionHTML: '<p>Humane Society Problem from current Mid Term Assessment</p>',
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_8.1',
  checkAnswers: false
}