var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 7.1 - Hype Cycle</h3>',

  questionsList: [
    {questionHTML: '<p>Consider the report <a href="/assets/files/Hype_Cycle_for_Big_Data_2012.pdf">Hype Cycle for Big Data 2012.pdf</a> from Gartner on Big Data. Independent of Hype, chose your top 5 items and explain why they are important.</p>',
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_7.1',
  checkAnswers: false
}
