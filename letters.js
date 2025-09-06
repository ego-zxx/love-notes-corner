function toggleLetter(letterCard) {
    const preview = letterCard.querySelector('.letter-preview');
    const fullContent = letterCard.querySelector('.letter-full');
    
    if (fullContent.style.display === 'none') {
        // Show full content
        preview.style.display = 'none';
        fullContent.style.display = 'block';
    } else {
        // Show preview
        preview.style.display = 'block';
        fullContent.style.display = 'none';
    }
}