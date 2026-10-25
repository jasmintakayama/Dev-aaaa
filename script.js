function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}
// close the sidebar when any link in it is tapped
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', hideSidebar);
});

// close it again when a page is restored with the Back button
window.addEventListener('pageshow', hideSidebar);
