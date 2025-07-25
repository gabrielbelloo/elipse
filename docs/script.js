document.addEventListener('DOMContentLoaded', function() {
    const headerLinks = document.querySelectorAll('.header-subsection a');

    headerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            headerLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.add('dimmed');
                }
            });
        });

        link.addEventListener('mouseleave', () => {
            headerLinks.forEach(otherLink => {
                otherLink.classList.remove('dimmed');
            });
        });
    });
});

function removeLeftClass() {
if (window.innerWidth < 1000) {
  document.getElementById('features-h1').classList.remove('left');
}
}