//The JSON Data Array For Lessons.
let lessonsData = [
    {
        'SubjectName': 'Maths',
        'Location': 'London',
        'Price': 50.00,
        'Space': 5,
        'Image': 'img/maths.svg',
        'ButtonID' : 'addToCart0',
    },
    {
        'SubjectName': 'English',
        'Location': 'Manchester',
        'Price': 30.00,
        'Space': 5,
        'Image': 'img/english.png',
        'ButtonID' : 'addToCart1',
    },
    {
        'SubjectName': 'Science',
        'Location': 'New York',
        'Price': 75.00,
        'Space': 5,
        'Image': 'img/science.png',
        'ButtonID' : 'addToCart2',
    },
    {
        'SubjectName': 'Computer Science',
        'Location': 'Birmingham',
        'Price': 100.00,
        'Space': 5,
        'Image': 'img/cs.jpg',
        'ButtonID' : 'addToCart3',
    },
    {
        'SubjectName': 'History',
        'Location': 'London',
        'Price': 85.00,
        'Space': 5,
        'Image': 'img/history.png',
        'ButtonID' : 'addToCart4',
    },
    {
        'SubjectName': 'Geography',
        'Location': 'New York',
        'Price': 85.00,
        'Space': 5,
        'Image': 'img/geography.png',
        'ButtonID' : 'addToCart5',
    },
    {
        'SubjectName': 'Religious Education',
        'Location': 'Leeds',
        'Price': 80.00,
        'Space': 5,
        'Image': 'img/Re.png',
        'ButtonID' : 'addToCart6',
    },
    {
        'SubjectName': 'Phyical Education',
        'Location': 'Reading',
        'Price': 110.00,
        'Space': 5,
        'Image': 'img/PhyicalEducation.png',
        'ButtonID' : 'addToCart7',
    },
    {
        'SubjectName': 'Business',
        'Location': 'Cape Town',
        'Price': 145.00,
        'Space': 5,
        'Image': 'img/business.png',
        'ButtonID' : 'addToCart8',
    },
    {
        'SubjectName': 'Information Technology',
        'Location': 'Amsterdam',
        'Price': 25.00,
        'Space': 5,
        'Image': 'img/IT.png',
        'ButtonID' : 'addToCart9',
    },
];

//Store Data to the Local Storage
localStorage.setItem("Lessons", JSON.stringify(lessonsData));


//Get Lessons Data from the Local Storage
//let getLessonsData = JSON.parse(localStorage.getItem("Lessons"));

let header = new Vue({
    el: '#header',
    data: {
        indexTitle: 'Lessons',
        cartTitle: 'Cart',
    }
});

let navbar = new Vue({
    el: '.navbar',
    data: {
        logoImage: 'img/Logo.png',
        btnTitle: 'Cart',
        btnLessonsTitle: 'Lessons',
        lessonURL: 'index.html',
    },
    methods: {
        goToCart: function () {
            window.location.href = "cart.html";
        },
        goToLessons: function () {
            window.location.href = "index.html";
        }
    },
});

let displayLessons = new Vue({
    el: '#lessons',
    data: { 
        addCart: [],
        buttonTitle: 'Add To Cart',
        lessons: JSON.parse(localStorage.getItem("Lessons")),
        buttons: [
            {
                radioButtonID: 'rb1',
                name: 'sorting',
                label: 'Sort Subjects Acending',
            },
            {
                radioButtonID: 'rb2',
                name: 'sorting',
                label: 'Sort Subjects Decending',
            },
            {
                radioButtonID: 'rb3',
                name: 'sorting',
                label: 'Sort Price Acending',
            },
            {
                radioButtonID: 'rb4',
                name: 'sorting',
                label: 'Sort Price Decending',
            },
            {
                radioButtonID: 'rb5',
                name: 'sorting',
                label: 'Sort Location Acending',
            },
            {
                radioButtonID: 'rb6',
                name: 'sorting',
                label: 'Sort Location Decending',
            },
            {
                radioButtonID: 'rb7',
                name: 'sorting',
                label: 'Sort Availability Acending',
            },
            {
                radioButtonID: 'rb8',
                name: 'sorting',
                label: 'Sort Availability Decending',
            },
        ],
    },
    mounted() { //When the Webpage loads up the cart button should be hidden. 
        document.getElementById("btnCart").style.visibility = "hidden";

        /* These event listeners are used so that when it adds to a cart array it will only add the lesson selected, it won't add multiple times
        this is the reason why I decided to do it this way. */
        document.getElementById("addToCart0").addEventListener("click", this.addMaths); 
        document.getElementById("addToCart1").addEventListener("click", this.addEnglish); 
        document.getElementById("addToCart2").addEventListener("click", this.addScience); 
        document.getElementById("addToCart3").addEventListener("click", this.addCS); 
        document.getElementById("addToCart4").addEventListener("click", this.addHistory); 
        document.getElementById("addToCart5").addEventListener("click", this.addGeography); 
        document.getElementById("addToCart6").addEventListener("click", this.addRE); 
        document.getElementById("addToCart7").addEventListener("click", this.addPhyicalE); 
        document.getElementById("addToCart8").addEventListener("click", this.addBusiness); 
        document.getElementById("addToCart9").addEventListener("click", this.addIT); 

        //These event listeners are used for the sorting methods.
        document.getElementById("rb1").addEventListener("click", this.sortSubjectAcedning); 
        document.getElementById("rb2").addEventListener("click", this.sortSubjectDecending); 
        document.getElementById("rb3").addEventListener("click", this.sortPriceAcedning); 
        document.getElementById("rb4").addEventListener("click", this.sortPriceDecending); 
        document.getElementById("rb5").addEventListener("click", this.sortLocationAcedning); 
        document.getElementById("rb6").addEventListener("click", this.sortLocationDecending); 
        document.getElementById("rb7").addEventListener("click", this.sortAvailabilityAcedning); 
        document.getElementById("rb8").addEventListener("click", this.sortAvailabilityDecending); 
    },
    methods: {
        reduceSpace: function(index) {

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

            //Updating the Lesson Spaces
            localStorage.setItem("Lessons", JSON.stringify(this.lessons));
        },
        //The functions below are used for adding each of the to an cart array.
        addMaths: function () {
            let cart = this.addCart;
            cart.push(this.lessons[0]);
            this.storeCart();
        },
        addEnglish: function () {
            let cart = this.addCart;
            cart.push(this.lessons[1]);
            this.storeCart();
        },
        addScience: function () {
            let cart = this.addCart;
            cart.push(this.lessons[2]);
            this.storeCart();
        },
        addCS: function () {
            let cart = this.addCart;
            cart.push(this.lessons[3]);
            this.storeCart();
        },
        addHistory: function () {
            let cart = this.addCart;
            cart.push(this.lessons[4]);
            this.storeCart();
        },
        addGeography: function () {
            let cart = this.addCart;
            cart.push(this.lessons[5]);
            this.storeCart();
        },
        addRE: function () {
            let cart = this.addCart;
            cart.push(this.lessons[6]);
            this.storeCart();
        },
        addPhyicalE: function () {
            let cart = this.addCart;
            cart.push(this.lessons[7]);
            this.storeCart();
        },
        addBusiness: function () {
            let cart = this.addCart;
            cart.push(this.lessons[8]);
            this.storeCart();
        },
        addIT: function () {
            let cart = this.addCart;
            cart.push(this.lessons[9]);
            this.storeCart();
        },
        storeCart: function () {    //This function is used for storing the lessons into the Local Storage.
            let cart = this.addCart;
            localStorage.setItem("Cart", JSON.stringify(cart));
        },
        sortSubjectAcedning: function() {
            this.lessons.sort((v1, v2) => {
                if (v1.SubjectName < v2.SubjectName) {
                    return -1; 
                } 
            });
            localStorage.setItem("Lessons", JSON.stringify(this.lessons));
        },
        sortSubjectDecending: function() {
            this.lessons.sort((v1, v2) => {
               if (v1.SubjectName > v2.SubjectName){
                    return -1;
                }
            });
            localStorage.setItem("Lessons", JSON.stringify(this.lessons));
        },
        sortLocationAcedning: function() {
            this.lessons.sort((v1, v2) => {
                if (v1.Location < v2.Location) {
                    return -1; 
                } 
            });
            localStorage.setItem("Lessons", JSON.stringify(this.lessons));
        },
        sortLocationDecending: function() {
            this.lessons.sort((v1, v2) => {
               if (v1.Location > v2.Location){
                    return -1;
                }
            });
            localStorage.setItem("Lessons", JSON.stringify(this.lessons));
        },
        sortPriceAcedning: function() {
            this.lessons.sort((v1, v2) => 
                Number(v1.Price) - Number(v2.Price)
            );
            localStorage.setItem("Lessons", JSON.stringify(this.lessons));
        },
        sortPriceDecending: function() {
            this.lessons.sort((v1, v2) => 
                Number(v2.Price) - Number(v1.Price)
            );
            localStorage.setItem("Lessons", JSON.stringify(this.lessons));
        },
        sortAvailabilityAcedning: function() {
            this.lessons.sort((v1, v2) => 
                Number(v1.Space) - Number(v2.Space)
            );
            localStorage.setItem("Lessons", JSON.stringify(this.lessons));
        },
        sortAvailabilityDecending: function() {
            this.lessons.sort((v1, v2) => 
                Number(v2.Space) - Number(v1.Space)
            );
            localStorage.setItem("Lessons", JSON.stringify(this.lessons));
        },
    }    
});

let displayCart = new Vue({
    el: '#displayCart',
    data: {
        ButtonRemove: 'Remove',
        carts: JSON.parse(localStorage.getItem("Cart")),
    },
    mounted() {
    },
    methods: {
        removeLesson: function (index) {
            this.carts.splice(index, 1);
            localStorage.setItem('Cart', JSON.stringify(this.carts));
        },
    },
});
