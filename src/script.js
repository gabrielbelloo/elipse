document.addEventListener('DOMContentLoaded', function() {
    const headerLinks = document.querySelectorAll('header a');

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


function openTab(evt, tabName) {
    let i, tabContent, tabLinks;

    tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(content => content.classList.remove("active"));

    tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => link.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}