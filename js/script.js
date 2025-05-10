document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add scroll event listener for mobile bottom nav
    let lastScrollTop = 0;
    const mobileBottomNav = document.querySelector('.mobile-bottom-nav');
    
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) { // Only apply on mobile
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Check if we're near the bottom of the page
            const isNearBottom = (documentHeight - (scrollTop + windowHeight)) < 100;
            
            if (isNearBottom) {
                // Show navbar when near bottom
                mobileBottomNav.style.transform = 'translateY(0)';
            } else if (scrollTop > lastScrollTop) {
                // Scrolling down
                mobileBottomNav.style.transform = 'translateY(100%)';
            } else {
                // Scrolling up
                mobileBottomNav.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        }
    });

    // Add event listeners for mobile navigation
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
            
            // Update active states
            mobileNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Also update desktop navigation active state
            navLinks.forEach(l => {
                if (l.getAttribute('data-page') === page) {
                    l.classList.add('active');
                } else {
                    l.classList.remove('active');
                }
            });
        });
    });

    // Add event listeners for quick links
    function setupQuickLinks() {
        const quickLinks = document.querySelectorAll('.quick-link');
        quickLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const page = this.getAttribute('data-page');
                loadPage(page);
            });
        });
    }

    // Call setupQuickLinks after loading any page content
    const originalLoadPage = loadPage;
    loadPage = function(page, options) {
        originalLoadPage(page, options);
        // Small delay to ensure DOM is updated
        setTimeout(setupQuickLinks, 0);
    };

    // Initial setup
    setupQuickLinks();

    const data = {
        news: [
            {
                title: "2nd Edition League Fixtures Confirmed",
                date: "2025-05-10",
                content: "The fixtures for the 2nd Edition of the EFL Uganda League have been confirmed"
            },
            {
                title: "Champions League Teams",
                date: "2025-05-10",
                content: "The following teams have been confirmed for the Champions League: Ghost Da Killer FC, Thorvisual FC, Giveaway FC, Imoizy.t FC, Maria Khan FC, Offer_Art FC, Clarks FC and Newton FC"
            },
            {
                title: "League Winner",
                date: "2025-05-09",
                content: "Ghost Da Killer FC have won the EFL Uganda League, 1st Edition"
            },
            {
                title: "YTY Cup Winner",
                date: "2025-05-09",
                content: "Thorvisual FC have won the YTY Cup, beating Ghost Da Killer FC 4-2 in the final, 1st Edition"
            },
            {
                title: "Super Cup Winner",
                date: "2025-05-09",
                content: "Thorvisual FC have won the Super Cup, beating Ghost Da Killer FC 2-1 in the final, 1st Edition"
            },
            {
                title: "YTY Cup Semi Finals",
                date: "2025-04-23",
                content: "YTY Cup Semi Finals fixtures have been released"
            },
            {
                title: "YTY Cup Semi Finals Fixtures",
                date: "2025-04-24",
                content: "Thorvisual FC vs Maria Khan, Ghost Da Killer vs Clarks FC"
            },
            {
                title: "Season Kickoff Announcement",
                date: "2025-04-11",
                content: "The new EFL Uganda season starts next week with exciting matches!"
            },
            {
                title: "Transfer Window Updates",
                date: "2025-03-10",
                content: "Latest transfers and team updates for the upcoming season"
            },
            {
                title: "New Teams Updates",
                date: "2025-03-10",
                content: "Mayweather FC, Legends FC, and many more have joined the league"
            }
        ],
        fixtures: [
           
        // Day 1
        {
            matchday: 1,
            leg: "First",
            home: "Ghost Da Killer",
            away: "Giveaway FC",
            date: "2025-05-12",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Newton FC",
            away: "Legends FC",
            date: "2025-05-12",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Chuto Smiles FC",
            date: "2025-05-12",
            time: "20:00",
            venue: "Priest Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Imoizy.t FC",
            away: "Mayweather FC",
            date: "2025-05-12",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Maria Khan",
            away: "OmomoDaniel",
            date: "2025-05-12",
            time: "20:00",
            venue: "Aka Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Milänœ FC",
            away: "Offer_Art FC",
            date: "2025-05-12",
            time: "20:00",
            venue: "Milänœ Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Clarks FC",
            away: "Urban Decay",
            date: "2025-05-12",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Jey Collectionz",
            away: "Thorvisual FC",
            date: "2025-05-12",
            time: "20:00",
            venue: "CJ Arena"
        },

        // Day 2
        {
            matchday: 2,
            leg: "First",
            home: "Legends FC",
            away: "Ghost Da Killer",
            date: "2025-05-13",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Chuto Smiles FC",
            away: "Giveaway FC",
            date: "2025-05-13",
            time: "20:00",
            venue: "Smiles Arena"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Mayweather FC",
            away: "Newton FC",
            date: "2025-05-13",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 2,
            leg: "First",
            home: "OmomoDaniel",
            away: "Priest-Emeritus",
            date: "2025-05-13",
            time: "20:00",
            venue: "Naija Stadium"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Offer_Art FC",
            away: "Imoizy.t FC",
            date: "2025-05-13",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Urban Decay",
            away: "Maria Khan",
            date: "2025-05-13",
            time: "20:00",
            venue: "Urban Arena"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Thorvisual FC",
            away: "Milänœ FC",
            date: "2025-05-13",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Jey Collectionz",
            away: "Clarks FC",
            date: "2025-05-13",
            time: "20:00",
            venue: "CJ Arena"
        },

        // Day 3
        {
            matchday: 3,
            leg: "First",
            home: "Ghost Da Killer",
            away: "Chuto Smiles FC",
            date: "2025-05-14",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Legends FC",
            away: "Mayweather FC",
            date: "2025-05-14",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Giveaway FC",
            away: "OmomoDaniel",
            date: "2025-05-14",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Newton FC",
            away: "Offer_Art FC",
            date: "2025-05-14",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Urban Decay",
            date: "2025-05-14",
            time: "20:00",
            venue: "Priest Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Imoizy.t FC",
            away: "Thorvisual FC",
            date: "2025-05-14",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Maria Khan",
            away: "Jey Collectionz",
            date: "2025-05-14",
            time: "20:00",
            venue: "Aka Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Milänœ FC",
            away: "Clarks FC",
            date: "2025-05-14",
            time: "20:00",
            venue: "Milänœ Arena"
        },

            // Day 4
        {
            matchday: 4,
            leg: "First",
            home: "Mayweather FC",
            away: "Ghost Da Killer",
            date: "2025-05-15",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 4,
            leg: "First",
            home: "OmomoDaniel",
            away: "Chuto Smiles FC",
            date: "2025-05-15",
            time: "20:00",
            venue: "Naija Stadium"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Offer_Art FC",
            away: "Legends FC",
            date: "2025-05-15",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Urban Decay",
            away: "Giveaway FC",
            date: "2025-05-15",
            time: "20:00",
            venue: "Urban Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Thorvisual FC",
            away: "Newton FC",
            date: "2025-05-15",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Jey Collectionz",
            away: "Priest-Emeritus",
            date: "2025-05-15",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Clarks FC",
            away: "Imoizy.t FC",
            date: "2025-05-15",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Milänœ FC",
            away: "Maria Khan",
            date: "2025-05-15",
            time: "20:00",
            venue: "Milänœ Arena"
        },

            // Day 5
        {
            matchday: 5,
            leg: "First",
            home: "Ghost Da Killer",
            away: "OmomoDaniel",
            date: "2025-05-16",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Mayweather FC",
            away: "Offer_Art FC",
            date: "2025-05-16",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Chuto Smiles FC",
            away: "Urban Decay",
            date: "2025-05-16",
            time: "20:00",
            venue: "Smiles Arena"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Legends FC",
            away: "Thorvisual FC",
            date: "2025-05-16",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Giveaway FC",
            away: "Jey Collectionz",
            date: "2025-05-16",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Newton FC",
            away: "Clarks FC",
            date: "2025-05-16",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Milänœ FC",
            date: "2025-05-16",
            time: "20:00",
            venue: "Priest Arena"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Imoizy.t FC",
            away: "Maria Khan",
            date: "2025-05-16",
            time: "20:00",
            venue: "IT Arena"
        },

        // Day 6
        {
            matchday: 6,
            leg: "First",
            home: "Offer_Art FC",
            away: "Ghost Da Killer",
            date: "2025-05-17",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Urban Decay",
            away: "OmomoDaniel",
            date: "2025-05-17",
            time: "20:00",
            venue: "Urban Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Thorvisual FC",
            away: "Mayweather FC",
            date: "2025-05-17",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Jey Collectionz",
            away: "Chuto Smiles FC",
            date: "2025-05-17",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Clarks FC",
            away: "Legends FC",
            date: "2025-05-17",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Milänœ FC",
            away: "Giveaway FC",
            date: "2025-05-17",
            time: "20:00",
            venue: "Milänœ Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Maria Khan",
            away: "Newton FC",
            date: "2025-05-17",
            time: "20:00",
            venue: "Aka Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Imoizy.t FC",
            away: "Priest-Emeritus",
            date: "2025-05-17",
            time: "20:00",
            venue: "IT Arena"
        },

        // Day 7
        {
            matchday: 7,
            leg: "First",
            home: "Ghost Da Killer",
            away: "Urban Decay",
            date: "2025-05-18",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Offer_Art FC",
            away: "Thorvisual FC",
            date: "2025-05-18",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 7,
            leg: "First",
            home: "OmomoDaniel",
            away: "Jey Collectionz",
            date: "2025-05-18",
            time: "20:00",
            venue: "Naija Stadium"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Mayweather FC",
            away: "Clarks FC",
            date: "2025-05-18",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Chuto Smiles FC",
            away: "Milänœ FC",
            date: "2025-05-18",
            time: "20:00",
            venue: "Smiles Arena"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Legends FC",
            away: "Maria Khan",
            date: "2025-05-18",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Giveaway FC",
            away: "Imoizy.t FC",
            date: "2025-05-18",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Newton FC",
            away: "Priest-Emeritus",
            date: "2025-05-18",
            time: "20:00",
            venue: "Emirates Arena"
        },

        // Day 8
        {
            matchday: 8,
            leg: "First",
            home: "Thorvisual FC",
            away: "Ghost Da Killer",
            date: "2025-05-19",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Jey Collectionz",
            away: "Urban Decay",
            date: "2025-05-19",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Clarks FC",
            away: "Offer_Art FC",
            date: "2025-05-19",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Milänœ FC",
            away: "OmomoDaniel",
            date: "2025-05-19",
            time: "20:00",
            venue: "Milänœ Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Maria Khan",
            away: "Mayweather FC",
            date: "2025-05-19",
            time: "20:00",
            venue: "Aka Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Imoizy.t FC",
            away: "Chuto Smiles FC",
            date: "2025-05-19",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Legends FC",
            date: "2025-05-19",
            time: "20:00",
            venue: "Priest Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Newton FC",
            away: "Giveaway FC",
            date: "2025-05-19",
            time: "20:00",
            venue: "Emirates Arena"
        },

        // Day 9
        {
            matchday: 9,
            leg: "First",
            home: "Ghost Da Killer",
            away: "Jey Collectionz",
            date: "2025-05-20",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Thorvisual FC",
            away: "Clarks FC",
            date: "2025-05-20",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Urban Decay",
            away: "Milänœ FC",
            date: "2025-05-20",
            time: "20:00",
            venue: "Urban Arena"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Offer_Art FC",
            away: "Maria Khan",
            date: "2025-05-20",
            time: "20:00",
            venue: "Priest Arena"
        },
        {
            matchday: 9,
            leg: "First",
            home: "OmomoDaniel",
            away: "Imoizy.t FC",
            date: "2025-05-20",
            time: "20:00",
            venue: "Naija Stadium"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Mayweather FC",
            away: "Priest-Emeritus",
            date: "2025-05-20",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Chuto Smiles FC",
            away: "Newton FC",
            date: "2025-05-20",
            time: "20:00",
            venue: "Smiles Arena"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Legends FC",
            away: "Giveaway FC",
            date: "2025-05-20",
            time: "20:00",
            venue: "Anko Arena"
        },

        // Day 10
        {
            matchday: 10,
            leg: "First",
            home: "Clarks FC",
            away: "Ghost Da Killer",
            date: "2025-05-21",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Milänœ FC",
            away: "Jey Collectionz",
            date: "2025-05-21",
            time: "20:00",
            venue: "Milänœ Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Maria Khan",
            away: "Thorvisual FC",
            date: "2025-05-21",
            time: "20:00",
            venue: "Aka Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Imoizy.t FC",
            away: "Urban Decay",
            date: "2025-05-21",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Offer_Art FC",
            date: "2025-05-21",
            time: "20:00",
            venue: "Priest Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Newton FC",
            away: "OmomoDaniel",
            date: "2025-05-21",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Giveaway FC",
            away: "Mayweather FC",
            date: "2025-05-21",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Legends FC",
            away: "Chuto Smiles FC",
            date: "2025-05-21",
            time: "20:00",
            venue: "Anko Arena"
        },

        // Day 11
        {
            matchday: 11,
            leg: "First",
            home: "Ghost Da Killer",
            away: "Milänœ FC",
            date: "2025-05-22",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Clarks FC",
            away: "Maria Khan",
            date: "2025-05-22",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Jey Collectionz",
            away: "Imoizy.t FC",
            date: "2025-05-22",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Thorvisual FC",
            away: "Priest-Emeritus",
            date: "2025-05-22",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Urban Decay",
            away: "Newton FC",
            date: "2025-05-22",
            time: "20:00",
            venue: "Urban Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Offer_Art FC",
            away: "Giveaway FC",
            date: "2025-05-22",
            time: "20:00",
            venue: "Priest Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "OmomoDaniel",
            away: "Legends FC",
            date: "2025-05-22",
            time: "20:00",
            venue: "Naija Stadium"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Mayweather FC",
            away: "Chuto Smiles FC",
            date: "2025-05-22",
            time: "20:00",
            venue: "OT"
        },

        // Day 12
        {
            matchday: 12,
            leg: "First",
            home: "Maria Khan",
            away: "Ghost Da Killer",
            date: "2025-05-23",
            time: "20:00",
            venue: "Aka Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Imoizy.t FC",
            away: "Milänœ FC",
            date: "2025-05-23",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Clarks FC",
            date: "2025-05-23",
            time: "20:00",
            venue: "Priest Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Newton FC",
            away: "Jey Collectionz",
            date: "2025-05-23",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Giveaway FC",
            away: "Thorvisual FC",
            date: "2025-05-23",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Legends FC",
            away: "Urban Decay",
            date: "2025-05-23",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Chuto Smiles FC",
            away: "Offer_Art FC",
            date: "2025-05-23",
            time: "20:00",
            venue: "Smiles Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Mayweather FC",
            away: "OmomoDaniel",
            date: "2025-05-23",
            time: "20:00",
            venue: "OT"
        },

        // Day 13
        {
            matchday: 13,
            leg: "First",
            home: "Ghost Da Killer",
            away: "Imoizy.t FC",
            date: "2025-05-24",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Maria Khan",
            away: "Priest-Emeritus",
            date: "2025-05-24",
            time: "20:00",
            venue: "Aka Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Milänœ FC",
            away: "Newton FC",
            date: "2025-05-24",
            time: "20:00",
            venue: "Milänœ Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Clarks FC",
            away: "Giveaway FC",
            date: "2025-05-24",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Jey Collectionz",
            away: "Legends FC",
            date: "2025-05-24",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Thorvisual FC",
            away: "Chuto Smiles FC",
            date: "2025-05-24",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Urban Decay",
            away: "Mayweather FC",
            date: "2025-05-24",
            time: "20:00",
            venue: "Urban Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Offer_Art FC",
            away: "OmomoDaniel",
            date: "2025-05-24",
            time: "20:00",
            venue: "OfferArt Arena"
        },

        // Day 14
        {
            matchday: 14,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Ghost Da Killer",
            date: "2025-05-25",
            time: "20:00",
            venue: "Priest Arena"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Newton FC",
            away: "Imoizy.t FC",
            date: "2025-05-25",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Giveaway FC",
            away: "Maria Khan",
            date: "2025-05-25",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Legends FC",
            away: "Milänœ FC",
            date: "2025-05-25",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Chuto Smiles FC",
            away: "Clarks FC",
            date: "2025-05-25",
            time: "20:00",
            venue: "Smiles Arena"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Mayweather FC",
            away: "Jey Collectionz",
            date: "2025-05-25",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 14,
            leg: "First",
            home: "OmomoDaniel",
            away: "Thorvisual FC",
            date: "2025-05-25",
            time: "20:00",
            venue: "Naija Stadiumtadium"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Offer_Art FC",
            away: "Urban Decay",
            date: "2025-05-25",
            time: "20:00",
            venue: "OfferArt Arena"
        },

        // Day 15
        {
            matchday: 15,
            leg: "First",
            home: "Ghost Da Killer",
            away: "Newton FC",
            date: "2025-05-26",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Giveaway FC",
            date: "2025-05-26",
            time: "20:00",
            venue: "Priest Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Imoizy.t FC",
            away: "Legends FC",
            date: "2025-05-26",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Maria Khan",
            away: "Chuto Smiles FC",
            date: "2025-05-26",
            time: "20:00",
            venue: "Aka Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Milänœ FC",
            away: "Mayweather FC",
            date: "2025-05-26",
            time: "20:00",
            venue: "Milänœ Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Clarks FC",
            away: "OmomoDaniel",
            date: "2025-05-26",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Jey Collectionz",
            away: "Offer_Art FC",
            date: "2025-05-26",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Thorvisual FC",
            away: "Urban Decay",
            date: "2025-05-26",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        ],


        results: [
            // Matchday 1
            {   
                matchday: 1,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-05-12"
            },
            {   
                matchday: 1,
                home: "Newton FC",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-05-12"
            },
            {   
                matchday: 1,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-05-12"
            },
            {   
                matchday: 1,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-05-12"
            },
            {   
                matchday: 1,
                home: "Maria Khan",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-05-12"
            },
            {   
                matchday: 1,
                home: "Milänœ FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-05-12"
            },
            {
                matchday: 1,
                home: "Clarks FC",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-05-12"
            },
            {
                matchday: 1,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-05-12"
            },

            // Matchday 2
            {
                matchday: 2,
                home: "Legends FC",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-05-13"
            },
            {
                matchday: 2,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-05-13"
            },
            {
                matchday: 2,
                home: "Mayweather FC",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-05-13"
            },
            {
                matchday: 2,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-05-13"
            },
            {
                matchday: 2,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-05-13"
            },
            {
                matchday: 2,
                home: "Urban Decay",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-05-13"
            },
            {
                matchday: 2,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-05-13"
            },
            {
                matchday: 2,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-05-13"
            },

            // Matchday 3
            {
                matchday: 3,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-05-14"
            },
            {
                matchday: 3,
                home: "Legends FC",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-05-14"
            },
            {
                matchday: 3,
                home: "Giveaway FC",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-05-14"
            },
            {
                matchday: 3,
                home: "Newton FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-05-14"
            },
            {
                matchday: 3,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-05-14"
            },
            {
                matchday: 3,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-05-14"
            },
            {
                matchday: 3,
                home: "Maria Khan",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-05-14"
            },
            {
                matchday: 3,
                home: "Milänœ FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-05-14"
            },

            // Matchday 4
            {
                matchday: 4,
                home: "Mayweather FC",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-05-15"
            },
            {
                matchday: 4,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-05-15"
            },
            {
                matchday: 4,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-05-15"
            },
            {
                matchday: 4,
                home: "Urban Decay",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-05-15"
            },
            {
                matchday: 4,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-05-15"
            },
            {
                matchday: 4,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-05-15"
            },
            {
                matchday: 4,
                home: "Clarks FC",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-05-15"
            },
            {
                matchday: 4,
                home: "Milänœ FC",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-05-15"
            },

            // Matchday 5
            {
                matchday: 5,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-05-16"
            },
            {
                matchday: 5,
                home: "Mayweather FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-05-16"
            },
            {
                matchday: 5,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-05-16"
            },
            {
                matchday: 5,
                home: "Legends FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-05-16"
            },
            {
                matchday: 5,
                home: "Giveaway FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-05-16"
            },
            {
                matchday: 5,
                home: "Newton FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-05-16"
            },
            {
                matchday: 5,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-05-16"
            },
            {
                matchday: 5,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-05-16"
            },

            // Matchday 6
            {
                matchday: 6,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-05-17"
            },
            {
                matchday: 6,
                home: "Urban Decay",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-05-17"
            },
            {
                matchday: 6,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-05-17"
            },
            {
                matchday: 6,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-05-17"
            },
            {
                matchday: 6,
                home: "Clarks FC",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-05-17"
            },
            {
                matchday: 6,
                home: "Milänœ FC",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-05-17"
            },
            {
                matchday: 6,
                home: "Maria Khan",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-05-17"
            },
            {
                matchday: 6,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-05-17"
            },

            // Matchday 7
            {
                matchday: 7,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-05-18"
            },
            {
                matchday: 7,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-05-18"
            },
            {
                matchday: 7,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-05-18"
            },
            {
                matchday: 7,
                home: "Mayweather FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-05-18"
            },
            {
                matchday: 7,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-05-18"
            },
            {
                matchday: 7,
                home: "Legends FC",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-05-18"
            },
            {
                matchday: 7,
                home: "Giveaway FC",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-05-18"
            },
            {
                matchday: 7,
                home: "Newton FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-05-18"
            },

            // Matchday 8
            {
                matchday: 8,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-05-19"
            },
            {
                matchday: 8,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-05-19"
            },
            {
                matchday: 8,
                home: "Clarks FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-05-19"
            },
            {
                matchday: 8,
                home: "Milänœ FC",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-05-19"
            },
            {
                matchday: 8,
                home: "Maria Khan",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-05-19"
            },
            {
                matchday: 8,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-05-19"
            },
            {
                matchday: 8,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-05-19"
            },
            {
                matchday: 8,
                home: "Newton FC",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-05-19"
            },

            // Matchday 9
            {
                matchday: 9,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-05-20"
            },
            {
                matchday: 9,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-05-20"
            },
            {
                matchday: 9,
                home: "Urban Decay",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-05-20"
            },
            {
                matchday: 9,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-05-20"
            },
            {
                matchday: 9,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-05-20"
            },
            {
                matchday: 9,
                home: "Mayweather FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-05-20"
            },
            {
                matchday: 9,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-05-20"
            },
            {
                matchday: 9,
                home: "Legends FC",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-05-20"
            },
            // Matchday 10
            {
                matchday: 10,
                home: "Clarks FC",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-05-21"
            },
            {
                matchday: 10,
                home: "Milänœ FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-05-21"
            },
            {
                matchday: 10,
                home: "Maria Khan",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-05-21"
            },
            {
                matchday: 10,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-05-21"
            },
            {
                matchday: 10,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-05-21"
            },
            {
                matchday: 10,
                home: "Newton FC",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-05-21"
            },
            {
                matchday: 10,
                home: "Giveaway FC",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-05-21"
            },
            {
                matchday: 10,
                home: "Legends FC",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-05-21"
            },

            // Matchday 11
            {
                matchday: 11,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-05-22"
            },
            {
                matchday: 11,
                home: "Clarks FC",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-05-22"
            },
            {
                matchday: 11,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-05-22"
            },
            {
                matchday: 11,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-05-22"
            },
            {
                matchday: 11,
                home: "Urban Decay",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-05-22"
            },
            {
                matchday: 11,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-05-22"
            },
            {
                matchday: 11,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-05-22"
            },
            {
                matchday: 11,
                home: "Mayweather FC",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-05-22"
            },

            // Matchday 12
            {
                matchday: 12,
                home: "Maria Khan",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-05-23"
            },
            {
                matchday: 12,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-05-23"
            },
            {
                matchday: 12,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-05-23"
            },
            {
                matchday: 12,
                home: "Newton FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-05-23"
            },
            {
                matchday: 12,
                home: "Giveaway FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-05-23"
            },
            {
                matchday: 12,
                home: "Legends FC",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-05-23"
            },
            {
                matchday: 12,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-05-23"
            },
            {
                matchday: 12,
                home: "Mayweather FC",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-05-23"
            },

            // Matchday 13
            {
                matchday: 13,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-05-24"
            },
            {
                matchday: 13,
                home: "Maria Khan",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-05-24"
            },
            {
                matchday: 13,
                home: "Milänœ FC",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-05-24"
            },
            {
                matchday: 13,
                home: "Clarks FC",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-05-24"
            },
            {
                matchday: 13,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-05-24"
            },
            {
                matchday: 13,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-05-24"
            },
            {
                matchday: 13,
                home: "Urban Decay",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-05-24"
            },
            {
                matchday: 13,
                home: "Offer_Art FC",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-05-24"
            },

            // Matchday 14
            {
                matchday: 14,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-05-25"
            },
            {
                matchday: 14,
                home: "Newton FC",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-05-25"
            },
            {
                matchday: 14,
                home: "Giveaway FC",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-05-25"
            },
            {
                matchday: 14,
                home: "Legends FC",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-05-25"
            },
            {
                matchday: 14,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-05-25"
            },
            {
                matchday: 14,
                home: "Mayweather FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-05-25"
            },
            {
                matchday: 14,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-05-25"
            },
            {
                matchday: 14,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-05-25"
            },

            // Matchday 15
            {
                matchday: 15,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-05-26"
            },
            {
                matchday: 15,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-05-26"
            },
            {
                matchday: 15,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-05-26"
            },
            {
                matchday: 15,
                home: "Maria Khan",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-05-26"
            },
            {
                matchday: 15,
                home: "Milänœ FC",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-05-26"
            },
            {
                matchday: 15,
                home: "Clarks FC",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-05-26"
            },
            {
                matchday: 15,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-05-26"
            },
            {
                matchday: 15,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-05-26"
            },

            // Matchday 16
            {
                matchday: 16,
                home: "Giveaway FC",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Legends FC",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Mayweather FC",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Urban Decay",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-11"
            },

            // Matchday 17
            {
                matchday: 17,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Giveaway FC",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Newton FC",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Maria Khan",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Milänœ FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Clarks FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-12"
            },

            // Matchday 18
            {
                matchday: 18,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Mayweather FC",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Urban Decay",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Clarks FC",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-04-13"
            },

            // Matchday 19
            {
                matchday: 19,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Legends FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Giveaway FC",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Newton FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Maria Khan",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-04-14"
            },

            // Matchday 20
            {
                matchday: 20,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Urban Decay",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Clarks FC",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Milänœ FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Maria Khan",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-04-15"
            },

            // Matchday 21
            {
                matchday: 21,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Mayweather FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Legends FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Giveaway FC",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Newton FC",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-04-16"
            },

            // Matchday 22
            {
                matchday: 22,
                home: "Urban Decay",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Jey Collectionz",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Clarks FC",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Milänœ FC",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Maria Khan",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-04-17"
            },

            // Matchday 23
            {
                matchday: 23,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Urban Decay",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Mayweather FC",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Legends FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Giveaway FC",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-04-18"
            },

            // Matchday 24
            {
                matchday: 24,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Clarks FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Milänœ FC",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Maria Khan",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Newton FC",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Giveaway FC",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-04-19"
            },

            // Matchday 25
            {
                matchday: 25,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Urban Decay",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Mayweather FC",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-04-20"
            },


            // Matchday 26
            {
                matchday: 26,
                home: "Milänœ FC",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Maria Khan",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Newton FC",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Giveaway FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Legends FC",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-04-21"
            },

            // Matchday 27
            {
                matchday: 27,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Milänœ FC",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Clarks FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Urban Decay",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-04-22"
            },

            // Matchday 28
            {
                matchday: 28,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Newton FC",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Giveaway FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Legends FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Mayweather FC",
                homeScore: null,
                away: "Urban Decay",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-23"
            },

            // Matchday 29
            {
                matchday: 29,
                home: "Ghost Da Killer",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Imoizy.t FC",
                homeScore: null,
                away: "Newton FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Maria Khan",
                homeScore: null,
                away: "Giveaway FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Milänœ FC",
                homeScore: null,
                away: "Legends FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Clarks FC",
                homeScore: null,
                away: "Chuto Smiles FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Mayweather FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Thorvisual FC",
                homeScore: null,
                away: "OmomoDaniel",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Urban Decay",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-24"
            },

            // Matchday 30
            {
                matchday: 30,
                home: "Newton FC",
                homeScore: null,
                away: "Ghost Da Killer",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Giveaway FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Legends FC",
                homeScore: null,
                away: "Imoizy.t FC",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Chuto Smiles FC",
                homeScore: null,
                away: "Maria Khan",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Mayweather FC",
                homeScore: null,
                away: "Milänœ FC",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "OmomoDaniel",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Urban Decay",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-25"
            }
        ],
        
        
        
        table: [
            {
                position: 1,
                team: "Ghost Da Killer",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 2,
                team: "Imoizy.t FC",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 3,
                team: "Newton FC",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 4,
                team: "Priest-Emeritus",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 5,
                team: "Giveaway FC",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 6,
                team: "Legends FC",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 7,
                team: "Chuto Smiles FC",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 8,
                team: "Maria Khan",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 9,
                team: "Milänœ FC",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 10,
                team: "Jey Collectionz",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 11,
                team: "Thorvisual FC",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 12,
                team: "Offer_Art FC",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 13,
                team: "Urban Decay",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 14,
                team: "Clarks FC",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 15,
                team: "OmomoDaniel",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            },
            {
                position: 16,
                team: "Mayweather FC",
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                points: 0,
            }
        ],


        clubs: [
            {
                name: "Imoizy.t FC",
                logo: "images/club-logos/imoizy.svg",
                manager: "Imoizy.T",
                stadium: "IT Arena",
                founded: "2022",
                location: "Arua, Uganda"
            },
            {
                name: "Ghost Da Killer",
                logo: "images/club-logos/ghost.svg",
                manager: "Grayson",
                stadium: "Ghost Arena",
                founded: "2023",
                location: "Kampala, Uganda"
            },
            {
                name: "Legends FC",
                logo: "images/club-logos/ankofit.svg",
                manager: "Anko Fit",
                stadium: "Anko Arena",
                founded: "2024",
                location: "Kampala, Uganda"
            },
            {
                name: "Milänœ FC",
                logo: "images/club-logos/milano.svg",
                manager: "Milänœ",
                stadium: "Milänœ Arena",
                founded: "2024",
                location: "Gulu, Uganda"
            },
            {
                name: "Jey Collectionz",
                logo: "images/club-logos/jey-collectionz.svg",
                manager: "Jey",
                stadium: "CJ Arena",
                founded: "2024",
                location: "Gulu, Uganda"
            },
            {
                name: "Chuto Smiles FC",
                logo: "images/club-logos/chutosmiles.svg",
                manager: "Chutosmiles",
                stadium: "Smiles Arena",
                founded: "2024",
                location: "Gulu, Uganda"
            },
            {
                name: "Newton FC",
                logo: "images/club-logos/kingkai.svg",
                manager: "Newton",
                stadium: "Emirates Arena",
                founded: "2025",
                location: "Kampala, Uganda"
            },
            {
                name: "Priest-Emeritus",
                logo: "images/club-logos/priest-emeritus.svg",
                manager: "Priest",
                stadium: "Priest Arena",
                founded: "2023",
                location: "Gulu, Uganda"
            },
            {
                name: "Thorvisual FC",
                logo: "images/club-logos/thorvisual.svg",
                manager: "Thor Henry",
                stadium: "Thorvisual Arena",
                founded: "2022",
                location: "Wakiso, Uganda"
            },
            {
                name: "Offer_Art FC",
                logo: "images/club-logos/offer-art.svg",
                manager: "Offer Art",
                stadium: "OfferArt Arena",
                founded: "2023",
                location: "Kitgum, Uganda"
            },
            {
                name: "Urban Decay",
                logo: "images/club-logos/urban.svg",
                manager: "Urban Decay",
                stadium: "Urban Arena",
                founded: "2024",
                location: "Kitgum, Uganda"
            },
            {
                name: "Clarks FC",
                logo: "images/club-logos/Clark256.svg",
                manager: "Cold Junior",
                stadium: "Colds Arena",
                founded: "2023",
                location: "Kampala, Uganda"
            },
            {
                name: "Maria Khan",
                logo: "images/club-logos/aka.svg",
                manager: "Aka The Kraven",
                stadium: "Aka Arena",
                founded: "2022",
                location: "Jinja, Uganda"
            },
            {
                name: "Giveaway FC",
                logo: "images/club-logos/omara.svg",
                manager: "OMaRa",
                stadium: "Old Trafford",
                founded: "2024",
                location: "Gulu, Uganda"
            },
            {
                name: "OmomoDaniel",
                logo: "images/club-logos/omomo.svg",
                manager: "Daniel",
                stadium: "Naija Stadiumtadium",
                founded: "2023",
                location: "Lagos, Nigeria"
            },
            {
                name: "Mayweather FC",
                logo: "images/club-logos/mayweather.svg",
                manager: "Mayweather",
                stadium: "OT",
                founded: "2025",
                location: "Kampala, Uganda"
            },
        ]
    };

    function loadPage(page, options) {  // Updated function definition
        // Get position class based on position and total teams
        function getPositionClass(position, totalTeams) {
            const promotionSpots = Math.floor(totalTeams * 0.1875); // Top 18.75% (3 teams in 16)
            const playoffSpots = Math.floor(totalTeams * 0.125); // Next 12.5% (2 teams in 16)
            const relegationSpots = Math.floor(totalTeams * 0.1875); // Bottom 18.75% (3 teams in 16)

            if (position <= promotionSpots) {
                return 'promotion';
            } else if (position <= promotionSpots + playoffSpots) {
                return 'playoff';
            } else if (position > totalTeams - relegationSpots) {
                return 'relegation';
            }
            return '';
        }

        switch (page) {
            case 'home':
                mainContent.innerHTML = `
                    <div class="home-container">
                        <section class="hero-section">
                            <div class="hero-content">
                                <h1>Welcome to EFL Uganda</h1>
                                <p class="hero-subtitle">The Electronic Football League in Uganda</p>
                                <div class="hero-stats">
                                    <div class="stat-item">
                                        <span class="stat-number">${data.clubs.length}</span>
                                        <span class="stat-label">Teams</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-number">30</span>
                                        <span class="stat-label">Matchdays</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-number">240</span>
                                        <span class="stat-label">Matches</span>
                                    </div>
                                </div>
                                <div class="hero-cta">
                                    <a href="#" class="cta-button" data-page="fixtures">View Fixtures</a>
                                    <a href="#" class="cta-button secondary" data-page="table">League Table</a>
                                    <a href="#" class="cta-button secondary" data-page="cups">YTY Cup</a>
                                    <a href="#" class="cta-button secondary" data-page="hall-of-fame">Hall of Fame</a>
                                </div>
                                <div class="powered-by">
                                    <p>Powered by <a href="https://thorhenry.github.io/personal_blog/" target="_blank" class="thorvisual">ThorVisual</a></p>
                                    <div class="separator">|</div>
                                    <a href="https://chat.whatsapp.com/HnTYX2XMEoPHHGtoHyVOHX" target="_blank" class="whatsapp-link">
                                        <span>Group Link</span>
                                        <i class="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section class="content-section">
                            <div class="latest-results">
                                <h2>Latest Results</h2>
                                <div class="results-grid">
                                    <!-- Results will be dynamically populated -->
                                </div>
                            </div>
                            <div class="results-ticker">
                                <div class="ticker-content">
                                    <!-- Ticker items will be dynamically populated -->
                                </div>
                            </div>
                            <div class="news-ticker-container">
                                <div class="ticker-header">
                                    <i class="fas fa-newspaper"></i>
                                    <span>Latest News</span>
                                </div>
                                <div class="news-ticker">
                                    <div class="ticker-content">
                                        <!-- News items will be dynamically populated -->
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="quick-links">
                            <h2>Quick Links</h2>
                            <div class="quick-links-grid">
                                <a href="#" class="quick-link" data-page="fixtures">
                                    <i class="fas fa-calendar-alt"></i>
                                    <span>Fixtures</span>
                                </a>
                                <a href="#" class="quick-link" data-page="table">
                                    <i class="fas fa-table"></i>
                                    <span>League Table</span>
                                </a>
                                <a href="#" class="quick-link" data-page="results">
                                    <i class="fas fa-futbol"></i>
                                    <span>Results</span>
                                </a>
                                <a href="#" class="quick-link" data-page="cups">
                                    <i class="fas fa-trophy"></i>
                                    <span>Cups</span>
                                </a>
                            </div>
                        </section>

                        <section class="sponsors-section">
                            <h2>Our Sponsors</h2>
                            <div class="sponsors-grid">
                                <div class="sponsor-card">
                                    <img src="images/sponsors/linkmedia.svg" alt="Link Media" class="sponsor-logo">
                                </div>
                                <div class="sponsor-card">
                                    <img src="images/sponsors/yty.svg" alt="YTY" class="sponsor-logo">
                                </div>
                                <div class="sponsor-card">
                                    <img src="images/sponsors/thorvisual.svg" alt="ThorVisual" class="sponsor-logo">
                                </div>
                            </div>
                        </section>

                        <section class="news-section">
                            <h2>Latest News</h2>
                            <div class="news-grid">
                                ${data.news
                                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                                    .slice(0, 2)
                                    .map(news => `
                                        <article class="news-card">
                                            <h3>${news.title}</h3>
                                            <div class="news-meta">
                                                <span class="news-date">${news.date}</span>
                                            </div>
                                            <p>${news.content}</p>
                                        </article>
                                    `).join('')}
                            </div>
                        </section>

                        <section class="awards-section">
                            <h2>Prize Money & Awards</h2>
                            <div class="awards-grid">
                                <div class="award-card">
                                    <div class="award-content">
                                        <h3>League Champions</h3>
                                        <div class="award-prize">25,000</div>
                                        <p class="award-description">First place in the league</p>
                            </div>
                                            </div>
                                <div class="award-card">
                                    <div class="award-content">
                                        <h3>League Runner-up</h3>
                                        <div class="award-prize">15,000</div>
                                        <p class="award-description">Second place in the league</p>
                                </div>
                            </div>
                                <div class="award-card">
                                    <div class="award-content">
                                        <h3>Third Place</h3>
                                        <div class="award-prize">10,000</div>
                                        <p class="award-description">Third place in the league</p>
                        </div>
                                </div>
                                <div class="award-card">
                                    <div class="award-content">
                                        <h3>Fourth Place</h3>
                                        <div class="award-prize">10,000</div>
                                        <p class="award-description">Fourth place in the league</p>
                                    </div>
                                </div>
                                <div class="award-card">
                                    <div class="award-content">
                                        <h3>Champions League Winner</h3>
                                        <div class="award-prize">15,000</div>
                                        <p class="award-description">Winner of the Champions League</p>
                                    </div>
                                </div>
                                <div class="award-card">
                                    <div class="award-content">
                                        <h3>YTY Cup Winner</h3>
                                        <div class="award-prize">A YTY Product</div>
                                        <p class="award-description">Winner of the YTY Cup</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                `;

                // Add event listeners for the CTA buttons
                document.querySelectorAll('.hero-cta .cta-button').forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();
                        const page = e.target.getAttribute('data-page');
                        loadPage(page);
                        // Update active nav link
                        document.querySelectorAll('.nav-links a').forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('data-page') === page) {
                                link.classList.add('active');
                            }
                        });
                    });
                });

                // Initialize the dynamic updates
                import('./home-updates.js').then(module => {
                    module.initializeHomeUpdates(data);
                });
                break;

            case 'fixtures':
                // Generate second leg fixtures
                const secondLegFixtures = window.generateSecondLegFixtures ? 
                    generateSecondLegFixtures(data.fixtures, data.clubs) : [];
                
                // Combine first and second leg fixtures
                const allFixtures = [...data.fixtures.filter(f => f.matchday), ...secondLegFixtures];
                
                // Group all fixtures by matchday
                const groupedFixtures = allFixtures.reduce((acc, fixture) => {
                    if (!fixture.matchday) return acc;
                    if (!acc[fixture.matchday]) {
                        acc[fixture.matchday] = [];
                    }
                    acc[fixture.matchday].push(fixture);
                    return acc;
                }, {});
            
                // Create HTML for grouped fixtures
                const fixturesHTML = Object.entries(groupedFixtures)
                    .map(([matchday, fixtures]) => {
                        // Check if any match in this matchday is completed
                        const hasCompletedMatch = fixtures.some(fixture => {
                            const matchResult = data.results.find(result => 
                                result.home === fixture.home && 
                                result.away === fixture.away && 
                                result.matchday === parseInt(matchday)
                            );
                            return matchResult && matchResult.homeScore !== null && matchResult.awayScore !== null;
                        });

                        const matchFixtures = fixtures.map(fixture => {
                            const homeClub = data.clubs.find(club => club.name === fixture.home);
                            const awayClub = data.clubs.find(club => club.name === fixture.away);
                            
                            // Check if this specific match is completed
                            const matchResult = data.results.find(result => 
                                result.home === fixture.home && 
                                result.away === fixture.away && 
                                result.matchday === parseInt(matchday)
                            );
                            
                            const isCompleted = matchResult && matchResult.homeScore !== null && matchResult.awayScore !== null;
                            const statusClass = isCompleted ? 'completed' : hasCompletedMatch ? 'pending' : 'upcoming';
                            const scoreDisplay = isCompleted ? 
                                `<div class="match-score">${matchResult.homeScore} - ${matchResult.awayScore}</div>` : 
                                '<div class="vs">vs</div>';
                            
                            const statusText = isCompleted ? 'Completed' : 
                                             hasCompletedMatch ? 'Pending' : 
                                             'Upcoming';
                            
                            return `
                                <div class="fixture-card ${statusClass}" data-home="${fixture.home}" data-away="${fixture.away}">
                                    <div class="fixture-date">${fixture.date}</div>
                                    <div class="fixture-teams">
                                        <div class="team home">
                                            <img src="${homeClub?.logo}" alt="${homeClub?.name}" class="team-logo">
                                            <span class="team-name">${fixture.home}</span>
                                        </div>
                                        ${scoreDisplay}
                                        <div class="team away">
                                            <img src="${awayClub?.logo}" alt="${awayClub?.name}" class="team-logo">
                                            <span class="team-name">${fixture.away}</span>
                                        </div>
                                    </div>
                                    <div class="fixture-details">
                                        <span class="time"><i class="fas fa-clock"></i> ${fixture.time}</span>
                                        <span class="venue"><i class="fas fa-map-marker-alt"></i> ${fixture.venue}</span>
                                        <span class="status ${statusClass}">${statusText}</span>
                                    </div>
                                </div>
                            `;
                        }).join('');
            
                        return `
                            <div class="matchday-group" data-matchday="${matchday}">
                                <h3 class="matchday-title">Matchday ${matchday}</h3>
                                <div class="matchday-fixtures">
                                    ${matchFixtures}
                                </div>
                            </div>
                        `;
                    }).join('');
            
                // Create club filter dropdown
                const clubOptions = data.clubs.map(club => 
                    `<option value="${club.name}">${club.name}</option>`
                ).join('');

                mainContent.innerHTML = `
                    <div class="page-header">
                        <h2>EFL Uganda Fixtures</h2>
                        <p class="subtitle">Season 2025/26</p>
                    </div>
                    <div class="fixtures-controls">
                        <select id="matchday-select" class="matchday-dropdown">
                            <option value="">All Matchdays</option>
                            ${Object.keys(groupedFixtures).map(matchday => 
                                `<option value="${matchday}">Matchday ${matchday}</option>`
                            ).join('')}
                        </select>
                        <select id="club-select" class="club-dropdown">
                            <option value="">All Clubs</option>
                            ${clubOptions}
                        </select>
                        <select id="status-select" class="status-dropdown">
                            <option value="">All Status</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="upcoming">Upcoming</option>
                        </select>
                    </div>
                    <div class="fixtures-container">
                        ${fixturesHTML}
                    </div>
                `;
                
                // Initialize filters functionality
                const clubSelect = document.getElementById('club-select');
                const statusSelect = document.getElementById('status-select');
                const matchdaySelect = document.getElementById('matchday-select');
                const fixtureCards = document.querySelectorAll('.fixture-card');
                const matchdayGroups = document.querySelectorAll('.matchday-group');

                function updateFixtureVisibility() {
                    const selectedClub = clubSelect.value;
                    const selectedStatus = statusSelect.value;
                    const selectedMatchday = matchdaySelect.value;
                    
                    matchdayGroups.forEach(group => {
                        const matchday = group.dataset.matchday;
                        const matchdayMatch = !selectedMatchday || matchday === selectedMatchday;
                        
                        if (matchdayMatch) {
                            group.style.display = 'block';
                            const fixtures = group.querySelectorAll('.fixture-card');
                            
                            fixtures.forEach(card => {
                                const homeTeam = card.dataset.home;
                                const awayTeam = card.dataset.away;
                                const cardStatus = card.classList.contains('completed') ? 'completed' : 
                                                 card.classList.contains('pending') ? 'pending' : 'upcoming';
                                
                                const clubMatch = !selectedClub || homeTeam === selectedClub || awayTeam === selectedClub;
                                const statusMatch = !selectedStatus || cardStatus === selectedStatus;
                                
                                card.style.display = (clubMatch && statusMatch) ? 'block' : 'none';
                            });

                            // Hide matchday group if no visible fixtures
                            const hasVisibleFixtures = Array.from(fixtures)
                                .some(card => card.style.display !== 'none');
                            group.style.display = hasVisibleFixtures ? 'block' : 'none';
                        } else {
                            group.style.display = 'none';
                        }
                    });
                }

                clubSelect.addEventListener('change', updateFixtureVisibility);
                statusSelect.addEventListener('change', updateFixtureVisibility);
                matchdaySelect.addEventListener('change', updateFixtureVisibility);
                break;
                
                case 'results':
                    // Group results by matchday
                    const resultsByMatchday = data.results.reduce((acc, result) => {
                        const matchday = result.matchday || 'Unknown';
                        if (!acc[matchday]) {
                            acc[matchday] = [];
                        }
                        acc[matchday].push(result);
                        return acc;
                    }, {});

                    // Create dropdown HTML
                    const matchdayOptions = Object.keys(resultsByMatchday)
                        .map(matchday => `<option value="${matchday}">Matchday ${matchday}</option>`)
                        .join('');

                    // Function to determine match result class for a team
                    function getMatchResultClass(match, teamName) {
                        if (match.homeScore === null || match.awayScore === null) return '';
                        
                        const isHome = match.home === teamName;
                        const teamScore = isHome ? match.homeScore : match.awayScore;
                        const opponentScore = isHome ? match.awayScore : match.homeScore;
                        
                        if (teamScore > opponentScore) return 'result-win';
                        if (teamScore < opponentScore) return 'result-loss';
                        return 'result-draw';
                    }

                    // Create HTML for grouped results with matchday headers
                    const resultsHTML = Object.entries(resultsByMatchday)
                        .sort(([a], [b]) => parseInt(a) - parseInt(b))
                        .map(([matchday, matches]) => {
                            // Check if any match in this matchday is completed
                            const hasCompletedMatch = matches.some(match => 
                                match.homeScore !== null && match.awayScore !== null
                            );

                            const matchResults = matches.map(result => {
                                const homeClub = data.clubs.find(club => club.name === result.home);
                                const awayClub = data.clubs.find(club => club.name === result.away);
                                const selectedClub = document.querySelector('.club-filter')?.value;
                                
                                // Add result classes for the selected club
                                const homeClass = selectedClub === result.home ? getMatchResultClass(result, result.home) : '';
                                const awayClass = selectedClub === result.away ? getMatchResultClass(result, result.away) : '';
                                
                                // Determine match status
                                const isCompleted = result.homeScore !== null && result.awayScore !== null;
                                const statusClass = isCompleted ? 'completed' : hasCompletedMatch ? 'pending' : 'upcoming';
                                const statusText = isCompleted ? 'Completed' : hasCompletedMatch ? 'Pending' : 'Upcoming';
                                
                                return `
                                    <div class="result-card ${statusClass}" data-matchday="${result.matchday || 'Unknown'}">
                                        <div class="result-header">
                                            <div class="result-date">${result.date}</div>
                                            <div class="status ${statusClass}">${statusText}</div>
                                        </div>
                                        <div class="result-teams">
                                            <div class="team home ${homeClass}">
                                                <img src="${homeClub?.logo}" alt="${result.home}" class="team-logo">
                                                <span class="team-name">${result.home}</span>
                                                <span class="score">${result.homeScore ?? '-'}</span>
                                            </div>
                                            <div class="score-divider">-</div>
                                            <div class="team away ${awayClass}">
                                                <span class="score">${result.awayScore ?? '-'}</span>
                                                <span class="team-name">${result.away}</span>
                                                <img src="${awayClub?.logo}" alt="${result.away}" class="team-logo">
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('');
                            
                            return `
                                <div class="matchday-section" data-matchday="${matchday}">
                                    <h3 class="matchday-header">Matchday ${matchday}</h3>
                                    <div class="matchday-results">
                                        ${matchResults}
                                    </div>
                                </div>
                            `;
                        }).join('');

                    mainContent.innerHTML = `
                        <div class="page-header">
                            <h2>EFL Uganda Results</h2>
                            <p class="subtitle">Season 2025/26</p>
                            <div class="results-controls">
                                <select id="matchdayFilter" class="matchday-filter">
                                    <option value="all">All Matchdays</option>
                                    ${matchdayOptions}
                                </select>
                                <select id="clubFilter" class="club-filter">
                                    <option value="all">All Clubs</option>
                                    ${data.clubs.map(club => `
                                        <option value="${club.name}">${club.name}</option>
                                    `).join('')}
                                </select>
                                <button id="showUnplayedResultsBtn" class="control-btn">
                                    <i class="fas fa-filter"></i> Show Unplayed Matches
                                </button>
                            </div>
                        </div>
                        <div class="results-container">
                            ${resultsHTML}
                        </div>
                    `;

                    // Add event listener for matchday dropdown
                    const matchdayFilter = document.getElementById('matchdayFilter');
                    matchdayFilter.addEventListener('change', (e) => {
                        const selectedMatchday = e.target.value;
                        const matchdaySections = document.querySelectorAll('.matchday-section');
                        
                        matchdaySections.forEach(section => {
                            if (selectedMatchday === 'all' || section.dataset.matchday === selectedMatchday) {
                                section.style.display = 'block';
                            } else {
                                section.style.display = 'none';
                            }
                        });
                    });

                    // Add event listener for club filter dropdown
                    const clubFilter = document.getElementById('clubFilter');
                    clubFilter.addEventListener('change', (e) => {
                        const selectedClub = e.target.value;
                        const resultCards = document.querySelectorAll('.result-card');
                                                resultCards.forEach(card => {
                            const homeTeam = card.querySelector('.team.home');
                            const awayTeam = card.querySelector('.team.away');
                            const homeTeamName = homeTeam.querySelector('.team-name').textContent;
                            const awayTeamName = awayTeam.querySelector('.team-name').textContent;
                            const homeScore = homeTeam.querySelector('.score').textContent;
                            const awayScore = awayTeam.querySelector('.score').textContent;
                            
                            // Remove previous result classes
                            homeTeam.classList.remove('result-win', 'result-loss', 'result-draw');
                            awayTeam.classList.remove('result-win', 'result-loss', 'result-draw');
                            
                            if (selectedClub === 'all') {
                                card.style.display = 'block';
                            } else if (homeTeamName === selectedClub || awayTeamName === selectedClub) {
                                card.style.display = 'block';
                                
                                // Only add result classes if scores are available
                                if (homeScore !== '-' && awayScore !== '-') {
                                    const homeScoreNum = parseInt(homeScore);
                                    const awayScoreNum = parseInt(awayScore);
                                    
                                    if (homeTeamName === selectedClub) {
                                        if (homeScoreNum > awayScoreNum) {
                                            homeTeam.classList.add('result-win');
                                        } else if (homeScoreNum < awayScoreNum) {
                                            homeTeam.classList.add('result-loss');
                                        } else {
                                            homeTeam.classList.add('result-draw');
                                        }
                                    }
                                    
                                    if (awayTeamName === selectedClub) {
                                        if (awayScoreNum > homeScoreNum) {
                                            awayTeam.classList.add('result-win');
                                        } else if (awayScoreNum < homeScoreNum) {
                                            awayTeam.classList.add('result-loss');
                                        } else {
                                            awayTeam.classList.add('result-draw');
                                        }
                                    }
                                }
                            } else {
                                card.style.display = 'none';
                            }
                        });

                        // Show/hide matchday sections based on whether they have visible cards
                        document.querySelectorAll('.matchday-section').forEach(section => {
                            const hasVisibleCards = Array.from(section.querySelectorAll('.result-card'))
                                .some(card => card.style.display !== 'none');
                            section.style.display = hasVisibleCards ? 'block' : 'none';
                        });
                    });

                    // Add event listener for the unplayed matches button
                    const showUnplayedResultsBtn = document.getElementById('showUnplayedResultsBtn');
                    let showingUnplayedResults = false;

                    showUnplayedResultsBtn.addEventListener('click', () => {
                        const matchdaySections = document.querySelectorAll('.matchday-section');
                        
                        matchdaySections.forEach(section => {
                            const resultCards = section.querySelectorAll('.result-card');
                            let hasUnplayedMatches = false;
                            
                            resultCards.forEach(card => {
                                const homeScore = card.querySelector('.team.home .score').textContent;
                                const awayScore = card.querySelector('.team.away .score').textContent;
                                const isUnplayed = homeScore === '-' || awayScore === '-';
                                
                                // Set data attribute for unplayed status
                                card.setAttribute('data-unplayed', isUnplayed);
                                
                                if (showingUnplayedResults) {
                                    card.style.display = 'block';
                                    hasUnplayedMatches = true;
                                } else {
                                    card.style.display = isUnplayed ? 'block' : 'none';
                                    if (isUnplayed) hasUnplayedMatches = true;
                                }
                            });
                            
                            section.style.display = hasUnplayedMatches ? 'block' : 'none';
                        });

                        showingUnplayedResults = !showingUnplayedResults;
                        // Toggle active class on button
                        showUnplayedResultsBtn.classList.toggle('active');
                        showUnplayedResultsBtn.innerHTML = showingUnplayedResults ? 
                            '<i class="fas fa-filter"></i> Show All Matches' : 
                            '<i class="fas fa-filter"></i> Show Unplayed Matches';
                    });
                    break;

                    case 'table':
                        // Sort teams by points, then goal difference, then goals for, then alphabetically
                        const sortedTeams = data.table.sort((a, b) => {
                            if (b.points !== a.points) return b.points - a.points;
                            if (b.gd !== a.gd) return b.gd - a.gd;
                            if (b.gf !== a.gf) return b.gf - a.gf;
                            return a.team.localeCompare(b.team); // Alphabetical sorting as final tiebreaker
                        });

                        const totalTeams = data.table.length;
                        const promotionSpots = Math.floor(totalTeams * 0.1875);
                        const playoffSpots = Math.floor(totalTeams * 0.125);
                        const relegationSpots = Math.floor(totalTeams * 0.1875);

                        // Function to get last 5 matches form for a team
                        function getLastFiveForm(teamName) {
                            const completedMatches = data.results
                                .filter(match => (match.home === teamName || match.away === teamName) &&
                                               match.homeScore !== null && match.awayScore !== null)
                                .sort((a, b) => new Date(b.date) - new Date(a.date))
                                .slice(0, 5);

                            return completedMatches.map(match => {
                                const isHome = match.home === teamName;
                                const teamScore = isHome ? match.homeScore : match.awayScore;
                                const opponentScore = isHome ? match.awayScore : match.homeScore;
                                
                                if (teamScore > opponentScore) return 'W';
                                if (teamScore === opponentScore) return 'D';
                                return 'L';
                            });
                        }

                        mainContent.innerHTML = `
                            <div class="league-table-container">
                                <div class="league-table-header">
                                    <h2>EFL Uganda League Table</h2>
                                    <p>2025/26 Season</p>
                                </div>
                                <div class="league-table-wrapper">
                                    <table class="league-table">
                                        <thead>
                                            <tr>
                                                <th>Pos</th>
                                                <th>Team</th>
                                                <th>P</th>
                                                <th>W</th>
                                                <th>D</th>
                                                <th>L</th>
                                                <th>GF</th>
                                                <th>GA</th>
                                                <th>GD</th>
                                                <th>Pts</th>
                                                <th>Form</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${sortedTeams.map((team, index) => {
                                                const position = index + 1;
                                                const positionClass = getPositionClass(position, totalTeams);
                                                const teamData = data.clubs.find(club => club.name === team.team);
                                                const lastFiveForm = getLastFiveForm(team.team);
                                                
                                                return `
                                                    <tr>
                                                        <td>
                                                            <div class="position-indicator ${positionClass}">
                                                                ${position}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="team-cell">
                                                                <img src="${teamData.logo}" alt="${team.team}" class="team-logo">
                                                                <span class="team-name">${team.team}</span>
                                                            </div>
                                                        </td>
                                                        <td class="stats-column">${team.played}</td>
                                                        <td class="stats-column">${team.won}</td>
                                                        <td class="stats-column">${team.drawn}</td>
                                                        <td class="stats-column">${team.lost}</td>
                                                        <td class="stats-column">${team.gf}</td>
                                                        <td class="stats-column">${team.ga}</td>
                                                        <td class="stats-column">${team.gd > 0 ? '+' + team.gd : team.gd}</td>
                                                        <td class="points-column">${team.points}</td>
                                                        <td>
                                                            <div class="form-guide">
                                                                ${lastFiveForm.map((result, idx) => `
                                                                    <div class="form-indicator ${result.toLowerCase()}${idx === 0 ? ' latest' : ''}">${result}</div>
                                                                `).join('')}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                `;
                                            }).join('')}
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-legend">
                                    <div class="legend-title">Position Indicators</div>
                                    <div class="legend-items">
                                        <div class="legend-item">
                                            <div class="legend-color champions-league"></div>
                                            Champions League (Positions 1-8)
                                        </div>
                                        <div class="legend-item">
                                            <div class="legend-color relegation"></div>
                                            Relegation (Positions ${totalTeams - 2}-${totalTeams})
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        break;

            case 'clubs':
                const totalTeamsForClubs = data.table.length;
                const clubsHTML = data.clubs.map(club => {
                    // Get team statistics from table data
                    const teamStats = data.table.find(team => team.team === club.name) || {
                        played: 0,
                        won: 0,
                        drawn: 0,
                        lost: 0,
                        gf: 0,
                        ga: 0,
                        gd: 0,
                        points: 0,
                        form: []
                    };

                    // Get all match results for this club
                    const allResults = data.results
                        .filter(match => (match.home === club.name || match.away === club.name) && 
                                       match.homeScore !== null && match.awayScore !== null)
                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                        .map(match => {
                            const isHome = match.home === club.name;
                            const clubScore = isHome ? match.homeScore : match.awayScore;
                            const opponentScore = isHome ? match.awayScore : match.homeScore;
                            const opponent = isHome ? match.away : match.home;
                            
                            let result;
                            if (clubScore > opponentScore) result = 'W';
                            else if (clubScore < opponentScore) result = 'L';
                            else result = 'D';

                            return {
                                result,
                                score: `${clubScore}-${opponentScore}`,
                                opponent,
                                date: match.date,
                                isHome
                            };
                        });

                    // Get team position from sorted table
                    const sortedTable = [...data.table].sort((a, b) => {
                        if (b.points !== a.points) return b.points - a.points;
                        if (b.gd !== a.gd) return b.gd - a.gd;
                        return b.gf - a.gf;
                    });
                    const position = sortedTable.findIndex(team => team.team === club.name) + 1;
                    const positionClass = getPositionClass(position, totalTeamsForClubs);

                    return `
                    <div class="club-card">
                        <div class="club-header">
                            <img src="${club.logo}" alt="${club.name} logo" class="club-logo">
                            <h3 class="club-name">${club.name}</h3>
                        </div>
                        <div class="club-info">
                            <p><strong>Manager</strong> <span>${club.manager} <img src="icons/verified-badge.svg" alt="Verified" class="verified-badge" width="12" height="12"></span></p>
                            <p><strong>Stadium</strong> <span>${club.stadium}</span></p>
                            <p><strong>Founded</strong> <span>${club.founded}</span></p>
                            <p><strong>Location</strong> <span>${club.location}</span></p>
                        </div>
                        <button class="view-stats-btn" onclick="toggleStats(this)">View Stats</button>
                        <div class="club-stats" style="display: none;">
                            <div class="stats-header">
                                <h4>Season 2025/26 Statistics</h4>
                                <div class="position-badge ${positionClass}">Position: ${position}</div>
                            </div>
                            <div class="stats-grid">
                                <div class="stat-item">
                                    <span class="stat-label">Played</span>
                                    <span class="stat-value">${teamStats.played}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Won</span>
                                    <span class="stat-value">${teamStats.won}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Drawn</span>
                                    <span class="stat-value">${teamStats.drawn}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Lost</span>
                                    <span class="stat-value">${teamStats.lost}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">GF</span>
                                    <span class="stat-value">${teamStats.gf}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">GA</span>
                                    <span class="stat-value">${teamStats.ga}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">GD</span>
                                    <span class="stat-value">${teamStats.gd}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Points</span>
                                    <span class="stat-value">${teamStats.points}</span>
                                </div>
                            </div>
                            <div class="match-history">
                                <h4 class="form-title">Match History</h4>
                                <div class="form-list">
                                    ${allResults.map(result => `
                                        <div class="form-match">
                                            <div class="form-indicator ${result.result.toLowerCase()}" title="${result.date}">
                                                ${result.result}
                                            </div>
                                            <div class="match-details">
                                                <span class="match-score">${result.score}</span>
                                                <span class="match-opponent">vs ${result.opponent}</span>
                                                <span class="match-venue">${result.isHome ? 'Home' : 'Away'}</span>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `}).join('');

                mainContent.innerHTML = `
                    <div class="page-header">
                        <h2>EFL Uganda Clubs</h2>
                        <p class="subtitle">Season 2025/26</p>
                        <div class="clubs-controls">
                            <input type="text" id="clubSearch" class="club-search" placeholder="Search clubs...">
                            <select id="sortClubs" class="club-sort">
                                <option value="name-asc">Name (A-Z)</option>
                                <option value="name-desc">Name (Z-A)</option>
                                <option value="points">Points (High to Low)</option>
                                <option value="position">League Position</option>
                                <option value="form">Current Form</option>
                                <option value="wins">Most Wins</option>
                                <option value="goals-for">Most Goals Scored</option>
                                <option value="goals-against">Least Goals Conceded</option>
                                <option value="goal-difference">Best Goal Difference</option>
                                <option value="clean-sheets">Most Clean Sheets</option>
                                <option value="location">Location</option>
                                <option value="founded-new">Newest Clubs</option>
                                <option value="founded-old">Oldest Clubs</option>
                            </select>
                        </div>
                    </div>
                    <div class="clubs-container">${clubsHTML}</div>
                `;
            
                // Add search and sort functionality
                const searchInput = document.getElementById('clubSearch');
                const sortSelect = document.getElementById('sortClubs');
                const clubsContainer = document.querySelector('.clubs-container');
            
                function filterAndSortClubs() {
                    const searchTerm = searchInput.value.toLowerCase();
                    const sortValue = sortSelect.value;

                    // Function to get team statistics from table data
                    function getTeamStats(teamName) {
                        const teamInTable = data.table.find(team => team.team === teamName);
                        if (!teamInTable) {
                            return {
                                played: 0,
                                won: 0,
                                drawn: 0,
                                lost: 0,
                                gf: 0,
                                ga: 0,
                                gd: 0,
                                points: 0,
                                form: [],
                                cleanSheets: 0
                            };
                        }

                        // Calculate clean sheets from results
                        const cleanSheets = data.results.filter(match => 
                            (match.home === teamName || match.away === teamName) &&
                            match.homeScore !== null && match.awayScore !== null
                        ).reduce((count, match) => {
                            const isHome = match.home === teamName;
                            const opponentScore = isHome ? match.awayScore : match.homeScore;
                            return count + (opponentScore === 0 ? 1 : 0);
                        }, 0);

                        return {
                            ...teamInTable,
                            cleanSheets
                        };
                    }

                    // Function to calculate form points from last 5 matches
                    function calculateFormPoints(teamName) {
                        const recentMatches = data.results
                            .filter(match => (match.home === teamName || match.away === teamName) &&
                                           match.homeScore !== null && match.awayScore !== null)
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .slice(0, 5);

                        return recentMatches.reduce((points, match) => {
                            const isHome = match.home === teamName;
                            const teamScore = isHome ? match.homeScore : match.awayScore;
                            const opponentScore = isHome ? match.awayScore : match.homeScore;
                            
                            if (teamScore > opponentScore) return points + 3;
                            if (teamScore === opponentScore) return points + 1;
                            return points;
                        }, 0);
                    }

                    // Function to get league position from table
                    function getLeaguePosition(teamName) {
                        const sortedTable = [...data.table].sort((a, b) => {
                            if (b.points !== a.points) return b.points - a.points;
                            if (b.gd !== a.gd) return b.gd - a.gd;
                            return b.gf - a.gf;
                        });
                        return sortedTable.findIndex(team => team.team === teamName) + 1;
                    }

                    const filteredAndSortedClubs = data.clubs
                        .filter(club => 
                            club.name.toLowerCase().includes(searchTerm) ||
                            club.location.toLowerCase().includes(searchTerm) ||
                            club.manager.toLowerCase().includes(searchTerm)
                        )
                        .map(club => {
                            const stats = getTeamStats(club.name);
                            const formPoints = calculateFormPoints(club.name);
                            const leaguePosition = getLeaguePosition(club.name);
                            return { ...club, stats, formPoints, leaguePosition };
                        })
                        .sort((a, b) => {
                            switch(sortValue) {
                                case 'name-asc':
                                    return a.name.localeCompare(b.name);
                                case 'name-desc':
                                    return b.name.localeCompare(a.name);
                                case 'points':
                                    return b.stats.points - a.stats.points;
                                case 'position':
                                    return a.leaguePosition - b.leaguePosition;
                                case 'form':
                                    return b.formPoints - a.formPoints;
                                case 'wins':
                                    return b.stats.won - a.stats.won;
                                case 'goals-for':
                                    return b.stats.gf - a.stats.gf;
                                case 'goals-against':
                                    return a.stats.ga - b.stats.ga;
                                case 'goal-difference':
                                    return b.stats.gd - a.stats.gd;
                                case 'clean-sheets':
                                    return b.stats.cleanSheets - a.stats.cleanSheets;
                                case 'location':
                                    return a.location.localeCompare(b.location);
                                case 'founded-new':
                                    return parseInt(b.founded) - parseInt(a.founded);
                                case 'founded-old':
                                    return parseInt(a.founded) - parseInt(b.founded);
                                default:
                                    return 0;
                            }
                        });

                    clubsContainer.innerHTML = filteredAndSortedClubs.length > 0 ? 
                        filteredAndSortedClubs.map(club => {
                            const stats = club.stats;
                            const position = club.leaguePosition;
                            const positionClass = getPositionClass(position, data.clubs.length);

                            return `
                                <div class="club-card">
                                    <div class="club-header">
                                        <img src="${club.logo}" alt="${club.name} logo" class="club-logo">
                                        <h3 class="club-name">${club.name}</h3>
                                    </div>
                                    <div class="club-info">
                                        <p><strong>Manager</strong> <span>${club.manager} <img src="icons/verified-badge.svg" alt="Verified" class="verified-badge" width="11" height="11"></span></p>
                                        <p><strong>Stadium</strong> <span>${club.stadium}</span></p>
                                        <p><strong>Founded</strong> <span>${club.founded}</span></p>
                                        <p><strong>Location</strong> <span>${club.location}</span></p>
                                    </div>
                                    <div class="club-stats">
                                        <div class="stats-header">
                                            <h4>Season 2025/26 Statistics</h4>
                                            <div class="position-badge ${positionClass}">Position: ${position}</div>
                                        </div>
                                        <div class="stats-grid">
                                            <div class="stat-item">
                                                <span class="stat-label">Played</span>
                                                <span class="stat-value">${stats.played}</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-label">Won</span>
                                                <span class="stat-value">${stats.won}</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-label">Drawn</span>
                                                <span class="stat-value">${stats.drawn}</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-label">Lost</span>
                                                <span class="stat-value">${stats.lost}</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-label">GF</span>
                                                <span class="stat-value">${stats.gf}</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-label">GA</span>
                                                <span class="stat-value">${stats.ga}</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-label">GD</span>
                                                <span class="stat-value">${stats.gd}</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-label">Points</span>
                                                <span class="stat-value">${stats.points}</span>
                                            </div>
                                        </div>
                                        <div class="form-section">
                                            <h4 class="form-title">Match History</h4>
                                            <div class="form-list">
                                                ${data.results
                                                    .filter(match => match.home === club.name || match.away === club.name)
                                                    .filter(match => match.homeScore !== null && match.awayScore !== null)
                                                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                                                    .map(match => {
                                                        const isHome = match.home === club.name;
                                                        const teamScore = isHome ? match.homeScore : match.awayScore;
                                                        const opponentScore = isHome ? match.awayScore : match.homeScore;
                                                        const result = teamScore > opponentScore ? 'W' : 
                                                                         teamScore === opponentScore ? 'D' : 'L';
                                                        const opponent = isHome ? match.away : match.home;
                                                        const score = `${teamScore}-${opponentScore}`;
                                                        
                                                        return `
                                                            <div class="form-match">
                                                                <div class="form-indicator ${result.toLowerCase()}" title="${match.date}">
                                                                    ${result}
                                                                </div>
                                                                <div class="match-details">
                                                                    <span class="match-score">${score}</span>
                                                                    <span class="match-opponent">vs ${opponent}</span>
                                                                    <span class="match-venue">${isHome ? 'Home' : 'Away'}</span>
                                                                </div>
                                                            </div>
                                                        `;
                                                    }).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('') :
                        '<div class="no-results">No clubs found matching your search</div>';
                }

                // Add event listeners
                searchInput.addEventListener('input', filterAndSortClubs);
                sortSelect.addEventListener('change', filterAndSortClubs);

                // Initial sort
                filterAndSortClubs();
                break;

                case 'cups':
                mainContent.innerHTML = `
                    <div class="cups-container">
                        <div class="cups-header">
                            <h2>EFL Cup Competitions</h2>
                            <p>Official knockout tournaments of EFL Uganda</p>
                        </div>
                        <div class="cups-grid">
                            <div class="cup-card">
                                <div class="cup-banner">
                                    <img src="images/yty-cup.jpg" alt="YTY Cup" class="cup-image">
                                    <div class="cup-overlay">
                                        <span class="cup-status status-upcoming">23 May 2025</span>
                                    </div>
                                </div>
                                <div class="cup-content">
                                    <h3 class="cup-title">YTY Cup</h3>
                                    <div class="cup-details">
                                        <div class="cup-info-item">
                                            <i class="fas fa-trophy"></i>
                                            <span>16 Teams Single Elimination</span>
                                        </div>
                                        <div class="cup-info-item">
                                            <i class="fas fa-calendar"></i>
                                            <span>4 Rounds</span>
                                        </div>
                                        <div class="cup-info-item">
                                            <i class="fas fa-futbol"></i>
                                            <span>15 Matches</span>
                                        </div>
                                    </div>
                                    <p class="cup-description">The prestigious knockout competition where all 16 EFL teams compete for glory. Single-leg matches from Round of 16 to the Final.</p>
                                    <div class="cup-stages">
                                        <h4>Tournament Stages</h4>
                                        <ul>
                                            <li>Round of 16</li>
                                            <li>Quarter-Finals</li>
                                            <li>Semi-Finals</li>
                                            <li>Final</li>
                                        </ul>
                                    </div>
                                    <a href="#" class="view-fixtures-btn" data-page="cup-fixtures" data-cup="yty">
                                        <i class="fas fa-calendar-alt"></i> View Cup Fixtures
                                    </a>
                                </div>
                            </div>
                            <div class="cup-card">
                                <div class="cup-banner">
                                    <img src="images/super-cup.png" alt="EFL Super Cup" class="cup-image">
                                    <div class="cup-overlay">
                                        <span class="cup-status status-upcoming">13 June 2025</span>
                                    </div>
                                </div>
                                <div class="cup-content">
                                    <h3 class="cup-title">EFL Super Cup</h3>
                                    <div class="cup-details">
                                        <div class="cup-info-item">
                                            <i class="fas fa-star"></i>
                                            <span>Season Opener</span>
                                        </div>
                                        <div class="cup-info-item">
                                            <i class="fas fa-trophy"></i>
                                            <span>Single Match</span>
                                        </div>
                                        <div class="cup-info-item">
                                            <i class="fas fa-medal"></i>
                                            <span>Championship Trophy</span>
                                        </div>
                                    </div>
                                    <p class="cup-description">The ultimate showdown between the League Champion and YTY Cup Winner. A prestigious one-off match to determine the supreme champion of EFL Uganda.</p>
                                    <div class="cup-format">
                                        <h4>Match Format</h4>
                                        <ul>
                                            <li>90 Minutes Regular Time</li>
                                            <li>30 Minutes Extra Time (if needed)</li>
                                            <li>Penalty ShoUrbanout (if needed)</li>
                                        </ul>
                                    </div>
                                    <a href="#" class="view-fixtures-btn" data-page="cup-fixtures" data-cup="super">
                                        <i class="fas fa-calendar-alt"></i> View Match Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                // Add event listeners for the fixture buttons
                document.querySelectorAll('.view-fixtures-btn').forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();
                        const cupType = e.target.dataset.cup;
                        loadPage('cup-fixtures', { cupType });
                    });
                });
                break;

                case 'cup-fixtures':
                const cupType = options?.cupType || 'yty';
                if (cupType === 'yty') {
                    const ytyFixtures = [
                        {
                            round: 'Round of 16',
                            date: '2025-05-20',
                            matches: [
                                { home: "Thorvisual FC", away: "Legends FC", time: "20:00", venue: "Thorvisual Arena", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null },
                                { home: "Giveaway FC", away: "Mayweather FC", time: "20:00", venue: "Old Trafford", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null },
                                { home: "Maria Khan", away: "Chuto Smiles FC", time: "20:00", venue: "Aka Arena", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null },
                                { home: "Urban Decay", away: "Ghost Da Killer", time: "20:00", venue: "Urban Arena", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null },
                                { home: "Priest-Emeritus", away: "Offer_Art FC", time: "20:00", venue: "Priest Arena", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null },
                                { home: "Clarks FC", away: "Newton FC", time: "20:00", venue: "Colds Arena", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null },
                                { home: "Jey Collectionz", away: "OmomoDaniel", time: "20:00", venue: "CJ Arena", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null },
                                { home: "Imoizy.t FC", away: "Milänœ FC", time: "20:00", venue: "IT Arena", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null }
                            ]
                        },
                        {
                            round: 'Quarter Finals',
                            date: '2025-04-11',
                            matches: [
                                { home: "TBD", away: "TBD", time: "20:00", venue: "TBD", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null },
                                { home: "TBD", away: "TBD", time: "20:00", venue: "TBD", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null },
                                { home: "TBD", away: "TBD", time: "20:00", venue: "TBD", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null },
                                { home: "TBD", away: "TBD", time: "20:00", venue: "TBD", homeScore: null, awayScore: null, homePenalty: null, awayPenalty: null }
                            ]
                        },
                        {
                            round: 'Semi Finals',
                            date: '2025-04-18',
                            matches: [
                                { home: "TBD", away: "TBD", time: "20:00", venue: "TBD", homeScore: null, awayScore: null },
                                { home: "TBD", away: "TBD", time: "20:00", venue: "TBD", homeScore: null, awayScore: null }
                            ]
                        },
                        {
                            round: 'Final',
                            date: '2025-04-25',
                            matches: [
                                { home: "TBD", away: "TBD", time: "20:00", venue: "TBD", homeScore: null, awayScore: null }
                            ]
                        }
                    ];

                    mainContent.innerHTML = `
                        <div class="cup-fixtures-container">
                            <div class="cup-fixtures-header">
                                <h2>YTY Cup Fixtures</h2>
                                <p>Season 2025/26</p>
                            </div>
                            ${ytyFixtures.map(round => `
                                <div class="cup-round">
                                    <h3>${round.round}</h3>
                                    <div class="round-matches">
                                        ${round.matches.map(match => {
                                            const homeClub = data.clubs.find(club => club.name === match.home);
                                            const awayClub = data.clubs.find(club => club.name === match.away);
                                            const homeLogo = match.home === "TBD" ? "images/tbd.svg" : homeClub?.logo;
                                            const awayLogo = match.away === "TBD" ? "images/tbd.svg" : awayClub?.logo;
                                            return `
                                                <div class="match-teams">
                                                    <div class="team">
                                                        <img src="${homeLogo}" alt="${match.home}" class="team-logo">
                                                        <span class="team-name">${match.home}</span>
                                                    </div>
                                                    <div class="vs">
                                                        ${match.homeScore !== null && match.awayScore !== null ? 
                                                            `${match.homeScore} - ${match.awayScore}` : 
                                                            'vs'}
                                                        ${(match.homePenalties !== null && match.awayPenalties !== null && 
                                                           match.homePenalties !== undefined && match.awayPenalties !== undefined) ? 
                                                            `<span class="penalty-score">(${match.homePenalties} - ${match.awayPenalties} pens)</span>` : 
                                                            ''}
                                                    </div>
                                                    <div class="team">
                                                        <img src="${awayLogo}" alt="${match.away}" class="team-logo">
                                                        <span class="team-name">${match.away}</span>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `;
                } else {
    const superCupFixture = {
        round: 'Final',
        date: '2025-05-27',
        matches: [
            { 
                home: "League Champion", 
                away: "YTY Cup Winner", 
                time: "20:00", 
                venue: "National Stadium", 
                homeScore: null, 
                awayScore: null,
                homePenalty: null,
                awayPenalty: null
            }
        ]
    };

    mainContent.innerHTML = `
        <div class="cup-fixtures-container">
            <div class="cup-fixtures-header">
                <h2>EFL Super Cup</h2>
                <p>Season 2025/26</p>
            </div>
            <div class="cup-round">
                <h3>${superCupFixture.round}</h3>
                <div class="round-matches">
                    ${superCupFixture.matches.map(match => `
                        <div class="match-teams">
                            <div class="team">
                                <span class="team-name">${match.home}</span>
                            </div>
                            <div class="vs">
                                ${match.homeScore !== null && match.awayScore !== null ? 
                                    `${match.homeScore} - ${match.awayScore}` : 
                                    'vs'}
                                ${(match.homePenalties !== null && match.awayPenalties !== null && 
                                   match.homePenalties !== undefined && match.awayPenalties !== undefined) ? 
                                    `<span class="penalty-score">(${match.homePenalties} - ${match.awayPenalties} pens)</span>` : 
                                    ''}
                            </div>
                            <div class="team">
                                <span class="team-name">${match.away}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="super-cup-details">
                <p><strong>Date:</strong> ${superCupFixture.date}</p>
                <p><strong>Time:</strong> ${superCupFixture.matches[0].time}</p>
                <p><strong>Venue:</strong> ${superCupFixture.matches[0].venue}</p>
                <p><strong>Competition Format:</strong></p>
                <ul>
                    <li>90 Minutes Regular Time</li>
                    <li>30 Minutes Extra Time (if needed)</li>
                    <li>Penalty Shootout (if needed)</li>
                </ul>
            </div>
        </div>
    `;
}
                break;

            case 'champions':
                // Champions League data
                const championsFixtures = [
                    {
                        round: 'Group Stage - Matchday 1',
                        date: '2025-05-20',
                        matches: [
                            { home: "Ghost Da Killer", away: "Maria Khan", time: "20:00", venue: "Ghost Arena", homeScore: null, awayScore: null },
                            { home: "Imoizy.t FC", away: "Newton FC", time: "20:00", venue: "IT Arena", homeScore: null, awayScore: null },
                            { home: "Thorvisual FC", away: "Giveaway FC", time: "20:00", venue: "Thorvisual Arena", homeScore: null, awayScore: null },
                            { home: "Clarks FC", away: "Offer_Art FC", time: "20:00", venue: "Colds Arena", homeScore: null, awayScore: null }
                        ]
                    },
                    {
                        round: 'Group Stage - Matchday 2',
                        date: '2025-05-22',
                        matches: [
                            { home: "Imoizy.t FC", away: "Ghost Da Killer", time: "20:00", venue: "IT Arena", homeScore: null, awayScore: null },
                            { home: "Newton FC", away: "Maria Khan", time: "20:00", venue: "Emirates Arena", homeScore: null, awayScore: null },
                            { home: "Clarks FC", away: "Thorvisual FC", time: "20:00", venue: "Colds Arena", homeScore: null, awayScore: null },
                            { home: "Offer_Art FC", away: "Giveaway FC", time: "20:00", venue: "OfferArt Arena", homeScore: null, awayScore: null }
                        ]
                    },
                    {
                        round: 'Group Stage - Matchday 3',
                        date: '2025-05-24',
                        matches: [
                            { home: "Newton FC", away: "Ghost Da Killer", time: "20:00", venue: "Emirates Arena", homeScore: null, awayScore: null },
                            { home: "Maria Khan", away: "Imoizy.t FC", time: "20:00", venue: "Aka Arena", homeScore: null, awayScore: null },
                            { home: "Offer_Art FC", away: "Thorvisual FC", time: "20:00", venue: "OfferArt Arena", homeScore: null, awayScore: null },
                            { home: "Giveaway FC", away: "Clarks FC", time: "20:00", venue: "Old Trafford", homeScore: null, awayScore: null }
                        ]
                    },
                    {
                        round: 'Group Stage - Matchday 4',
                        date: '2025-05-27',
                        matches: [
                            { home: "Imoizy.t FC", away: "Maria Khan", time: "20:00", venue: "IT Arena", homeScore: null, awayScore: null },
                            { home: "Ghost Da Killer", away: "Newton FC", time: "20:00", venue: "Ghost Arena", homeScore: null, awayScore: null },
                            { home: "Thorvisual FC", away: "Offer_Art FC", time: "20:00", venue: "Thorvisual Arena", homeScore: null, awayScore: null },
                            { home: "Clarks FC", away: "Giveaway FC", time: "20:00", venue: "Colds Arena", homeScore: null, awayScore: null }
                        ]
                    },
                    {
                        round: 'Group Stage - Matchday 5',
                        date: '2025-05-29',
                        matches: [
                            { home: "Ghost Da Killer", away: "Imoizy.t FC", time: "20:00", venue: "Ghost Arena", homeScore: null, awayScore: null },
                            { home: "Maria Khan", away: "Newton FC", time: "20:00", venue: "Aka Arena", homeScore: null, awayScore: null },
                            { home: "Thorvisual FC", away: "Clarks FC", time: "20:00", venue: "Thorvisual Arena", homeScore: null, awayScore: null },
                            { home: "Giveaway FC", away: "Offer_Art FC", time: "20:00", venue: "Old Trafford", homeScore: null, awayScore: null }
                        ]
                    },
                    {
                        round: 'Group Stage - Matchday 6',
                        date: '2025-05-31',
                        matches: [
                            { home: "Maria Khan", away: "Ghost Da Killer", time: "20:00", venue: "Aka Arena", homeScore: null, awayScore: null },
                            { home: "Newton FC", away: "Imoizy.t FC", time: "20:00", venue: "Emirates Arena", homeScore: null, awayScore: null },
                            { home: "Giveaway FC", away: "Thorvisual FC", time: "20:00", venue: "Old Trafford", homeScore: null, awayScore: null },
                            { home: "Offer_Art FC", away: "Clarks FC", time: "20:00", venue: "OfferArt Arena", homeScore: null, awayScore: null }
                        ]
                    },
                    {
                        round: 'Semi-Finals - First Leg',
                        date: '2025-06-03',
                        matches: [
                            { 
                                home: "TBD", 
                                away: "TBD", 
                                time: "20:00", 
                                venue: "TBD", 
                                homeScore: null, 
                                awayScore: null,
                                homePenalties: null,
                                awayPenalties: null,
                                isSecondLeg: false
                            },
                            { 
                                home: "TBD", 
                                away: "TBD", 
                                time: "20:00", 
                                venue: "TBD", 
                                homeScore: null, 
                                awayScore: null,
                                homePenalties: null,
                                awayPenalties: null,
                                isSecondLeg: false
                            }
                        ]
                    },
                    {
                        round: 'Semi-Finals - Second Leg',
                        date: '2025-06-05',
                        matches: [
                            { 
                                home: "TBD", 
                                away: "TBD", 
                                time: "20:00", 
                                venue: "TBD", 
                                homeScore: null, 
                                awayScore: null,
                                homePenalties: null,
                                awayPenalties: null,
                                isSecondLeg: true
                            },
                            { 
                                home: "TBD", 
                                away: "TBD", 
                                time: "20:00", 
                                venue: "TBD", 
                                homeScore: null, 
                                awayScore: null,
                                homePenalties: null,
                                awayPenalties: null,
                                isSecondLeg: true
                            }
                        ]
                    },
                    {
                        round: 'Final',
                        date: '2025-06-11',
                        matches: [
                            { 
                                home: "TBD", 
                                away: "TBD", 
                                time: "20:00", 
                                venue: "TBD", 
                                homeScore: null, 
                                awayScore: null,
                                homePenalties: null,
                                awayPenalties: null,
                                isFinal: true
                            }
                        ]
                    }
                ];

                const groupStandings = {
                    'Group A': [
                        { team: "Ghost Da Killer", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
                        { team: "Maria Khan", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
                        { team: "Imoizy.t FC", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
                        { team: "Newton FC", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }
                    ],
                    'Group B': [
                        { team: "Thorvisual FC", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
                        { team: "Giveaway FC", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
                        { team: "Clarks FC", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
                        { team: "Offer_Art FC", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }
                    ]
                };

                mainContent.innerHTML = `
                    <div class="champions-league-container">
                        <div class="champions-league-header">
                            <div class="champions-league-logo">
                                <img src="images/champions.svg" alt="EFL Champions League">
                            </div>
                            <div class="champions-league-title">
                                <h2>EFL Champions League</h2>
                                <p>The Elite Ugandan-Style Competition</p>
                            </div>
                        </div>
                        
                        <div class="champions-league-content">
                            <div class="champions-league-stats">
                                <div class="stats-section">
                                    <h3>Group Stage</h3>
                                    <div class="groups-container">
                                        ${Object.entries(groupStandings).map(([group, teams]) => `
                                            <div class="group">
                                                <h4>${group}</h4>
                                                <div class="table-container">
                                                    <table class="standings-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Pos</th>
                                                                <th>Team</th>
                                                                <th>P</th>
                                                                <th>W</th>
                                                                <th>D</th>
                                                                <th>L</th>
                                                                <th>GF</th>
                                                                <th>GA</th>
                                                                <th>GD</th>
                                                                <th>Pts</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            ${teams
                                                                .sort((a, b) => {
                                                                    // First sort by points
                                                                    if (b.points !== a.points) {
                                                                        return b.points - a.points;
                                                                    }
                                                                    // Then by goal difference
                                                                    const gdA = a.goalsFor - a.goalsAgainst;
                                                                    const gdB = b.goalsFor - b.goalsAgainst;
                                                                    if (gdB !== gdA) {
                                                                        return gdB - gdA;
                                                                    }
                                                                    // Then by goals for
                                                                    if (b.goalsFor !== a.goalsFor) {
                                                                        return b.goalsFor - a.goalsFor;
                                                                    }
                                                                    // Then by goals against (ascending)
                                                                    if (a.goalsAgainst !== b.goalsAgainst) {
                                                                        return a.goalsAgainst - b.goalsAgainst;
                                                                    }
                                                                    // Finally by team name alphabetically
                                                                    return a.team.localeCompare(b.team);
                                                                })
                                                                .map((team, index) => `
                                                                    <tr>
                                                                        <td>${index + 1}</td>
                                                                        <td>${team.team}</td>
                                                                        <td>${team.played}</td>
                                                                        <td>${team.won}</td>
                                                                        <td>${team.drawn}</td>
                                                                        <td>${team.lost}</td>
                                                                        <td>${team.goalsFor}</td>
                                                                        <td>${team.goalsAgainst}</td>
                                                                        <td>${team.goalsFor - team.goalsAgainst}</td>
                                                                        <td>${team.points}</td>
                                                                    </tr>
                                                                `).join('')}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="table-legend">
                                                    <div class="legend-item">
                                                        <div class="legend-color"></div>
                                                        <div class="legend-text">Top 2 teams qualify for Semi-Finals</div>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                            <div class="champions-league-fixtures">
                                <h3>Fixtures & Results</h3>
                                <div class="fixtures-container">
                                    ${championsFixtures.map(fixture => `
                                        <div class="fixture-round">
                                            <h4>${fixture.round}</h4>
                                            <p class="fixture-date">${fixture.date}</p>
                                            <div class="round-matches">
                                                ${fixture.matches.map(match => `
                                                    <div class="match">
                                                        <div class="match-teams">
                                                            <div class="team">
                                                                <span class="team-name">${match.home}</span>
                                                            </div>
                                                            <div class="vs">
                                                                ${match.homeScore !== null && match.awayScore !== null ? 
                                                                    `${match.homeScore} - ${match.awayScore}` : 
                                                                    'vs'}
                                                                ${(match.homePenalties !== null && match.awayPenalties !== null && 
                                                                   match.homePenalties !== undefined && match.awayPenalties !== undefined) ? 
                                                                    `<span class="penalty-score">(${match.homePenalties} - ${match.awayPenalties} pens)</span>` : 
                                                                    ''}
                                                            </div>
                                                            <div class="team">
                                                                <span class="team-name">${match.away}</span>
                                                            </div>
                                                        </div>
                                                        <div class="match-details">
                                                            <span class="match-time">${match.time}</span>
                                                            <span class="match-venue">${match.venue}</span>
                                                        </div>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'champions-fixtures':
                mainContent.innerHTML = `
                    <div class="champions-league-container">
                        <div class="champions-league-header">
                            <div class="champions-league-logo">
                                <img src="images/champions.svg" alt="EFL Champions League">
                            </div>
                            <div class="champions-league-title">
                                <h2>EFL Champions League</h2>
                                <p>All Fixtures</p>
                            </div>
                        </div>

                        <div class="champions-fixtures-content">
                            ${championsFixtures.map(round => `
                                <div class="fixtures-round">
                                    <h3 class="round-title">${round.round}</h3>
                                    <div class="round-matches">
                                        ${round.matches.map(match => {
                                            const homeClub = data.clubs.find(club => club.name === match.home);
                                            const awayClub = data.clubs.find(club => club.name === match.away);
                                            const homeLogo = match.home === "TBD" ? "images/tbd.svg" : homeClub?.logo;
                                            const awayLogo = match.away === "TBD" ? "images/tbd.svg" : awayClub?.logo;

                                            return `
                                                <div class="match-card">
                                                    <div class="match-teams">
                                                        <div class="team">
                                                            <img src="${homeLogo}" alt="${match.home}" class="team-logo">
                                                            <span class="team-name">${match.home}</span>
                                                        </div>
                                                        <div class="vs">
                                                            ${match.homeScore !== null && match.awayScore !== null ? 
                                                                `${match.homeScore} - ${match.awayScore}` : 
                                                                'vs'}
                                                            ${(match.homePenalties !== null && match.awayPenalties !== null) ? 
                                                                `<span class="penalty-score">(${match.homePenalties} - ${match.awayPenalties} pens)</span>` : 
                                                                ''}
                                                        </div>
                                                        <div class="team">
                                                            <img src="${awayLogo}" alt="${match.away}" class="team-logo">
                                                            <span class="team-name">${match.away}</span>
                                                        </div>
                                                    </div>
                                                    <div class="match-details">
                                                        <span class="date">${match.date}</span>
                                                        <span class="time">${match.time}</span>
                                                        <span class="venue">${match.venue}</span>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;

            case 'champions-standings':
                mainContent.innerHTML = `
                    <div class="champions-league-container">
                        <div class="champions-league-header">
                            <div class="champions-league-logo">
                                <img src="images/champions.svg" alt="EFL Champions League">
                            </div>
                            <div class="champions-league-title">
                                <h2>EFL Champions League</h2>
                                <p>Group Stage Standings</p>
                            </div>
                        </div>

                        <div class="champions-standings-content">
                            ${Object.entries(groupStandings).map(([groupName, teams]) => `
                                <div class="group-standings">
                                    <h3 class="group-title">${groupName}</h3>
                                    <div class="table-container">
                                    <table class="standings-table">
                                        <thead>
                                            <tr>
                                                <th>Pos</th>
                                                <th>Team</th>
                                                <th>P</th>
                                                <th>W</th>
                                                <th>D</th>
                                                <th>L</th>
                                                <th>GF</th>
                                                <th>GA</th>
                                                <th>GD</th>
                                                <th>Pts</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                ${teams
                                                    .sort((a, b) => {
                                                        // First sort by points
                                                        if (b.points !== a.points) {
                                                            return b.points - a.points;
                                                        }
                                                        // Then by goal difference
                                                        const gdA = a.goalsFor - a.goalsAgainst;
                                                        const gdB = b.goalsFor - b.goalsAgainst;
                                                        if (gdB !== gdA) {
                                                            return gdB - gdA;
                                                        }
                                                        // Then by goals for
                                                        if (b.goalsFor !== a.goalsFor) {
                                                            return b.goalsFor - a.goalsFor;
                                                        }
                                                        // Then by goals against (ascending)
                                                        if (a.goalsAgainst !== b.goalsAgainst) {
                                                            return a.goalsAgainst - b.goalsAgainst;
                                                        }
                                                        // Finally by team name alphabetically
                                                        return a.team.localeCompare(b.team);
                                                    })
                                                    .map((team, index) => {
                                                const club = data.clubs.find(c => c.name === team.team);
                                                return `
                                                    <tr>
                                                        <td>${index + 1}</td>
                                                        <td class="team-cell">
                                                            <img src="${club?.logo || 'images/tbd.svg'}" alt="${team.team}">
                                                            <span>${team.team}</span>
                                                        </td>
                                                        <td>${team.played}</td>
                                                        <td>${team.won}</td>
                                                        <td>${team.drawn}</td>
                                                        <td>${team.lost}</td>
                                                        <td>${team.goalsFor}</td>
                                                        <td>${team.goalsAgainst}</td>
                                                        <td>${team.goalsFor - team.goalsAgainst}</td>
                                                        <td>${team.points}</td>
                                                    </tr>
                                                `;
                                            }).join('')}
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;

            case 'hall-of-fame':
                mainContent.innerHTML = `
                    <div class="hall-of-fame-container">
                        <div class="hall-of-fame-header">
                            <h2>Hall of Fame</h2>
                            <p>Celebrating the Champions of EFL Uganda</p>
                        </div>
                        
                        <div class="hall-of-fame-controls">
                            <div class="sort-controls">
                                <select class="competition-sort" onchange="sortByCompetition(this.value)">
                                    <option value="all">All Competitions</option>
                                    <option value="league">League Only</option>
                                    <option value="yty">YTY Cup Only</option>
                                    <option value="super">Super Cup Only</option>
                                    <option value="champions">Champions League Only</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="hall-of-fame-content">
                            <div class="trophy-section" data-edition="2025">
                                <h3>League Champions</h3>
                                <div class="trophy-grid">
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>1st Edition (April-May 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/ghost.svg" alt="Ghost Da Killer FC" class="team-logo">
                                                <span class="team-name">Ghost Da Killer FC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>2nd Edition (May-June 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/tbd.svg" alt="TBD" class="team-logo">
                                                <span class="team-name">Coming Soon</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>3rd Edition (June-July 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/tbd.svg" alt="TBD" class="team-logo">
                                                <span class="team-name">Coming Soon</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="trophy-section" data-edition="2025">
                                <h3>YTY Cup Winners</h3>
                                <div class="trophy-grid">
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>1st Edition (April-May 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/thorvisual.svg" alt="Thorvisual FC" class="team-logo">
                                                <span class="team-name">Thorvisual FC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>2nd Edition (May-June 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/tbd.svg" alt="TBD" class="team-logo">
                                                <span class="team-name">Coming Soon</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>3rd Edition (June-July 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/tbd.svg" alt="TBD" class="team-logo">
                                                <span class="team-name">Coming Soon</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="trophy-section" data-edition="2025">
                                <h3>Super Cup Winners</h3>
                                <div class="trophy-grid">
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>1st Edition (April-May 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/thorvisual.svg" alt="Thorvisual FC" class="team-logo">
                                                <span class="team-name">Thorvisual FC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>2nd Edition (May-June 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/tbd.svg" alt="TBD" class="team-logo">
                                                <span class="team-name">Coming Soon</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>3rd Edition (June-July 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/tbd.svg" alt="TBD" class="team-logo">
                                                <span class="team-name">Coming Soon</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="trophy-section" data-edition="2025">
                                <h3>Champions League Winners</h3>
                                <div class="trophy-grid">
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>2nd Edition (May-June 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/tbd.svg" alt="TBD" class="team-logo">
                                                <span class="team-name">Coming Soon</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="trophy-card">
                                        <div class="trophy-content">
                                            <h4>3rd Edition (June-July 2025)</h4>
                                            <div class="winner">
                                                <img src="images/club-logos/tbd.svg" alt="TBD" class="team-logo">
                                                <span class="team-name">Coming Soon</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
        }
    }

    // Add this near the beginning of your script
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme or system preference
    const currentTheme = localStorage.getItem('theme') || 
        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update the theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' 
            ? 'dark' 
            : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    
        // Close mobile menu when theme toggle is clicked
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinksMenu = document.querySelector('.nav-links');
        if (mobileMenuBtn.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navLinksMenu.classList.remove('active');
        }
    });

    // Mobile menu button click handler
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinksMenu = document.querySelector('.nav-links');
        const isClickInside = mobileMenuBtn.contains(e.target) || navLinksMenu.contains(e.target);
        
        if (!isClickInside && navLinksMenu.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navLinksMenu.classList.remove('active');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu when link is clicked
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinksMenu = document.querySelector('.nav-links');
            if (mobileMenuBtn.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navLinksMenu.classList.remove('active');
            }
            
            loadPage(link.dataset.page);
        });
    });

    loadPage('home');
});

// Add the toggle function after the filterAndSortClubs function
function toggleStats(button) {
    const statsSection = button.nextElementSibling;
    const isHidden = statsSection.style.display === 'none';
    statsSection.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? 'Hide Stats' : 'View Stats';
}

// Make toggleStats available globally
window.toggleStats = toggleStats;

// Search overlay functionality
const searchOverlay = document.querySelector('.search-overlay');
const searchInput = document.getElementById('search-input');
const closeSearch = document.querySelector('.close-search');
const searchButton = document.querySelector('.search-button');

function showSearchOverlay() {
    searchOverlay.classList.add('active');
    searchInput.focus();
}

function hideSearchOverlay() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    clearSearchResults();
}

function clearSearchResults() {
    const teamsResults = document.getElementById('teams-results');
    const matchesResults = document.getElementById('matches-results');
    teamsResults.innerHTML = '';
    matchesResults.innerHTML = '';
}

function performSearch(query) {
    if (query.length < 2) {
        clearSearchResults();
        return;
    }

    const teamsResults = document.getElementById('teams-results');
    const matchesResults = document.getElementById('matches-results');
    
    // Clear previous results
    teamsResults.innerHTML = '';
    matchesResults.innerHTML = '';

    // Search teams
    const teamResults = teams.filter(team => 
        team.name.toLowerCase().includes(query.toLowerCase())
    );

    // Search matches
    const matchResults = matches.filter(match => {
        const homeTeam = teams.find(t => t.id === match.homeTeamId);
        const awayTeam = teams.find(t => t.id === match.awayTeamId);
        return (
            homeTeam.name.toLowerCase().includes(query.toLowerCase()) ||
            awayTeam.name.toLowerCase().includes(query.toLowerCase())
        );
    });

    // Display team results
    if (teamResults.length > 0) {
        teamResults.forEach(team => {
            const teamElement = document.createElement('div');
            teamElement.className = 'result-item';
            teamElement.innerHTML = `
                <div class="team-name">${team.name}</div>
            `;
            teamElement.addEventListener('click', () => {
                hideSearchOverlay();
                loadPage('team', team.id);
            });
            teamsResults.appendChild(teamElement);
        });
    } else {
        teamsResults.innerHTML = '<div class="no-results">No teams found</div>';
    }

    // Display match results
    if (matchResults.length > 0) {
        matchResults.forEach(match => {
            const homeTeam = teams.find(t => t.id === match.homeTeamId);
            const awayTeam = teams.find(t => t.id === match.awayTeamId);
            const matchElement = document.createElement('div');
            matchElement.className = 'result-item';
            matchElement.innerHTML = `
                <div class="team-name">${homeTeam.name} vs ${awayTeam.name}</div>
                <div class="match-details">${new Date(match.date).toLocaleDateString()}</div>
            `;
            matchElement.addEventListener('click', () => {
                hideSearchOverlay();
                loadPage('match', match.id);
            });
            matchesResults.appendChild(matchElement);
        });
    } else {
        matchesResults.innerHTML = '<div class="no-results">No matches found</div>';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Search button click
    searchButton.addEventListener('click', showSearchOverlay);

    // Close button click
    closeSearch.addEventListener('click', hideSearchOverlay);

    // Search input
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    // Close overlay when clicking outside
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            hideSearchOverlay();
        }
    });

    // Close overlay with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            hideSearchOverlay();
        }
    });
});

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update the theme toggle label
    const themeLabel = document.querySelector('.theme-toggle-label');
    if (themeLabel) {
        themeLabel.textContent = newTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
    }
}

// --- Modern Search Overlay Functionality ---
(function() {
  // Elements
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.getElementById('search-input');
  const closeSearchBtn = document.querySelector('.close-search');
  const searchButton = document.querySelector('.search-button');
  const teamsResults = document.getElementById('teams-results');
  const matchesResults = document.getElementById('matches-results');
  const managersResults = document.getElementById('managers-results');
  const loader = document.querySelector('.search-loading');
  const noResults = document.querySelector('.no-results');

  // Data sources (from global data object)
  let allTeams = [];
  let allFixtures = [];
  let allResults = [];
  let allMatches = [];
  let allManagers = [];
  let allCups = [
    { name: 'YTY Cup', page: 'cups' },
    { name: 'EFL Super Cup', page: 'cups' }
  ];
  if (typeof data !== 'undefined') {
    allTeams = data.clubs || [];
    allFixtures = data.fixtures || [];
    allResults = data.results || [];
    allMatches = [
      ...((data.fixtures || []).map(f => ({...f, type: 'fixture'}))),
      ...((data.results || []).map(r => ({...r, type: 'result'})))
    ];
    allManagers = data.clubs.map(club => ({
      name: club.manager,
      club: club.name,
      logo: club.logo
    }));
  }

  // Show overlay
  function showSearchOverlay() {
    searchOverlay.classList.add('active');
    searchInput.value = '';
    clearResults();
    setTimeout(() => searchInput.focus(), 100);
    document.body.style.overflow = 'hidden';
  }
  // Hide overlay
  function hideSearchOverlay() {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Keyboard accessibility: trap focus, ESC to close
  searchOverlay.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideSearchOverlay();
    }
    // Trap focus inside overlay
    if (e.key === 'Tab') {
      const focusable = searchOverlay.querySelectorAll('input,button');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        last.focus(); e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus(); e.preventDefault();
      }
    }
  });

  // Open/close events
  searchButton.addEventListener('click', showSearchOverlay);
  closeSearchBtn.addEventListener('click', hideSearchOverlay);
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) hideSearchOverlay();
  });

  // Search logic
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    clearTimeout(searchTimeout);
    if (!query) {
      clearResults();
      return;
    }
    loader.style.display = 'flex';
    noResults.style.display = 'none';
    searchTimeout = setTimeout(() => {
      performSearch(query);
    }, 150);
  });

  function performSearch(query) {
    // Teams
    const teams = allTeams.filter(team =>
      team.name.toLowerCase().includes(query.toLowerCase())
    );
    // Matches (fixtures and results)
    const matches = allMatches.filter(match => {
      const home = match.home || '';
      const away = match.away || '';
      return (
        home.toLowerCase().includes(query.toLowerCase()) ||
        away.toLowerCase().includes(query.toLowerCase())
      );
    });
    // Managers
    const managers = allManagers.filter(manager =>
      manager.name.toLowerCase().includes(query.toLowerCase())
    );
    // Cups
    const cups = allCups.filter(cup =>
      cup.name.toLowerCase().includes(query.toLowerCase())
    );
    // Add a list of main pages and their keywords
    const allPages = [
      { name: 'Home', page: 'home', keywords: ['home', 'main', 'start', 'welcome'] },
      { name: 'Results', page: 'results', keywords: ['results', 'scores', 'outcomes', 'matches played'] },
      { name: 'Fixtures', page: 'fixtures', keywords: ['fixtures', 'upcoming', 'schedule', 'matches', 'games'] },
      { name: 'Table', page: 'table', keywords: ['table', 'standings', 'rankings', 'positions', 'league table'] },
      { name: 'Cups', page: 'cups', keywords: ['cups', 'tournaments', 'cup', 'competition', 'yty', 'super cup'] },
      { name: 'Clubs', page: 'clubs', keywords: ['clubs', 'teams', 'club', 'team', 'managers'] }
    ];
    // Add direct club page links if query matches a club name
    const clubPageLinks = allTeams.filter(team =>
      team.name.toLowerCase().includes(query.toLowerCase())
    ).map(team => ({
      name: team.name,
      page: 'clubs',
      keywords: [team.name]
    }));
    const pages = [
      ...allPages.filter(pageObj =>
        pageObj.keywords.some(kw => kw.toLowerCase().includes(query.toLowerCase())) ||
        pageObj.name.toLowerCase().includes(query.toLowerCase()) ||
        query.toLowerCase().includes(pageObj.name.toLowerCase())
      ),
      ...clubPageLinks
    ];
    renderResults(teams, matches, managers, cups, pages, query);
  }

  function highlight(text, query) {
    if (!query) return text;
    return text.replace(new RegExp(`(${query})`, 'ig'), '<mark>$1</mark>');
  }

  function renderResults(teams, matches, managers, cups, pages, query) {
    loader.style.display = 'none';
    teamsResults.innerHTML = teams.length ? teams.map(team => `
      <div class="result-item" tabindex="0" data-type="team" data-name="${encodeURIComponent(team.name)}">
        <img src="${team.logo}" class="team-logo" alt="${team.name}">
        <div class="result-info">
          <div class="result-title">${highlight(team.name, query)}</div>
          <div class="result-meta">${highlight(team.location || '', query)}</div>
        </div>
      </div>
    `).join('') : '';
    matchesResults.innerHTML = matches.length ? matches.map(match => {
      let matchType = match.type === 'fixture' ? 'fixture' : 'result';
      let score = '';
      if (matchType === 'result' && match.homeScore !== null && match.awayScore !== null) {
        score = `<span class='match-score'>${match.homeScore} - ${match.awayScore}</span>`;
      } else {
        score = `<span class='match-score'>vs</span>`;
      }
      return `
      <div class="result-item" tabindex="0" data-type="match" data-home="${encodeURIComponent(match.home)}" data-away="${encodeURIComponent(match.away)}" data-date="${match.date}">
        <div class="result-info">
          <div class="result-title">${highlight(match.home, query)} vs ${highlight(match.away, query)} ${score}</div>
          <div class="result-meta">${match.date || ''}</div>
        </div>
      </div>
      `;
    }).join('') : '';
    managersResults.innerHTML = managers.length ? managers.map(manager => `
      <div class="result-item" tabindex="0" data-type="manager" data-name="${encodeURIComponent(manager.name)}" data-club="${encodeURIComponent(manager.club)}">
        <img src="${manager.logo}" class="manager-avatar" alt="${manager.name}">
        <div class="result-info">
          <div class="result-title">${highlight(manager.name, query)}</div>
          <div class="result-meta">Manager of ${highlight(manager.club, query)}</div>
        </div>
      </div>
    `).join('') : '';
    // Cups (add to teams section for now, or create a new section if you want)
    if (cups.length) {
      teamsResults.innerHTML += cups.map(cup => `
        <div class="result-item" tabindex="0" data-type="cup" data-name="${encodeURIComponent(cup.name)}" data-page="${cup.page}">
          <div class="result-info">
            <div class="result-title">${highlight(cup.name, query)}</div>
            <div class="result-meta">Cup Competition</div>
          </div>
        </div>
      `).join('');
    }
    // Table (if query matches 'table' or 'standings')
    if (/table|standings/i.test(query)) {
      teamsResults.innerHTML += `
        <div class="result-item" tabindex="0" data-type="table">
          <div class="result-info">
            <div class="result-title">League Table</div>
            <div class="result-meta">Current Standings</div>
          </div>
        </div>
      `;
    }
    // Pages section
    let pagesHTML = '';
    if (pages.length) {
      pagesHTML = `<section class="results-section pages-section" aria-label="Pages">
        <h3>Pages</h3>
        <div class="results-list" id="pages-results">
          ${pages.map(pageObj => `
            <div class="result-item" tabindex="0" data-type="page" data-page="${pageObj.page}" data-club="${pageObj.name ? encodeURIComponent(pageObj.name) : ''}">
              <div class="result-info">
                <div class="result-title">${highlight(pageObj.name, query)}</div>
                <div class="result-meta">Go to ${pageObj.page === 'clubs' && pageObj.name ? highlight(pageObj.name, query) + ' in Clubs' : 'the ' + pageObj.name + ' page'}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>`;
    }
    // Insert pages section at the top of teamsResults
    teamsResults.innerHTML = pagesHTML + teamsResults.innerHTML;
    // Show/hide no results
    if (!teams.length && !matches.length && !managers.length && !cups.length && !pages.length && !/table|standings/i.test(query)) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
    // Keyboard navigation
    setupKeyboardNavigation();
  }

  function clearResults() {
    loader.style.display = 'none';
    teamsResults.innerHTML = '';
    matchesResults.innerHTML = '';
    managersResults.innerHTML = '';
    noResults.style.display = 'none';
  }

  // Keyboard navigation for results
  function setupKeyboardNavigation() {
    const allItems = searchOverlay.querySelectorAll('.result-item');
    let idx = -1;
    function focusItem(i) {
      allItems.forEach(item => item.classList.remove('active'));
      if (i >= 0 && i < allItems.length) {
        allItems[i].focus();
        allItems[i].classList.add('active');
      }
    }
    searchInput.onkeydown = function(e) {
      if (!allItems.length) return;
      if (e.key === 'ArrowDown') {
        idx = (idx + 1) % allItems.length;
        focusItem(idx);
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        idx = (idx - 1 + allItems.length) % allItems.length;
        focusItem(idx);
        e.preventDefault();
      } else if (e.key === 'Enter' && idx >= 0) {
        allItems[idx].click();
      }
    };
    allItems.forEach((item, i) => {
      item.onkeydown = function(e) {
        if (e.key === 'ArrowDown') {
          focusItem((i + 1) % allItems.length); e.preventDefault();
        } else if (e.key === 'ArrowUp') {
          focusItem((i - 1 + allItems.length) % allItems.length); e.preventDefault();
        } else if (e.key === 'Enter') {
          item.click();
        }
      };
      item.onclick = function() {
        const type = item.getAttribute('data-type');
        if (type === 'team') {
          loadPage('clubs');
          hideSearchOverlay();
          setTimeout(() => {
            const clubName = decodeURIComponent(item.getAttribute('data-name'));
            const clubCards = document.querySelectorAll('.club-card .club-name');
            clubCards.forEach(card => {
              if (card.textContent.trim() === clubName) {
                card.scrollIntoView({behavior: 'smooth', block: 'center'});
                card.classList.add('highlighted');
                setTimeout(() => card.classList.remove('highlighted'), 2000);
              }
            });
          }, 400);
        } else if (type === 'manager') {
          loadPage('clubs');
          hideSearchOverlay();
          setTimeout(() => {
            const clubName = decodeURIComponent(item.getAttribute('data-club'));
            const clubCards = document.querySelectorAll('.club-card .club-name');
            clubCards.forEach(card => {
              if (card.textContent.trim() === clubName) {
                card.scrollIntoView({behavior: 'smooth', block: 'center'});
                card.classList.add('highlighted');
                setTimeout(() => card.classList.remove('highlighted'), 2000);
              }
            });
          }, 400);
        } else if (type === 'match') {
          loadPage('results');
          hideSearchOverlay();
          setTimeout(() => {
            const home = decodeURIComponent(item.getAttribute('data-home'));
            const away = decodeURIComponent(item.getAttribute('data-away'));
            const matchCards = document.querySelectorAll('.result-card, .fixture-card');
            matchCards.forEach(card => {
              const homeTeam = card.querySelector('.team.home .team-name') || card.querySelector('.team .team-name');
              const awayTeam = card.querySelector('.team.away .team-name') || card.querySelectorAll('.team .team-name')[1];
              if (homeTeam && awayTeam && homeTeam.textContent.trim() === home && awayTeam.textContent.trim() === away) {
                card.scrollIntoView({behavior: 'smooth', block: 'center'});
                card.classList.add('highlighted');
                setTimeout(() => card.classList.remove('highlighted'), 2000);
              }
            });
          }, 400);
        } else if (type === 'cup') {
          loadPage('cups');
          hideSearchOverlay();
          // Optionally scroll to cup section if you have IDs
        } else if (type === 'table') {
          loadPage('table');
          hideSearchOverlay();
          setTimeout(() => {
            const table = document.querySelector('.league-table');
            if (table) {
              table.scrollIntoView({behavior: 'smooth', block: 'center'});
              table.classList.add('highlighted');
              setTimeout(() => table.classList.remove('highlighted'), 2000);
            }
          }, 400);
        } else if (type === 'page') {
          const page = item.getAttribute('data-page');
          const clubName = item.getAttribute('data-club');
          loadPage(page);
          hideSearchOverlay();
          if (page === 'clubs' && clubName) {
            setTimeout(() => {
              const clubCards = document.querySelectorAll('.club-card .club-name');
              clubCards.forEach(card => {
                if (card.textContent.trim() === decodeURIComponent(clubName)) {
                  card.scrollIntoView({behavior: 'smooth', block: 'center'});
                  card.classList.add('highlighted');
                  setTimeout(() => card.classList.remove('highlighted'), 2000);
                }
              });
            }, 400);
          }
        }
      };
    });
  }
})();
// --- End Modern Search Overlay Functionality ---

/* Add highlight style for .highlighted */
const style = document.createElement('style');
style.innerHTML = `.highlighted { outline: 3px solid #FFD700 !important; box-shadow: 0 0 0 4px #FFD70055 !important; transition: outline 0.2s, box-shadow 0.2s; }`;
document.head.appendChild(style);

// Remove the sortHallOfFame function and update sortByCompetition
function sortByCompetition(competition) {
    const sections = document.querySelectorAll('.trophy-section');
    
    sections.forEach(section => {
        const title = section.querySelector('h3').textContent.toLowerCase();
        if (competition === 'all') {
            section.style.display = 'block';
        } else {
            const isMatch = 
                (competition === 'league' && title.includes('league champions')) ||
                (competition === 'yty' && title.includes('yty cup')) ||
                (competition === 'super' && title.includes('super cup')) ||
                (competition === 'champions' && title.includes('champions league'));
            
            section.style.display = isMatch ? 'block' : 'none';
        }
    });
}

