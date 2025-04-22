// Efeitos dinâmicos para simular monitor CRT

// Função para adicionar efeito de distorção e curvatura dinâmica
function applyDynamicCRTEffect() {
    const crtScreen = document.querySelector('.crt-screen');
    const crtContent = document.querySelector('.crt-content');
    const scanlines = document.querySelector('.scanlines');
    const edges = document.querySelector('.crt-edges');
    
    // Adiciona distorção leve quando o mouse se move
    // document.addEventListener('mousemove', function(e) {
    //     const x = e.clientX / window.innerWidth;
    //     const y = e.clientY / window.innerHeight;
        
    //     // Pequena distorção baseada na posição do mouse
    //     crtContent.style.transform = `
    //         perspective(900px) 
    //         rotateX(${1 + y}deg) 
    //         rotateY(${x - 0.5}deg) 
    //         scale(0.98, 0.98)
    //     `;
    // });
    
    // Efeito de desligamento rápido ocasional
    function randomGlitch() {
        // Chance de 5% de um glitch ocorrer
        if (Math.random() < 0.05) {
            // Adiciona classe para distorção
            crtContent.classList.add('glitch');
            
            // Remove após um curto período
            setTimeout(function() {
                crtContent.classList.remove('glitch');
            }, 150);
        }
        
        // Agendar próximo glitch
        setTimeout(randomGlitch, Math.random() * 10000 + 2000);
    }
    
    // Adiciona efeito de flicker (cintilação) nos elementos
    function addFlickerEffect() {
        const elements = document.querySelectorAll('.terminal-container, .terminal-btn, .menu-option');
        
        elements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                this.style.animation = 'flicker 0.15s infinite';
                
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            });
        });
    }
    
    // Efeito de linhas de varredura em movimento
    function animateScanlines() {
        let position = 0;
        
        setInterval(() => {
            position += 0.5;
            if (position > 4) position = 0;
            
            if (scanlines) {
                scanlines.style.backgroundPosition = `0 ${position}px`;
            }
        }, 50);
    }
    
    // Adiciona aberração cromática nos cantos da tela
    function addChromaticAberration() {
        let intensity = 0.05;
        
        // Pulsa a intensidade da aberração
        setInterval(() => {
            intensity = 0.05 + Math.random() * 0.03;
            
            if (edges) {
                edges.style.boxShadow = `
                    inset 0 0 100px 40px rgba(0, 0, 0, 0.8),
                    inset 0 0 ${10 + Math.random() * 5}px ${5 + Math.random() * 3}px rgba(255, 255, 255, ${intensity})
                `;
            }
        }, 2000);
    }
    
    // Inicializa todos os efeitos
    addFlickerEffect();
    animateScanlines();
    addChromaticAberration();
    
    // Inicia glitches aleatórios após um tempo
    setTimeout(randomGlitch, 5000);
}

// Inicia os efeitos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um pequeno atraso inicial para simular o ligamento do monitor
    setTimeout(() => {
        document.body.classList.add('on');
        
        // Inicializa os efeitos dinâmicos
        applyDynamicCRTEffect();
    }, 1000);
}); 