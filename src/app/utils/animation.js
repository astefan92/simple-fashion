const animate = (element) => {
    const elementClone = element.cloneNode(true);
    elementClone.className = 'zoom';
    document.getElementById('appHeader').appendChild(elementClone);
}

export default animate;
