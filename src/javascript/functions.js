document.addEventListener("DOMContentLoaded", () => {
    //carusell
    const images = document.querySelectorAll(".hero-content img");
    let currentIndex = 0;

    function showSlide(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000);

    //Hamburgermenu
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");      
        hamburger.classList.toggle("active");       
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        });
    });

    //origo lights
    const colors = [
        "#FFFF00", "#FF00FF", "#00FFFF",
        "#FF69B4", "#ADFF2F", "#9400D3",
        "#00FA9A", "#1E90FF", "#FFD700", 
        "#FF4500", "#8A2BE2", "#FF1493"  
    ];

    
    const $origo = $(".hero-content h1").filter(function() { return $(this).text() === "ORIGO"; });
    const $coords = $(".hero-content h2").filter(function() { return $(this).text() === "(0,0,0)"; });
    
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    let discoInterval;

    $origo.click(function() {
        if(discoInterval){
            clearInterval(discoInterval);
            discoInterval = null;


            $origo.css({ color: "#FFFFFF", "text-shadow": "none" });
            $coords.css({ color: "#FFFFFF", "text-shadow": "none" });
        } else {
            
            discoInterval = setInterval(function() {
                const color = getRandomColor();
                const glow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
                $origo.css({ color: color, "text-shadow": glow });
                $coords.css({ color: color, "text-shadow": glow });
            }, 300);
        }
        });

    }

    //collapsebell in sektioner page
    $(".collaps").click(function(){

        $(".content").not($(this).next()).slideUp(300);
        $(".collaps").not(this).removeClass("active");

        $(this).toggleClass("active");
        $(this).next(".content").slideToggle(300);
    });

});
