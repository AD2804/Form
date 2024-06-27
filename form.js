document.getElementById('gradeform').addEventListener('submit', function(event){
    event.preventDefault();

    const marks = parseFloat(document.getElementById('marks').value);
    let grade = getGrade(marks);
    document.getElementById('result').textContent = `Grade: ${grade}`;
});

document.getElementById('Pattern').addEventListener('submit', function(event){
    event.preventDefault();
    const patternNumber = parseInt(document.getElementById('n').value);
    let patternText = pattern(patternNumber);
    document.getElementById('pattern').textContent = patternText;
});

function getGrade(marks) {
    if (marks >= 60) {
        grade = "First Devision.";
    }
    else if(marks >=45 && marks<60){
        grade = "Second Devision.";
    }
    else if(marks >= 33 && marks<45){
        grade = "Third Devision.";
    }
    else{
        grade = "Fail";
    }
    return grade;
}

function pattern(n) {
    let pattern = '';
    for(let i=0; i<n ; i++){
        for(let j=0; j<=i; j++){
            pattern+= '*';
        }
        pattern += "\n";
    }    
    return pattern;
}