var activity = [
  '<p><b>*1.</b> If k is the number of neighbors, what will happen if we use k=1 with KNN?</p>',
  
  { questionType: 'multiple choice',
    choices: [['Noise would have high impact on your result', true, 'Correct!'],
              ['Your algorithm would not converge', false, 'Please try again.'],
              ['Your program will crash', false, 'Please try again.'],
			  ['Your program will give same answers for all queries.', false, 'Please try again.']]},

  '<p><b>*2.</b>  If M is the total number of points you have. What will happen if you set k = M?</p>',
  
  { questionType: 'multiple choice',
    choices: [['Noise would have high impact on your result', true, 'Correct!'],
              ['Your algorithm would not converge', false, 'Please try again.'],
              ['Your program will crash', false, 'Please try again.'],
			  ['Your program will give same answers for all queries.', false, 'Please try again.']]},

  '<p>* In the figure below there are 4 red circles and 2 green +s. For the following questions tell what predictions the algorithm would make? You can say either red circle or green + or random prediction( in case of a tie). Also let k denote the number of neighbors considered and X denote the new point.</p>',

  "<p><img scr='/assets/img/unit-15-activity.png' /></p>",

  "<ul><li> X = (2.5,3) k = 2</li><li>X = (0,1) k =2</li><li>X = (2,5,3) k=4</li><li> X = (0,1) k = 4</li><li>X = (2.5,3) k = 5</li></ul>",
];