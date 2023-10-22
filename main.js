function searchUserGitHub() {
    const username = document.getElementById("usernameInput").value;
    const url = `https://api.github.com/users/${username}`;

    axios.get(url)
        .then(response => {
            const data = response.data;
            const nombreUsuario = data.name || "Not available";
            const numRepos = data.public_repos || 0;
            const avatarURL = data.avatar_url || "";

            document.getElementById("userName").textContent = nombreUsuario;
            document.getElementById("numRepos").textContent = numRepos;
            document.getElementById("userAvatar").src = avatarURL;
        })
        .catch(error => {
            console.error("Error al buscar el usuario:", error);
            alert("Usuario no encontrado");
        });
}
