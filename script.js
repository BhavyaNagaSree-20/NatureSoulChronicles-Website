function showPage(pageId) {
    document.querySelectorAll('.detail-view').forEach(function(v) {
        v.style.display = 'none';
    });
    var panel = document.getElementById('subcategory-panel');
    if (panel) panel.style.display = 'none';
    var target = document.getElementById('page-' + pageId);
    if (target) {
        target.style.display = 'block';
        window.scrollTo(0, 0);
    }
}

function showSubCategory(id) {
    document.querySelectorAll('.sub-section').forEach(function(s) {
        s.style.display = 'none';
    });
    var panel = document.getElementById('subcategory-panel');
    if (panel) panel.style.display = 'block';
    var target = document.getElementById('sub-' + id);
    if (target) target.style.display = 'block';
}

function closeSubCategory() {
    var panel = document.getElementById('subcategory-panel');
    if (panel) panel.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var logo = document.querySelector('.nav-logo');
    if (logo) logo.addEventListener('click', function() { showPage('home'); });
});
