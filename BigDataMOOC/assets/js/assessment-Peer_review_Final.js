var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Final Exam</h3>',

  questionsList: [
    {questionHTML: "<p>Describe in detail an X-Informatics topic that illustrates or should illustrate course theme: Use Clouds running Data Analytics processing Big Data to solve problems in X-Informatics. The discussion should cover problem, approach, analytics and use of cloud. Imagine I used your idea in another instance of this class. Give an overview of material to discuss in class.</p><p>The length of project should be around 5 pages. Examples X values could be Library of Congress, Sports, Personalized Medicine, Wall Street, finding friends on Facebook etc.</p>",
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Final',
  checkAnswers: false
}
