(function() {
    window.mkedotnet = window.mkedotnet || {};

    window.mkedotnet.nav = {
        handleClick: function(e) {
            e.preventDefault();

            document.getElementById('main-menu').classList.toggle('expanded');
        }
    };

    var collapsedMenu = document.getElementById('main-menu-toggle');
    var hamburger = collapsedMenu.querySelector('a');

    hamburger.addEventListener('click', window.mkedotnet.nav.handleClick);
})();
