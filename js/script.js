// Functions for terminal manipulation
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginScreen = document.getElementById('login-screen');
    const mainScreen = document.getElementById('main-screen');
    const loginBtn = document.getElementById('login-btn');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const menuOptions = document.querySelectorAll('.menu-option');
    const backButtons = document.querySelectorAll('.back-btn');
    const datetimeElement = document.getElementById('datetime');
    
    // Add scan line
    const terminalScreen = document.querySelector('.terminal-screen');
    const scanLine = document.createElement('div');
    scanLine.classList.add('scan-line');
    terminalScreen.appendChild(scanLine);
    
    // Update date and time
    function updateDateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        datetimeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    // Update every second
    setInterval(updateDateTime, 1000);
    updateDateTime();
    
    // Typing effect for welcome texts
    function typeEffect(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                // Add blinking cursor at the end
                const caret = document.createElement('span');
                caret.classList.add('terminal-caret');
                element.appendChild(caret);
                element.style.borderRight = 'none';
            }
        }, 50);
    }
    
    // Apply typing effect to welcome texts
    const welcomeText = document.getElementById('welcome-text');
    const instructionText = document.getElementById('instruction-text');
    
    typeEffect(welcomeText);
    setTimeout(() => {
        typeEffect(instructionText);
    }, 10000);
    
    // Fill portfolio content with real data
    function populatePortfolioContent() {
        // About Section
        document.getElementById('profile-name').textContent = portfolioData.about.name;
        document.getElementById('profile-title').textContent = portfolioData.about.title;
        document.getElementById('profile-location').textContent = portfolioData.about.location;
        document.getElementById('profile-description').textContent = portfolioData.about.description;
        
        // Education
        const educationList = document.getElementById('education-list');
        portfolioData.education.forEach(item => {
            const educationItem = document.createElement('div');
            educationItem.classList.add('education-item');
            
            if (item.degree) {
                const degree = document.createElement('h4');
                degree.textContent = item.degree;
                educationItem.appendChild(degree);
                
                const institution = document.createElement('p');
                institution.textContent = item.institution;
                educationItem.appendChild(institution);
                
                const period = document.createElement('p');
                period.classList.add('period');
                period.textContent = item.period;
                educationItem.appendChild(period);
            } else if (item.course) {
                const course = document.createElement('h4');
                course.textContent = item.course;
                educationItem.appendChild(course);
                
                const institution = document.createElement('p');
                institution.textContent = item.institution;
                educationItem.appendChild(institution);
            }
            
            educationList.appendChild(educationItem);
        });
        
        // Skills Section
        //const skillsGrid = document.getElementById('skills-grid');
        //createDataGrid(skillsGrid, 5, 8);

        //it was a good idea but I didn't like how it turned out
        
        const skillsList = document.getElementById('skills-list');
        portfolioData.skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.classList.add('skill-item');
            
            const skillName = document.createElement('div');
            skillName.classList.add('skill-name');
            skillName.textContent = skill.name;
            if (skill.certified) {
                const certBadge = document.createElement('span');
                certBadge.classList.add('cert-badge');
                certBadge.textContent = '✓';
                certBadge.title = 'Certified';
                skillName.appendChild(certBadge);
            }
            skillItem.appendChild(skillName);
            
            const skillBar = document.createElement('div');
            skillBar.classList.add('skill-bar');
            
            const skillLevel = document.createElement('div');
            skillLevel.classList.add('skill-level');
            skillLevel.style.width = `${skill.level}%`;
            skillBar.appendChild(skillLevel);
            
            skillItem.appendChild(skillBar);
            
            const skillPercent = document.createElement('div');
            skillPercent.classList.add('skill-percent');
            skillPercent.textContent = `${skill.level}%`;
            skillItem.appendChild(skillPercent);
            
            skillsList.appendChild(skillItem);
        });
        
        // Projects Section
        const projectsList = document.getElementById('projects-list');
        portfolioData.projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            
            const projectHeader = document.createElement('div');
            projectHeader.classList.add('project-header');
            
            const projectName = document.createElement('h3');
            projectName.textContent = project.name;
            projectHeader.appendChild(projectName);
            
            const projectLink = document.createElement('a');
            projectLink.href = project.link;
            projectLink.target = '_blank';
            projectLink.textContent = 'View Project';
            projectHeader.appendChild(projectLink);
            
            projectItem.appendChild(projectHeader);
            
            const projectDesc = document.createElement('p');
            projectDesc.textContent = project.description;
            projectItem.appendChild(projectDesc);
            
            const techList = document.createElement('div');
            techList.classList.add('tech-list');
            
            const techLabel = document.createElement('span');
            techLabel.classList.add('tech-label');
            techLabel.textContent = 'Technologies: ';
            techList.appendChild(techLabel);
            
            project.technologies.forEach((tech, index) => {
                const techItem = document.createElement('span');
                techItem.classList.add('tech-item');
                techItem.textContent = tech;
                techList.appendChild(techItem);
                
                if (index < project.technologies.length - 1) {
                    const separator = document.createTextNode(' • ');
                    techList.appendChild(separator);
                }
            });
            
            projectItem.appendChild(techList);
            projectsList.appendChild(projectItem);
        });
        
        // Experience Section
        const experienceList = document.getElementById('experience-list');
        portfolioData.experience.forEach(exp => {
            const expItem = document.createElement('div');
            expItem.classList.add('experience-item');
            
            const expHeader = document.createElement('div');
            expHeader.classList.add('experience-header');
            
            const expTitle = document.createElement('h3');
            expTitle.textContent = exp.title;
            expHeader.appendChild(expTitle);
            
            const expPeriod = document.createElement('span');
            expPeriod.classList.add('experience-period');
            expPeriod.textContent = exp.period;
            expHeader.appendChild(expPeriod);
            
            expItem.appendChild(expHeader);
            
            const expCompany = document.createElement('h4');
            expCompany.textContent = exp.company;
            expItem.appendChild(expCompany);
            
            const expDesc = document.createElement('p');
            expDesc.textContent = exp.description;
            expItem.appendChild(expDesc);
            
            experienceList.appendChild(expItem);
        });
        
        // Contact Section
        document.getElementById('contact-email').textContent = portfolioData.contact.email;
        
        const linkedinLink = document.getElementById('contact-linkedin');
        linkedinLink.href = portfolioData.contact.linkedin;
        linkedinLink.textContent = 'in/icarocbotelho';
        
        const githubLink = document.getElementById('contact-github');
        githubLink.href = portfolioData.contact.github;
        githubLink.textContent = 'github.com/icrcode';
    }
    
    // Login function
    loginBtn.addEventListener('click', function() {
        // Login simulation (any credential is accepted)
        if (username.value.trim() !== '' && password.value.trim() !== '') {
            loginScreen.classList.add('hidden');
            mainScreen.classList.remove('hidden');
            
            // Terminal effect for the main menu
            const menuOptions = document.querySelectorAll('.menu-option');
            menuOptions.forEach((option, index) => {
                setTimeout(() => {
                    option.style.opacity = '1';
                }, 200 * index);
            });
        } else {
            // Show error message
            alert('Please enter username and password.');
        }
    });
    
    // Menu navigation
    menuOptions.forEach(option => {
        option.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            mainScreen.classList.add('hidden');
            document.getElementById(`${section}-section`).classList.remove('hidden');
        });
    });
    
    // Handle number key presses for menu selection
    document.addEventListener('keydown', function(e) {
        if (mainScreen.classList.contains('hidden')) return;
        
        const key = e.key;
        if (key >= '1' && key <= '5') {
            const index = parseInt(key) - 1;
            if (index < menuOptions.length) {
                menuOptions[index].click();
            }
        }
    });
    
    // Back button functionality
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contentScreen = this.closest('.content-screen');
            contentScreen.classList.add('hidden');
            mainScreen.classList.remove('hidden');
        });
    });
    
    // Populate the portfolio content once DOM is loaded
    populatePortfolioContent();
    
    // Terminal animations and effects
    document.querySelectorAll('.terminal-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.classList.add('highlight');
        });
        
        btn.addEventListener('mouseleave', function() {
            this.classList.remove('highlight');
        });
    });
    
    // Enter key to submit login
    document.getElementById('password').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
    
    // Adjust height of terminal-screen based on content
    function adjustHeight() {
        const contentHeight = Math.max(
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
        );
        document.querySelector('.terminal-container').style.minHeight = `${contentHeight}px`;
    }
    
    // Call on load and resize
    window.addEventListener('resize', adjustHeight);
    window.addEventListener('load', adjustHeight);
    
    // Add terminal line effect
    function addTerminalLine() {
        const line = document.createElement('div');
        line.classList.add('terminal-line');
        document.querySelector('.terminal-container').appendChild(line);
    }
    
    // Add some random flickering effects
    setInterval(() => {
        if (Math.random() > 0.98) {
            document.querySelector('.terminal-container').classList.add('flicker');
            setTimeout(() => {
                document.querySelector('.terminal-container').classList.remove('flicker');
            }, 100);
        }
    }, 2000);
});
