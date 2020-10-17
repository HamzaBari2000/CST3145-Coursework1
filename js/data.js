//The JSON Data Array For Lessons.
let lessonsData = [
    {
        'SubjectName': 'Maths',
        'Location': '3 Brain Close, Newport", NP19 9JG',
        'Price': 50.00,
        'Space': 5,
        'Image': 'img/maths.svg'
    },
    {
        'SubjectName': 'English',
        'Location': '"15 St Johns Terrace, East Boldon", NE36 0LN',
        'Price': 30.00,
        'Space': 5,
        'Image': 'img/english.png'
    },
    {
        'SubjectName': 'Science',
        'Location': 'Browfoot Cottage, Ireleth Road, Askam-In-Furness", LA16 7DR',
        'Price': 75.00,
        'Space': 5,
        'Image': 'img/science.png'
    },
    {
        'SubjectName': 'Computer Science',
        'Location': '33 Cecil Street, Stourbridge", DY8 1XQ',
        'Price': 100.00,
        'Space': 5,
        'Image': 'img/cs.jpg'
    },
    {
        'SubjectName': 'History',
        'Location': '4 Hollingthorpe Lane, Hall Green", WF4 3NQ',
        'Price': 85.00,
        'Space': 5,
        'Image': 'img/history.png'
    },
    {
        'SubjectName': 'Geography',
        'Location': '37 Franklin Road, Birmingham", B30 2HJ',
        'Price': 85.00,
        'Space': 5,
        'Image': 'img/geography.png'
    },
    {
        'SubjectName': 'Religious Education',
        'Location': 'Bede House, 28C Blakebrook, Kidderminster", DY11 6AP',
        'Price': 80.00,
        'Space': 5,
        'Image': 'img/Re.png'
    },
    {
        'SubjectName': 'Phyical Education',
        'Location': '3 The Chowns, Harpenden", AL5 2BN',
        'Price': 110.00,
        'Space': 5,
        'Image': 'img/PhyicalEducation.png'
    },
    {
        'SubjectName': 'Business',
        'Location': 'Ground Floor Flat A, Conway House, Sussex Road, New Romney", TN28 8DU',
        'Price': 145.00,
        'Space': 5,
        'Image': 'img/business.png'
    },
    {
        'SubjectName': 'Information Technology',
        'Location': '41 Keynsham Road, Southampton", SO19 5EX',
        'Price': 25.00,
        'Space': 5,
        'Image': 'img/IT.png'
    },
];

//Store Data to the Local Storage
localStorage.setItem("Lessons", JSON.stringify(lessonsData));