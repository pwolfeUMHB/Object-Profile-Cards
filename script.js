let user1 = { 
    name: "Anthony Townes",
    job: "Proffesional Basketball Player",
    picture: "https://th.bing.com/th/id/OIP.Zv_3H6VjEdyHL8aHFFmN-gHaEK?rs=1&pid=ImgDetMain",
};

function User(name, job, picture) {
    this.name = name;
    this.job = job;
    this.picture = picture;
};


let user2 = new User("Bob Smith", "Gaming Developer", "https://th.bing.com/th/id/OIP.pWBak8C2SyoN98j1C0zq6AHaFj?rs=1&pid=ImgDetMain");


let userPrototype = {
    name: 'Unknown',
    job:  'Unknown',
    picture: 'default.jpg'
};


let user3 = Object.create(userPrototype);
user3.name = "Breaching";
user3.job = "Content Creator";
user3.picture = "https://th.bing.com/th/id/OIP.Qdg0eS68LNPT6CwnBy_pGwHaEK?rs=1&pid=ImgDetMain";

function createProfileCard(user) {
    let card = document.createElement('div');
    card.className = 'profile-card';

    let img = document.createElement('img');
    img.src = user.picture;
    card.appendChild(img);

    let name = document.createElement('h2');
    name.textContent = user.name;
    card.appendChild(name);

    let job = document.createElement('p');
    job.textContent = user.job;
    card.appendChild(job);

    return card;
}
document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('profilesContainer');
    let users = [user1, user2, user3];

    users.forEach(user => {
        let card = createProfileCard(user);
        container.appendChild(card);
    });
});
