// Main JavaScript File

document.addEventListener('DOMContentLoaded', () => {
    console.log('FinAdvisors Site Loaded');

    // Initialize Bootstrap Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // Initialize Bootstrap Popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    // Mobile Menu Close on Click (Optional UX improvement)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('mainNav');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && !link.classList.contains('dropdown-toggle')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
                bsCollapse.hide();
            }
        });
    });
});
