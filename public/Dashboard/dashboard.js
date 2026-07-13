// Unified Pointer Gesture Swipe and Click Module Engine
document.addEventListener("DOMContentLoaded", () => {
    const scrollWrapper = document.getElementById("MobileNavWrapper");
    const navItems = document.querySelectorAll(".nav-item");
    
    // Desktop views can select path routing directly on standard click actions
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if (window.innerWidth > 768) {
                const destination = item.getAttribute("data-url");
                if (destination) window.location.href = destination;
            }
        });
    });

    if (!scrollWrapper || window.innerWidth > 768) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let dragDistance = 0;

    // Center active item tab element on mobile layout startup
    const activeMobileTab = document.querySelector(".nav-item.active");
    if (activeMobileTab) {
        setTimeout(() => {
            activeMobileTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }, 150);
    }

    // Capture Drag Movements
    scrollWrapper.addEventListener("pointerdown", (e) => {
        isDragging = true;
        startX = e.clientX;
        scrollLeft = scrollWrapper.scrollLeft;
        dragDistance = 0;
        scrollWrapper.style.scrollSnapType = "none"; 
        scrollWrapper.style.scrollBehavior = "auto";
    });

    window.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        const currentDeltaX = e.clientX - startX;
        dragDistance = Math.abs(currentDeltaX);
        scrollWrapper.scrollLeft = scrollLeft - currentDeltaX; 
    });

    window.addEventListener("pointerup", () => {
        if (!isDragging) return;
        isDragging = false;
        scrollWrapper.style.scrollSnapType = "x mandatory"; 
        scrollWrapper.style.scrollBehavior = "smooth";
    });

    // Handle Mobile Tap Routing (Differentiates taps from drag gestures)
    navItems.forEach(item => {
        item.addEventListener("pointerup", () => {
            if (dragDistance < 6) { 
                const destination = item.getAttribute("data-url");
                if (destination) {
                    window.location.href = destination;
                }
            }
        });
    });
});