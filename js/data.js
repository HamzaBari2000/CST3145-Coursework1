//The JSON Data Array For Lessons.
let lessonsData = [
    {
        'SubjectName': 'Maths',
        'Location': 'London',
        'Price': 50.00,
        'Space': 5,
        'Image': 'img/maths.svg'
    },
    {
        'SubjectName': 'English',
        'Location': 'Manchester',
        'Price': 30.00,
        'Space': 5,
        'Image': 'img/english.png'
    },
    {
        'SubjectName': 'Science',
        'Location': 'New York',
        'Price': 75.00,
        'Space': 5,
        'Image': 'img/science.png'
    },
    {
        'SubjectName': 'Computer Science',
        'Location': 'Birmingham',
        'Price': 100.00,
        'Space': 5,
        'Image': 'img/cs.jpg'
    },
    {
        'SubjectName': 'History',
        'Location': 'London',
        'Price': 85.00,
        'Space': 5,
        'Image': 'img/history.png'
    },
    {
        'SubjectName': 'Geography',
        'Location': 'New York',
        'Price': 85.00,
        'Space': 5,
        'Image': 'img/geography.png'
    },
    {
        'SubjectName': 'Religious Education',
        'Location': 'Leeds',
        'Price': 80.00,
        'Space': 5,
        'Image': 'img/Re.png'
    },
    {
        'SubjectName': 'Phyical Education',
        'Location': 'Reading',
        'Price': 110.00,
        'Space': 5,
        'Image': 'img/PhyicalEducation.png'
    },
    {
        'SubjectName': 'Business',
        'Location': 'Cape Town',
        'Price': 145.00,
        'Space': 5,
        'Image': 'img/business.png'
    },
    {
        'SubjectName': 'Information Technology',
        'Location': 'Amsterdam',
        'Price': 25.00,
        'Space': 5,
        'Image': 'img/IT.png'
    },
];

//Store Data to the Local Storage
localStorage.setItem("Lessons", JSON.stringify(lessonsData));