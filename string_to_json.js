

let string = `The prospect of making a mistake worries me.
 Completely true  Mostly true  Somewhat true/false  Mostly false  Completely false
2. 
I get impatient with my family when they mess up.
 Always  Often  Sometimes  Rarely  Never
3. 
When I give someone a task to do, I expect it to be done without any errors.
 Strongly agree  Agree  Somewhat agree/disagree  Disagree  Strongly disagree
4. 
If there's one mistake in my work, no matter how minor, my boss will think I'm incompetent.
 Strongly agree  Agree  Somewhat agree/disagree  Disagree  Strongly disagree
5. 
Failing an assignment at work or school makes me a failure as a person.
 Strongly agree  Agree  Somewhat agree/disagree  Disagree  Strongly disagree`




 function convJson(string){
    //string = string.substring(0, string.indexOf("."))

    string = string.replace(/\n/g, " ")

    let array = string.split(/[.]/g)

    let new_array = []
    
    for(let x in array){
        if(x % 2 == 0){
            new_array.push(array[x].trim())
        }
    }


 let questions = [
{
    n: '1',
    question: " Which of the following statements best describes your attitude to deadlines?",
    a: "I like having a good time reserve in case something goes wrong.",
    b: "I like the pressure of an oncoming deadline, but I still need to have a solid time reserve.",
    c: "I work best when I know there's a deadline coming soon (within a week).",
    d: "I have the utmost disrespect for deadlines, so I barely finish anything on time.",
    e: "I love the feeling of racing against the clock to see if I can meet the deadline."
},
{
    n: '2',
    question: " Which of the following statements best describes your attitude to deadlines?",
    a: "I like having a good time reserve in case something goes wrong.",
    b: "I like the pressure of an oncoming deadline, but I still need to have a solid time reserve.",
    c: "I work best when I know there's a deadline coming soon (within a week).",
    d: "I have the utmost disrespect for deadlines, so I barely finish anything on time.",
    e: "I love the feeling of racing against the clock to see if I can meet the deadline."
},
{
    n: '3',
    question: " Which of the following statements best describes your attitude to deadlines?",
    a: "I like having a good time reserve in case something goes wrong.",
    b: "I like the pressure of an oncoming deadline, but I still need to have a solid time reserve.",
    c: "I work best when I know there's a deadline coming soon (within a week).",
    d: "I have the utmost disrespect for deadlines, so I barely finish anything on time.",
    e: "I love the feeling of racing against the clock to see if I can meet the deadline."
},
{
    n: '4',
    question: " Which of the following statements best describes your attitude to deadlines?",
    a: "I like having a good time reserve in case something goes wrong.",
    b: "I like the pressure of an oncoming deadline, but I still need to have a solid time reserve.",
    c: "I work best when I know there's a deadline coming soon (within a week).",
    d: "I have the utmost disrespect for deadlines, so I barely finish anything on time.",
    e: "I love the feeling of racing against the clock to see if I can meet the deadline."
},
{
    n: '5',
    question: " Which of the following statements best describes your attitude to deadlines?",
    a: "I like having a good time reserve in case something goes wrong.",
    b: "I like the pressure of an oncoming deadline, but I still need to have a solid time reserve.",
    c: "I work best when I know there's a deadline coming soon (within a week).",
    d: "I have the utmost disrespect for deadlines, so I barely finish anything on time.",
    e: "I love the feeling of racing against the clock to see if I can meet the deadline."
},
{
    n: '6',
    question: " Which of the following statements best describes your attitude to deadlines?",
    a: "I like having a good time reserve in case something goes wrong.",
    b: "I like the pressure of an oncoming deadline, but I still need to have a solid time reserve.",
    c: "I work best when I know there's a deadline coming soon (within a week).",
    d: "I have the utmost disrespect for deadlines, so I barely finish anything on time.",
    e: "I love the feeling of racing against the clock to see if I can meet the deadline."
},
{
    n: '7',
    question: " Which of the following statements best describes your attitude to deadlines?",
    a: "I like having a good time reserve in case something goes wrong.",
    b: "I like the pressure of an oncoming deadline, but I still need to have a solid time reserve.",
    c: "I work best when I know there's a deadline coming soon (within a week).",
    d: "I have the utmost disrespect for deadlines, so I barely finish anything on time.",
    e: "I love the feeling of racing against the clock to see if I can meet the deadline."
},
{
    n: '8',
    question: " Which of the following statements best describes your attitude to deadlines?",
    a: "I like having a good time reserve in case something goes wrong.",
    b: "I like the pressure of an oncoming deadline, but I still need to have a solid time reserve.",
    c: "I work best when I know there's a deadline coming soon (within a week).",
    d: "I have the utmost disrespect for deadlines, so I barely finish anything on time.",
    e: "I love the feeling of racing against the clock to see if I can meet the deadline."
},
{
    n: '9',
    question: " Which of the following statements best describes your attitude to deadlines?",
    a: "I like having a good time reserve in case something goes wrong.",
    b: "I like the pressure of an oncoming deadline, but I still need to have a solid time reserve.",
    c: "I work best when I know there's a deadline coming soon (within a week).",
    d: "I have the utmost disrespect for deadlines, so I barely finish anything on time.",
    e: "I love the feeling of racing against the clock to see if I can meet the deadline."
},
{
    n: '10',
    question: " Which of the following statements best describes your attitude to deadlines?",
    a: "I like having a good time reserve in case something goes wrong.",
    b: "I like the pressure of an oncoming deadline, but I still need to have a solid time reserve.",
    c: "I work best when I know there's a deadline coming soon (within a week).",
    d: "I have the utmost disrespect for deadlines, so I barely finish anything on time.",
    e: "I love the feeling of racing against the clock to see if I can meet the deadline."
},

]

for(let x in new_array){
   questions[parseInt(x) + 1].question = new_array[parseInt(x) + 1]
}

console.log(questions)
 }

 convJson(string)
