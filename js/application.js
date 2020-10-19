//Store Data to the Local Storage
let getLessonsData = JSON.parse(localStorage.getItem("Lessons"));

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
});

let displayLessons = new Vue({
    el: '#lessons',
    data: { 
        addCart: [],
        buttonTitle: 'Add To Cart',
      lessons: [
        {
            SubjectName: getLessonsData[0].SubjectName,
            Location: getLessonsData[0].Location,
            Price: getLessonsData[0].Price,
            Space: getLessonsData[0].Space,
            Image: getLessonsData[0].Image,
            ButtonID: 'addToCart0'
        },
        {
            SubjectName: getLessonsData[1].SubjectName,
            Location: getLessonsData[1].Location,
            Price: getLessonsData[1].Price,
            Space: getLessonsData[1].Space,
            Image: getLessonsData[1].Image,
            ButtonID: 'addToCart1'
        },
        {
            SubjectName: getLessonsData[2].SubjectName,
            Location: getLessonsData[2].Location,
            Price: getLessonsData[2].Price,
            Space: getLessonsData[2].Space,
            Image: getLessonsData[2].Image,
            ButtonID: 'addToCart2'
        },
        {
            SubjectName: getLessonsData[3].SubjectName,
            Location: getLessonsData[3].Location,
            Price: getLessonsData[3].Price,
            Space: getLessonsData[3].Space,
            Image: getLessonsData[3].Image,
            ButtonID: 'addToCart3'
        },
        {
            SubjectName: getLessonsData[4].SubjectName,
            Location: getLessonsData[4].Location,
            Price: getLessonsData[4].Price,
            Space: getLessonsData[4].Space,
            Image: getLessonsData[4].Image,
            ButtonID: 'addToCart4'
        },
        {
            SubjectName: getLessonsData[5].SubjectName,
            Location: getLessonsData[5].Location,
            Price: getLessonsData[5].Price,
            Space: getLessonsData[5].Space,
            Image: getLessonsData[5].Image,
            ButtonID: 'addToCart5'
        },
        {
            SubjectName: getLessonsData[6].SubjectName,
            Location: getLessonsData[6].Location,
            Price: getLessonsData[6].Price,
            Space: getLessonsData[6].Space,
            Image: getLessonsData[6].Image,
            ButtonID: 'addToCart6'
        },
        {
            SubjectName: getLessonsData[7].SubjectName,
            Location: getLessonsData[7].Location,
            Price: getLessonsData[7].Price,
            Space: getLessonsData[7].Space,
            Image: getLessonsData[7].Image,
            ButtonID: 'addToCart7'
        },
        {
            SubjectName: getLessonsData[8].SubjectName,
            Location: getLessonsData[8].Location,
            Price: getLessonsData[8].Price,
            Space: getLessonsData[8].Space,
            Image: getLessonsData[8].Image,
            ButtonID: 'addToCart8'
        },
        {
            SubjectName: getLessonsData[9].SubjectName,
            Location: getLessonsData[9].Location,
            Price: getLessonsData[9].Price,
            Space: getLessonsData[9].Space,
            Image: getLessonsData[9].Image,
            ButtonID: 'addToCart9'
        },
	  ]
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
        }
    }    
});
