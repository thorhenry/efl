document.addEventListener('DOMContentLoaded', () => {
    // Make the function available globally
    window.initializeFixturesDropdown = function() {
        const fixturesContainer = document.querySelector('.fixtures-container');
        if (!fixturesContainer) return;

        // Create dropdown select
        const matchdaySelect = document.createElement('select');
        matchdaySelect.id = 'matchday-select';
        matchdaySelect.className = 'matchday-dropdown';

        // Get all matchday groups
        const matchdayGroups = document.querySelectorAll('.matchday-group');
        
        // Populate dropdown options
        matchdayGroups.forEach((group, index) => {
            const option = document.createElement('option');
            option.value = index + 1;
            option.textContent = `Matchday ${index + 1}`;
            matchdaySelect.appendChild(option);
        });

        // Insert dropdown before fixtures container
        fixturesContainer.parentNode.insertBefore(matchdaySelect, fixturesContainer);

        // Hide all matchday groups initially except the first one
        matchdayGroups.forEach((group, index) => {
            group.style.display = index === 0 ? 'block' : 'none';
        });

        // Add change event listener
        matchdaySelect.addEventListener('change', (e) => {
            const selectedMatchday = parseInt(e.target.value);
            matchdayGroups.forEach((group, index) => {
                group.style.display = index + 1 === selectedMatchday ? 'block' : 'none';
            });
        });
    };
});