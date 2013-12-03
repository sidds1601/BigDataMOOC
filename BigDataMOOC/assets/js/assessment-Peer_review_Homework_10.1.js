var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 10.1 - Privacy</h3>',

  questionsList: [
    {questionHTML: '<p>Describe (in about half a page) aspects of Privacy and Cloud Computing applied to Health Informatics</p>',
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_10.1',
  checkAnswers: false
}
