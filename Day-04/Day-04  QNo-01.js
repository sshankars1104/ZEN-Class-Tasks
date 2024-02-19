//-------------Day-04 QNo-01.Create your own resume data in JSON format--------------------

let myResume = {
    "basics": {
        "name": "SHANKAR S",
        "email": "sdotshankar@gamil.com",
        "phone": 8838860529,
        "degree": "B.E",
        "location": {
            "address": "22/14 AmmanNagar",
            "postalCode": 635109,
            "city": "Hosur",
            "state": "Tamilnadu",
            "country": "India"
        },
        "profiles": [
            {
                "website": "https://www.linkedin.com/in/shankar-s-277b02291/",
                "github": "https://https://github.com/sshankars1104"
            }
        ]
    },
    "work": [
        {
            "company": "GUVI",
            "position": "Student",
            "startDate": "14-01-2024",
            "endDate": "14-06-2024",
            "summary": "i am the Student handling various task and gaining lots of experience",
        },
    ],
    "education": [
        {
            "institution": "Jayam College Of Engineering And Technology",
            "department": "Mechanical Engineering",
            "studyType": "fulltime",
            "batch start year": 2015,
            "batch end year": 2019,
            "gpa": 7.5,
        }
    ],
    "skills": [
        {
            "name": "JavaScript",
            "level": "beginner",
            "projects": [
                "Automatic Attendance Maintaining System using JavaScript"
            ]
        },
        {
            "name": "HTML/CSS",
            "level": "beginner"
        },
        {
            "name": "React.js",
            "level": "beginner"
        },
        {
            "name": "Node.js",
            "level": "beginner"
        },
        {
            "name": "Express.js",
            "level": "beginner"
        },
        {
            "name": "MongoDB",
            "level": "beginner"
        },
        {
            "name": "RESTful APIs",
            "level": "beginner"
        },
        {
            "name": "Git",
            "level": "beginner"
        },
        {
            "name": "Problem Solving",
            "level": "beginner"
        },
        {
            "name": "Teamwork",
            "level": "beginner"
        },
        {
            "name": "Communication",
            "level": "beginner"
        }
    ],
    "languages": [
        {
            "language": "Tamil,Enlish",
        }
    ],
    "interests": [
        {
            "name": "script writter,youtuber,",
        }
    ]
}

console.log(myResume);








