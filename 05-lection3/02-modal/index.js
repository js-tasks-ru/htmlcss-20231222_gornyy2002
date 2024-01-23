(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const blackout = document.querySelector('.modalBlackout');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        blackout.classList.toggle('modalBlock_view');
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        blackout.classList.remove('modalBlock_view');
        document.body.overflow = 'initial';
    });
})();