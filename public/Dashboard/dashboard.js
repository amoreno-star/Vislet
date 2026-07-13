// Controls sidebar collapsing states via body tag manipulation
function toggleSidebar() {
    document.body.classList.toggle('sidebar-hidden');
}

// Mobile Slide Automation Hook
document.addEventListener("DOMContentLoaded", () => {
    const activeMobileTab = document.querySelector(".nav-item.active");
    const scrollWrapper = document.querySelector(".nav-scroll-container");
    
    if (activeMobileTab && scrollWrapper && window.innerWidth <= 768) {
        setTimeout(() => {
            // Centers the active node gracefully inside your horizontal panel timeline on startup
            activeMobileTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }, 150);
    }
});