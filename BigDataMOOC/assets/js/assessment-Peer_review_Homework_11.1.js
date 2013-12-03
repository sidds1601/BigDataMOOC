var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 11.1 - Internet of Things</h3>',

  questionsList: [
    {questionHTML: '<p>There are estimates on the Internet from 24 <a href="http://gigaom.com/2011/10/13/internet-of-things-will-have-24-billion-devices-by-2020/" target="_blank">http://gigaom.com/2011/10/13/internet-of-things-will-have-24-billion-devices-by-2020/</a> to 50 <a href="/assets/files/IoT_IBSG_0411FINAL.pdf" target="_blank">http://www.cisco.com/web/about/ac79/docs/innov/IoT_IBSG_0411FINAL.pdf</a> Billion devices on the Internet in 2020. One type of device will be smartphones and another will be surveillance webcams. Describe (in about half a page) two other types on small devices that will lead to Big Data uploaded to cloud</p>',
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_11.1',
  checkAnswers: false
}
