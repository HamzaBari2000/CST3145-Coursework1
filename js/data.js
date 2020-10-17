//The JSON Data Array For Lessons.
let lessonsData = [
    {
        'SubjectName': 'Maths',
        'Location': '3 Brain Close, Newport", NP19 9JG',
        'Price': 50.00,
        'Space': 5,
        'Image': 'https://www.flaticon.com/svg/static/icons/svg/1274/1274998.svg'
    },
    {
        'SubjectName': 'English',
        'Location': '"15 St Johns Terrace, East Boldon", NE36 0LN',
        'Price': 30.00,
        'Space': 5,
        'Image': 'https://images.vexels.com/media/users/3/188408/isolated/preview/7533ecb1a338fc37140a7dbf2f826a7f-color-pencil-school-subject-english-icon-by-vexels.png'
    },
    {
        'SubjectName': 'Science',
        'Location': 'Browfoot Cottage, Ireleth Road, Askam-In-Furness", LA16 7DR',
        'Price': 75.00,
        'Space': 5,
        'Image': 'https://static.thenounproject.com/png/62984-200.png'
    },
    {
        'SubjectName': 'Computer Science',
        'Location': '33 Cecil Street, Stourbridge", DY8 1XQ',
        'Price': 100.00,
        'Space': 5,
        'Image': 'https://img.favpng.com/12/16/1/computer-science-computer-icons-symbol-png-favpng-MQKnGaKuJF0mzM8cY0rvwJ7nh.jpg'
    },
    {
        'SubjectName': 'History',
        'Location': '4 Hollingthorpe Lane, Hall Green", WF4 3NQ',
        'Price': 85.00,
        'Space': 5,
        'Image': 'https://i.pinimg.com/originals/06/d2/cf/06d2cfa5cd7f8fbe8e94ef5d75496a75.png'
    },
    {
        'SubjectName': 'Geography',
        'Location': '37 Franklin Road, Birmingham", B30 2HJ',
        'Price': 85.00,
        'Space': 5,
        'Image': 'https://static.thenounproject.com/png/445837-200.png'
    },
    {
        'SubjectName': 'Religious Education',
        'Location': 'Bede House, 28C Blakebrook, Kidderminster", DY11 6AP',
        'Price': 80.00,
        'Space': 5,
        'Image': 'https://image.flaticon.com/icons/png/512/130/130304.png'
    },
    {
        'SubjectName': 'Phyical Education',
        'Location': '3 The Chowns, Harpenden", AL5 2BN',
        'Price': 110.00,
        'Space': 5,
        'Image': 'https://static.thenounproject.com/png/1498816-200.png'
    },
    {
        'SubjectName': 'Business',
        'Location': 'Ground Floor Flat A, Conway House, Sussex Road, New Romney", TN28 8DU',
        'Price': 145.00,
        'Space': 5,
        'Image': 'https://img.icons8.com/ios/452/business.png'
    },
    {
        'SubjectName': 'Information Technology',
        'Location': '41 Keynsham Road, Southampton", SO19 5EX',
        'Price': 25.00,
        'Space': 5,
        'Image': 'https://static.thenounproject.com/png/1340459-200.png'
    },
];

//Store Data to the Local Storage
localStorage.setItem("Lessons", JSON.stringify(lessonsData));