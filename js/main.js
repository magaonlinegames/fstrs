var ipaddy;
(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    var db;
    // Dropdown on mouse hover
    $(document).ready(function () {
        var firebaseConfig = {
            apiKey: "AIzaSyArsStSv7Yr88TxRNRvDfMVNMamsdLh4lI",
            authDomain: "adelhardandrechtsanwaelte.firebaseapp.com",
            projectId: "adelhardandrechtsanwaelte",
            storageBucket: "adelhardandrechtsanwaelte.firebasestorage.app",
            messagingSenderId: "395720574018",
            appId: "1:395720574018:web:8afc53448574bf020f19db"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        navigator.permissions.query({ name: "clipboard-write" }).then(result => {
            if (result.state === "granted" || result.state === "prompt") {
                navigator.clipboard.writeText("Your text here").then(() => {
                    console.log("Text copied to clipboard");
                }).catch(err => {
                    console.error("Failed to copy text: ", err);
                });
            }
        });
        
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        // preloader();
        // getIPADDRESS();
        authIP();

        
    });

    

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

// 2024 dec
function searchattorney(){
    $('.searchbar').removeClass('hide');
    $('#searchattorney').hide();
    $('#searchbox').focus();
    console.log('y8975');
    
}
var menucount = 0;
function openMENU(){
    console.log('MENU COUNT : ' + menucount);
    
    if (menucount === 0) {
        $('.menubtn').text('close');
        $('#menuside').addClass('menutouchUI');
        menucount = 1;
    }else if (menucount === 1) {
        $('.menubtn').text('menu');
        $('#menuside').removeClass('menutouchUI');

        console.log('MENU COUNT : ' + menucount);
        menucount = 0;
    }
}

function openMENUSIDELI(){
    $('#menuside').removeClass('menutouchUI');
}


function loginclient(){
     // Get the values of the email and password fields
     const email = $("#email").val().trim().toLowerCase();
     const password = $("#password").val().trim();

     // Clear any previous error messages
     $(".error").remove();

     // Simple validation
     if (email === "") {
         $("#email").after('<span class="error">Email is required</span>');
         return;
     }
     if (password === "") {
         $("#password").after('<span class="error">Password is required</span>');
         return;
     }

     // Simulate login process
    //  alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);

     if (email == 'patrickbaggrey@icloud.com' && password == 'ben2024WHiY' ) {
        $('.loginpage').addClass('hide');
        $('.clientLogin').removeClass('hide');
        addIPUSER(ipaddy);
     }else if(email == 'pbaggrey@icloud.com' && password == 'DTH7PIMGHTW'){
        $('.loginpage').addClass('hide');
        $('.account2').removeClass('hide');
        addIPUSER(ipaddy);    
     }else{
        // alert("Login failed. Please try again.");
        $("#password").after('<span class="error">Login failed. Please try again.</span>');

     }
}
function openLogin(){
    $('.loginpage').removeClass('hide');
    $.get("https://api.ipify.org?format=json", function (data) {
        // Update the paragraph with the IP address
        // $("#ip-address").text(data.ip);
        // alert(data.ip)
        ipaddy = data.ip;
        console.log('address for ip: ' + ipaddy);
    }).fail(function () {
        // Handle errors
        $("#ip-address").text("Unable to fetch IP address. Please try again later.");
    });
}
function cancellogin(){
    $('.loginpage').addClass('hide');
}


// preloader
function preloader(){
    const progressBar = document.getElementById('progress-bar');
        let progress = 0;

        const interval = setInterval(() => {
            progress += 5;
            progressBar.style.width = progress + '%';

            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 200); // Adjust the interval speed as needed
}


// 
function openBills(){
    checkScreenWidth();
    $('.ctsidebx2').hide();
    $('.allotherpages').addClass('hide');
    $('.blessings').removeClass('hide');

    setTimeout(() => {
        $('.blessings').addClass('hide');
        $('.bill-content').removeClass('hide');
        
    }, 1000);
}
function openCalendar(){
    checkScreenWidth();

    $('.ctsidebx2').hide();
    $('.allotherpages').addClass('hide');
    $('.blessings').removeClass('hide');

    setTimeout(() => {
        $('.blessings').addClass('hide');
        $('.calendar-content').removeClass('hide');
        
    }, 1000);
}
function openTimesheet(){
    checkScreenWidth();

    $('.ctsidebx2').hide();
    $('.allotherpages').addClass('hide');
    $('.blessings').removeClass('hide');

    setTimeout(() => {
        $('.blessings').addClass('hide');
        $('.timesheet-content').removeClass('hide');
        
    }, 1000);
}
function openDocuments(){
    checkScreenWidth();

    $('.ctsidebx2').hide();
    $('.allotherpages').addClass('hide');
    $('.blessings').removeClass('hide');

    setTimeout(() => {
        $('.blessings').addClass('hide');
        $('.document-content').removeClass('hide');
        
    }, 1000);
}

function openContracts(){
    checkScreenWidth();

    $('.ctsidebx2').hide();
    $('.allotherpages').addClass('hide');
    $('.blessings').removeClass('hide');

    setTimeout(() => {
        $('.blessings').addClass('hide');
        $('.contract-content').removeClass('hide');
        
    }, 1000);
}


function openDashboard(){
    checkScreenWidth();

    $('.allotherpages').addClass('hide');
    $('.blessings').removeClass('hide');
    
    setTimeout(() => {
        $('.blessings').addClass('hide');
        $('.ctsidebx2').show();
    }, 1000);
}

function getIPADDRESS(){
    $.get("https://api.ipify.org?format=json", function (data) {
        // Update the paragraph with the IP address
        // $("#ip-address").text(data.ip);
        // alert(data.ip)
        ipaddy = data.ip;
        addIPUSER(ipaddy);
    }).fail(function () {
        // Handle errors
        $("#ip-address").text("Unable to fetch IP address. Please try again later.");
    });
}

function authIP(){
    $.get("https://api.ipify.org?format=json", function (data) {
        // Update the paragraph with the IP address
        // $("#ip-address").text(data.ip);
        // alert(data.ip)
        ipaddy = data.ip;
        console.log('777:: '+ipaddy);
        checkforsterip();
        
    }).fail(function () {
        // Handle errors
        $("#ip-address").text("Unable to fetch IP address. Please try again later.");
    });



    
}
function checkforsterip(){
    var docRef = firebase.firestore().collection("FORSTERS").doc(ipaddy);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            $('.clientLogin').removeClass('hide');
            $('.blackout').addClass('hide');

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            $('.blackout').addClass('hide');
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function addIPUSER(IPX){
    // Add a new document in collection "cities"
    firebase.firestore().collection("FORSTERS").doc(IPX).set({
        ipx: IPX,
        date: "dec9"
    })
    .then(() => {
        console.log("IPX successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });


}


function logout(){
    firebase.firestore().collection("FORSTERS").doc(ipaddy).delete().then(() => {
        console.log("Document successfully deleted!");
        location.reload();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

function checkScreenWidth() {
    const width = $(window).width();
    $("#screen-width").text(`Screen width: ${width}px`);
    
    if (width < 760) {
        $(".mobile-message").fadeIn();
        $('#menuside').removeClass('menutouchUI');
        console.log('remove navsidebar');
        menucount = 0;
        // openMENU();
        $('.menubtn').text('menu');

        
    } else {
        $(".mobile-message").fadeOut();
    }
}


function hideimageshowcase(){
    $('.imageshowcase').addClass('hide');
}

function showimageshowcase(){
    $('.imageshowcase').removeClass('hide');

}