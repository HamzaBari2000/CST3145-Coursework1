//Store Data to the Local Storage
let getLessonsData = JSON.parse(localStorage.getItem("Lessons"));

let navbar = new Vue({
    el: '.navbar',
    data: {
        logoImage: 'img/Logo.png',
        btnTitle: 'Cart',
        btnLessonsTitle: 'Lessons',
        lessonURL: 'index.html',
        cart: 'cart.html', 
    },
    methods: {
        goToCart: function () {
            window.location.href = "cart.html";
        },
        goToLessons: function () {
            window.location.href = "index.html";
        }
    }
})

let displayLessons = new Vue({
    el: '#lessons',
    data: { 
      lessons: [
        {
            SubjectName: getLessonsData[0].SubjectName,
            Location: getLessonsData[0].location,
            Price: getLessonsData[0].Price,
            Space: getLessonsData[0].Space,
            Image: getLessonsData[0].Image,
            ButtonID: 'addToCart0'
        },
        {
            SubjectName: getLessonsData[1].SubjectName,
            Location: getLessonsData[1].location,
            Price: getLessonsData[1].Price,
            Space: getLessonsData[1].Space,
            Image: getLessonsData[1].Image,
            ButtonID: 'addToCart1'
        },
        {
            SubjectName: getLessonsData[2].SubjectName,
            Location: getLessonsData[2].location,
            Price: getLessonsData[2].Price,
            Space: getLessonsData[2].Space,
            Image: getLessonsData[2].Image,
            ButtonID: 'addToCart2'
        },
        {
            SubjectName: getLessonsData[3].SubjectName,
            Location: getLessonsData[3].location,
            Price: getLessonsData[3].Price,
            Space: getLessonsData[3].Space,
            Image: getLessonsData[3].Image,
            ButtonID: 'addToCart3'
        },
        {
            SubjectName: getLessonsData[4].SubjectName,
            Location: getLessonsData[4].location,
            Price: getLessonsData[4].Price,
            Space: getLessonsData[4].Space,
            Image: getLessonsData[4].Image,
            ButtonID: 'addToCart4'
        },
        {
            SubjectName: getLessonsData[5].SubjectName,
            Location: getLessonsData[5].location,
            Price: getLessonsData[5].Price,
            Space: getLessonsData[5].Space,
            Image: getLessonsData[5].Image,
            ButtonID: 'addToCart5'
        },
        {
            SubjectName: getLessonsData[6].SubjectName,
            Location: getLessonsData[6].location,
            Price: getLessonsData[6].Price,
            Space: getLessonsData[6].Space,
            Image: getLessonsData[6].Image,
            ButtonID: 'addToCart6'
        },
        {
            SubjectName: getLessonsData[7].SubjectName,
            Location: getLessonsData[7].location,
            Price: getLessonsData[7].Price,
            Space: getLessonsData[7].Space,
            Image: getLessonsData[7].Image,
            ButtonID: 'addToCart7'
        },
        {
            SubjectName: getLessonsData[8].SubjectName,
            Location: getLessonsData[8].location,
            Price: getLessonsData[8].Price,
            Space: getLessonsData[8].Space,
            Image: getLessonsData[8].Image,
            ButtonID: 'addToCart8'
        },
        {
            SubjectName: getLessonsData[9].SubjectName,
            Location: getLessonsData[9].location,
            Price: getLessonsData[9].Price,
            Space: getLessonsData[9].Space,
            Image: getLessonsData[9].Image,
            ButtonID: 'addToCart9'
        },
	  ]
    },
    mounted() { //When the Webpage loads up the cart button should be hidden. 
        document.getElementById("btnCart").style.visibility = "hidden";
    },
    methods: {
        addToCart: function (index) {
        
        //Reduce the number of spaces as the user clicks on the add to cart button.    
        this.lessons[index].Space--;
            
        /* When the user clicks the cart button it will add the lesson to the cart page and also when the button is clicked 
        Therefore to go to the cart page is where the button will become visible. */
        document.getElementById("btnCart").style.visibility = "visible";
            
        if (this.lessons[0].Space == 0) {
            document.getElementById("addToCart0").style.visibility = "hidden";
        }
        if (this.lessons[1].Space == 0) {
            document.getElementById("addToCart1").style.visibility = "hidden";
        }
        if (this.lessons[2].Space == 0) {
            document.getElementById("addToCart2").style.visibility = "hidden";
        }
        if (this.lessons[3].Space == 0) {
            document.getElementById("addToCart3").style.visibility = "hidden";
        }
        if (this.lessons[4].Space == 0) {
            document.getElementById("addToCart4").style.visibility = "hidden";
        }
        if (this.lessons[5].Space == 0) {
            document.getElementById("addToCart5").style.visibility = "hidden";
        }
        if (this.lessons[6].Space == 0) {
            document.getElementById("addToCart6").style.visibility = "hidden";
        }
        if (this.lessons[7].Space == 0) {
            document.getElementById("addToCart7").style.visibility = "hidden";
        }
        if (this.lessons[8].Space == 0) {
            document.getElementById("addToCart8").style.visibility = "hidden";
        }
        if (this.lessons[9].Space == 0) {
            document.getElementById("addToCart9").style.visibility = "hidden";
        }
    }
}});
