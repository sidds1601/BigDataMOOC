var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 9.1 - Clustering</h3>',

  questionsList: [
    {questionHTML: '<p>Consider files <a href="/assets/files/unit_16/xmean.py" target="_blank">xmean.py</a> (from files tab in unit "Technology for X-Informatics: K-means (Python Track)") which exemplifies clustering data from a csv file and <a href="/assets/files/unit_16/KmeansExtra.py">KmeansExtra.py</a> in same tab exemplifies clustering from data specified by a program.</p><p>You can also direction specify data directly as in</p><p>data = array([[0, 0], [1/2.0, 0], [1, 1/3.0]])</p><p>Choose any set of TWO dimensional data and cluster it using python Kmeans producing plots as in examples in class</p><p>Save results from Matplotlib and discuss data and results including plot in answer</p>',
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_9.1',
  checkAnswers: false
}
