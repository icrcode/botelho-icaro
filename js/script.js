// Funções para manipulação do terminal
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const loginScreen = document.getElementById('login-screen');
    const mainScreen = document.getElementById('main-screen');
    const loginBtn = document.getElementById('login-btn');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const menuOptions = document.querySelectorAll('.menu-option');
    const backButtons = document.querySelectorAll('.back-btn');
    const datetimeElement = document.getElementById('datetime');
    
    // Adicionar linha de scan
    const terminalScreen = document.querySelector('.terminal-screen');
    const scanLine = document.createElement('div');
    scanLine.classList.add('scan-line');
    terminalScreen.appendChild(scanLine);
    
    // Atualizar data e hora
    function updateDateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        datetimeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    // Atualizar a cada segundo
    setInterval(updateDateTime, 1000);
    updateDateTime();
    
    // Efeito de digitação para textos de boas-vindas
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
                // Adicionar cursor piscante ao final
                const caret = document.createElement('span');
                caret.classList.add('terminal-caret');
                element.appendChild(caret);
                element.style.borderRight = 'none';
            }
        }, 50);
    }
    
    // Aplicar efeito de digitação aos textos de boas-vindas
    const welcomeText = document.getElementById('welcome-text');
    const instructionText = document.getElementById('instruction-text');
    
    typeEffect(welcomeText);
    setTimeout(() => {
        typeEffect(instructionText);
    }, 10000);
    
    // Preencher conteúdo do portfólio com dados reais
    function populatePortfolioContent() {
        // Seção Sobre
        document.getElementById('profile-name').textContent = portfolioData.about.name;
        document.getElementById('profile-title').textContent = portfolioData.about.title;
        document.getElementById('profile-location').textContent = portfolioData.about.location;
        document.getElementById('profile-description').textContent = portfolioData.about.description;
        
        // Educação
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
        
        // Seção Habilidades
        //const skillsGrid = document.getElementById('skills-grid');
        //createDataGrid(skillsGrid, 5, 8);

        //foi uma boa ideia mas não curti como ficou
        
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
                certBadge.title = 'Certificado';
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
        
        // Seção Projetos
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
            projectLink.textContent = 'Ver Projeto';
            projectHeader.appendChild(projectLink);
            
            projectItem.appendChild(projectHeader);
            
            const projectDesc = document.createElement('p');
            projectDesc.textContent = project.description;
            projectItem.appendChild(projectDesc);
            
            const techList = document.createElement('div');
            techList.classList.add('tech-list');
            
            const techLabel = document.createElement('span');
            techLabel.classList.add('tech-label');
            techLabel.textContent = 'Tecnologias: ';
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
        
        // Seção Experiência
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
        
        // Seção Contato
        document.getElementById('contact-email').textContent = portfolioData.contact.email;
        
        const linkedinLink = document.getElementById('contact-linkedin');
        linkedinLink.href = portfolioData.contact.linkedin;
        linkedinLink.textContent = 'in/icarocbotelho';
        
        const githubLink = document.getElementById('contact-github');
        githubLink.href = portfolioData.contact.github;
        githubLink.textContent = 'github.com/icrcode';
    }
    
    // Função de login
    loginBtn.addEventListener('click', function() {
        // Simulação de login (qualquer credencial é aceita)
        if (username.value.trim() !== '' && password.value.trim() !== '') {
            loginScreen.classList.add('hidden');
            mainScreen.classList.remove('hidden');
            
            // Efeito de terminal para o menu principal
            const menuOptions = document.querySelectorAll('.menu-option');
            menuOptions.forEach((option, index) => {
                setTimeout(() => {
                    option.style.opacity = '1';
                }, 200 * index);
            });
        } else {
            // Feedback visual para campos vazios
            if (username.value.trim() === '') {
                username.style.borderColor = 'var(--terminal-error)';
                setTimeout(() => {
                    username.style.borderColor = 'var(--divider-color)';
                }, 1000);
            }
            
            if (password.value.trim() === '') {
                password.style.borderColor = 'var(--terminal-error)';
                setTimeout(() => {
                    password.style.borderColor = 'var(--divider-color)';
                }, 1000);
            }
        }
    });
    
    // Permitir login com Enter
    password.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
    
    // Navegação do menu
    menuOptions.forEach(option => {
        option.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            mainScreen.classList.add('hidden');
            document.getElementById(`${section}-section`).classList.remove('hidden');
        });
    });
    
    // Botões de voltar
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Esconder todas as telas de conteúdo
            document.querySelectorAll('.content-screen').forEach(screen => {
                screen.classList.add('hidden');
            });
            // Mostrar o menu principal
            mainScreen.classList.remove('hidden');
        });
    });
    
    // Navegação por teclado no menu principal
    document.addEventListener('keydown', function(e) {
        if (!mainScreen.classList.contains('hidden')) {
            const key = e.key;
            if (key >= '1' && key <= '5') {
                const index = parseInt(key) - 1;
                if (index < menuOptions.length) {
                    menuOptions[index].click();
                }
            }
        } else if (!loginScreen.classList.contains('hidden')) {
            // Adicionar funcionalidade de tecla Escape para voltar à tela de login
            if (e.key === 'Escape') {
                // Voltar para a tela de login
                document.querySelectorAll('.content-screen').forEach(screen => {
                    screen.classList.add('hidden');
                });
                mainScreen.classList.add('hidden');
                loginScreen.classList.remove('hidden');
                
                // Limpar campos de login
                username.value = '';
                password.value = '';
                
                // Reiniciar efeitos de digitação
                welcomeText.style.width = '100%';
                welcomeText.style.borderRight = '2px solid var(--terminal-green)';
                instructionText.style.width = '100%';
                instructionText.style.borderRight = '2px solid var(--terminal-green)';
                
                // Remover cursores piscantes anteriores
                const carets = document.querySelectorAll('.terminal-caret');
                carets.forEach(caret => caret.remove());
                
                // Reiniciar efeitos de digitação
                typeEffect(welcomeText);
                setTimeout(() => {
                    typeEffect(instructionText);
                }, 2000);
            }
        } else {
            // Adicionar funcionalidade de tecla Escape para voltar ao menu principal
            if (e.key === 'Escape') {
                // Esconder todas as telas de conteúdo
                document.querySelectorAll('.content-screen').forEach(screen => {
                    screen.classList.add('hidden');
                });
                // Mostrar o menu principal
                mainScreen.classList.remove('hidden');
            }
        }
    });
    
    // Função para criar grid de dados (estilo MDR)
    function createDataGrid(container, rows, cols) {
        const grid = document.createElement('div');
        grid.classList.add('data-grid');
        
        // Definir número de colunas
        grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        
        // Criar células
        for (let i = 0; i < rows * cols; i++) {
            const cell = document.createElement('div');
            cell.classList.add('data-cell');
            
            // Gerar número aleatório para cada célula
            const randomNum = Math.floor(Math.random() * 10);
            cell.textContent = randomNum;
            
            grid.appendChild(cell);
        }
        
        container.appendChild(grid);
    }
    
    // Ajustar altura do terminal para tela cheia em dispositivos móveis
    function adjustHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Ajustar altura inicial e em redimensionamentos
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    
    // Preencher o conteúdo do portfólio
    populatePortfolioContent();
});
