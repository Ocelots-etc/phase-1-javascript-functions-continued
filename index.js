// code your solution here


function saturdayFun(activity = 'roller-skate') {
  return (`This Saturday, I want to ${activity}!`);
}
// saturdayFun()

function mondayWork(doing = 'go to the office') {
  return (`This Monday, I will ${doing}.`);
}

function wrapAdjective(flair = "*") {
  return function (childParam = "special") {
    return `You are ${flair}${childParam}${flair}!`
    } 
}

