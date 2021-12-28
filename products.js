window.addEventListener('click', (a) => {

    const rond = document.createElement('div');
    rond.className = 'AnimationClick';
    rond.style.top = `${a.pageY - 50}px`;
    rond.style.left = `${a.pageX - 50}px`;
    document.body.appendChild(rond);

    setTimeout(() => {
       rond.remove();
   }, 1500)
})
 