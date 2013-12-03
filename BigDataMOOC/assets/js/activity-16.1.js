var activity = [
  '<p><b>*1.</b> What metric is the most popular distance metric for k-means?</p>',
  
  { questionType: 'multiple choice',
    choices: [['Euclidean Distance', true, 'Correct!'],
              ['Cosine Distance', false, 'Please try again.'],
              ['Manhattan distance', false, 'Please try again.'],
			  ['We do not need to use any kind of distances', false, 'Please try again.']]},

  '<p><b>*2.</b> With KMeans you will not always achieve the Global minimum.</p>',
  
  { questionType: 'multiple choice',
    choices: [['True', true, 'Correct!'],
              ['False', false, 'Please try again.']]},

  '<p><b>*3.</b> With different initial positions of the centers you will always get the same result.</p>',
  
  { questionType: 'multiple choice',
    choices: [['True', true, 'Correct!'],
              ['False', false, 'Please try again.']]},

  "<p>*4. With K-Means there is a chance that you might have clusters with no points and special steps need to be taken for that.</p>",

  { questionType: 'multiple choice',
    choices: [['Yes', true, 'Correct!'],
              ['No', false, 'Please try again.']]},

  "<p>*5. K-Means will always give better results if you increase the value of k.</p>",

  { questionType: 'multiple choice',
    choices: [['Yes', true, 'Correct!'],
              ['No', false, 'Please try again.']]},

  "<p>*6. With K-Means you need to have the correct label along with the data.(It is a supervised technique)</p>",
  { questionType: 'multiple choice',
    choices: [['True', true, 'Correct!'],
              ['False', false, 'Please try again.']]},

  "<p>*7. For the points(0,1)(1,1),(1,0),(3,0),(3,1) manually perform the steps in K-Means(with k = 2) till it converges. Try for different initial positions of centers.</p>",

  "<p>*8. In the above case what will happen if we have one center at (0,0) and one at (100,100).</p>"

];