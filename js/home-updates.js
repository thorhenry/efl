// Function to update the home page with latest results and upcoming fixtures
export const updateHomePageContent = (data) => {
    console.log('Updating home page content...');
    
    // Get latest results (last 5 completed matches)
    const latestResults = data.results
        .filter(match => match.homeScore !== null && match.awayScore !== null)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    // Get all completed matches for the ticker
    const tickerResults = data.results
        .filter(match => match.homeScore !== null && match.awayScore !== null)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Helper function to get club logo
    const getClubLogo = (teamName) => {
        const club = data.clubs.find(club => club.name === teamName);
        return club ? club.logo : '';
    };

    // Update latest results section
    const resultsSection = document.querySelector('.latest-results .results-grid');
    if (resultsSection) {
        resultsSection.innerHTML = latestResults.map(match => `
            <div class="result-card completed">
                <div class="match-date">${new Date(match.date).toLocaleDateString()}</div>
                <div class="match-teams">
                    <div class="team">
                        <img src="${getClubLogo(match.home)}" alt="${match.home}" class="team-logo">
                        <span class="team-name">${match.home}</span>
                    </div>
                    <div class="score">${match.homeScore} - ${match.awayScore}</div>
                    <div class="team">
                        <img src="${getClubLogo(match.away)}" alt="${match.away}" class="team-logo">
                        <span class="team-name">${match.away}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update ticker content
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) {
        // Create ticker items
        const tickerItems = tickerResults.map(match => `
            <div class="ticker-item">
                <span class="matchday">MD${match.matchday}</span>
                <div class="team">
                    <img src="${getClubLogo(match.home)}" alt="${match.home}" class="team-logo">
                    <span class="team-name">${match.home}</span>
                </div>
                <div class="score">${match.homeScore} - ${match.awayScore}</div>
                <div class="team">
                    <img src="${getClubLogo(match.away)}" alt="${match.away}" class="team-logo">
                    <span class="team-name">${match.away}</span>
                </div>
            </div>
        `).join('');
        
        // Duplicate the content for seamless scrolling
        tickerContent.innerHTML = tickerItems + tickerItems;
    }
};

// Function to initialize the home page updates
export const initializeHomeUpdates = (data) => {
    console.log('Initializing home updates...');
    // Update content immediately
    updateHomePageContent(data);

    // Update content every 5 minutes
    setInterval(() => {
        updateHomePageContent(data);
    }, 5 * 60 * 1000);
}; 