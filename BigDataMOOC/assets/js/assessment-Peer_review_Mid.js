var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Midterm Exam</h3>',

  questionsList: [
    {questionHTML: '<p>Exercise 1: Polls</p></br><p>Look at the discussion of Polls on the Internet. Describe in about half a page the different types of error. Statistical (square root of N) and Bias (errors in choice of sample)</p></br><p>Exercise 2: 51 Values of X</p></br><p>In the <a href="/assets/files/NBDUSECasesV1Full_M0180.docx" target="_blank">NBDUSECasesV1Full_M0180.docx</a> file there are 51 Big Data use cases covering several broad areas.</p><ul><li>Government Operation: 4</li><li>Commercial: 8</li><li>Defense: 3</li><li>Healthcare and Life Sciences: 10</li><li>Deep Learning and Social Media: 6</li><li>The Ecosystem for Research: 4</li><li>Astronomy and Physics: 5</li><li>Earh, Environmental and Polar Science: 10</li><li>Energy: 1</li></ul><p>Describe a 52nd Big Data use case that seems different in structure from those listed in document</p>',
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Mid',
  checkAnswers: false
}
