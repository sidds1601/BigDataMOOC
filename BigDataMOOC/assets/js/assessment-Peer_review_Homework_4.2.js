var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 4.2 - Square Root of N is Normal</h3>',

  questionsList: [
    {questionHTML: "<p>In the first X-Informatics use case -- analysis of LHC data from physics, we learnt about</p><ul><li>The universality of ''Normal'' or ''Gaussian'' probability distribution for ''complicated'' situations</li><li>The typical error Square Root (Number of Events N) when Number of Events N are observed</li></ul><p>Please use any source (Internet, Books) to identify at least 5 other ''big'' or even ''little'' data X-Informatics examples where one or both of these (or some modestly modified) principles apply.</p><p>Describe these examples in a few sentences each with a total of at most a page.</p>",
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_4.2',
  checkAnswers: false
}