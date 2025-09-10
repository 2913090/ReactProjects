const postsData = [{title: "Приветствие", text: "Меня зовут Кирилл и я программист", isFavorite: false}, 
    {title: "Интересы вне учебы", text: "3D моделирование и 3D печать", isFavorite: true}, 
    {title: "Я кошатник", text: "У меня два кота Тимофей и Бенедикт", isFavorite: false}];
const postsContainer = document.getElementById("posts-container");
const renderPosts = (postsData) => {
    const postsHTML = postsData.map((post) => {
    const {title, text, isFavorite} = post;
    const favoriteStatus = isFavorite ? "is-favorite" : "";
    return `
        <div class="post ${favoriteStatus}">
            <h3>${title}</h3>
            <p>${text}</p>
        </div>
    `;
    }).join('');
    postsContainer.innerHTML = postsHTML;
}
renderPosts(postsData);