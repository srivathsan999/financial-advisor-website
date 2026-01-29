document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const icon = themeToggleBtn.querySelector('i');
    
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
    }
    
    // Toggle Event
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        // Update Icon
        if (isDark) {
            icon.classList.remove('bi-moon-fill');
            icon.classList.add('bi-sun-fill');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('bi-sun-fill');
            icon.classList.add('bi-moon-fill');
            localStorage.setItem('theme', 'light');
        }
    });
});
