// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun("bathe my dog")


function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
 
function wrapAdjective (special ="*") {
    return function (adjective = "a hard worker"){
        return `You are ${special}${adjective}${special}!`;
    };
}

wrapAdjective("%")("a dedicated programmer");