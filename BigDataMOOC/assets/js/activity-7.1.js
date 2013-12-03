var activity = [
  "<p><b>Canopy</b></p>",

  "<p>This exercise is meant as a fresher to general python development in Canopy. The tasks include basic I/O, simple data processing</p>",

  "<p>Start the canopy IDE and write the following programs using the text editor and IPython console</p>",
  
  "<ul><li>Read two numbers from the users. Print the addition, subtraction, multiplication, division of the two numbers. Handle the case to print the division result with floating point precision even if the numbers are not of the float data-type.</li><li>Read a name from the user and print a welcome message for him/her</li><li>Take a start point, end point and increment value from the user. Print numbers starting from the start point, increment by increment value and do not exceed the end point</li></ul>",
  
  "<p>Eg: Input start=10, end=15, increment=2</br>Output: 10, 12, 14</p>",
  

  "<p><b>Numpy</b></p>",
  
  "<p>This exercise is aimed at helping students to delve more into the Numpy library. You will require viewing the Numpy videos first and also referring to the documentation or other resources as and when needed.</p>",

  "<ul><li>Create a 4x4 array with all ones. Print its size, shape, and dimensionality.</li><li>Convert the above array into a 4x2x2 array and print the size, shape, and dimensionality.</li><li>Create a an array with 10 elements starting at 100, ending at 1000 and all other elements equally spaced</li><li>Create two arrays with same dimensions. Add, subtract, multiply, divide one from the other. Also do the same operations with an array and a scalar</li><li>Create this array:"+
  "<table>"+
  "<tr><td>4</td><td>5</td><td>8</td><td>99</td></tr>"+
  "<tr><td>3</td><td>9</td><td>7</td><td>6</td></tr>"+
  "<tr><td>10</td><td>1</td><td>2</td><td>15</td></tr>"+
  "<tr><td>41</td><td>13</td><td>25</td><td>8</td></tr>"+
  "</talbe></li>"+
  "</ul>",

  "<p>Perform the following with the array.</p>",
  
  "<ul><li>Get the third row</li>"+
  "<li>Get the elements for the first two rows and last two columns</li>"+
  "<li>Do indexing so as to get the following matrix<table><tr><td>4</td><td>8</td></tr>"+
                                                          "<tr><td>10</td><td>2</td></tr></table></li>"+
  "<li>Get all elements that are odd.</li>"+
  "<li>Get all elements between 10 and 20</li>"+
  "<li>Get all even numbers greater less than 15</li>"+
  "<li>Replace all the odd elements by the number 101.</li>"+
  "<li>Obtain the transpose of the matrix</li>"+
  "<li>Obtain the sqrt, sin,cos and tan of the matrix</li>"+
  "<li>Compute the sum, mean and variance of all elements. Also compute these statistics along all axes.</li>"+
  "<li>Invert the matrix</li>"+
  "<li>Generate a matrix according to uniform distribution(between 0 and 1) and the Gaussian distribution(mean 0, variance =1) of size 4x4</li>"+
  "<li>Create 1000 random numbers uniformly distributed between 100 and 200.</li>"+  
  "</ul>",
  
  
  "<p><b>Matplotlib</b></p>",
  
  "<p>This exercise is aimed at helping students to delve more into the Matplotlib library. You will require viewing the Matplotlib videos first and also referring to the documentation or other resources as and when needed.</p>",
  
  "<ul><li>Create a figure named \"Trigonometric functions\"</li>"+
  "<li>Sub divide this into 2 subplots. In one subplot plot numbers 1-30 with an increment of 0.1 along X axis and the sine of the numbers along the y Axis. Use a continuous blue line. In the second sub-plot plot numbers 1-30 with an increment of 0.1 along X axis and the cosine of the numbers along the y Axis. Use a continuous red line</li>"+
  "<li>Create a second figure named \"Squares and cubes\"</li>"+
  "<li>Create an array from 1 to 10. Plot the elements of array along both axes as Red circles. Plot the square of elements along the Y-axis and the elements itself along the X-axis as blue squares. Plot the cube of elements along the Y-axis and the elements itself along the X-axis as green triangles.</li>"+
  "<li>Give titles and Axis labels to all plots in all figures.</li>"+
  "<li>Keep grid-lines for the cosine plot.</li>",
  
  
  "<p><b>Scipy</b></p>",
  
  "<p>This exercise is aimed at helping students to delve more into the SciPy library. You will require viewing the SciPy videos first and also referring to the documentation or other resources as and when needed.</p>",
  
  "<p>Which of the following is a SciPy package</p>",
  
  { questionType: 'multiple choice',
  choices: [['scipy.interpolate', false, 'Please try again.'],
            ['scipy.statistics', false, 'Please try again.'],
            ['scipy.math', true, 'Correct!'],
            ['scipy.matrices', false, 'Please try again.']]},

  "<p>Which of the following packages would you use if you wanted to represent the map of your college.</p>",

  { questionType: 'multiple choice',
  choices: [['scipy.maps', false, 'Please try again.'],
            ['scipy.special', false, 'Please try again.'],
            ['scipy.spatial', true, 'Correct!'],
            ['scipy.linalg', false, 'Please try again.']]},

  "<p>If A is a matrix representing the cluster centers(codebook), and B is a list of points that need to be clustered as per these centers. Which of the following will help you do the same</p>",

  { questionType: 'multiple choice',
  choices: [['vq(A,B)', false, 'Please try again.'],
            ['vq(B,A)', false, 'Please try again.'],
            ['kmeans(A,B)', true, 'Correct!'],
            ['kmeans(B,A)', false, 'Please try again.'],
            ['kmeans(B,2)', false, 'Please try again.']]},

  "<p>What does the whiten method do?</p>",

  { questionType: 'multiple choice',
  choices: [['Divides each feature by its standard deviation across all observations to give it unit variance.', false, 'Please try again.'],
            ['Multiplies each feature by its standard deviation across all observations to give it unit variance.', false, 'Please try again.'],
            ['It does not do anything', true, 'Correct!'],
            ['Performs kmeans operation on the dataset with number of clusters equal to 50.', false, 'Please try again.']]},

  "<p>Consider y = ndtri(x). If the maximum value x can take before running y running into infinity is X. At what value of x is y=0</p>",

  { questionType: 'multiple choice',
  choices: [['x = 0', false, 'Please try again.'],
            ['x = X/2', false, 'Please try again.'],
            ['x = X/4', true, 'Correct!'],
            ['x = inf', false, 'Please try again.']]},
];