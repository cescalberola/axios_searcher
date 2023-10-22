function searchUserGitHub() {
    const username = document.getElementById("usernameInput").value;

    axios.get("https://docs.github.com/rest/users/users#get-a-user")
        .then(res => {
            const data = res.data;
            const UserName = data.name || "Not available";
            const numRepos = data.public_repos || 0;
            const avatarURL = data.avatar_url || "";

            document.getElementById("userName").textContent = UserName;
            document.getElementById("numRepos").textContent = numRepos;
            document.getElementById("userAvatar").src = avatarURL;
        })
        .catch(error => {
            console.error("Error al buscar el usuario:", error);
            alert("Usuario no encontrado");
        });
}
