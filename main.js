function buscarUsuarioGitHub() {
    const username = document.getElementById("usernameInput").value;
    const url = `https://api.github.com/users/${username}`;

    axios.get(url)
        .then(response => {
            const data = response.data;
            const nombreUsuario = data.name || "No disponible";
            const numRepos = data.public_repos || 0;
            const avatarURL = data.avatar_url || "";

            document.getElementById("nombreUsuario").textContent = nombreUsuario;
            document.getElementById("numRepos").textContent = numRepos;
            document.getElementById("avatarUsuario").src = avatarURL;
        })
        .catch(error => {
            console.error("Error al buscar el usuario:", error);
            alert("Usuario no encontrado o error en la solicitud.");
        });
}
