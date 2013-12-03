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
  '<p><b>1.</b> How many Cloud Computing jobs are predicted to be available by 2015 according to Microsoft?</p>',

  { questionType: 'multiple choice',
    choices: [['6 million', false, 'Please try again.'],
              ['140 million', false, 'Please try again.'],
              ['14 million', true, 'Correct!'],
              ['900,000', false, 'Please try again.']]},
			  
  '<p><b>2.</b> From the slide shown, which is the incorrect statement about estimated data size produced per year?</p><span>*PB = Petabytes / year</span></br>',
  
  { questionType: 'multiple choice',
    choices: [['Radiology ~ 96 PB*', true, 'Correct!'],
              ['LHC', false, 'Please try again.'],
              ['Youtube', false, 'Please try again.'],
              ['Web Page', false, 'Please try again.']]},
			  
  '<p><b>3.</b> What is the largest source of data currently being produced as mentioned in the lesson?</p>',
  
  { questionType: 'multiple choice',
    choices: [['LHC', false, 'Please try again.'],
              ['Radiology', false, 'Please try again.'],
              ['Radiology including Cardiology', true, 'Correct!'],
              ['PolarGrid', false, 'Please try again.']]}

];
