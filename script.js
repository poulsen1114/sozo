// Function to shuffle an array using Fisher-Yates algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to scroll to a section by ID
function scrollToSection(sectionId) {
    const targetElement = document.querySelector('#' + sectionId);
    if (targetElement) {
        const headerHeight = document.querySelector('.fixed-header')?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Function to load header dynamically
function loadHeader() {
    const headerContainer = document.querySelector('#header-container');
    if (headerContainer) {
        fetch('header.html')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load header');
                return response.text();
            })
            .then(html => {
                headerContainer.innerHTML = html;

                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');

                hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.addEventListener('click', function(e) {
                        const href = this.getAttribute('href');

                        // Handle external pages or non-index links
                        if (!href.includes('index.html') && !href.startsWith('#')) {
                            window.location.href = href;
                            navMenu.classList.remove('active');
                            return;
                        }

                        e.preventDefault();
                        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                        const targetId = href.includes('#') ? href.split('#')[1] : null;

                        if (targetId) {
                            if (currentPage === 'index.html') {
                                // Already on index.html, scroll immediately
                                scrollToSection(targetId);
                                navMenu.classList.remove('active');
                            } else {
                                // Navigating to index.html, store target and redirect
                                sessionStorage.setItem('scrollToSection', targetId);
                                window.location.href = 'index.html';
                            }
                        }
                    });
                });

                document.addEventListener('click', (event) => {
                    const isMenuOpen = navMenu.classList.contains('active');
                    const clickedInsideMenu = navMenu.contains(event.target);
                    const clickedHamburger = hamburger.contains(event.target);
                    if (isMenuOpen && !clickedInsideMenu && !clickedHamburger) {
                        navMenu.classList.remove('active');
                    }
                });
            })
            .catch(error => {
                console.error('Error loading header:', error);
                headerContainer.innerHTML = '<p>Error loading header</p>';
            });
    }
}

// Handle page load and scrolling
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();

    // Check for target section from sessionStorage or URL hash
    const targetId = sessionStorage.getItem('scrollToSection') || (window.location.hash ? window.location.hash.substring(1) : null);
    if (targetId && window.location.pathname.split('/').pop() === 'index.html') {
        // Wait for header to load before scrolling
        const checkHeaderLoaded = setInterval(() => {
            if (document.querySelector('.fixed-header')) {
                clearInterval(checkHeaderLoaded);
                scrollToSection(targetId);
                sessionStorage.removeItem('scrollToSection');
            }
        }, 100); // Check every 100ms until header is loaded
    }

    // Update footer year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Load and render reviews
    const reviewsContainer = document.querySelector('.reviews-carousel');
    if (reviewsContainer) {
        fetch('reviews.json')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load reviews');
                return response.json();
            })
            .then(reviews => {
                shuffle(reviews);
                reviewsContainer.innerHTML = '';
                reviews.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.className = 'review-item';
                    const sourceLogo = {
                        "google": "./img/reviews/google-logo.svg",
                        "facebook": "./img/reviews/facebook-logo.svg",
                        "apple": "./img/reviews/apple-logo.svg",
                        "yelp": "./img/reviews/yelp-logo.svg"
                    }[review.source?.toLowerCase()] || "index/default-logo.svg";
                    reviewElement.innerHTML = `
                        <div class="stars">
                            <img src="${sourceLogo}" alt="${review.source || 'Review'} Logo" class="review-source-logo">
                            ${review.stars}
                        </div>
                        <p class="review-text">${review.text}</p>
                        <p class="review-meta">— ${review.author}, ${review.date}</p>
                    `;
                    reviewsContainer.appendChild(reviewElement);
                });

                let scrollAmount = 0;
                const scrollStep = 1.5;
                const scrollInterval = 20;
                let autoScrollTimer;

                function startAutoScroll() {
                    autoScrollTimer = setInterval(() => {
                        scrollAmount += scrollStep;
                        if (scrollAmount >= reviewsContainer.scrollWidth - reviewsContainer.clientWidth) {
                            scrollAmount = 0;
                        }
                        reviewsContainer.scrollTo({
                            left: scrollAmount,
                            behavior: 'smooth'
                        });
                    }, scrollInterval);
                }

                function stopAutoScroll() {
                    clearInterval(autoScrollTimer);
                }

                startAutoScroll();
                reviewsContainer.addEventListener('mouseenter', stopAutoScroll);
                reviewsContainer.addEventListener('mouseleave', startAutoScroll);

                let touchTimeout;
                reviewsContainer.addEventListener('touchstart', () => {
                    stopAutoScroll();
                    clearTimeout(touchTimeout);
                });
                reviewsContainer.addEventListener('touchend', () => {
                    touchTimeout = setTimeout(startAutoScroll, 1000);
                });
                reviewsContainer.addEventListener('touchmove', stopAutoScroll);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
                reviewsContainer.innerHTML = '<p>Sorry, reviews could not be loaded at this time.</p>';
            });
    }

    // Load and render services
    const servicesContainer = document.querySelector('.services-grid');
    if (servicesContainer) {
        fetch('services.json')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load services');
                return response.json();
            })
            .then(services => {
                servicesContainer.innerHTML = '';
                services.forEach(service => {
                    const serviceElement = document.createElement('div');
                    serviceElement.className = 'service-item';
                    serviceElement.innerHTML = `
                        <img src="${service.image}" alt="${service.category}" class="service-image">
                        <ul class="service-list">
                            ${service.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    `;
                    servicesContainer.appendChild(serviceElement);
                });
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                servicesContainer.innerHTML = '<p>Sorry, services could not be loaded at this time.</p>';
            });
    }

    // Load and render salon directory
    const directoryContainer = document.querySelector('#salon-directory-list');
    if (directoryContainer) {
        fetch('directory.json')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load directory');
                return response.json();
            })
            .then(directory => {
                directoryContainer.innerHTML = '';

                const socialIcons = {
                    "Facebook": `<svg width="24" height="24" viewBox="0 0 16 16" fill="#1877F2" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>`,
                    "Instagram": `<svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="instaGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FEDA75" /><stop offset="20%" style="stop-color:#FA7E1E" /><stop offset="40%" style="stop-color:#D62976" /><stop offset="60%" style="stop-color:#962FBF" /><stop offset="100%" style="stop-color:#4F5BD5" /></linearGradient></defs><path fill="url(#instaGrad)" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6 -.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg>`,
                    "X": `<svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
                    "Website": `<svg width="24" height="24" viewBox="0 0 16 16" fill="#a77bd2" xmlns="http://www.w3.org/2000/svg"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/></svg>`,
                    "TikTok": `<svg width="24" height="24" viewBox="0 0 333335 333336" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M72464 0h188407c39856 0 72464 32609 72464 72465v188407c0 39855-32608 72464-72464 72464H72464C32608 333336 0 300727 0 260872V72465C0 32609 32608 0 72464 0zm127664 70642c337 2877 825 5661 1461 8341l6304 2c1170 9991 4006 19119 8465 26697 7282 6745 16797 10904 28280 11641v9208c2131 444 4350 746 6659 894v29690c-14847 1462-27841-3426-42981-12531l2324 50847c0 16398 61 23892-8738 38977-20546 35222-58194 36677-82176 18323-12269-4256-23069-12466-29881-23612-19875-32516-1959-85512 55687-90966l-94 7835v1970c3105-646 6365-1144 9794-1468v31311c-12484 2057-20412 5890-24119 12980-7424 14197-4049 26526 3716 34309 16276 2796 34401-8481 31673-43351V70644h33628z" fill="#1a121f"/><path d="M200128 70642c3093 26406 18915 45038 44510 46681v25046l-165 15v-21275c-25595-1642-40311-17390-43404-43796l-27114-1v111095c3912 50005-35050 51490-49955 32531 17482 10934 45867 3826 42501-39202V70641h33628zm-72854 184165c-15319-3153-29249-12306-37430-25689-19875-32516-1959-85512 55687-90966l-94 7835c-53444 8512-58809 65920-44009 89802 5707 9209 15076 15686 25846 19019z" fill="#26f4ee"/><path d="M207892 78985c1761 15036 7293 28119 16454 36903-12866-6655-20630-19315-23062-36905l6609 2zm36580 47511c2181 463 4456 777 6824 929v29690c-14847 1462-27841-3426-42981-12531l2324 50847c0 16398 61 23892-8738 38977-21443 36760-61517 36743-85239 15810 30930 17765 84928 3857 84829-56453v-55496c15141 9105 28134 13993 42981 12530v-24302zm-99036 21460c3105-646 6365-1144 9794-1468v31311c-12484 2057-20412 5890-24119 12980-10441 19964 474 36238 14923 41365-18075-649-36010-19214-23555-43031 3707-7089 10474-10923 22958-12980v-28177z" fill="#fb2c53"/><path d="M201068 77313c3093 26406 17809 42154 43404 43796v29689c-14847 1462-27841-3425-42981-12530v55496c119 72433-77802 77945-100063 42025-14800-23881-9435-81290 44009-89802v30147c-12483 2057-19250 5891-22958 12980-22909 43808 56997 69872 51475-706V77313l27114 1z" fill="#fefefe"/></svg>`,
                    "Pinterest": `<svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" fill="#E60023"/></svg>`,
                    "YouTube": `<svg width="24" height="24" viewBox="0 0 16 16" fill="#FF0000" xmlns="http://www.w3.org/2000/svg"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>`
                };

                const hairMakeupTitle = document.createElement('h3');
                hairMakeupTitle.className = 'section-title';
                hairMakeupTitle.textContent = 'HAIR + MAKEUP';
                directoryContainer.appendChild(hairMakeupTitle);

                const hairMakeupGrid = document.createElement('div');
                hairMakeupGrid.className = 'salon-grid';
                directory.hair_and_makeup.forEach(salon => {
                    const salonCard = document.createElement('div');
                    salonCard.className = 'salon-card';
                    const contactsHtml = Array.isArray(salon.contacts) 
                        ? salon.contacts.map(c => `<p>${c.replace(/(\(\d{3}\)\s*\d{3}-\d{4})/, '<a href="tel:$1">$1</a>')}</p>`).join('')
                        : `<p>${salon.contacts.replace(/(\(\d{3}\)\s*\d{3}-\d{4})/, '<a href="tel:$1">$1</a>')}</p>`;
                    const locationHtml = salon.suite ? `<div class="salon-location">Suite #${salon.suite}</div>` 
                        : salon.section ? `<div class="salon-location">Chair Section ${salon.section}</div>` 
                        : '';
                    salonCard.innerHTML = `
                        <div class="salon-image"><img src="${salon.image}" alt="${salon.name} Logo"></div>
                        <h4 class="salon-title">${salon.name.replace(/\n/g, '<br>')}</h4>
                        ${locationHtml}
                        <div class="salon-contacts">${contactsHtml}</div>
                        <div class="salon-services">${salon.services.join(' | ')}</div>
                        <div class="salon-links">${salon.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${socialIcons[link.text]}</a>`).join(' ')}</div>
                    `;
                    hairMakeupGrid.appendChild(salonCard);
                });
                directoryContainer.appendChild(hairMakeupGrid);

                const showStylists = false;

                if (showStylists && directory.stylists && directory.stylists.length > 0) {
                    const stylistsTitle = document.createElement('h3');
                    stylistsTitle.className = 'section-title';
                    stylistsTitle.textContent = 'STYLISTS';
                    directoryContainer.appendChild(stylistsTitle);

                    const stylistsList = document.createElement('ul');
                    stylistsList.className = 'stylist-list';
                    directory.stylists.forEach(stylist => {
                        const li = document.createElement('li');
                        const [name, number] = stylist.split(' - ');
                        li.innerHTML = `<span class="name">${name}</span><span class="number">${number.replace(/(\(\d{3}\)\s*\d{3}-\d{4})/, '<a href="tel:$1">$1</a>')}</span>`;
                        stylistsList.appendChild(li);
                    });
                    directoryContainer.appendChild(stylistsList);
                }

                const spaWellnessTitle = document.createElement('h3');
                spaWellnessTitle.className = 'section-title';
                spaWellnessTitle.textContent = 'SPA + WELLNESS';
                directoryContainer.appendChild(spaWellnessTitle);

                const spaWellnessGrid = document.createElement('div');
                spaWellnessGrid.className = 'salon-grid';
                directory.spa_and_wellness.forEach(salon => {
                    const salonCard = document.createElement('div');
                    salonCard.className = 'salon-card';
                    const contactsHtml = Array.isArray(salon.contacts) 
                        ? salon.contacts.map(c => `<p>${c.replace(/(\(\d{3}\)\s*\d{3}-\d{4})/, '<a href="tel:$1">$1</a>')}</p>`).join('')
                        : `<p>${salon.contacts.replace(/(\(\d{3}\)\s*\d{3}-\d{4})/, '<a href="tel:$1">$1</a>')}</p>`;
                    const locationHtml = salon.suite ? `<div class="salon-location">Suite #${salon.suite}</div>` 
                        : salon.section ? `<div class="salon-location">Chair Section ${salon.section}</div>` 
                        : '';
                    salonCard.innerHTML = `
                        <div class="salon-image"><img src="${salon.image}" alt="${salon.name} Logo"></div>
                        <h4 class="salon-title">${salon.name.replace(/\n/g, '<br>')}</h4>
                        ${locationHtml}
                        <div class="salon-contacts">${contactsHtml}</div>
                        <div class="salon-services">${salon.services.join(' | ')}</div>
                        <div class="salon-links">${salon.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${socialIcons[link.text]}</a>`).join(' ')}</div>
                    `;
                    spaWellnessGrid.appendChild(salonCard);
                });
                directoryContainer.appendChild(spaWellnessGrid);

                const retailTitle = document.createElement('h3');
                retailTitle.className = 'section-title';
                retailTitle.textContent = 'RETAIL';
                directoryContainer.appendChild(retailTitle);

                const retailGrid = document.createElement('div');
                retailGrid.className = 'salon-grid';
                directory.retail.forEach(salon => {
                    const salonCard = document.createElement('div');
                    salonCard.className = 'salon-card';
                    const contactsHtml = Array.isArray(salon.contacts) 
                        ? salon.contacts.map(c => `<p>${c.replace(/(\(\d{3}\)\s*\d{3}-\d{4})/, '<a href="tel:$1">$1</a>')}</p>`).join('')
                        : `<p>${salon.contacts.replace(/(\(\d{3}\)\s*\d{3}-\d{4})/, '<a href="tel:$1">$1</a>')}</p>`;
                    const locationHtml = salon.suite ? `<div class="salon-location">Suite #${salon.suite}</div>` 
                        : salon.section ? `<div class="salon-location">Chair Section ${salon.section}</div>` 
                        : '';
                    salonCard.innerHTML = `
                        <div class="salon-image"><img src="${salon.image}" alt="${salon.name} Logo"></div>
                        <h4 class="salon-title">${salon.name.replace(/\n/g, '<br>')}</h4>
                        ${locationHtml}
                        <div class="salon-contacts">${contactsHtml}</div>
                        <div class="salon-services">${salon.services.join(' | ')}</div>
                        <div class="salon-links">${salon.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${socialIcons[link.text]}</a>`).join(' ')}</div>
                    `;
                    retailGrid.appendChild(salonCard);
                });
                directoryContainer.appendChild(retailGrid);
            })
            .catch(error => {
                console.error('Error fetching directory:', error);
                directoryContainer.innerHTML = '<p>Sorry, directory could not be loaded at this time.</p>';
            });
    }

    // Load and render products
const productsContainer = document.querySelector('.products-grid');
if (productsContainer) {
    fetch('products.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load products');
            return response.json();
        })
        .then(products => {
            productsContainer.innerHTML = '';
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product-item';
                // Check if url exists and is non-empty
                const hasLink = product.url && product.url.trim() !== '';
                productElement.innerHTML = hasLink
                    ? `
                        <a href="${product.url}" target="_blank">
                            <img src="${product.image}" alt="${product.name}" class="product-image">
                            <span class="product-name">${product.name}</span>
                        </a>
                    `
                    : `
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <span class="product-name">${product.name}</span>
                    `;
                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            productsContainer.innerHTML = '<p>Sorry, products could not be loaded at this time.</p>';
        });
}
});