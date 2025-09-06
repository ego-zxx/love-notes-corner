function handleRSVP(dateId, response) {
    const rsvpSection = document.getElementById(`rsvp-${dateId}`);
    
    // Create thank you message
    const thankYouMessage = document.createElement('div');
    thankYouMessage.className = 'rsvp-thank-you';
    
    if (response === 'yes') {
        thankYouMessage.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">💕</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Yay! You said yes!</div>
            <div style="font-size: 0.875rem;">I can't wait to spend this special time with you. It's going to be magical! ✨</div>
        `;
    } else {
        thankYouMessage.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">✨</div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Thanks for responding!</div>
            <div style="font-size: 0.875rem;">Let me know when you decide. I'll be here waiting with love! 💕</div>
        `;
    }
    
    // Replace buttons with thank you message
    rsvpSection.innerHTML = '';
    rsvpSection.appendChild(thankYouMessage);
    
    // Add fade-in animation
    thankYouMessage.style.opacity = '0';
    thankYouMessage.style.transform = 'translateY(10px)';
    setTimeout(() => {
        thankYouMessage.style.transition = 'all 0.3s ease-out';
        thankYouMessage.style.opacity = '1';
        thankYouMessage.style.transform = 'translateY(0)';
    }, 50);
}