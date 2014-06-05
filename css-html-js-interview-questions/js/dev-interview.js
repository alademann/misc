/**
 *  Activate side nav / top nav items based on current url
 */
$(function() {
    // side nav (exact match)
    $('.nav-sidebar')
        .find('a[href="./' + location.pathname.split("dev-interviews/")[1] + '"]')
            .parent('li')
                .addClass('active');

    // top nav (fuzzy match)
    $('.navbar-nav')
        .find('a[href^="./' + location.pathname.split("dev-interviews/")[1] + '"]')
            .parent('li')
                .addClass('active');
});