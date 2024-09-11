const base_url = "https://jsonplaceholder.typicode.com/users";

const getUser = async () => {
    try {
        const res = await fetch(base_url);
        const users = await res.json();
        const user = users[Math.floor(Math.random() * users.length)];
        
        document.getElementById('user-details').innerHTML = `
            <h3>${user.name}</h3>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        `
    } catch {
        document.getElementById('user-details').textContent = "Error loading user data."
    }
};

document.getElementById('generate-user').onclick = getUser;
