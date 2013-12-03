var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 8.2 - Analytics</h3>',

  questionsList: [
    {questionHTML: '<p>Produce a discussion (total about half a page each) of Analytics involved in Data-Information-Knowledge pipeline for</p><ul><li>Movie/Music sites like Netflix</li><li>Optimization of content placement on a page surrounded by money sensitive web sites i.e. with adverts and selling things</li></ul><p>This should be analogous to my Web mining summary. Namely</p><ul><li>Get the digital data (from web or from scanning)</li><li>How to crawl web (? Solved "engineering" problem)</li><li>Pre-process data to get searchable things (words, positions)</li><li>Form Inverted Index mapping words to documents</li><li>Rank relevance of documents: <b>PageRank</b></li><li>Lots of technology for advertising, "reverse engineering" "preventing reverse engineering"</li><li>Structure of the Internet and its people and pages (research but also commercially important)</li><li>Clustering of documents into topics (as in Google News)</li></ul>',
	multiLine: false,
	correctAnswerRegex: /.*/i
	},
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_8.2',
  checkAnswers: false
}