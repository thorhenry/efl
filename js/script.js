document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-links a');

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
                title: "Teams Replaced",
                date: "2025-04-20",
                content: "The following teams have been replaced in the EFL Uganda: Priest Emeritus FC By Aka The Kraven, and 25 Pro Max By RayG FC"
            },
            {
                title: "YTY Cup Semi Finals",
                date: "2025-04-23",
                content: "YTY Cup Semi Finals fixtures have been released"
            },
            {
                title: "YTY Cup Semi Finals Fixtures",
                date: "2025-04-24",
                content: "Aka The Kraven vs Ghost Winner, Thorvisual FC vs Clarks FC"
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
                content: "Frinsky17, Jey Collectionz, and many more have joined the league"
            }
        ],
        fixtures: [
           
        // Day 1
        {
            matchday: 1,
            leg: "First",
            home: "Thorvisual FC",
            away: "Imoizy.T FC",
            date: "2025-03-27",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Urban Decay FC",
            away: "Jey Collectionz",
            date: "2025-03-27",
            time: "20:00",
            venue: "Urban"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Offer_Art FC",
            away: "KingKai256ug FC",
            date: "2025-03-27",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "RayG FC",
            away: "Frinsky17",
            date: "2025-03-27",
            time: "20:00",
            venue: "Corithians"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Ghost Winner",
            away: "Wana FC",
            date: "2025-03-27",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Omara FC",
            away: "Anko-Fit8",
            date: "2025-03-27",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Clarks FC",
            away: "FC Yagi",
            date: "2025-03-27",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Chol CJ",
            away: "Aka The Kraven",
            date: "2025-03-27",
            time: "20:00",
            venue: "CJ Arena"
        },

        // Day 2
        {
            matchday: 2,
            leg: "First",
            home: "Jey Collectionz",
            away: "Thorvisual FC",
            date: "2025-03-28",
            time: "20:00",
            venue: "Collectionz Arena"
        },
        {
            matchday: 2,
            leg: "First",
            home: "KingKai256ug FC",
            away: "Imoizy.T FC",
            date: "2025-03-28",
            time: "20:00",
            venue: "Emirates Stadium"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Frinsky17",
            away: "Urban Decay FC",
            date: "2025-03-28",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Wana FC",
            away: "Offer_Art FC",
            date: "2025-03-28",
            time: "20:00",
            venue: "Wana Stadium"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Anko-Fit8",
            away: "RayG FC",
            date: "2025-03-28",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 2,
            leg: "First",
            home: "FC Yagi",
            away: "Ghost Winner",
            date: "2025-03-28",
            time: "20:00",
            venue: "Yagi"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Aka The Kraven",
            away: "Omara FC",
            date: "2025-03-28",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Chol CJ",
            away: "Clarks FC",
            date: "2025-03-28",
            time: "20:00",
            venue: "CJ Arena"
        },

        // Day 3
        {
            matchday: 3,
            leg: "First",
            home: "Thorvisual FC",
            away: "KingKai256ug FC",
            date: "2025-03-29",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Jey Collectionz",
            away: "Frinsky17",
            date: "2025-03-29",
            time: "20:00",
            venue: "Collectionz Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Imoizy.T FC",
            away: "Wana FC",
            date: "2025-03-29",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Urban Decay FC",
            away: "Anko-Fit8",
            date: "2025-03-29",
            time: "20:00",
            venue: "Urban"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Offer_Art FC",
            away: "FC Yagi",
            date: "2025-03-29",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "RayG FC",
            away: "Aka The Kraven",
            date: "2025-03-29",
            time: "20:00",
            venue: "Corithians"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Ghost Winner",
            away: "Chol CJ",
            date: "2025-03-29",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Omara FC",
            away: "Clarks FC",
            date: "2025-03-29",
            time: "20:00",
            venue: "Old Trafford"
        },

            // Day 4
        {
            matchday: 4,
            leg: "First",
            home: "Frinsky17",
            away: "Thorvisual FC",
            date: "2025-03-30",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Wana FC",
            away: "KingKai256ug FC",
            date: "2025-03-30",
            time: "20:00",
            venue: "Wana Stadium"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Anko-Fit8",
            away: "Jey Collectionz",
            date: "2025-03-30",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "FC Yagi",
            away: "Imoizy.T FC",
            date: "2025-03-30",
            time: "20:00",
            venue: "Yagi"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Aka The Kraven",
            away: "Urban Decay FC",
            date: "2025-03-30",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Chol CJ",
            away: "Offer_Art FC",
            date: "2025-03-30",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Clarks FC",
            away: "RayG FC",
            date: "2025-03-30",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Omara FC",
            away: "Ghost Winner",
            date: "2025-03-30",
            time: "20:00",
            venue: "Old Trafford"
        },

            // Day 5
        {
            matchday: 5,
            leg: "First",
            home: "Thorvisual FC",
            away: "Wana FC",
            date: "2025-03-31",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Frinsky17",
            away: "Anko-Fit8",
            date: "2025-03-31",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 5,
            leg: "First",
            home: "KingKai256ug FC",
            away: "FC Yagi",
            date: "2025-03-31",
            time: "20:00",
            venue: "Emirates Stadium"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Jey Collectionz",
            away: "Aka The Kraven",
            date: "2025-03-31",
            time: "20:00",
            venue: "Collectionz Arena"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Imoizy.T FC",
            away: "Chol CJ",
            date: "2025-03-31",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Urban Decay FC",
            away: "Clarks FC",
            date: "2025-03-31",
            time: "20:00",
            venue: "Urban"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Offer_Art FC",
            away: "Omara FC",
            date: "2025-03-31",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 5,
            leg: "First",
            home: "RayG FC",
            away: "Ghost Winner",
            date: "2025-03-31",
            time: "20:00",
            venue: "Corithians"
        },

        // Day 6
        {
            matchday: 6,
            leg: "First",
            home: "Anko-Fit8",
            away: "Thorvisual FC",
            date: "2025-04-01",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "FC Yagi",
            away: "Wana FC",
            date: "2025-04-01",
            time: "20:00",
            venue: "Yagi"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Aka The Kraven",
            away: "Frinsky17",
            date: "2025-04-01",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Chol CJ",
            away: "KingKai256ug FC",
            date: "2025-04-01",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Clarks FC",
            away: "Jey Collectionz",
            date: "2025-04-01",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Omara FC",
            away: "Imoizy.T FC",
            date: "2025-04-01",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Ghost Winner",
            away: "Urban Decay FC",
            date: "2025-04-01",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "RayG FC",
            away: "Offer_Art FC",
            date: "2025-04-01",
            time: "20:00",
            venue: "Corithians"
        },

        // Day 7
        {
            matchday: 7,
            leg: "First",
            home: "Thorvisual FC",
            away: "FC Yagi",
            date: "2025-04-02",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Anko-Fit8",
            away: "Aka The Kraven",
            date: "2025-04-02",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Wana FC",
            away: "Chol CJ",
            date: "2025-04-02",
            time: "20:00",
            venue: "Wana Stadium"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Frinsky17",
            away: "Clarks FC",
            date: "2025-04-02",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 7,
            leg: "First",
            home: "KingKai256ug FC",
            away: "Omara FC",
            date: "2025-04-02",
            time: "20:00",
            venue: "Emirates Stadium"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Jey Collectionz",
            away: "Ghost Winner",
            date: "2025-04-02",
            time: "20:00",
            venue: "Collectionz Arena"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Imoizy.T FC",
            away: "RayG FC",
            date: "2025-04-02",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Urban Decay FC",
            away: "Offer_Art FC",
            date: "2025-04-02",
            time: "20:00",
            venue: "Urban"
        },

        // Day 8
        {
            matchday: 8,
            leg: "First",
            home: "Aka The Kraven",
            away: "Thorvisual FC",
            date: "2025-04-03",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Chol CJ",
            away: "FC Yagi",
            date: "2025-04-03",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Clarks FC",
            away: "Anko-Fit8",
            date: "2025-04-03",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Omara FC",
            away: "Wana FC",
            date: "2025-04-03",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Ghost Winner",
            away: "Frinsky17",
            date: "2025-04-03",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "RayG FC",
            away: "KingKai256ug FC",
            date: "2025-04-03",
            time: "20:00",
            venue: "Corithians"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Offer_Art FC",
            away: "Jey Collectionz",
            date: "2025-04-03",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Urban Decay FC",
            away: "Imoizy.T FC",
            date: "2025-04-03",
            time: "20:00",
            venue: "Urban"
        },

        // Day 9
        {
            matchday: 9,
            leg: "First",
            home: "Thorvisual FC",
            away: "Chol CJ",
            date: "2025-04-04",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Aka The Kraven",
            away: "Clarks FC",
            date: "2025-04-04",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 9,
            leg: "First",
            home: "FC Yagi",
            away: "Omara FC",
            date: "2025-04-04",
            time: "20:00",
            venue: "Yagi"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Anko-Fit8",
            away: "Ghost Winner",
            date: "2025-04-04",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Wana FC",
            away: "RayG FC",
            date: "2025-04-04",
            time: "20:00",
            venue: "Wana Stadium"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Frinsky17",
            away: "Offer_Art FC",
            date: "2025-04-04",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 9,
            leg: "First",
            home: "KingKai256ug FC",
            away: "Urban Decay FC",
            date: "2025-04-04",
            time: "20:00",
            venue: "Emirates Stadium"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Jey Collectionz",
            away: "Imoizy.T FC",
            date: "2025-04-04",
            time: "20:00",
            venue: "Collectionz Arena"
        },

        // Day 10
        {
            matchday: 10,
            leg: "First",
            home: "Clarks FC",
            away: "Thorvisual FC",
            date: "2025-04-05",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Omara FC",
            away: "Chol CJ",
            date: "2025-04-05",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Ghost Winner",
            away: "Aka The Kraven",
            date: "2025-04-05",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "RayG FC",
            away: "FC Yagi",
            date: "2025-04-05",
            time: "20:00",
            venue: "Corithians"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Offer_Art FC",
            away: "Anko-Fit8",
            date: "2025-04-05",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Urban Decay FC",
            away: "Wana FC",
            date: "2025-04-05",
            time: "20:00",
            venue: "Urban"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Imoizy.T FC",
            away: "Frinsky17",
            date: "2025-04-05",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Jey Collectionz",
            away: "KingKai256ug FC",
            date: "2025-04-05",
            time: "20:00",
            venue: "Collectionz Arena"
        },

        // Day 11
        {
            matchday: 11,
            leg: "First",
            home: "Thorvisual FC",
            away: "Omara FC",
            date: "2025-04-06",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Clarks FC",
            away: "Ghost Winner",
            date: "2025-04-06",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Chol CJ",
            away: "RayG FC",
            date: "2025-04-06",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Aka The Kraven",
            away: "Offer_Art FC",
            date: "2025-04-06",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "FC Yagi",
            away: "Urban Decay FC",
            date: "2025-04-06",
            time: "20:00",
            venue: "Yagi"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Anko-Fit8",
            away: "Imoizy.T FC",
            date: "2025-04-06",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Wana FC",
            away: "Jey Collectionz",
            date: "2025-04-06",
            time: "20:00",
            venue: "Wana Stadium"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Frinsky17",
            away: "KingKai256ug FC",
            date: "2025-04-06",
            time: "20:00",
            venue: "OT"
        },

        // Day 12
        {
            matchday: 12,
            leg: "First",
            home: "Ghost Winner",
            away: "Thorvisual FC",
            date: "2025-04-07",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "RayG FC",
            away: "Omara FC",
            date: "2025-04-07",
            time: "20:00",
            venue: "Corithians"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Offer_Art FC",
            away: "Clarks FC",
            date: "2025-04-07",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Urban Decay FC",
            away: "Chol CJ",
            date: "2025-04-07",
            time: "20:00",
            venue: "Urban"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Imoizy.T FC",
            away: "Aka The Kraven",
            date: "2025-04-07",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Jey Collectionz",
            away: "FC Yagi",
            date: "2025-04-07",
            time: "20:00",
            venue: "Collectionz Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "KingKai256ug FC",
            away: "Anko-Fit8",
            date: "2025-04-07",
            time: "20:00",
            venue: "Emirates Stadium"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Frinsky17",
            away: "Wana FC",
            date: "2025-04-07",
            time: "20:00",
            venue: "OT"
        },

        // Day 13
        {
            matchday: 13,
            leg: "First",
            home: "Thorvisual FC",
            away: "RayG FC",
            date: "2025-04-08",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Ghost Winner",
            away: "Offer_Art FC",
            date: "2025-04-08",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Omara FC",
            away: "Urban Decay FC",
            date: "2025-04-08",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Clarks FC",
            away: "Imoizy.T FC",
            date: "2025-04-08",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Chol CJ",
            away: "Jey Collectionz",
            date: "2025-04-08",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Aka The Kraven",
            away: "KingKai256ug FC",
            date: "2025-04-08",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "FC Yagi",
            away: "Frinsky17",
            date: "2025-04-08",
            time: "20:00",
            venue: "Yagi"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Anko-Fit8",
            away: "Wana FC",
            date: "2025-04-08",
            time: "20:00",
            venue: "Anko Arena"
        },

        // Day 14
        {
            matchday: 14,
            leg: "First",
            home: "Offer_Art FC",
            away: "Thorvisual FC",
            date: "2025-04-09",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Urban Decay FC",
            away: "RayG FC",
            date: "2025-04-09",
            time: "20:00",
            venue: "Urban"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Imoizy.T FC",
            away: "Ghost Winner",
            date: "2025-04-09",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Jey Collectionz",
            away: "Omara FC",
            date: "2025-04-09",
            time: "20:00",
            venue: "Collectionz Arena"
        },
        {
            matchday: 14,
            leg: "First",
            home: "KingKai256ug FC",
            away: "Clarks FC",
            date: "2025-04-09",
            time: "20:00",
            venue: "Emirates Stadium"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Frinsky17",
            away: "Chol CJ",
            date: "2025-04-09",
            time: "20:00",
            venue: "OT"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Wana FC",
            away: "Aka The Kraven",
            date: "2025-04-09",
            time: "20:00",
            venue: "Wana Stadium"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Anko-Fit8",
            away: "FC Yagi",
            date: "2025-04-09",
            time: "20:00",
            venue: "Anko Arena"
        },

        // Day 15
        {
            matchday: 15,
            leg: "First",
            home: "Thorvisual FC",
            away: "Urban Decay FC",
            date: "2025-04-10",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Offer_Art FC",
            away: "Imoizy.T FC",
            date: "2025-04-10",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "RayG FC",
            away: "Jey Collectionz",
            date: "2025-04-10",
            time: "20:00",
            venue: "Corithians"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Ghost Winner",
            away: "KingKai256ug FC",
            date: "2025-04-10",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Omara FC",
            away: "Frinsky17",
            date: "2025-04-10",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Clarks FC",
            away: "Wana FC",
            date: "2025-04-10",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Chol CJ",
            away: "Anko-Fit8",
            date: "2025-04-10",
            time: "20:00",
            venue: "CJ Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Aka The Kraven",
            away: "FC Yagi",
            date: "2025-04-10",
            time: "20:00",
            venue: "Emirates Arena"
        },
        ],


        results: [
            // Matchday 1
            {   
                matchday: 1,
                home: "Thorvisual FC",
                homeScore: 4,
                away: "Imoizy.T FC",
                awayScore: 4,
                date: "2025-03-27"
            },
            {   
                matchday: 1,
                home: "Urban Decay FC",
                homeScore: 0,
                away: "Jey Collectionz",
                awayScore: 2,
                date: "2025-03-27"
            },
            {   
                matchday: 1,
                home: "Offer_Art FC",
                homeScore: 2,
                away: "KingKai256ug FC",
                awayScore: 1,
                date: "2025-03-27"
            },
            {   
                matchday: 1,
                home: "RayG FC",
                homeScore: 3,
                away: "Frinsky17",
                awayScore: 3,
                date: "2025-03-27"
            },
            {   
                matchday: 1,
                home: "Ghost Winner",
                homeScore: 5,
                away: "Wana FC",
                awayScore: 1,
                date: "2025-03-27"
            },
            {   
                matchday: 1,
                home: "Omara FC",
                homeScore: 7,
                away: "Anko-Fit8",
                awayScore: 1,
                date: "2025-03-27"
            },
            {
                matchday: 1,
                home: "Clarks FC",
                homeScore: 1,
                away: "FC Yagi",
                awayScore: 4,
                date: "2025-03-27"
            },
            {
                matchday: 1,
                home: "Chol CJ",
                homeScore: 0,
                away: "Aka The Kraven",
                awayScore: 3,
                date: "2025-03-27"
            },

            // Matchday 2
            {
                matchday: 2,
                home: "Jey Collectionz",
                homeScore: 0,
                away: "Thorvisual FC",
                awayScore: 8,
                date: "2025-03-28"
            },
            {
                matchday: 2,
                home: "KingKai256ug FC",
                homeScore: 1,
                away: "Imoizy.T FC",
                awayScore: 0,
                date: "2025-03-28"
            },
            {
                matchday: 2,
                home: "Frinsky17",
                homeScore: 6,
                away: "Urban Decay FC",
                awayScore: 0,
                date: "2025-03-28"
            },
            {
                matchday: 2,
                home: "Wana FC",
                homeScore: 3,
                away: "Offer_Art FC",
                awayScore: 0,
                date: "2025-03-28"
            },
            {
                matchday: 2,
                home: "Anko-Fit8",
                homeScore: 1,
                away: "RayG FC",
                awayScore: 3,
                date: "2025-03-28"
            },
            {
                matchday: 2,
                home: "FC Yagi",
                homeScore: 1,
                away: "Ghost Winner",
                awayScore: 5,
                date: "2025-03-28"
            },
            {
                matchday: 2,
                home: "Aka The Kraven",
                homeScore: 1,
                away: "Omara FC",
                awayScore: 4,
                date: "2025-03-28"
            },
            {
                matchday: 2,
                home: "Chol CJ",
                homeScore: 5,
                away: "Clarks FC",
                awayScore: 2,
                date: "2025-03-28"
            },

            // Matchday 3
            {
                matchday: 3,
                home: "Thorvisual FC",
                homeScore: 3,
                away: "KingKai256ug FC",
                awayScore: 3,
                date: "2025-03-29"
            },
            {
                matchday: 3,
                home: "Jey Collectionz",
                homeScore: 0,
                away: "Frinsky17",
                awayScore: 8,
                date: "2025-03-29"
            },
            {
                matchday: 3,
                home: "Imoizy.T FC",
                homeScore: 6,
                away: "Wana FC",
                awayScore: 0,
                date: "2025-03-29"
            },
            {
                matchday: 3,
                home: "Urban Decay FC",
                homeScore: 1,
                away: "Anko-Fit8",
                awayScore: 3,
                date: "2025-03-29"
            },
            {
                matchday: 3,
                home: "Offer_Art FC",
                homeScore: 0,
                away: "FC Yagi",
                awayScore: 2,
                date: "2025-03-29"
            },
            {
                matchday: 3,
                home: "RayG FC",
                homeScore: 2,
                away: "Aka The Kraven",
                awayScore: 4,
                date: "2025-03-29"
            },
            {
                matchday: 3,
                home: "Ghost Winner",
                homeScore: 3,
                away: "Chol CJ",
                awayScore: 0,
                date: "2025-03-29"
            },
            {
                matchday: 3,
                home: "Omara FC",
                homeScore: 5,
                away: "Clarks FC",
                awayScore: 1,
                date: "2025-03-29"
            },

            // Matchday 4
            {
                matchday: 4,
                home: "Frinsky17",
                homeScore: 0,
                away: "Thorvisual FC",
                awayScore: 6,
                date: "2025-03-30"
            },
            {
                matchday: 4,
                home: "Wana FC",
                homeScore: 0,
                away: "KingKai256ug FC",
                awayScore: 2,
                date: "2025-03-30"
            },
            {
                matchday: 4,
                home: "Anko-Fit8",
                homeScore: 3,
                away: "Jey Collectionz",
                awayScore: 0,
                date: "2025-03-30"
            },
            {
                matchday: 4,
                home: "FC Yagi",
                homeScore: 3,
                away: "Imoizy.T FC",
                awayScore: 2,
                date: "2025-03-30"
            },
            {
                matchday: 4,
                home: "Aka The Kraven",
                homeScore: 5,
                away: "Urban Decay FC",
                awayScore: 0,
                date: "2025-03-30"
            },
            {
                matchday: 4,
                home: "Chol CJ",
                homeScore: 1,
                away: "Offer_Art FC",
                awayScore: 1,
                date: "2025-03-30"
            },
            {
                matchday: 4,
                home: "Clarks FC",
                homeScore: 1,
                away: "RayG FC",
                awayScore: 9,
                date: "2025-03-30"
            },
            {
                matchday: 4,
                home: "Omara FC",
                homeScore: 1,
                away: "Ghost Winner",
                awayScore: 4,
                date: "2025-03-30"
            },

            // Matchday 5
            {
                matchday: 5,
                home: "Thorvisual FC",
                homeScore: 1,
                away: "Wana FC",
                awayScore: 0,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "Frinsky17",
                homeScore: 5,
                away: "Anko-Fit8",
                awayScore: 0,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "KingKai256ug FC",
                homeScore: 2,
                away: "FC Yagi",
                awayScore: 2,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "Jey Collectionz",
                homeScore: 0,
                away: "Aka The Kraven",
                awayScore: 6,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "Imoizy.T FC",
                homeScore: 1,
                away: "Chol CJ",
                awayScore: 5,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "Urban Decay FC",
                homeScore: 0,
                away: "Clarks FC",
                awayScore: 5,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "Offer_Art FC",
                homeScore: 0,
                away: "Omara FC",
                awayScore: 2,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "RayG FC",
                homeScore: 1,
                away: "Ghost Winner",
                awayScore: 2,
                date: "2025-03-31"
            },

            // Matchday 6
            {
                matchday: 6,
                home: "Anko-Fit8",
                homeScore: 4,
                away: "Thorvisual FC",
                awayScore: 5,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "FC Yagi",
                homeScore: 0,
                away: "Wana FC",
                awayScore: 3,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Aka The Kraven",
                homeScore: 3,
                away: "Frinsky17",
                awayScore: 0,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Chol CJ",
                homeScore: 2,
                away: "KingKai256ug FC",
                awayScore: 1,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Clarks FC",
                homeScore: 3,
                away: "Jey Collectionz",
                awayScore: 0,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Omara FC",
                homeScore: 2,
                away: "Imoizy.T FC",
                awayScore: 6,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Ghost Winner",
                homeScore: 7,
                away: "Urban Decay FC",
                awayScore: 0,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "RayG FC",
                homeScore: 3,
                away: "Offer_Art FC",
                awayScore: 2,
                date: "2025-04-01"
            },

            // Matchday 7
            {
                matchday: 7,
                home: "Thorvisual FC",
                homeScore: 4,
                away: "FC Yagi",
                awayScore: 2,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Anko-Fit8",
                homeScore: 1,
                away: "Aka The Kraven",
                awayScore: 1,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Wana FC",
                homeScore: 3,
                away: "Chol CJ",
                awayScore: 0,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Frinsky17",
                homeScore: 2,
                away: "Clarks FC",
                awayScore: 3,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "KingKai256ug FC",
                homeScore: 0,
                away: "Omara FC",
                awayScore: 4,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Jey Collectionz",
                homeScore: 0,
                away: "Ghost Winner",
                awayScore: 3,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Imoizy.T FC",
                homeScore: 3,
                away: "RayG FC",
                awayScore: 3,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Urban Decay FC",
                homeScore: 2,
                away: "Offer_Art FC",
                awayScore: 4,
                date: "2025-04-02"
            },

            // Matchday 8
            {
                matchday: 8,
                home: "Aka The Kraven",
                homeScore: 2,
                away: "Thorvisual FC",
                awayScore: 1,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Chol CJ",
                homeScore: 2,
                away: "FC Yagi",
                awayScore: 6,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Clarks FC",
                homeScore: 0,
                away: "Anko-Fit8",
                awayScore: 4,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Omara FC",
                homeScore: 2,
                away: "Wana FC",
                awayScore: 0,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Ghost Winner",
                homeScore: 6,
                away: "Frinsky17",
                awayScore: 2,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "RayG FC",
                homeScore: 6,
                away: "KingKai256ug FC",
                awayScore: 1,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Offer_Art FC",
                homeScore: 3,
                away: "Jey Collectionz",
                awayScore: 0,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Urban Decay FC",
                homeScore: 0,
                away: "Imoizy.T FC",
                awayScore: 4,
                date: "2025-04-03"
            },

            // Matchday 9
            {
                matchday: 9,
                home: "Thorvisual FC",
                homeScore: 3,
                away: "Chol CJ",
                awayScore: 1,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Aka The Kraven",
                homeScore: 3,
                away: "Clarks FC",
                awayScore: 2,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "FC Yagi",
                homeScore: 5,
                away: "Omara FC",
                awayScore: 1,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Anko-Fit8",
                homeScore: 0,
                away: "Ghost Winner",
                awayScore: 5,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Wana FC",
                homeScore: 4,
                away: "RayG FC",
                awayScore: 2,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Frinsky17",
                homeScore: 1,
                away: "Offer_Art FC",
                awayScore: 2,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "KingKai256ug FC",
                homeScore: 7,
                away: "Urban Decay FC",
                awayScore: 2,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Jey Collectionz",
                homeScore: 0,
                away: "Imoizy.T FC",
                awayScore: 8,
                date: "2025-04-04"
            },
            // Matchday 10
            {
                matchday: 10,
                home: "Clarks FC",
                homeScore: 2,
                away: "Thorvisual FC",
                awayScore: 6,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Omara FC",
                homeScore: 4,
                away: "Chol CJ",
                awayScore: 3,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Ghost Winner",
                homeScore: 1,
                away: "Aka The Kraven",
                awayScore: 2,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "RayG FC",
                homeScore: 1,
                away: "FC Yagi",
                awayScore: 2,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Offer_Art FC",
                homeScore: 5,
                away: "Anko-Fit8",
                awayScore: 3,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Urban Decay FC",
                homeScore: 2,
                away: "Wana FC",
                awayScore: 5,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Imoizy.T FC",
                homeScore: 4,
                away: "Frinsky17",
                awayScore: 1,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Jey Collectionz",
                homeScore: 3,
                away: "KingKai256ug FC",
                awayScore: 2,
                date: "2025-04-05"
            },

            // Matchday 11
            {
                matchday: 11,
                home: "Thorvisual FC",
                homeScore: 2,
                away: "Omara FC",
                awayScore: 1,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Clarks FC",
                homeScore: 0,
                away: "Ghost Winner",
                awayScore: 9,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Chol CJ",
                homeScore: 0,
                away: "RayG FC",
                awayScore: 3,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Aka The Kraven",
                homeScore: 4,
                away: "Offer_Art FC",
                awayScore: 0,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "FC Yagi",
                homeScore: 5,
                away: "Urban Decay FC",
                awayScore: 1,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Anko-Fit8",
                homeScore: 2,
                away: "Imoizy.T FC",
                awayScore: 3,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Wana FC",
                homeScore: 1,
                away: "Jey Collectionz",
                awayScore: 2,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Frinsky17",
                homeScore: 2,
                away: "KingKai256ug FC",
                awayScore: 4,
                date: "2025-04-06"
            },

            // Matchday 12
            {
                matchday: 12,
                home: "Ghost Winner",
                homeScore: 2,
                away: "Thorvisual FC",
                awayScore: 0,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "RayG FC",
                homeScore: 4,
                away: "Omara FC",
                awayScore: 4,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "Offer_Art FC",
                homeScore: 2,
                away: "Clarks FC",
                awayScore: 3,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "Urban Decay FC",
                homeScore: 0,
                away: "Chol CJ",
                awayScore: 1,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "Imoizy.T FC",
                homeScore: 2,
                away: "Aka The Kraven",
                awayScore: 2,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "Jey Collectionz",
                homeScore: 3,
                away: "FC Yagi",
                awayScore: 6,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "KingKai256ug FC",
                homeScore: 1,
                away: "Anko-Fit8",
                awayScore: 2,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "Frinsky17",
                homeScore: 3,
                away: "Wana FC",
                awayScore: 3,
                date: "2025-04-07"
            },

            // Matchday 13
            {
                matchday: 13,
                home: "Thorvisual FC",
                homeScore: 1,
                away: "RayG FC",
                awayScore: 1,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Ghost Winner",
                homeScore: 4,
                away: "Offer_Art FC",
                awayScore: 0,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Omara FC",
                homeScore: 9,
                away: "Urban Decay FC",
                awayScore: 1,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Clarks FC",
                homeScore: 3,
                away: "Imoizy.T FC",
                awayScore: 1,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Chol CJ",
                homeScore: 3,
                away: "Jey Collectionz",
                awayScore: 0,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Aka The Kraven",
                homeScore: 1,
                away: "KingKai256ug FC",
                awayScore: 1,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "FC Yagi",
                homeScore: 1,
                away: "Frinsky17",
                awayScore: 1,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Anko-Fit8",
                homeScore: 0,
                away: "Wana FC",
                awayScore: 1,
                date: "2025-04-08"
            },

            // Matchday 14
            {
                matchday: 14,
                home: "Offer_Art FC",
                homeScore: 0,
                away: "Thorvisual FC",
                awayScore: 4,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Urban Decay FC",
                homeScore: null,
                away: "RayG FC",
                awayScore: null,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Imoizy.T FC",
                homeScore: 3,
                away: "Ghost Winner",
                awayScore: 3,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Jey Collectionz",
                homeScore: 0,
                away: "Omara FC",
                awayScore: 1,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Frinsky17",
                homeScore: 4,
                away: "Chol CJ",
                awayScore: 0,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Wana FC",
                homeScore: 0,
                away: "Aka The Kraven",
                awayScore: 5,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Anko-Fit8",
                homeScore: 0,
                away: "FC Yagi",
                awayScore: 2,
                date: "2025-04-09"
            },

            // Matchday 15
            {
                matchday: 15,
                home: "Thorvisual FC",
                homeScore: 3,
                away: "Urban Decay FC",
                awayScore: 1,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Offer_Art FC",
                homeScore: 1,
                away: "Imoizy.T FC",
                awayScore: 3,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "RayG FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Ghost Winner",
                homeScore: 6,
                away: "KingKai256ug FC",
                awayScore: 2,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Omara FC",
                homeScore: 3,
                away: "Frinsky17",
                awayScore: 4,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Clarks FC",
                homeScore: 1,
                away: "Wana FC",
                awayScore: 2,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Chol CJ",
                homeScore: 5,
                away: "Anko-Fit8",
                awayScore: 2,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Aka The Kraven",
                homeScore: 2,
                away: "FC Yagi",
                awayScore: 1,
                date: "2025-04-10"
            },

            // Matchday 16
            {
                matchday: 16,
                home: "Imoizy.T FC",
                homeScore: 2,
                away: "Thorvisual FC",
                awayScore: 2,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "KingKai256ug FC",
                homeScore: 2,
                away: "Offer_Art FC",
                awayScore: 0,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Frinsky17",
                homeScore: 3,
                away: "RayG FC",
                awayScore: 2,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Wana FC",
                homeScore: 0,
                away: "Ghost Winner",
                awayScore: 6,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Anko-Fit8",
                homeScore: 0,
                away: "Omara FC",
                awayScore: 3,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "FC Yagi",
                homeScore: 2,
                away: "Clarks FC",
                awayScore: 1,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Aka The Kraven",
                homeScore: 2,
                away: "Chol CJ",
                awayScore: 2,
                date: "2025-04-11"
            },

            // Matchday 17
            {
                matchday: 17,
                home: "Thorvisual FC",
                homeScore: 4,
                away: "Jey Collectionz",
                awayScore: 1,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Imoizy.T FC",
                homeScore: 4,
                away: "KingKai256ug FC",
                awayScore: 3,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Urban Decay FC",
                homeScore: 1,
                away: "Frinsky17",
                awayScore: 5,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Offer_Art FC",
                homeScore: 2,
                away: "Wana FC",
                awayScore: 2,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "RayG FC",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Ghost Winner",
                homeScore: 6,
                away: "FC Yagi",
                awayScore: 0,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Omara FC",
                homeScore: 0,
                away: "Aka The Kraven",
                awayScore: 0,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Clarks FC",
                homeScore: 2,
                away: "Chol CJ",
                awayScore: 1,
                date: "2025-04-12"
            },

            // Matchday 18
            {
                matchday: 18,
                home: "KingKai256ug FC",
                homeScore: 1,
                away: "Thorvisual FC",
                awayScore: 2,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Frinsky17",
                homeScore: 3,
                away: "Jey Collectionz",
                awayScore: 1,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Wana FC",
                homeScore: 2,
                away: "Imoizy.T FC",
                awayScore: 5,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Anko-Fit8",
                homeScore: 4,
                away: "Urban Decay FC",
                awayScore: 0,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "FC Yagi",
                homeScore: 0,
                away: "Offer_Art FC",
                awayScore: 6,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Aka The Kraven",
                homeScore: null,
                away: "RayG FC",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Chol CJ",
                homeScore: 1,
                away: "Ghost Winner",
                awayScore: 4,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Clarks FC",
                homeScore: 4,
                away: "Omara FC",
                awayScore: 1,
                date: "2025-04-13"
            },

            // Matchday 19
            {
                matchday: 19,
                home: "Thorvisual FC",
                homeScore: 0,
                away: "Frinsky17",
                awayScore: 2,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "KingKai256ug FC",
                homeScore: 3,
                away: "Wana FC",
                awayScore: 2,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Jey Collectionz",
                homeScore: 2,
                away: "Anko-Fit8",
                awayScore: 4,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Imoizy.T FC",
                homeScore: 1,
                away: "FC Yagi",
                awayScore: 2,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Urban Decay FC",
                homeScore: 2,
                away: "Aka The Kraven",
                awayScore: 7,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Offer_Art FC",
                homeScore: 3,
                away: "Chol CJ",
                awayScore: 2,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "RayG FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Ghost Winner",
                homeScore: 5,
                away: "Omara FC",
                awayScore: 0,
                date: "2025-04-14"
            },

            // Matchday 20
            {
                matchday: 20,
                home: "Wana FC",
                homeScore: 2,
                away: "Thorvisual FC",
                awayScore: 1,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Anko-Fit8",
                homeScore: 1,
                away: "Frinsky17",
                awayScore: 1,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "FC Yagi",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Aka The Kraven",
                homeScore: 5,
                away: "Jey Collectionz",
                awayScore: 2,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Chol CJ",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Clarks FC",
                homeScore: 3,
                away: "Urban Decay FC",
                awayScore: 3,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Omara FC",
                homeScore: 5,
                away: "Offer_Art FC",
                awayScore: 4,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Ghost Winner",
                homeScore: null,
                away: "RayG FC",
                awayScore: null,
                date: "2025-04-15"
            },

            // Matchday 21
            {
                matchday: 21,
                home: "Thorvisual FC",
                homeScore: 4,
                away: "Anko-Fit8",
                awayScore: 0,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Wana FC",
                homeScore: null,
                away: "FC Yagi",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Frinsky17",
                homeScore: null,
                away: "Aka The Kraven",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "KingKai256ug FC",
                homeScore: 2,
                away: "Chol CJ",
                awayScore: 0,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Imoizy.T FC",
                homeScore: 4,
                away: "Omara FC",
                awayScore: 5,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Offer_Art FC",
                homeScore: null,
                away: "RayG FC",
                awayScore: null,
                date: "2025-04-16"
            },

            // Matchday 22
            {
                matchday: 22,
                home: "FC Yagi",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Aka The Kraven",
                homeScore: 0,
                away: "Anko-Fit8",
                awayScore: 1,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Chol CJ",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Clarks FC",
                homeScore: null,
                away: "Frinsky17",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Omara FC",
                homeScore: 2,
                away: "KingKai256ug FC",
                awayScore: 1,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Ghost Winner",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "RayG FC",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Offer_Art FC",
                homeScore: 4,
                away: "Urban Decay FC",
                awayScore: 4,
                date: "2025-04-17"
            },

            // Matchday 23
            {
                matchday: 23,
                home: "Thorvisual FC",
                homeScore: 2,
                away: "Aka The Kraven",
                awayScore: 0,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "FC Yagi",
                homeScore: null,
                away: "Chol CJ",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Anko-Fit8",
                homeScore: 1,
                away: "Clarks FC",
                awayScore: 6,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Wana FC",
                homeScore: 0,
                away: "Omara FC",
                awayScore: 2,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Frinsky17",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "RayG FC",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Imoizy.T FC",
                homeScore: 0,
                away: "Urban Decay FC",
                awayScore: 0,
                date: "2025-04-18"
            },

            // Matchday 24
            {
                matchday: 24,
                home: "Chol CJ",
                homeScore: 1,
                away: "Thorvisual FC",
                awayScore: 3,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Clarks FC",
                homeScore: 1,
                away: "Aka The Kraven",
                awayScore: 10,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Omara FC",
                homeScore: null,
                away: "FC Yagi",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Ghost Winner",
                homeScore: 3,
                away: "Anko-Fit8",
                awayScore: 2,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "RayG FC",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Frinsky17",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Urban Decay FC",
                homeScore: 0,
                away: "KingKai256ug FC",
                awayScore: 3,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Imoizy.T FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-19"
            },

            // Matchday 25
            {
                matchday: 25,
                home: "Thorvisual FC",
                homeScore: 4,
                away: "Clarks FC",
                awayScore: 3,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Chol CJ",
                homeScore: 3,
                away: "Omara FC",
                awayScore: 4,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Aka The Kraven",
                homeScore: 0,
                away: "Ghost Winner",
                awayScore: 0,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "FC Yagi",
                homeScore: null,
                away: "RayG FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Wana FC",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Frinsky17",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-20"
            },


            // Matchday 26
            {
                matchday: 26,
                home: "Omara FC",
                homeScore: 3,
                away: "Thorvisual FC",
                awayScore: 2,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Ghost Winner",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "RayG FC",
                homeScore: null,
                away: "Chol CJ",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Offer_Art FC",
                homeScore: 0,
                away: "Aka The Kraven",
                awayScore: 4,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Urban Decay FC",
                homeScore: null,
                away: "FC Yagi",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Imoizy.T FC",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "KingKai256ug FC",
                homeScore: 1,
                away: "Frinsky17",
                awayScore: 2,
                date: "2025-04-21"
            },

            // Matchday 27
            {
                matchday: 27,
                home: "Thorvisual FC",
                homeScore: 1,
                away: "Ghost Winner",
                awayScore: 1,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Omara FC",
                homeScore: 1,
                away: "RayG FC",
                awayScore: 3,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Clarks FC",
                homeScore: 1,
                away: "Offer_Art FC",
                awayScore: 3,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Chol CJ",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Aka The Kraven",
                homeScore: 3,
                away: "Imoizy.T FC",
                awayScore: 3,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "FC Yagi",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Anko-Fit8",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Wana FC",
                homeScore: null,
                away: "Frinsky17",
                awayScore: null,
                date: "2025-04-22"
            },

            // Matchday 28
            {
                matchday: 28,
                home: "RayG FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Offer_Art FC",
                homeScore: 0,
                away: "Ghost Winner",
                awayScore: 4,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Urban Decay FC",
                homeScore: 5,
                away: "Omara FC",
                awayScore: 2,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Imoizy.T FC",
                homeScore: 3,
                away: "Clarks FC",
                awayScore: 7,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Chol CJ",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "KingKai256ug FC",
                homeScore: 1,
                away: "Aka The Kraven",
                awayScore: 3,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Frinsky17",
                homeScore: null,
                away: "FC Yagi",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Wana FC",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-23"
            },

            // Matchday 29
            {
                matchday: 29,
                home: "Thorvisual FC",
                homeScore: 5,
                away: "Offer_Art FC",
                awayScore: 2,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "RayG FC",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Ghost Winner",
                homeScore: 3,
                away: "Imoizy.T FC",
                awayScore: 0,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Omara FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Clarks FC",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Chol CJ",
                homeScore: null,
                away: "Frinsky17",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Aka The Kraven",
                homeScore: 4,
                away: "Wana FC",
                awayScore: 2,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "FC Yagi",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-24"
            },

            // Matchday 30
            {
                matchday: 30,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Imoizy.T FC",
                homeScore: 4,
                away: "Offer_Art FC",
                awayScore: 1,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Jey Collectionz",
                homeScore: null,
                away: "RayG FC",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "KingKai256ug FC",
                homeScore: 3,
                away: "Ghost Winner",
                awayScore: 7,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Frinsky17",
                homeScore: 1,
                away: "Omara FC",
                awayScore: 4,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Wana FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Chol CJ",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "FC Yagi",
                homeScore: 2,
                away: "Aka The Kraven",
                awayScore: 1,
                date: "2025-04-25"
            }
        ],
        
        
        
        table: [
            {
                position: 1,
                team: "Thorvisual FC",
                played: 27,
                won: 17,
                drawn: 5,
                lost: 5,
                gf: 81,
                ga: 39,
                gd: +42,
                points: 56,
            },
            {
                position: 2,
                team: "RayG FC",
                played: 15,
                won: 7,
                drawn: 4,
                lost: 4,
                gf: 48,
                ga: 30,
                gd: +18,
                points: 25,
            },
            {
                position: 3,
                team: "Urban Decay FC",
                played: 23,
                won: 1,
                drawn: 3,
                lost: 19,
                gf: 26,
                ga: 105,
                gd: -79,
                points: 6,
            },
            {
                position: 4,
                team: "Offer_Art FC",
                played: 26,
                won: 8,
                drawn: 3,
                lost: 15,
                gf: 47,
                ga: 69,
                gd: -22,
                points: 27,
            },
            {
                position: 5,
                team: "Imoizy.T FC",
                played: 25,
                won: 10,
                drawn: 8,
                lost: 7,
                gf: 76,
                ga: 58,
                gd: 28,
                points: 37,
            },
            {
                position: 6,
                team: "Jey Collectionz",
                played: 18,
                won: 3,
                drawn: 0,
                lost: 15,
                gf: 16,
                ga: 71,
                gd: -55,
                points: 9,
            },
            {
                position: 7,
                team: "KingKai256ug FC",
                played: 24,
                won: 8,
                drawn: 3,
                lost: 13,
                gf: 48,
                ga: 57,
                gd: -9,
                points: 27,
            },
            {
                position: 8,
                team: "Ghost Winner",
                played: 25,
                won: 21,
                drawn: 3,
                lost: 1,
                gf: 108,
                ga: 20,
                gd: +88,
                points: 66,
            },
            {
                position: 9,
                team: "Omara FC",
                played: 28,
                won: 17,
                drawn: 2,
                lost: 9,
                gf: 82,
                ga: 64,
                gd: +18,
                points: 53,
            },
            {
                position: 10,
                team: "Chol CJ",
                played: 22,
                won: 6,
                drawn: 2,
                lost: 14,
                gf: 38,
                ga: 56,
                gd: -18,
                points: 20,
            },
            {
                position: 11,
                team: "Aka The Kraven",
                played: 28,
                won: 17,
                drawn: 7,
                lost: 4,
                gf: 83,
                ga: 33,
                gd: 50,
                points: 58,
            },
            {
                position: 12,
                team: "Anko-Fit8",
                played: 23,
                won: 7,
                drawn: 2,
                lost: 14,
                gf: 39,
                ga: 63,
                gd: -24,
                points: 23,
            },
            {
                position: 13,
                team: "FC Yagi",
                played: 20,
                won: 12,
                drawn: 2,
                lost: 6,
                gf: 46,
                ga: 43,
                gd: +3,
                points: 38,
            },
            {
                position: 14,
                team: "Clarks FC",
                played: 23,
                won: 9,
                drawn: 1,
                lost: 13,
                gf: 49,
                ga: 80,
                gd: -31,
                points: 28,
            },
            {
                position: 15,
                team: "Wana FC",
                played: 22,
                won: 7,
                drawn: 2,
                lost: 13,
                gf: 34,
                ga: 56,
                gd: -22,
                points: 23,
            },
            {
                position: 16,
                team: "Frinsky17",
                played: 22,
                won: 10,
                drawn: 4,
                lost: 8,
                gf: 59,
                ga: 48,
                gd: +11,
                points: 34,
            }
        ],


        clubs: [
            {
                name: "RayG FC",
                logo: "images/club-logos/25-pro-max.svg",
                manager: "Ray",
                stadium: "Corithians Arena",
                founded: "2023",
                location: "Gulu, Uganda"
            },
            {
                name: "Thorvisual FC",
                logo: "images/club-logos/thorvisual.svg",
                manager: "Thor Henry",
                stadium: "Thorvisual Arena",
                founded: "2023",
                location: "Wakiso, Uganda"
            },
            {
                name: "Jey Collectionz",
                logo: "images/club-logos/jey-collectionz.svg",
                manager: "Jey Dann Josh",
                stadium: "Collectionz Arena",
                founded: "2024",
                location: "Kampala, Uganda"
            },
            {
                name: "Omara FC",
                logo: "images/club-logos/omara.svg",
                manager: "OMaRa",
                stadium: "Old Trafford",
                founded: "2024",
                location: "Gulu, Uganda"
            },
            {
                name: "Chol CJ",
                logo: "images/club-logos/chutosmiles.svg",
                manager: "Chol",
                stadium: "CJ Arena",
                founded: "2024",
                location: "Gulu, Uganda"
            },
            {
                name: "KingKai256ug FC",
                logo: "images/club-logos/kingkai.svg",
                manager: "Newton",
                stadium: "Emirates Stadium",
                founded: "2025",
                location: "Kamapala, Uganda"
            },
            {
                name: "Urban Decay FC",
                logo: "images/club-logos/frinsky17.svg",
                manager: "Tihgra",
                stadium: "Urban",
                founded: "2024",
                location: "Mbarara, Uganda"
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
                name: "Aka The Kraven",
                logo: "images/club-logos/priest-emeritus.svg",
                manager: "Kraven",
                stadium: "Emirates Arena",
                founded: "2023",
                location: "Gulu, Uganda"
            },
            {
                name: "Anko-Fit8",
                logo: "images/club-logos/skids.svg",
                manager: "Anko Fit",
                stadium: "Anko Arena",
                founded: "2023",
                location: "Kampala, Uganda"
            },
            {
                name: "FC Yagi",
                logo: "images/club-logos/salim-swarm.svg",
                manager: "Yagi",
                stadium: "Yagi Arena",
                founded: "2024",
                location: "Kampala, Uganda"
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
                name: "Ghost Winner",
                logo: "images/club-logos/cardio.svg",
                manager: "Ghost",
                stadium: "Ghost Arena",
                founded: "2022",
                location: "Kampala, Uganda"
            },
            {
                name: "Imoizy.T FC",
                logo: "images/club-logos/imoizy.svg",
                manager: "Imoizy.T",
                stadium: "IT Arena",
                founded: "2022",
                location: "Arua, Uganda"
            },
            {
                name: "Wana FC",
                logo: "images/club-logos/higeny.svg",
                manager: "Wana Joel",
                stadium: "Wana Stadium",
                founded: "2023",
                location: "Gulu, Uganda"
            },
            {
                name: "Frinsky17",
                logo: "images/club-logos/hasahya.svg",
                manager: "Frank Tyga",
                stadium: "OT",
                founded: "2023",
                location: "Jinja, Uganda"
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

                        <div class="news-ticker-container">
                            <div class="ticker-header">
                                <i class="fas fa-newspaper"></i>
                                <span>Latest News</span>
                            </div>
                            <div class="news-ticker">
                                <div class="ticker-content">
                                    ${[...data.news, ...data.news, ...data.news]  // Repeat news items three times
                                        .map(news => `
                                            <div class="ticker-item">
                                                <span class="ticker-date">${news.date}</span>
                                                <span class="ticker-title">${news.title}</span>
                                                <span class="ticker-separator">-</span>
                                                <span class="ticker-content-text">${news.content}</span>
                                            </div>
                                        `).join('')}
                                </div>
                            </div>
                        </div>
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
                        // Sort teams by points, then goal difference, then goals for
                        const sortedTeams = data.table.sort((a, b) => {
                            if (b.points !== a.points) return b.points - a.points;
                            if (b.gd !== a.gd) return b.gd - a.gd;
                            return b.gf - a.gf;
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
                                            <div class="legend-color promotion"></div>
                                            Automatic Promotion (Positions 1-${promotionSpots})
                                        </div>
                                        <div class="legend-item">
                                            <div class="legend-color playoff"></div>
                                            Playoffs (Positions ${promotionSpots + 1}-${promotionSpots + playoffSpots})
                                        </div>
                                        <div class="legend-item">
                                            <div class="legend-color relegation"></div>
                                            Relegation (Positions ${totalTeams - relegationSpots + 1}-${totalTeams})
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
                            <p><strong>Manager</strong> <span>${club.manager} <img src="icons/verified-badge.svg" alt="Verified" class="verified-badge" width="18" height="18"></span></p>
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
                                        <p><strong>Manager</strong> <span>${club.manager} <img src="icons/verified-badge.svg" alt="Verified" class="verified-badge" width="18" height="18"></span></p>
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
                                        <span class="cup-status status-upcoming">Ongoing</span>
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
                                        <span class="cup-status status-upcoming">27 April 2025</span>
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
                            date: '2025-04-04',
                            matches: [
                                { home: "Aka The Kraven", away: "Jey Collectionz", time: "20:00", venue: "Emirates Arena", homeScore: 4, awayScore: 0, homePenalty: null, awayPenalty: null },
                                { home: "Imoizy.T FC", away: "Frinsky17", time: "20:00", venue: "IT Arena", homeScore: 4, awayScore: 3, homePenalty: null, awayPenalty: null },
                                { home: "Ghost Winner", away: "KingKai256ug FC", time: "20:00", venue: "Ghost Arena", homeScore: 4, awayScore: 0, homePenalty: null, awayPenalty: null },
                                { home: "FC Yagi", away: "Thorvisual FC", time: "20:00", venue: "Yagi", homeScore: 2, awayScore: 5, homePenalty: null, awayPenalty: null },
                                { home: "Offer_Art FC", away: "Anko-Fit8", time: "20:00", venue: "OfferArt Arena", homeScore: 1, awayScore: 4, homePenalty: null, awayPenalty: null },
                                { home: "Clarks FC", away: "Urban Decay FC", time: "20:00", venue: "Colds Arena", homeScore: 2, awayScore: 1, homePenalty: null, awayPenalty: null },
                                { home: "Chol CJ", away: "Wana FC", time: "20:00", venue: "CJ Arena", homeScore: 2, awayScore: 2, homePenalty: 2, awayPenalty: 4 },
                                { home: "RayG FC", away: "Omara FC", time: "20:00", venue: "Corithians", homeScore: 5, awayScore: 1, homePenalty: null, awayPenalty: null }
                            ]
                        },
                        {
                            round: 'Quarter Finals',
                            date: '2025-04-11',
                            matches: [
                                { home: "Imoizy.T FC", away: "Ghost Winner", time: "20:00", venue: "IT Arena", homeScore: 0, awayScore: 5, homePenalty: null, awayPenalty: null },
                                { home: "Aka The Kraven", away: "RayG FC", time: "20:00", venue: "Ghost Arena", homeScore: 4, awayScore: 3, homePenalty: null, awayPenalty: null },
                                { home: "Thorvisual FC", away: "Wana FC", time: "20:00", venue: "Thorvisual Arena", homeScore: 7, awayScore: 2, homePenalty: null, awayPenalty: null },
                                { home: "Clarks FC", away: "Anko-Fit8", time: "20:00", venue: "Colds Arena", homeScore: 1, awayScore: 0, homePenalty: null, awayPenalty: null }
                            ]
                        },
                        {
                            round: 'Semi Finals',
                            date: '2025-04-18',
                            matches: [
                                { home: "Ghost Winner", away: "Aka The Kraven", time: "20:00", venue: "Ghost Arena", homeScore: 4, awayScore: 1 },
                                { home: "Thorvisual FC", away: "Clarks FC", time: "20:00", venue: "Thorvisual Arena", homeScore: null, awayScore: null }
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
                                                        ${match.homeScore !== null ? `${match.homeScore} - ${match.awayScore}` : 'vs'}
                                                        ${(match.homePenalty && match.awayPenalty && match.homePenalty !== 'undefined' && match.awayPenalty !== 'undefined') ? 
                                                            `<span class="penalty-score">(${match.homePenalty} - ${match.awayPenalty} pens)</span>` : 
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
                                ${match.homeScore !== null ? `${match.homeScore} - ${match.awayScore}` : 'vs'}
                                ${(match.homePenalty && match.awayPenalty && match.homePenalty !== 'undefined' && match.awayPenalty !== 'undefined') ? 
                                    `<span class="penalty-score">(${match.homePenalty} - ${match.awayPenalty} pens)</span>` : 
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

