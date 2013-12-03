var assessment = {
  // HTML to display at the start of the page
  preamble: '',

  questionsList: [
    {questionHTML: '<p>1</p>',
	 multiLine: true,
     correctAnswerRegex: /.*/i
    },

    {questionHTML: '<p>We reviewed several Big Data Application Areas X with particular examples. We can classify them as <ul><li>Internet</li><li>Commerce</li><li>Industry</li><li>Sensors</li><li>Medical/Health</li><li>Science</li></ul></p> <p>Identify 2 Application areas with a specific example that interest you and write at most half a page on each as to why interesting and what the key aspects of data and analytics are. These should be different from examples I gave but can be related. For example you could choose commerce but cover different example such as Amazon rather than eBay. The 2 applications should be in different categories of the 6 above.</p><p>List 5 applications areas (values of X in X-Informatics with examples) that you would like course to cover. These can be new, one of 2 you write about above, and/or examples I covered.</p>',
     multiLine: true,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'ReviewAssessmentExample2',
  checkAnswers: false
}
