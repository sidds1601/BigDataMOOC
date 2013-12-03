var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 2.2 - Where are the Zettabytes</h3>',

  questionsList: [
    {questionHTML: "<p>According to IDC, <a href='http://www.emc.com/collateral/analyst-reports/idc-extracting-value-from-chaos-ar.pdf' target='_blank'>http://www.emc.com/collateral/analyst-reports/idc-extracting-value-from-chaos-ar.pdf</a> ''Extracting Value from Chaos'' 8 zettabytes of data will be stored and shared in 2015. A zettabyte is a million petabytes. Discuss where such a huge amount of data could come from. Compare the increase with time of total data stored with Moore's law of growth in transistor count - a factor of 2 every 2 years.</p>",
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_2.2',
  checkAnswers: false
}