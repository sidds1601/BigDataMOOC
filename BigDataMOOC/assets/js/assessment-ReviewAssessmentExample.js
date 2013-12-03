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


// When the assessment page loads, activity-generic.js will render the contents
// of the 'assessment' variable into the enclosing HTML webpage.

// For information on modifying this page, see
// https://code.google.com/p/course-builder/wiki/CreateAssessments.


var assessment = {
  // HTML to display at the start of the page
  preamble: '',

  questionsList: [
    {questionHTML: '<p>Exercise 1 - On your own, identify the total amount of data that was produced worldwide in 2012 and list the top sources.</p><p>Storing Big Data is hard, but analysing Big Data is harder still. In the year 2010, around 1,200 exabytes of data was produced globally. Find out how much data was produced in the years 2011 and 2012. Reflect on the biggest sources of data now and then.</p>',
	 multiLine: true,
     correctAnswerRegex: /.*/i
    },

    {questionHTML: '<p>We reviewed several Big Data Application Areas X with particular examples. We can classify them as <ul><li>Internet</li><li>Commerce</li><li>Industry</li><li>Sensors</li><li>Medical/Health</li><li>Science</li></ul></p> <p>Identify 2 Application areas with a specific example that interest you and write at most half a page on each as to why interesting and what the key aspects of data and analytics are. These should be different from examples I gave but can be related. For example you could choose commerce but cover different example such as Amazon rather than eBay. The 2 applications should be in different categories of the 6 above.</p><p>List 5 applications areas (values of X in X-Informatics with examples) that you would like course to cover. These can be new, one of 2 you write about above, and/or examples I covered.</p>',
     multiLine: true,
     correctAnswerRegex: /.*/i
    },
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'ReviewAssessmentExample',
  checkAnswers: false
}
