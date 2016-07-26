class MenuHandler {
    constructor() {
        this.menuTrigger = $('#menu-trigger');

        this.toggleMenu();
    }

    toggleMenu() {
        this.menuTrigger.on('click', ()=> {
            this.menuTrigger.toggleClass('is-open');
            this.menu.toggleClass('is-open');
        });
    }
}

$(document).ready(function ($) {
    var menuHandler = new MenuHandler('.menu');
});
