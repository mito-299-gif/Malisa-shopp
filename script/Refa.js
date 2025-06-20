(function () {

    const inactivityDuration = 5 * 60 * 1000;
    let inactivityTimer;

    function redirectToLogin() {

        window.location.href = '../index/login.html';
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