document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-links a');

    const data = {
        news: [
            {
                title: "Season Kickoff Announcement",
                date: "2024-03-15",
                content: "The new EFL Uganda season starts next week with exciting matches!"
            },
            {
                title: "Transfer Window Updates",
                date: "2024-03-10",
                content: "Latest transfers and team updates for the upcoming season"
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
            home: "25 Pro Max",
            away: "Hasahya FC",
            date: "2025-03-27",
            time: "20:00",
            venue: "Pro Max Arena"
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
            away: "Salima The Swarm FC",
            date: "2025-03-27",
            time: "20:00",
            venue: "Colds Arena"
        },
        {
            matchday: 1,
            leg: "First",
            home: "Chutosmiles FC",
            away: "Priest-Emeritus",
            date: "2025-03-27",
            time: "20:00",
            venue: "Smiles Arena"
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
            home: "Hasahya FC",
            away: "Urban Decay FC",
            date: "2025-03-28",
            time: "20:00",
            venue: "Hasahya Stadium"
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
            away: "25 Pro Max",
            date: "2025-03-28",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Salima The Swarm FC",
            away: "Ghost Winner",
            date: "2025-03-28",
            time: "20:00",
            venue: "Salima Bernabeau"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Omara FC",
            date: "2025-03-28",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 2,
            leg: "First",
            home: "Chutosmiles FC",
            away: "Clarks FC",
            date: "2025-03-28",
            time: "20:00",
            venue: "Smiles Arena"
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
            away: "Hasahya FC",
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
            away: "Salima The Swarm FC",
            date: "2025-03-29",
            time: "20:00",
            venue: "OfferArt Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "25 Pro Max",
            away: "Priest-Emeritus",
            date: "2025-03-29",
            time: "20:00",
            venue: "Pro Max Arena"
        },
        {
            matchday: 3,
            leg: "First",
            home: "Ghost Winner",
            away: "Chutosmiles FC",
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
            home: "Hasahya FC",
            away: "Thorvisual FC",
            date: "2025-03-30",
            time: "20:00",
            venue: "Hasahya Stadium"
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
            home: "Salima The Swarm FC",
            away: "Imoizy.T FC",
            date: "2025-03-30",
            time: "20:00",
            venue: "Salima Bernabeau"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Urban Decay FC",
            date: "2025-03-30",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Chutosmiles FC",
            away: "Offer_Art FC",
            date: "2025-03-30",
            time: "20:00",
            venue: "Smiles Arena"
        },
        {
            matchday: 4,
            leg: "First",
            home: "Clarks FC",
            away: "25 Pro Max",
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
            home: "Hasahya FC",
            away: "Anko-Fit8",
            date: "2025-03-31",
            time: "20:00",
            venue: "Hasahya Stadium"
        },
        {
            matchday: 5,
            leg: "First",
            home: "KingKai256ug FC",
            away: "Salima The Swarm FC",
            date: "2025-03-31",
            time: "20:00",
            venue: "Emirates Stadium"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Jey Collectionz",
            away: "Priest-Emeritus",
            date: "2025-03-31",
            time: "20:00",
            venue: "Collectionz Arena"
        },
        {
            matchday: 5,
            leg: "First",
            home: "Imoizy.T FC",
            away: "Chutosmiles FC",
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
            home: "25 Pro Max",
            away: "Ghost Winner",
            date: "2025-03-31",
            time: "20:00",
            venue: "Pro Max Arena"
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
            home: "Salima The Swarm FC",
            away: "Wana FC",
            date: "2025-04-01",
            time: "20:00",
            venue: "Salima Bernabeau"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Hasahya FC",
            date: "2025-04-01",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 6,
            leg: "First",
            home: "Chutosmiles FC",
            away: "KingKai256ug FC",
            date: "2025-04-01",
            time: "20:00",
            venue: "Smiles Arena"
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
            home: "25 Pro Max",
            away: "Offer_Art FC",
            date: "2025-04-01",
            time: "20:00",
            venue: "Pro Max Arena"
        },

        // Day 7
        {
            matchday: 7,
            leg: "First",
            home: "Thorvisual FC",
            away: "Salima The Swarm FC",
            date: "2025-04-02",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Anko-Fit8",
            away: "Priest-Emeritus",
            date: "2025-04-02",
            time: "20:00",
            venue: "Anko Arena"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Wana FC",
            away: "Chutosmiles FC",
            date: "2025-04-02",
            time: "20:00",
            venue: "Wana Stadium"
        },
        {
            matchday: 7,
            leg: "First",
            home: "Hasahya FC",
            away: "Clarks FC",
            date: "2025-04-02",
            time: "20:00",
            venue: "Hasahya Stadium"
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
            away: "25 Pro Max",
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
            home: "Priest-Emeritus",
            away: "Thorvisual FC",
            date: "2025-04-03",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "Chutosmiles FC",
            away: "Salima The Swarm FC",
            date: "2025-04-03",
            time: "20:00",
            venue: "Smiles Arena"
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
            away: "Hasahya FC",
            date: "2025-04-03",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 8,
            leg: "First",
            home: "25 Pro Max",
            away: "KingKai256ug FC",
            date: "2025-04-03",
            time: "20:00",
            venue: "Pro Max Arena"
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
            away: "Chutosmiles FC",
            date: "2025-04-04",
            time: "20:00",
            venue: "Thorvisual Arena"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Clarks FC",
            date: "2025-04-04",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Salima The Swarm FC",
            away: "Omara FC",
            date: "2025-04-04",
            time: "20:00",
            venue: "Salima Bernabeau"
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
            away: "25 Pro Max",
            date: "2025-04-04",
            time: "20:00",
            venue: "Wana Stadium"
        },
        {
            matchday: 9,
            leg: "First",
            home: "Hasahya FC",
            away: "Offer_Art FC",
            date: "2025-04-04",
            time: "20:00",
            venue: "Hasahya Stadium"
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
            away: "Chutosmiles FC",
            date: "2025-04-05",
            time: "20:00",
            venue: "Old Trafford"
        },
        {
            matchday: 10,
            leg: "First",
            home: "Ghost Winner",
            away: "Priest-Emeritus",
            date: "2025-04-05",
            time: "20:00",
            venue: "Ghost Arena"
        },
        {
            matchday: 10,
            leg: "First",
            home: "25 Pro Max",
            away: "Salima The Swarm FC",
            date: "2025-04-05",
            time: "20:00",
            venue: "Pro Max Arena"
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
            away: "Hasahya FC",
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
            home: "Chutosmiles FC",
            away: "25 Pro Max",
            date: "2025-04-06",
            time: "20:00",
            venue: "Smiles Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Offer_Art FC",
            date: "2025-04-06",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 11,
            leg: "First",
            home: "Salima The Swarm FC",
            away: "Urban Decay FC",
            date: "2025-04-06",
            time: "20:00",
            venue: "Salima Bernabeau"
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
            home: "Hasahya FC",
            away: "KingKai256ug FC",
            date: "2025-04-06",
            time: "20:00",
            venue: "Hasahya Stadium"
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
            home: "25 Pro Max",
            away: "Omara FC",
            date: "2025-04-07",
            time: "20:00",
            venue: "Pro Max Arena"
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
            away: "Chutosmiles FC",
            date: "2025-04-07",
            time: "20:00",
            venue: "Urban"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Imoizy.T FC",
            away: "Priest-Emeritus",
            date: "2025-04-07",
            time: "20:00",
            venue: "IT Arena"
        },
        {
            matchday: 12,
            leg: "First",
            home: "Jey Collectionz",
            away: "Salima The Swarm FC",
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
            home: "Hasahya FC",
            away: "Wana FC",
            date: "2025-04-07",
            time: "20:00",
            venue: "Hasahya Stadium"
        },

        // Day 13
        {
            matchday: 13,
            leg: "First",
            home: "Thorvisual FC",
            away: "25 Pro Max",
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
            home: "Chutosmiles FC",
            away: "Jey Collectionz",
            date: "2025-04-08",
            time: "20:00",
            venue: "Smiles Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Priest-Emeritus",
            away: "KingKai256ug FC",
            date: "2025-04-08",
            time: "20:00",
            venue: "Emirates Arena"
        },
        {
            matchday: 13,
            leg: "First",
            home: "Salima The Swarm FC",
            away: "Hasahya FC",
            date: "2025-04-08",
            time: "20:00",
            venue: "Salima Bernabeau"
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
            away: "25 Pro Max",
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
            home: "Hasahya FC",
            away: "Chutosmiles FC",
            date: "2025-04-09",
            time: "20:00",
            venue: "Hasahya Stadium"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Wana FC",
            away: "Priest-Emeritus",
            date: "2025-04-09",
            time: "20:00",
            venue: "Wana Stadium"
        },
        {
            matchday: 14,
            leg: "First",
            home: "Anko-Fit8",
            away: "Salima The Swarm FC",
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
            home: "25 Pro Max",
            away: "Jey Collectionz",
            date: "2025-04-10",
            time: "20:00",
            venue: "Pro Max Arena"
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
            away: "Hasahya FC",
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
            home: "Chutosmiles FC",
            away: "Anko-Fit8",
            date: "2025-04-10",
            time: "20:00",
            venue: "Smiles Arena"
        },
        {
            matchday: 15,
            leg: "First",
            home: "Priest-Emeritus",
            away: "Salima The Swarm FC",
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
                home: "25 Pro Max",
                homeScore: 3,
                away: "Hasahya FC",
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
                away: "Salima The Swarm FC",
                awayScore: 4,
                date: "2025-03-27"
            },
            {
                matchday: 1,
                home: "Chutosmiles FC",
                homeScore: 0,
                away: "Priest-Emeritus",
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
                home: "Hasahya FC",
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
                away: "25 Pro Max",
                awayScore: 3,
                date: "2025-03-28"
            },
            {
                matchday: 2,
                home: "Salima The Swarm FC",
                homeScore: 1,
                away: "Ghost Winner",
                awayScore: 5,
                date: "2025-03-28"
            },
            {
                matchday: 2,
                home: "Priest-Emeritus",
                homeScore: 1,
                away: "Omara FC",
                awayScore: 4,
                date: "2025-03-28"
            },
            {
                matchday: 2,
                home: "Chutosmiles FC",
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
                away: "Hasahya FC",
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
                away: "Salima The Swarm FC",
                awayScore: 2,
                date: "2025-03-29"
            },
            {
                matchday: 3,
                home: "25 Pro Max",
                homeScore: 2,
                away: "Priest-Emeritus",
                awayScore: 4,
                date: "2025-03-29"
            },
            {
                matchday: 3,
                home: "Ghost Winner",
                homeScore: 3,
                away: "Chutosmiles FC",
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
                home: "Hasahya FC",
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
                home: "Salima The Swarm FC",
                homeScore: 3,
                away: "Imoizy.T FC",
                awayScore: 2,
                date: "2025-03-30"
            },
            {
                matchday: 4,
                home: "Priest-Emeritus",
                homeScore: 5,
                away: "Urban Decay FC",
                awayScore: 0,
                date: "2025-03-30"
            },
            {
                matchday: 4,
                home: "Chutosmiles FC",
                homeScore: 1,
                away: "Offer_Art FC",
                awayScore: 1,
                date: "2025-03-30"
            },
            {
                matchday: 4,
                home: "Clarks FC",
                homeScore: 1,
                away: "25 Pro Max",
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
                home: "Hasahya FC",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "KingKai256ug FC",
                homeScore: 2,
                away: "Salima The Swarm FC",
                awayScore: 2,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "Jey Collectionz",
                homeScore: 0,
                away: "Priest-Emeritus",
                awayScore: 6,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "Imoizy.T FC",
                homeScore: 1,
                away: "Chutosmiles FC",
                awayScore: 5,
                date: "2025-03-31"
            },
            {
                matchday: 5,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
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
                home: "25 Pro Max",
                homeScore: 1,
                away: "Ghost Winner",
                awayScore: 2,
                date: "2025-03-31"
            },

            // Matchday 6
            {
                matchday: 6,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Clarks FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Omara FC",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "Ghost Winner",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-01"
            },
            {
                matchday: 6,
                home: "25 Pro Max",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-01"
            },

            // Matchday 7
            {
                matchday: 7,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Salima The Swarm FC",
                awayScore: null,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Wana FC",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Hasahya FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Imoizy.T FC",
                homeScore: null,
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-02"
            },
            {
                matchday: 7,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-02"
            },

            // Matchday 8
            {
                matchday: 8,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "Salima The Swarm FC",
                awayScore: null,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Clarks FC",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Omara FC",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Ghost Winner",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "25 Pro Max",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-03"
            },
            {
                matchday: 8,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-03"
            },

            // Matchday 9
            {
                matchday: 9,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Wana FC",
                homeScore: null,
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Hasahya FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-04"
            },
            {
                matchday: 9,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-04"
            },
            // Matchday 10
            {
                matchday: 10,
                home: "Clarks FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Omara FC",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Ghost Winner",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "25 Pro Max",
                homeScore: null,
                away: "Salima The Swarm FC",
                awayScore: null,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Imoizy.T FC",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-05"
            },
            {
                matchday: 10,
                home: "Jey Collectionz",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-05"
            },

            // Matchday 11
            {
                matchday: 11,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Clarks FC",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Wana FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-06"
            },
            {
                matchday: 11,
                home: "Hasahya FC",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-06"
            },

            // Matchday 12
            {
                matchday: 12,
                home: "Ghost Winner",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "25 Pro Max",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "Imoizy.T FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Salima The Swarm FC",
                awayScore: null,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-07"
            },
            {
                matchday: 12,
                home: "Hasahya FC",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-07"
            },

            // Matchday 13
            {
                matchday: 13,
                home: "Thorvisual FC",
                homeScore: null,
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Ghost Winner",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Omara FC",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Clarks FC",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-08"
            },
            {
                matchday: 13,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-08"
            },

            // Matchday 14
            {
                matchday: 14,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Urban Decay FC",
                homeScore: null,
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Imoizy.T FC",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
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
                home: "Hasahya FC",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Wana FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-09"
            },
            {
                matchday: 14,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Salima The Swarm FC",
                awayScore: null,
                date: "2025-04-09"
            },

            // Matchday 15
            {
                matchday: 15,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "25 Pro Max",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Ghost Winner",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Omara FC",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Clarks FC",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-10"
            },
            {
                matchday: 15,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Salima The Swarm FC",
                awayScore: null,
                date: "2025-04-10"
            },

            // Matchday 16
            {
                matchday: 16,
                home: "Imoizy.T FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
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
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Hasahya FC",
                homeScore: null,
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Wana FC",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-11"
            },
            {
                matchday: 16,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-11"
            },

            // Matchday 17
            {
                matchday: 17,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Imoizy.T FC",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "25 Pro Max",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Ghost Winner",
                homeScore: null,
                away: "Salima The Swarm FC",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Omara FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-12"
            },
            {
                matchday: 17,
                home: "Clarks FC",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-12"
            },

            // Matchday 18
            {
                matchday: 18,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Hasahya FC",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Wana FC",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-13"
            },
            {
                matchday: 18,
                home: "Clarks FC",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
                date: "2025-04-13"
            },

            // Matchday 19
            {
                matchday: 19,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Imoizy.T FC",
                homeScore: null,
                away: "Salima The Swarm FC",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "25 Pro Max",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-14"
            },
            {
                matchday: 19,
                home: "Ghost Winner",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
                date: "2025-04-14"
            },

            // Matchday 20
            {
                matchday: 20,
                home: "Wana FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Jey Collectionz",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Clarks FC",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Omara FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-15"
            },
            {
                matchday: 20,
                home: "Ghost Winner",
                homeScore: null,
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-15"
            },

            // Matchday 21
            {
                matchday: 21,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Wana FC",
                homeScore: null,
                away: "Salima The Swarm FC",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "Hasahya FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-16"
            },
            {
                matchday: 21,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
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
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
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
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-16"
            },

            // Matchday 22
            {
                matchday: 22,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Clarks FC",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Omara FC",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
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
                home: "25 Pro Max",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-17"
            },
            {
                matchday: 22,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-17"
            },

            // Matchday 23
            {
                matchday: 23,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Anko-Fit8",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Wana FC",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "Hasahya FC",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-18"
            },
            {
                matchday: 23,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "25 Pro Max",
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
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-18"
            },

            // Matchday 24
            {
                matchday: 24,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Clarks FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Omara FC",
                homeScore: null,
                away: "Salima The Swarm FC",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Ghost Winner",
                homeScore: null,
                away: "Anko-Fit8",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "25 Pro Max",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-19"
            },
            {
                matchday: 24,
                home: "Urban Decay FC",
                homeScore: null,
                away: "KingKai256ug FC",
                awayScore: null,
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
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-20"
            },
            {
                matchday: 25,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "25 Pro Max",
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
                home: "Hasahya FC",
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
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
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
                home: "25 Pro Max",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-21"
            },
            {
                matchday: 26,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Salima The Swarm FC",
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
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-21"
            },

            // Matchday 27
            {
                matchday: 27,
                home: "Thorvisual FC",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Omara FC",
                homeScore: null,
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Clarks FC",
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Chutosmiles FC",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
                date: "2025-04-22"
            },
            {
                matchday: 27,
                home: "Salima The Swarm FC",
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
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-22"
            },

            // Matchday 28
            {
                matchday: 28,
                home: "25 Pro Max",
                homeScore: null,
                away: "Thorvisual FC",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Offer_Art FC",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Urban Decay FC",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Imoizy.T FC",
                homeScore: null,
                away: "Clarks FC",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Jey Collectionz",
                homeScore: null,
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-23"
            },
            {
                matchday: 28,
                home: "Hasahya FC",
                homeScore: null,
                away: "Salima The Swarm FC",
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
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "25 Pro Max",
                homeScore: null,
                away: "Urban Decay FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Ghost Winner",
                homeScore: null,
                away: "Imoizy.T FC",
                awayScore: null,
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
                home: "Chutosmiles FC",
                homeScore: null,
                away: "Hasahya FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Priest-Emeritus",
                homeScore: null,
                away: "Wana FC",
                awayScore: null,
                date: "2025-04-24"
            },
            {
                matchday: 29,
                home: "Salima The Swarm FC",
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
                homeScore: null,
                away: "Offer_Art FC",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Jey Collectionz",
                homeScore: null,
                away: "25 Pro Max",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "KingKai256ug FC",
                homeScore: null,
                away: "Ghost Winner",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Hasahya FC",
                homeScore: null,
                away: "Omara FC",
                awayScore: null,
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
                away: "Chutosmiles FC",
                awayScore: null,
                date: "2025-04-25"
            },
            {
                matchday: 30,
                home: "Salima The Swarm FC",
                homeScore: null,
                away: "Priest-Emeritus",
                awayScore: null,
                date: "2025-04-25"
            }
        ],
        
        
        
        table: [
            {
                position: 1,
                team: "Thorvisual FC",
                played: 5,
                won: 3,
                drawn: 2,
                lost: 0,
                gf: 22,
                ga: 7,
                gd: +15,
                points: 11,
                form: ["D", "W", "D", "W", "W"]
            },
            {
                position: 2,
                team: "25 Pro Max",
                played: 5,
                won: 2,
                drawn: 1,
                lost: 2,
                gf: 18,
                ga: 11,
                gd: +7,
                points: 7,
                form: ["D", "W", "L", "W", "L"]
            },
            {
                position: 3,
                team: "Urban Decay FC",
                played: 4,
                won: 0,
                drawn: 0,
                lost: 4,
                gf: 1,
                ga: 16,
                gd: -15,
                points: 0,
                form: ["L", "L", "L", "L", "-"]
            },
            {
                position: 4,
                team: "Offer_Art FC",
                played: 5,
                won: 1,
                drawn: 1,
                lost: 3,
                gf: 3,
                ga: 9,
                gd: -6,
                points: 4,
                form: ["W", "L", "L", "D", "L"]
            },
            {
                position: 5,
                team: "Imoizy.T FC",
                played: 5,
                won: 1,
                drawn: 1,
                lost: 3,
                gf: 13,
                ga: 13,
                gd: 0,
                points: 4,
                form: ["D", "L", "W", "L", "L"]
            },
            {
                position: 6,
                team: "Jey Collectionz",
                played: 5,
                won: 1,
                drawn: 0,
                lost: 4,
                gf: 2,
                ga: 25,
                gd: -13,
                points: 3,
                form: ["W", "L", "L", "L", "L"]
            },
            {
                position: 7,
                team: "KingKai256ug FC",
                played: 5,
                won: 2,
                drawn: 2,
                lost: 1,
                gf: 9,
                ga: 7,
                gd: 2,
                points: 8,
                form: ["L", "W", "D", "W", "D"]
            },
            {
                position: 8,
                team: "Ghost Winner",
                played: 5,
                won: 5,
                drawn: 0,
                lost: 0,
                gf: 19,
                ga: 4,
                gd: +15,
                points: 15,
                form: ["W", "W", "W", "W", "W"]
            },
            {
                position: 9,
                team: "Omara FC",
                played: 5,
                won: 4,
                drawn: 0,
                lost: 1,
                gf: 19,
                ga: 7,
                gd: +12,
                points: 12,
                form: ["W", "W", "W", "L", "W"]
            },
            {
                position: 10,
                team: "Chutosmiles FC",
                played: 5,
                won: 2,
                drawn: 1,
                lost: 2,
                gf: 11,
                ga: 10,
                gd: +1,
                points: 7,
                form: ["L", "W", "L", "D", "W"]
            },
            {
                position: 11,
                team: "Priest-Emeritus",
                played: 5,
                won: 4,
                drawn: 0,
                lost: 1,
                gf: 19,
                ga: 6,
                gd: 13,
                points: 12,
                form: ["W", "L", "W", "W", "W"]
            },
            {
                position: 12,
                team: "Anko-Fit8",
                played: 4,
                won: 2,
                drawn: 0,
                lost: 2,
                gf: 8,
                ga: 11,
                gd: -3,
                points: 6,
                form: ["L", "L", "W", "W", "-"]
            },
            {
                position: 13,
                team: "Salima The Swarm FC",
                played: 5,
                won: 3,
                drawn: 1,
                lost: 1,
                gf: 12,
                ga: 10,
                gd: 2,
                points: 10,
                form: ["W", "L", "W", "W", "D"]
            },
            {
                position: 14,
                team: "Clarks FC",
                played: 4,
                won: 0,
                drawn: 0,
                lost: 4,
                gf: 5,
                ga: 23,
                gd: -18,
                points: 0,
                form: ["L", "L", "L", "L", "-"]
            },
            {
                position: 15,
                team: "Wana FC",
                played: 5,
                won: 1,
                drawn: 0,
                lost: 4,
                gf: 4,
                ga: 14,
                gd: -10,
                points: 3,
                form: ["L", "W", "L", "L", "L"]
            },
            {
                position: 16,
                team: "Hasahya FC",
                played: 4,
                won: 2,
                drawn: 1,
                lost: 1,
                gf: 17,
                ga: 9,
                gd: +8,
                points: 7,
                form: ["D", "W", "W", "L", "-"]
            }
        ],


        clubs: [
            {
                name: "25 Pro Max",
                logo: "images/club-logos/25-pro-max.svg",
                manager: "Emma",
                stadium: "Pro Max Arena",
                founded: "2023",
                location: "Lira, Uganda"
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
                name: "Chutosmiles FC",
                logo: "images/club-logos/chutosmiles.svg",
                manager: "Chuto Smiles",
                stadium: "Smiles Arena",
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
                name: "Priest-Emeritus",
                logo: "images/club-logos/priest-emeritus.svg",
                manager: "Priest",
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
                name: "Salima The Swarm FC",
                logo: "images/club-logos/salim-swarm.svg",
                manager: "Ibrasha",
                stadium: "Salima Bernabeau",
                founded: "2024",
                location: "Butaleja, Uganda"
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
                name: "Hasahya FC",
                logo: "images/club-logos/hasahya.svg",
                manager: "Hasahya",
                stadium: "Hasahya Stadium",
                founded: "2023",
                location: "Jinja, Uganda"
            },
        
            
        ]
    };

    function loadPage(page, options) {  // Updated function definition
        switch(page) {
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
                        const matchFixtures = fixtures.map(fixture => {
                            const homeClub = data.clubs.find(club => club.name === fixture.home);
                            const awayClub = data.clubs.find(club => club.name === fixture.away);
                            
                            return `
                                <div class="fixture-card">
                                    <div class="fixture-date">${fixture.date}</div>
                                    <div class="fixture-teams">
                                        <div class="team home">
                                            <img src="${homeClub?.logo}" alt="${homeClub?.name}" class="team-logo">
                                            <span class="team-name">${fixture.home}</span>
                                        </div>
                                        <div class="vs">vs</div>
                                        <div class="team away">
                                            <img src="${awayClub?.logo}" alt="${awayClub?.name}" class="team-logo">
                                            <span class="team-name">${fixture.away}</span>
                                        </div>
                                    </div>
                                    <div class="fixture-details">
                                        <span class="time"><i class="fas fa-clock"></i> ${fixture.time}</span>
                                        <span class="venue"><i class="fas fa-map-marker-alt"></i> ${fixture.venue}</span>
                                    </div>
                                </div>
                            `;
                        }).join('');
            
                        return `
                            <div class="matchday-group">
                                <h3 class="matchday-title">Matchday ${matchday}</h3>
                                <div class="matchday-fixtures">
                                    ${matchFixtures}
                                </div>
                            </div>
                        `;
                    }).join('');
            
                mainContent.innerHTML = `
                    <div class="page-header">
                        <h2>EFL Uganda Fixtures</h2>
                        <p class="subtitle">Season 2025/26</p>
                    </div>
                    <div class="fixtures-container">
                        ${fixturesHTML}
                    </div>
                `;
                
                // Initialize the fixtures dropdown after content is loaded
                if (typeof initializeFixturesDropdown === 'function') {
                    initializeFixturesDropdown();
                }
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

                    const resultsHTML = data.results.map(result => {
                        const homeClub = data.clubs.find(club => club.name === result.home);
                        const awayClub = data.clubs.find(club => club.name === result.away);
                        
                        return `
                            <div class="result-card" data-matchday="${result.matchday || 'Unknown'}">
                                <div class="result-date">${result.date}</div>
                                <div class="result-teams">
                                    <div class="team home">
                                        <img src="${homeClub?.logo}" alt="${result.home}" class="team-logo">
                                        <span class="team-name">${result.home}</span>
                                        <span class="score">${result.homeScore ?? '-'}</span>
                                    </div>
                                    <div class="score-divider">-</div>
                                    <div class="team away">
                                        <span class="score">${result.awayScore ?? '-'}</span>
                                        <span class="team-name">${result.away}</span>
                                        <img src="${awayClub?.logo}" alt="${result.away}" class="team-logo">
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('');

                    mainContent.innerHTML = `
                        <div class="page-header">
                            <h2>EFL Uganda Results</h2>
                            <p class="subtitle">Season 2025/26</p>
                            <div class="results-filter">
                                <select id="matchdayFilter" class="matchday-filter">
                                    <option value="all">All Matchdays</option>
                                    ${matchdayOptions}
                                </select>
                            </div>
                        </div>
                        <div class="results-container">
                            ${resultsHTML}
                        </div>
                    `;

                    // Add event listener for dropdown
                    const matchdayFilter = document.getElementById('matchdayFilter');
                    matchdayFilter.addEventListener('change', (e) => {
                        const selectedMatchday = e.target.value;
                        const resultCards = document.querySelectorAll('.result-card');
                        
                        resultCards.forEach(card => {
                            if (selectedMatchday === 'all' || card.dataset.matchday === selectedMatchday) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        });
                    });
                    break;

                    case 'table':
                        // Sort teams by points, goal difference, goals scored, and alphabetically if all else is equal
                        const sortedTable = data.table.sort((a, b) => {
                            // First sort by points
                            if (b.points !== a.points) return b.points - a.points;
                            
                            // If points are equal, sort by goal difference
                            if (b.gd !== a.gd) return b.gd - a.gd;
                            
                            // If goal difference is equal, sort by goals scored
                            if (b.gf !== a.gf) return b.gf - a.gf;
                            
                            // If everything is equal, sort alphabetically by team name
                            return a.team.localeCompare(b.team);
                        }).map((team, index) => ({
                            ...team,
                            position: index + 1
                        }));

                        const tableHTML = sortedTable.map(team => `
                            <tr class="${team.position <= 4 ? 'champions-league' : ''}${team.position >= 15 ? 'relegation' : ''}">
                                <td>${team.position}</td>
                                <td class="team-cell">
                                    <img src="${data.clubs.find(club => club.name === team.team)?.logo}" alt="${team.team}" class="team-logo">
                                    <span>${team.team}</span>
                                </td>
                                <td>${team.played}</td>
                                <td>${team.won}</td>
                                <td>${team.drawn}</td>
                                <td>${team.lost}</td>
                                <td>${team.gf}</td>
                                <td>${team.ga}</td>
                                <td>${team.gd}</td>
                                <td class="points">${team.points}</td>
                                <td class="form-column">
                                    ${team.form.map(result => `<span class="form-indicator ${result.toLowerCase()}">${result}</span>`).join('')}
                                </td>
                            </tr>
                        `).join('');

                mainContent.innerHTML = `
                    <div class="page-header">
                        <h2>EFL Uganda Table</h2>
                        <p class="subtitle">Season 2025/26</p>
                    </div>
                    <div class="table-container">
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
                                ${tableHTML}
                            </tbody>
                        </table>
                    </div>
                `;
                break;

            case 'clubs':
                const clubsHTML = data.clubs.map(club => `
                    <div class="club-card">
                        <div class="club-header">
                            <img src="${club.logo}" alt="${club.name} logo" class="club-logo">
                            <h3 class="club-name">${club.name}</h3>
                        </div>
                        <div class="club-info">
                            <p><strong>Manager</strong> <span>${club.manager}</span></p>
                            <p><strong>Stadium</strong> <span>${club.stadium}</span></p>
                            <p><strong>Founded</strong> <span>${club.founded}</span></p>
                            <p><strong>Location</strong> <span>${club.location}</span></p>
                        </div>
                    </div>
                `).join('');

                mainContent.innerHTML = `
                    <div class="page-header">
                        <h2>EFL Uganda Clubs</h2>
                        <p class="subtitle">Season 2025/26</p>
                        <div class="clubs-controls">
                            <input type="text" id="clubSearch" class="club-search" placeholder="Search clubs...">
                            <select id="sortClubs" class="club-sort">
                                <option value="name-asc">Name (A-Z)</option>
                                <option value="name-desc">Name (Z-A)</option>
                                <option value="location">Location</option>
                                <option value="founded-new">Newest First</option>
                                <option value="founded-old">Oldest First</option>
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
            
                    const filteredAndSortedClubs = data.clubs
                        .filter(club => 
                            club.name.toLowerCase().includes(searchTerm) ||
                            club.location.toLowerCase().includes(searchTerm) ||
                            club.manager.toLowerCase().includes(searchTerm)
                        )
                        .sort((a, b) => {
                            switch(sortValue) {
                                case 'name-asc':
                                    return a.name.localeCompare(b.name);
                                case 'name-desc':
                                    return b.name.localeCompare(a.name);
                                case 'location':
                                    return a.location.localeCompare(b.location);
                                case 'founded-new':
                                    return b.founded.localeCompare(a.founded);
                                case 'founded-old':
                                    return a.founded.localeCompare(b.founded);
                                default:
                                    return 0;
                            }
                        });
            
                    const updatedClubsHTML = filteredAndSortedClubs.map(club => `
                        <div class="club-card">
                            <div class="club-header">
                                <img src="${club.logo}" alt="${club.name} logo" class="club-logo">
                                <h3 class="club-name">${club.name}</h3>
                            </div>
                            <div class="club-info">
                                <p><strong>Manager</strong> <span>${club.manager}</span></p>
                                <p><strong>Stadium</strong> <span>${club.stadium}</span></p>
                                <p><strong>Founded</strong> <span>${club.founded}</span></p>
                                <p><strong>Location</strong> <span>${club.location}</span></p>
                            </div>
                        </div>
                    `).join('');
            
                    clubsContainer.innerHTML = updatedClubsHTML || '<div class="no-results">No clubs found matching your search</div>';
                }
            
                searchInput.addEventListener('input', filterAndSortClubs);
                sortSelect.addEventListener('change', filterAndSortClubs);
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
                                        <span class="cup-status status-upcoming">Starting On 4 April 2025</span>
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
                                        <span class="cup-status status-upcoming">27 May 2025</span>
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
                                { home: "Priest-Emeritus", away: "Jey Collectionz", time: "20:00", venue: "Emirates Arena", homeScore: null, awayScore: null },
                                { home: "Imoizy.T FC", away: "Hasahya FC", time: "20:00", venue: "IT Arena", homeScore: null, awayScore: null },
                                { home: "Ghost Winner", away: "KingKai256ug FC", time: "20:00", venue: "Ghost Arena", homeScore: null, awayScore: null },
                                { home: "Salima The Swarm FC", away: "Thorvisual FC", time: "20:00", venue: "Salima Bernabeau", homeScore: null, awayScore: null },
                                { home: "Offer_Art FC", away: "Anko-Fit8", time: "20:00", venue: "OfferArt Arena", homeScore: null, awayScore: null },
                                { home: "Clarks FC", away: "Urban Decay FC", time: "20:00", venue: "Colds Arena", homeScore: null, awayScore: null },
                                { home: "Chutosmiles FC", away: "Wana FC", time: "20:00", venue: "Smiles Arena", homeScore: null, awayScore: null },
                                { home: "25 Pro Max", away: "Omara FC", time: "20:00", venue: "Pro Max Arena", homeScore: null, awayScore: null }
                            ]
                        },
                        {
                            round: 'Quarter Finals',
                            date: '2025-04-11',
                            matches: [
                                { home: "Winner R16-1", away: "Winner R16-2", time: "20:00", venue: "TBD", homeScore: null, awayScore: null },
                                { home: "Winner R16-3", away: "Winner R16-4", time: "20:00", venue: "TBD", homeScore: null, awayScore: null },
                                { home: "Winner R16-5", away: "Winner R16-6", time: "20:00", venue: "TBD", homeScore: null, awayScore: null },
                                { home: "Winner R16-7", away: "Winner R16-8", time: "20:00", venue: "TBD", homeScore: null, awayScore: null }
                            ]
                        },
                        {
                            round: 'Semi Finals',
                            date: '2025-04-18',
                            matches: [
                                { home: "Winner QF-1", away: "Winner QF-2", time: "20:00", venue: "TBD", homeScore: null, awayScore: null },
                                { home: "Winner QF-3", away: "Winner QF-4", time: "20:00", venue: "TBD", homeScore: null, awayScore: null }
                            ]
                        },
                        {
                            round: 'Final',
                            date: '2025-04-25',
                            matches: [
                                { home: "Winner SF-1", away: "Winner SF-2", time: "20:00", venue: "National Stadium", homeScore: null, awayScore: null }
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
                                            return `
                                                <div class="match-teams">
                                        <div class="team">
                                            <img src="${homeClub?.logo}" alt="${match.home}" class="team-logo">
                                            <span class="team-name">${match.home}</span>
                                            ${match.homeScore !== null ? `<span class="score">${match.homeScore}</span>` : ''}
                                        </div>
                                        <span class="vs">
                                            ${match.homeScore !== null ? `${match.homeScore} - ${match.awayScore}` : 'vs'}
                                        </span>
                                        <div class="team">
                                            <img src="${awayClub?.logo}" alt="${match.away}" class="team-logo">
                                            <span class="team-name">${match.away}</span>
                                            ${match.awayScore !== null ? `<span class="score">${match.awayScore}</span>` : ''}
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
                awayScore: null 
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
                                ${match.homeScore !== null ? `<span class="score">${match.homeScore}</span>` : ''}
                            </div>
                            <span class="vs">
                                ${match.homeScore !== null ? `${match.homeScore} - ${match.awayScore}` : 'vs'}
                            </span>
                            <div class="team">
                                <span class="team-name">${match.away}</span>
                                ${match.awayScore !== null ? `<span class="score">${match.awayScore}</span>` : ''}
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
                    <li>Penalty ShoUrbanout (if needed)</li>
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
            
            // Reset hamburger button
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.nav-links').classList.toggle('active');
        
        // Animate hamburger to X
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rUrbanate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rUrbanate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
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
                
                // Reset hamburger button
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
            
            loadPage(link.dataset.page);
        });
    });

    loadPage('home');
});
