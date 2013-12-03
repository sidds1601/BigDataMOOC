var activity = [
  '<p><b>1.</b> What are the full names for the two LHC experiments relevant for finding the Higgs boson?</p>',

  { questionType: 'freetext',
    showAnswerPrompt: 'Check Answer',
    showAnswerOutput: 'Compact Muon Solenoid and A Toroidal LHC Apparatus'},
	
  '<p><b>2.</b> How many computing cores are being utilized in the LHC?</p>',
  
  { questionType: 'multiple choice',
    choices: [['~20,000', false, 'Please try again.'],
              ['~100,000', false, 'Please try again.'],
              ['~250,000', false, 'Please try again.'],
              ['~200,000', true, 'Correct!']]},

  '<p><a href="http://grids.ucs.indiana.edu/ptliupages/publications/Where%20does%20all%20the%20data%20come%20from%20v7.pdf">Link to the pdf from the slide</a></p>'

];