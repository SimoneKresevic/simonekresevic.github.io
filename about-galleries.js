// ===========================
// About Page Photo Galleries
// ===========================

const mountainPhotos = [
    'https://picsum.photos/500/400?random=50',
    'https://picsum.photos/500/400?random=51',
    'https://picsum.photos/500/400?random=52',
    'https://picsum.photos/500/400?random=53',
    'https://picsum.photos/500/400?random=54',
    'https://picsum.photos/500/400?random=55'
];

const rowingPhotos = [
    'https://picsum.photos/500/400?random=60',
    'https://picsum.photos/500/400?random=61',
    'https://picsum.photos/500/400?random=62',
    'https://picsum.photos/500/400?random=63'
];

document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to activity cards
    const activityCards = document.querySelectorAll('.activity-card');
    
    activityCards.forEach((card, index) => {
        // Add a visual indicator that cards are clickable
        card.style.cursor = 'pointer';
        
        // Add click event
        card.addEventListener('click', function() {
            if (index === 0) {
                // Mountain card
                openActivityGallery('Alpinism', mountainPhotos);
            } else if (index === 1) {
                // Rowing card
                openActivityGallery('Rowing', rowingPhotos);
            }
        });
        
        // Add hover effect hint
        const hint = document.createElement('p');
        hint.className = 'gallery-hint';
        hint.textContent = 'Click to view photos';
        hint.style.cssText = 'font-size: 0.85rem; color: var(--neutral-light); font-style: italic; margin-top: 1rem; opacity: 0; transition: opacity 0.3s ease;';
        card.appendChild(hint);
        
        card.addEventListener('mouseenter', () => {
            hint.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            hint.style.opacity = '0';
        });
    });
});

function openActivityGallery(title, photos) {
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'popup-overlay active';
    popup.innerHTML = `
        <div class="popup-content activity-gallery-popup">
            <button class="popup-close">&times;</button>
            <h3>${title} Gallery</h3>
            <div class="popup-gallery" id="activityGalleryGrid"></div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Add photos to gallery
    const gallery = popup.querySelector('#activityGalleryGrid');
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `${title} - Photo ${index + 1}`;
        img.className = 'gallery-image';
        img.addEventListener('click', () => openActivityLightbox(photos, index));
        gallery.appendChild(img);
    });
    
    // Close handlers
    popup.querySelector('.popup-close').addEventListener('click', () => {
        document.body.removeChild(popup);
    });
    
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
    
    document.addEventListener('keydown', function handleEscape(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(popup)) {
                document.body.removeChild(popup);
            }
            document.removeEventListener('keydown', handleEscape);
        }
    });
}

function openActivityLightbox(photos, startIndex) {
    let currentIndex = startIndex;
    
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <button class="lightbox-prev">&larr;</button>
        <button class="lightbox-next">&rarr;</button>
        <img class="lightbox-image" src="${photos[currentIndex]}" alt="Photo">
        <div class="lightbox-counter">${currentIndex + 1} / ${photos.length}</div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    const updateImage = () => {
        lightbox.querySelector('.lightbox-image').src = photos[currentIndex];
        lightbox.querySelector('.lightbox-counter').textContent = `${currentIndex + 1} / ${photos.length}`;
    };
    
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
        document.body.removeChild(lightbox);
        document.body.style.overflow = '';
    });
    
    lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        updateImage();
    });
    
    lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % photos.length;
        updateImage();
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('keydown', function handleKey(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(lightbox)) {
                document.body.removeChild(lightbox);
                document.body.style.overflow = '';
            }
            document.removeEventListener('keydown', handleKey);
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + photos.length) % photos.length;
            updateImage();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % photos.length;
            updateImage();
        }
    });
}