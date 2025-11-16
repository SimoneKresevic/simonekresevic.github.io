// ===========================
// Research Timeline & Popup Data
// ===========================

const eventsData = {
    'phd-ongoing': {
        title: 'Ph.D. Research Ongoing',
        institution: 'BioingTS lab, University of Trieste, Italy',
        detail: 'Expected completion: Dec 2026 | Supervisors: Prof. A. Accardo, Prof. M. Ajcevic ',
        description: 'Leading research on trustworthy AI systems spanning natural language processing, computer vision, and multi-modal learning. Developed guideline-based RAG architectures integrating imaging and text modalities, interpretable deep learning models for medical image analysis, and approaches for multi-source data fusion. Principal investigator on HPC-funded project (25,000 computing hours) comparing fine-tuning vs. RAG strategies for cross-modal domain adaptation.',
        photos: [
            'images/phd/6b3bc0e4-b2c8-4c92-b4e1-1f7c120c73e4.JPG',
            'images/phd/IMG_2047.HEIC', 
            'images/phd/IMG_4594.HEIC', 
        ]
    },
    'teaching-assistant': {
        title: 'Teaching Assistant',
        institution: 'University of Trieste, Italy',
        detail: 'Teaching Assistant for theoretical frontal lectures and practical laboratory sessions.  Student mentoring in projects spanning LLM safety and medical image analysis',
        description: '<table class="teaching-table">' +
        '<tr>' +
            '<td class="course-name">Bioengineering and Robotics</td>' +
            '<td class="course-period">Fall 2024, 2025</td>' +
            '<td class="course-dept">Department of Medicine, Surgery & Health Sciences</td>' +
        '</tr>' +
        '<tr>' +
            '<td class="course-name">Introduction to Programming Science in the Biomedical Field</td>' +
            '<td class="course-period">Spring 2024</td>' +
            '<td class="course-dept">Department of Engineering and Architecture</td>' +
        '</tr>' +
        '<tr>' +
            '<td class="course-name">Seminars of Deep Learning in "Biomedical Signal Analysis Complements"</td>' +
            '<td class="course-period">Fall 2023, 2024, 2025</td>' +
            '<td class="course-dept">Department of Engineering and Architecture</td>' +
        '</tr>' +
    '</table>',
    },
    'PAISS2025': {
        title: 'PRAIRE/MIAI Artificial Intelligence Summer School 2025',
        description: 'Attendence school comprises lectures and practical sessions conducted by renowned experts in different areas of artificial intelligence.',
        photos: [
            'images/conferences/PAISS/IMG_6201.HEIC', 
            'images/conferences/PAISS/IMG_6191.HEIC', 
            'images/conferences/PAISS/IMG_6228.HEIC', 
            'images/conferences/PAISS/IMG_9643-1-scaled.jpg'
        ]
    },
    'techcare-exp': {
        title: 'TechCare: Predictive Analytics for Remote Health Monitoring',
        detail: 'AI for Elderly Care',
        description: 'Developing fairness-aware predictive models for elderly care with emphasis on equitable performance across demographic groups. Implementing privacy-preserving AI agents for personalized behavior monitoring. Addressing algorithmic bias through demographic parity constraints and calibration techniques.',
    },
    'yalePeriod': {
        title: 'Completion of Yale Research',
        institution: 'Yale University, New Haven, CT, USA',
        detail: 'Yale School of Medicine | PI: Prof. Dennis L. Shung',
        description: 'Developed and validated RAG frameworks addressing fundamental safety challenges in clinical LLM deployment and published methodology in Nature Digital Medicine, achieving top-10 citation ranking for 2024. Design a comprehensive multi-stakeholder protocol for evaluating hallucination, bias, and reliability in medical AI systems. Conducted empirical studies on human-AI collaboration patterns. Work established new standards for safe AI integration in gastroenterology and hepatology care pathways.',
        photos: [
            'images/yale/IMG_5646.HEIC', 
            'images/yale/IMG_6367.HEIC', 
            'images/yale/1000009568.jpg', 
            'images/yale/IMG_2972.jpg', 
            'images/yale/IMG_7466.HEIC',
            'images/yale/IMG_5473.HEIC'
        ]
    },
    
    'EMBC2025': {
        title: '47th Annual International Conference of the IEEE EMBC',
        institution: 'Copenhagen, Denmark',
        detail: '14-18 July 2025',
        description: 'Poster presentation: "An AI-enabled mHealth integrated care solution for the management of metabolic-associated steatotic liver disease"',
        photos: [
            'images/conferences/EMBC2025/IMG_5233.HEIC' , 
            'images/conferences/EMBC2025/IMG_5291.HEIC'
        ]
    },

    'GNB2025': {
        title: 'IX Congress of the National Group of Bioengineering (GNB)',
        institution: 'Palermo, Italy',
        detail: '15-18 June 2025',
        description: `
            Two presentations:<br>
            • "Integrating guideline-based retrieval-augmented generation with large language models in hepatology" <strong>[Best Oral Presentation Award]</strong><br>
            • "A deep learning-based framework for structural segmentation of hepatic lobules in digital pathology"
        `,
        photos: [
            'images/conferences/GNB2025/Immagine0046.jpg', 
            'images/conferences/GNB2025/IMG_4317.HEIC',
            'images/conferences/GNB2025/DSC_0146.JPG'
        ]
    },

    'EMBEC2024': {
        title: '9th European Medical and Biological Engineering Conference',
        institution: 'Portorož, Slovenia',
        detail: '9-13 June 2024',
        description: `
            <strong>First Place - IFMBE Scientific Challenge</strong><br><br>
            Two oral presentations:<br>
            • "Advancing Clinical Decision Support with Large Language Models: A Framework for Guideline-Compatible Hepatitis C Management"<br>
            • "Optimizing electroporation responses in genetically engineered HEK cells: An ensemble learning approach"
        `,
        photos: [
            'images/conferences/EMBEC2024/IMG_1017.HEIC'
        ]
    },

    'YaleSymposium2024': {
        title: 'AI in Medicine Symposium',
        institution: 'Yale School of Medicine, New Haven, CT (USA)',
        detail: '2 February 2024',
        description: 'Poster presentation on LLM-based clinical decision support systems in hepatology',
        photos: [
            'https://picsum.photos/400/300?random=15',
            'https://picsum.photos/400/300?random=16',
            'https://picsum.photos/400/300?random=17'
        ]
    },

    'GNB2023': {
        title: 'VIII Congress of the National Group of Bioengineering (GNB)',
        institution: 'Padova, Italy',
        detail: '21-23 June 2023',
        description: 'Poster presentation: "Estimating the degree of non-alcoholic fatty liver disease (NAFLD) from ultrasound images: preliminary results"',
        photos: [
        ]
    },

    'NBC2023': {
        title: '19th Nordic-Baltic Conference on Biomedical Engineering and Medical Physics',
        institution: 'Liepaja, Latvia',
        detail: '12-14 June 2023',
        description: `
            Plenary session oral presentation: "Semi-automatic approach to estimate the degree of non-alcoholic fatty liver disease (NAFLD) from ultrasound images" <strong>[Finalist - IFMBE Young Investigator Competition]</strong>
        `,
        photos: [
            'images/conferences/NBC2023/IMG_20230612_220912.jpg', 
            'images/conferences/NBC2023/IMG_20230614_111613_Bokeh.jpg'
        ]
    },
    'eu-talenton-main': {
        title: 'EU TalentON 2024 — Main Prize Winner',
        institution: 'Horizon Europe Work Programme',
        detail: 'September 2024 — Katowice, Poland',
        description: 'European award recognizing outstanding research innovation across Cancer Prevention & Care, Adaptation to Climate Change, Restore Our Ocean and Waters, A Soil Deal for Europe, and 100 Climate-Neutral & Smart Cities missions.',
        photos: [
            'images/conferences/EUTALENTON_OVERALL/53993889505_b459d1d82a_o.jpg', 
            'images/conferences/EUTALENTON_OVERALL/53993890240_2b055750e2_o.jpg', 
            'images/conferences/EUTALENTON_OVERALL/54002075499_11854683f7_o.jpg',
        ]
    },
    'eu-talenton-cancer': {
        title: 'EU TalentON 2024 — Winner in the Cancer Arena',
        institution: 'Horizon Europe Work Programme',
        detail: 'September 2024 — Katowice, Poland',
        description: 'European award for excellence in cancer research and innovation.',
        photos: [
            'images/conferences/EUTALENTON_cancer/IMG_1778.HEIC',
            'images/conferences/EUTALENTON_cancer/IMG_1816.HEIC',
            'images/conferences/EUTALENTON_cancer/53990089248_b0c52d0214_o.jpg', 
        ]
    },
    'ifmbe-challenge-2025': {
        title: 'First Place — IFMBE Scientific Challenge 2025',
        institution: 'IUPESM World Congress on Medical Physics and Biomedical Engineering',
        detail: '2025',
        description: 'Award-winning paper: "Predicting Hospital Length of Stay and Mortality at Admission using Machine Learning with Advanced Feature Engineering and ICD-10 Clustering"',
        photos: [
        ]
    },
    'ifmbe-challenge-2024': {
        title: 'First Place — IFMBE Scientific Challenge 2024',
        institution: 'European Medical and Biological Engineering Conference',
        detail: 'June 2024 — Portorož, Slovenia',
        description: 'Award-winning paper: "Optimizing electroporation responses in genetically engineered HEK cells: an ensemble learning approach"',
        photos: [
            // Aggiungi qui i link alle foto
        ]
    },
    'research-assistant': {
        title: 'Research Assistant',
        institution: 'University of Trieste & National Institute of Health Collaboration',
        detail: 'Biomedical Engineering Lab',
        description: 'Developed diagnostic high-resolution video oculography system combining computer vision and signal processing for objective neurological assessment. Implemented real-time eye tracking algorithms and validated against clinical gold standards.',
    }



};

const projectsData = {
    'rag-framework': {
        title: 'Multi-Domain RAG Framework Development',
        role: 'July 2025 - Present',
        institution: 'University of Trieste & CINECA',
        description: 'Advancing RAG architectures with domain-agnostic retrieval strategies, hybrid search algorithms, and adaptive context management. Implementing systematic comparison of fine-tuning vs. RAG approaches across multiple domains. Awarded 25,000 HPC computing hours through competitive proposal for large-scale experimentation. Focus on cross-modal domain adaptation and multi-source data fusion.',
        photos: [
            'https://picsum.photos/400/300?random=21',
            'https://picsum.photos/400/300?random=22',
            'https://picsum.photos/400/300?random=23'
        ]
    },
    'techcare': {
        title: 'TechCare: Predictive Analytics for Remote Health Monitoring',
        role: 'June 2025 - Present',
        description: 'Developing fairness-aware predictive models for elderly care with emphasis on equitable performance across demographic groups. Implementing privacy-preserving AI agents for personalized behavior monitoring. Addressing algorithmic bias through demographic parity constraints and calibration techniques. Building remote monitoring systems with real-time anomaly detection.',
        photos: [
            'https://picsum.photos/400/300?random=24',
            'https://picsum.photos/400/300?random=25',
            'https://picsum.photos/400/300?random=26',
            'https://picsum.photos/400/300?random=27'
        ]
    },
    'safety-framework': {
        title: 'Safety Framework for Clinical LLMs',
        role: 'Oct. 2023 - July 2025',
        institution: 'Yale-Trieste Collaboration',
        description: 'Designed comprehensive safety evaluation framework addressing hallucination, bias, and reliability in LLM-assisted clinical decision-making. Conducted multi-stakeholder validation studies with physicians and computer scientists. Framework components include systematic prompt testing, adversarial robustness evaluation, and human-in-the-loop verification protocols. Published in Nature Digital Medicine with top-10 citation impact.',
        photos: [
            'https://picsum.photos/400/300?random=28',
            'https://picsum.photos/400/300?random=29',
            'https://picsum.photos/400/300?random=30'
        ]
    },
    'gdpr-mhealth': {
        title: 'GDPR-Compliant mHealth Solution for Chronic Disease Monitoring',
        role: '2023 - 2024',
        institution: 'BioingTS lab and Prodigys s.r.l',
        description: 'Designed privacy-preserving AI architecture for multi-institutional health data analysis compliant with GDPR and FHIR protocol standards. Implemented secure on-device processing and differential privacy techniques while maintaining clinical prediction accuracy. Developed federated learning approaches for collaborative model training without data sharing.',
        photos: [
            'https://picsum.photos/400/300?random=31',
            'https://picsum.photos/400/300?random=32'
        ]
    }
};

// ===========================
// Popup Management
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const eventPopup = document.getElementById('eventPopup');
    const projectPopup = document.getElementById('projectPopup');
    
    // Event items click handlers
    const eventItems = document.querySelectorAll('.timeline-item');
    eventItems.forEach(item => {
        item.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event');
            openEventPopup(eventId);
        });
    });
    
    // Project cards click handlers
    const projectCards = document.querySelectorAll('.project-card-modern');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectPopup(projectId);
        });
    });
    
    // Close popup handlers
    document.querySelectorAll('.popup-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.popup-overlay').classList.remove('active');
        });
    });
    
    // Close on overlay click
    [eventPopup, projectPopup].forEach(popup => {
        if (popup) {
            popup.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (eventPopup) eventPopup.classList.remove('active');
            if (projectPopup) projectPopup.classList.remove('active');
        }
    });
});

function openEventPopup(eventId) {
    const event = eventsData[eventId];
    if (!event) return;
    
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventInstitution').textContent = event.institution;
    document.getElementById('eventDetail').textContent = event.detail;
    document.getElementById('eventDescription').innerHTML = event.description;
    
    // Create photo gallery
    const gallery = document.getElementById('eventGallery');
    gallery.innerHTML = '';
    if (event.photos && event.photos.length > 0) {
        event.photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = `${event.title} - Photo ${index + 1}`;
            img.className = 'gallery-image';
            img.addEventListener('click', () => openLightbox(event.photos, index));
            gallery.appendChild(img);
        });
    }
    
    document.getElementById('eventPopup').classList.add('active');
}

function openProjectPopup(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectRole').textContent = project.role;
    document.getElementById('projectInstitution').textContent = project.institution;
    document.getElementById('projectDescription').innerHTML = project.description;
    
    // Create photo gallery
    const gallery = document.getElementById('projectGallery');
    gallery.innerHTML = '';
    if (project.photos && project.photos.length > 0) {
        project.photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = `${project.title} - Photo ${index + 1}`;
            img.className = 'gallery-image';
            img.addEventListener('click', () => openLightbox(project.photos, index));
            gallery.appendChild(img);
        });
    }
    
    document.getElementById('projectPopup').classList.add('active');
}

// Lightbox for full-size images
function openLightbox(photos, startIndex) {
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