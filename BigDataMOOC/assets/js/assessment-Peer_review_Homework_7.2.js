var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 7.2 - Cloud Environments</h3>',

  questionsList: [
    {questionHTML: "<p>Consider any 5 cloud or cloud like activities from list of 10 below. Describe the ones you chose and explain what ways they could be used to support an X-Informatics field for some X.</p><ul><li>http://aws.amazon.com</li><li>http://www.windowsazure.com/en-us</li><li>https://cloud.google.com/products/compute-engine</li><li>https://portal.futuregrid.org</li><li>http://joyent.com</li><li>http://www.penguincomputing.com/services/hpc-cloud</li><li>http://www.rackspace.com/cloud</li><li>http://www.salesforce.com/cloudcomputing</li><li>http://earthengine.google.org</li><li>http://www.openstack.org</li></ul>",
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_7.2',
  checkAnswers: false
}
