const pageLogic = () => {
    const userListDiv = this.document.getElementById("user-list");
    const loadMoreBtn = this.document.getElementById("btn-load-more");
    let currentPage = 0;

    const fetchUsers = (page = 1) => {
        currentPage = page;

        return fetch('/users?page=' + page)
            .then(response => response.json() || [])
            .catch(err => console.log('Failed retrieving information', err));
    }

    const getUserTemplate = (user) => {
        return `
            <div class="col-sm-6 col-md-4 col-lg-3" style="margin-top:20px">
                <div class="card">
                    <img class="card-img-top" src="${user.picture.large}" alt="Avatar User ${user.name.title}">
                    <div class="card-body">
                        <h5 class="card-text">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                        <p class="card-text">${user.gender}</p>
                        <p class="card-text">
                            <a href="mailto:${user.email}" class="btn btn-primary">Send Email</a>
                        </p>
                    </div>
                </div>
            </div>
        `
    }

    loadMoreBtn.onclick = () => {
        fetchUsers(currentPage + 1)
            .then(users => users.map(user => getUserTemplate(user)))
            .then(usersTemplates => userListDiv.insertAdjacentHTML("beforeend", usersTemplates.join(' ')));

    }

    loadMoreBtn.click();
}

window.onload = pageLogic();
