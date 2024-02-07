//1 var
//scope: functional + global
//use of if elseif and switch

function reportCard(score) {
    let grade;
    if (score >= 90) {
        grade = 'A'
    }
    else if (score >= 80) {
        grade = 'B'
    }
    else if (score >= 70) {
        grade = 'C'
    }
    else {
        grade = 'D'
    }
    console.log(grade)
}

reportCard(80)
// switch case
function getInfo(day) {
    switch (day) {
        case 1: day = "Monday"
            break;
        case 2: day = "Tuesday"
            break;
        case 3: day = "Wednesday"
            break;
        case 4: day = "Thursday"
            break;
        case 5: day = "Friday"
            break;
        case 6: day = "Saturday"
            break;
        case 7: day = "Sunday"
            break;
        default: "Invalid day!"

    }
    console.log(day)
}
getInfo(4)