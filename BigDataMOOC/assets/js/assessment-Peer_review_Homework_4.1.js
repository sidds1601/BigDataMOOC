var assessment = {
  // HTML to display at the start of the page
  preamble: '<h3>Homework 4.1 - Signal plus Flat Background in Python</h3>',

  questionsList: [
    {questionHTML: "<p>Consider the file <a href='/assets/files/HiggsClassII-Uniform.py' target='_blank'>HiggsClassII-Uniform.py</a> which can be used to produce plots like that below.</p><img src='/assets/img/IPython.png' /><p>This is simpler than that discussed for Higg's discovering as ''background'' constant. Above Red is Higgs particle signal, blue background and green the total. This code corresponds to 42000 background events and 300 Higgs. Background is uniformly distributed and Higgs is a Normal (Gaussian) distribution centered at 126 with width of 2.</p><p>Check code in file works in IPython and produces figure</p><ul><li>Produce 2 more figures (plots) corresponding to experiments with a factor of 10 more or a factor of 10 less data.</li><li>Produce a further figure with same number of events in background as figure but a factor of 10 more Higgs particle events.</li></ul><br><p>What do you learn about number of events an experiment needs to discover new particles?</p>",
	 multiLine: false,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Peer_review_Homework_4.1',
  checkAnswers: false
}