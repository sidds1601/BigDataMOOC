var activity = [
  '<p><b>1.</b> What method - python - seed?</p>',
  
  { questionType: 'multiple choice',
    choices: [['time of the day', true, 'Correct!'],
              ['current year', false, 'Please try again.'],
              ['none', false, 'Please try again.']]},
			  
  '<p>Try reading the "Numerical Recipes" Book.</br><a href="http://www.amazon.com/Numerical-Recipes-3rd-Scientific-Computing/dp/0521880688/ref=sr_1_1?s=books&ie=UTF8&qid=1377194236&sr=1-1&keywords=numerical+recipes" target="_blank">http://www.amazon.com/Numerical-Recipes-3rd-Scientific-Computing/dp/0521880688/ref=sr_1_1?s=books&ie=UTF8&qid=1377194236&sr=1-1&keywords=numerical+recipes</a></p>',

  '<p><b>*2.</b> The random numbers generated using the random package of numpy are generated from a truly random process.</p>',
  
  { questionType: 'multiple choice',
    choices: [['True', true, 'Correct!'],
              ['False', false, 'Please try again.']]},

  '<p><b>*3.</b> There is a way to get the same set of random numbers using the random package in numpy.</p>',
  
  { questionType: 'multiple choice',
    choices: [['True', true, 'Correct!'],
              ['False', false, 'Please try again.']]},

  "<p>*4. What method is used to set the seed of the random number generator?</p>",

  { questionType: 'freetext',
    showAnswerOutput: "Correct Answer Here" 
  },

  "<p>*5. If I print 100 numbers using the random number generator using a fixed seed, and then print 100 more numbers without any changes to the seed, will I get the same set of random numbers?</p>",

  { questionType: 'multiple choice',
    choices: [['Yes', true, 'Correct!'],
              ['No', false, 'Please try again.']]},

  "<p>*6. The seed remains the same after generating the a random number.</p>",
  { questionType: 'multiple choice',
    choices: [['True', true, 'Correct!'],
              ['False', false, 'Please try again.']]},

];