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
  '<p><b>1.</b> Name two advantages to cloud computing.</p>',

  { questionType: 'multiple choice',
    choices: [['Low maintenance costs, ease of use', false, 'Please try again.'],
              ['Environmentally friendly, data processing offloading', true, 'Correct!'],
              ['Hacker-proof, high security', false, 'Please try again.'],
              [' Industry standard compliant, approved by NASA', false, 'Please try again.']]},
			  
  '<p><b>2.</b> What are some of the sources of the Data Deluge as mentioned in the lecture so far?</p>',
  
  { questionType: 'multiple choice',
    choices: [['Political lobbying campaigns', false, 'Please try again.'],
              ['Oceanic survey models, polar icecap study', false, 'Please try again.'],
              ['Market research & product testing', false, 'Please try again.'],
              ['Satellites, Social Media', true, 'Correct!']]},
			  
  '<p><b>3.</b> Arrange the following in the correct progression: Wisdom Information Knowledge Data.</p>',
  
  { questionType: 'multiple choice',
    choices: [['DKWI', false, 'Please try again.'],
              ['IDWK', false, 'Please try again.'],
              ['DIKW', true, 'Correct!'],
              ['WIKD', false, 'Please try again.']]},
			  
  '<p><b>4.</b> What three fields in which Data Science is regularly applied are mentioned in the lecture?</p>',
  
  { questionType: 'multiple choice',
    choices: [['Bioinformatics, Pathology, Health', true, 'Correct!'],
              ['Zoology, Toxicology, Botany', false, 'Please try again.'],
              ['Web Informatics, Political, Commercial', false, 'Please try again.'],
              ['Communications, Chaos Theory, Numerology', false, 'Please try again.']]},

];
