window.onload = function () {

    var sidebarNewsletterclicked = false;
    var sidebarToggleIcon = document.getElementById("wpbs_slider");

    var wbpsslidericonlabel = document.getElementById('icon_label');
    
    sidebarToggleIcon.onclick=function(){
        toggleSidebarNewsletter();
    };

    function toggleSidebarNewsletter() {
        if (sidebarNewsletterclicked) {
            sidebarToggleIcon.style.backgroundImage = "url('//vangrootelbelastingadviseurs.nl/wp-content/uploads/2017/02/chevron-right.png')";
            sidebarNewsletterclicked = false;
        } else {
            sidebarToggleIcon.style.backgroundImage = "url('//vangrootelbelastingadviseurs.nl/wp-content/uploads/2017/02/cross.png')";
            sidebarNewsletterclicked = true;
        }

    }
    wbpsslidericonlabel.click();
};