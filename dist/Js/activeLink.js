const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(item => {
    item.addEventListener('click', function () {
        navItems.forEach(item => {
            item.classList.remove('current');
        });
        this.classList.add('current')
    });
});