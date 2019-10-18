// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

const john = new Person ({ name: "John", age: 25, location: "Balibala", gender: "Male"}); 
const david = new Person ({ name: "David", age: 45, location: "lila", gender: "Male"}); 


console.log(john);
console.log(john.speak());
console.log(david);
console.log(david.speak());

class Instructor extends Person {
    constructor(teach) {
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

const josh = new Instructor ({name: "Josh", age: 26, location: "CALI", gender: "Male", specialty: "redux", favLanguage: "Javascript", catchPhrase: "WOOHOO"});

console.log(josh);
console.log(josh.demo("CSS"));


class Student extends Person {
    constructor(learn) {
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects;
    }
    listSubjects() {
        return [...this.favSubjects];
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

const jor = new Student ({name: "Jor", age: 25, location: "Brooklyn", gender: "Male", previousBackground: "YMCA", className: "WEB17", favSubjects:["HTML", "CSS", "JS"]});

console.log(jor);
console.log(jor.listSubjects());
console.log(jor.PRAssignment("JS I"));
console.log(jor.sprintChallenge( "JS SPRINTTTTTT"));
console.log(josh.grade(jor, "ADVANCE CSS SPRINT"));

class ProjectManagers extends Instructor {
    constructor(manage) {
        super(manage);
        this.gradClassName = manage.gradClassName;
        this.favInstructor = manage.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}

const angelo = new ProjectManagers ({ name: "Angelo", age: 26, location: "Oakland", gender: "Male", specialty: "Redux", favLanguage: "JavaScript", catchPhrase: "Ask me for help!", gradClassName: "WEB14", favInstructor: "Josh"})

console.log(angelo);
console.log(angelo.standUp("web_angelo"));
console.log(angelo.debugsCode(jor, "HTML"));
