//-------------Day-04 QNo-02.For the Above JSON iterate over all for loops--------------
//------------------------(for, for in, for of, for Each)--------------------



const skills = [
    { name: "JavaScript", level: "beginner" },
    { name: "HTML/CSS", level: "beginner" },
    { name: "React.js", level: "beginner" },
    { name: "Node.js", level: "beginner" },
    { name: "Express.js", level: "beginner" },
    { name: "MongoDB", level: "beginner" },
    { name: "RESTful APIs", level: "beginner" },
    { name: "Git", level: "beginner" },
    { name: "Problem Solving", level: "beginner" },
    { name: "Teamwork", level: "beginner" },
    { name: "Communication", level: "beginner" }
];

// -------------------Using for loop-------------------

for (let index = 0; index < skills.length; index++) {
    console.log(`Skill: ${skills[index].name}, Level: ${skills[index].level}`);
}

// -------------------Using for...in loop-------------------

for (let index in skills) {
    console.log(`Skill: ${skills[index].name}, Level: ${skills[index].level}`);
}

// -------------------Using for...of loop-------------------
for (const skill of skills) {
    console.log(`Skill: ${skill.name}, Level: ${skill.level}`);
}

// -------------------Using forEach loop-------------------
skills.forEach(skill => {
    console.log(`Skill: ${skill.name}, Level: ${skill.level}`);
});

