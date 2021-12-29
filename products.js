window.addEventListener('click', (a) => {

    const pika = document.createElement('div');
    pika.className = 'AnimationClick';
    pika.style.top = `${a.pageY - 50}px`;
    pika.style.left = `${a.pageX - 50}px`;
    document.body.appendChild(pika);

    setTimeout(() => {
        pika.remove();
    }, 1500)
})
