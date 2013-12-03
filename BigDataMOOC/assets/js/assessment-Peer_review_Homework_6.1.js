var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 6.1</h3>',

  questionsList: [
    {questionHTML: '<p>Consider the problem posed at <a href="http://www.kaggle.com/c/job-recommendation" target="_blank">http://www.kaggle.com/c/job-recommendation</a>. Abstract this challenge as the design of a recommendation system for job sites like <a href="http://www.careerbuilder.com" target="_blank">http://www.careerbuilder.com</a> and <a href="http://www.monster.com" target="_blank">http://www.monster.com</a>. Recommendation engines can be user-based collaborative filtering (users are job applicants), item-based collaborative filtering (items are jobs and employers) or content based (content is parameters of job and employers) or a brilliant new idea or any combination thereof. Write an essay (a page or so) on these different approaches and discuss their implementation and potential without going into details of technology. Note Kaggle does not reveal any solutions but does display visualizations of data at <a href="https://www.kaggle.com/c/job-recommendation/prospector#182" target="_blank">https://www.kaggle.com/c/job-recommendation/prospector#182</a>',
     multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_6.1',
  checkAnswers: false
}
