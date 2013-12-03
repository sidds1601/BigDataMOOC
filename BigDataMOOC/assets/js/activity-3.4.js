// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Usage instructions: Create a single array variable named 'activity'. This
// represents explanatory text and one or more questions to present to the
// student. Each element in the array should itself be either
//
// -- a string containing a set of complete HTML elements. That is, if the
//    string contains an open HTML tag (such as <form>), it must also have the
//    corresponding close tag (such as </form>). You put the actual question
//    text in a string.
//
// -- a JavaScript object representing the answer information for a question.
//    That is, the object contains properties such as the type of question, a
//    regular expression indicating the correct answer, a string to show in
//    case of either correct or incorrect answers or to show when the student
//    asks for help. For more information on how to specify the object, please
//    see http://code.google.com/p/course-builder/wiki/CreateActivities.

var activity = [
  '<p><b>1.</b> Every sixty seconds, how many Firefox downloads occur according to the slide?</p>',

  { questionType: 'multiple choice',
    choices: [['1200', false, 'Please try again.'],
              ['1700', true, 'Correct!'],
              ['1600', false, 'Please try again.'],
              ['800', false, 'Please try again.']]},
			  
  '<p><b>2.</b> Which of the following have the most number of active users, as per the lecture?</p>',
  
  { questionType: 'multiple choice',
    choices: [['Facebook', false, 'Please try again.'],
              ['Gmail', false, 'Please try again.'],
              ['Twitter', false, 'Please try again.'],
              ['Skype', true, 'Correct!']]},
			  
  '<p><b>3.</b> What is the gain in time saved by analysing data in determining wind turbine placement?</p>',
  
  { questionType: 'multiple choice',
    choices: [['From Months to Weeks', false, 'Please try again.'],
              ['From Weeks to Hours', true, 'Correct!'],
              ['1 Week', false, 'Please try again'],
              ['2 Weeks', false, 'Please try again.']]},

  '<p><b>4.</b> We reviewed several Big Data Application Areas X with particular examples.</br> We can classify them as <ul><li>Internet</li><li>Commerce</li><li>Industry</li><li>Sensors</li><li>Medical/Health</li><li>Science</li></ul></p>',
  '<p>Identify 2 Application areas with a specific example that interest you and write at most half a page on each as to why interesting and what the key aspects of data and analytics are. These should be different from examples I gave but can be related. For example you could choose commerce but cover different example such as Amazon rather than eBay. The 2 applications should be in different categories of the 6 above.</p>',
  
  '<p>List 5 applications areas (values of X in X-Informatics with examples) that you would like course to cover. These can be new, one of 2 you write about above, and/or examples I covered.</p>'

];