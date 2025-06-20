(function () {

    const inactivityDuration = 1 * 60 * 1000;
    let inactivityTimer;

    function redirectToLogin() {

        window.location.href = '../index.html';
    }

    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(redirectToLogin, inactivityDuration);
    }


    window.addEventListener('mousemove', resetInactivityTimer, false);
    window.addEventListener('mousedown', resetInactivityTimer, false);
    window.addEventListener('keypress', resetInactivityTimer, false);
    window.addEventListener('touchmove', resetInactivityTimer, false);
    window.addEventListener('scroll', resetInactivityTimer, true);
    resetInactivityTimer();
})();