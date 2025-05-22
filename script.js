document.addEventListener('DOMContentLoaded', () => {
    const postGrid = document.getElementById('postGrid');
    if (postGrid) {
        const posts = Array.from(postGrid.children);
        posts.forEach((post, index) => {
            post.style.animationDelay = `${index * 0.1}s`;
        });
    }
});

function searchPosts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const postGrid = document.getElementById('postGrid');
    const posts = postGrid.getElementsByClassName('post-card');

    Array.from(posts).forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        const excerpt = post.querySelector('.excerpt').textContent.toLowerCase();
        if (title.includes(searchInput) || excerpt.includes(searchInput)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    });
}

function sortPosts() {
    const sortValue = document.getElementById('sort').value;
    const postGrid = document.getElementById('postGrid');
    const posts = Array.from(postGrid.getElementsByClassName('post-card'));

    if (sortValue === 'newest') {
        posts.sort((a, b) => new Date(b.querySelector('.date').dataset.date) - new Date(a.querySelector('.date').dataset.date));
    } else if (sortValue === 'oldest') {
        posts.sort((a, b) => new Date(a.querySelector('.date').dataset.date) - new Date(b.querySelector('.date').dataset.date));
    } else if (sortValue === 'popular') {
        posts.sort(() => Math.random() - 0.5); // Placeholder for popularity sorting
    }

    postGrid.innerHTML = '';
    posts.forEach(post => postGrid.appendChild(post));
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});