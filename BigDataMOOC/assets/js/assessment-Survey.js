var assessment = {
  // HTML to display at the start of the page
  preamble: '<b>Post Course Survey</b><br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: '"X-Informatics" had 29 units as part of its coursework. How many classes did you do (whether you did a portion or all of it)?',
     correctAnswerRegex:/\d+/},

    {questionHTML: 'Overall I found it worthwhile to take this course.',
     choices: [correct('Strongly agree'),
               correct('Agree'),
               correct('Neutral'),
			   correct('Disagree'),
			   correct('Strongly disagree')]},

    {questionHTML: 'How helpful was the COURSE FORUM in supporting your learning?',
     choices: [correct('Very helpful'),
               correct('Somewhat helpful'),
               correct('Not helpful'),
			   correct('Not applicable'),
			   correct('I didn\'t experience it or can\'t recall')]},

//    {questionHTML: 'If you marked "Not helpful" for any questions above, please let us know the reason:',
//	correctAnswerString:''}

  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Survey', // unique name submitted along with all of the answers
  checkAnswers: false     // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

