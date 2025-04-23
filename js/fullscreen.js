// Script para ativar modo de tela cheia automaticamente
document.addEventListener('DOMContentLoaded', function () {
    // Função para ativar o modo de tela cheia
    function requestFullscreen() {
        const element = document.documentElement;

        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { /* Safari */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE11 */
            element.msRequestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
            element.mozRequestFullScreen();
        }
    }

    // Ativa o modo de tela cheia após um pequeno atraso
    setTimeout(requestFullscreen, 1000);

    // Tenta ativar novamente em caso de interação do usuário
    document.addEventListener('click', function () {
        if (!document.fullscreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement &&
            !document.mozFullScreenElement) {
            requestFullscreen();
        }
    }, { once: true });
});
