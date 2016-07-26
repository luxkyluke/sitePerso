class MenuHandler {
    constructor() {
        this.menuTrigger = $('#menu-trigger');
        this.menu = $('#menu');
        this.menuTransition = $('#menu-transition');
        this.toggleMenu();
    }

    toggleMenu() {
        this.menuTrigger.on('click', ()=> {
            this.menuTrigger.toggleClass('is-open');
            this.menu.toggleClass('is-open');
            this.menuTransition.toggleClass('is-open');
            return false;
        });
    }
}

$(document).ready(function ($) {
    var menuHandler = new MenuHandler('.menu');
});
