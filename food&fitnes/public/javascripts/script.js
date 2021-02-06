var lastScrollTop = 0;
header = document.getElementById('header');
logo = document.getElementById('logo');
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) 
    
    {
        header.style.top = "-180px";
    } 
    
    else {
        if (scrollTop > 160) 
        { logo.classList.remove("logo-small_transition-out");
            header.classList.add("bg-white");
            logo.classList.add("logo-small");
        } 
        
        else 
        {
            header.classList.remove("bg-white");
            logo.classList.remove("logo-small");
            logo.classList.add("logo-small_transition-out");
        }
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;

})