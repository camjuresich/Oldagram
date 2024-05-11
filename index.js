const postsDB = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const createPostFromData = ({name, username, location, avatar, post, comment, likes}) => {
    // Node construction
    const container = document.createElement('div')
    const postEl = document.createElement('section')
    const postHeading = document.createElement('div')
    const userImg = document.createElement('img')
    const userInfo = document.createElement('div')
    const userNameEl = document.createElement('h3')
    const userLocation = document.createElement('p')
    const postImgContainer = document.createElement('div')
    const postImg = document.createElement('img')
    const postFooter = document.createElement('div')
    const interactionsContainer = document.createElement('div')
    const iconLike = document.createElement('img')
    const iconComment = document.createElement('img')
    const iconDm = document.createElement('img')
    const likesEl = document.createElement('p')
    const commentsList = document.createElement('ul')
    const commentEl = document.createElement('li')
    const usernameSpan = document.createElement('span')

    // Classing
    container.classList.add('container')
    postEl.classList.add('post')
    postHeading.classList.add('post-heading')
    userInfo.classList.add('user-info')
    postImgContainer.classList.add('post-img-container')
    postFooter.classList.add('post-footer')
    interactionsContainer.classList.add('interactions-container')
    iconLike.classList.add('icon')
    iconComment.classList.add('icon')
    iconDm.classList.add('icon')
    likesEl.classList.add('likes')
    commentsList.classList.add('comments-list')
    commentEl.classList.add('comment')
    usernameSpan.classList.add('user-name')
    postImg.classList.add('post-img')
    userImg.classList.add('user-img')
    userNameEl.classList.add('user-name')
    userLocation.classList.add('user-location')

    //Nesting
    container.appendChild(postEl)
    postEl.appendChild(postHeading)
    postHeading.appendChild(userImg)
    postHeading.appendChild(userInfo)
    userInfo.appendChild(userNameEl)
    userInfo.appendChild(userLocation)
    postEl.appendChild(postImgContainer)
    postImgContainer.appendChild(postImg)
    postEl.appendChild(postFooter)
    postFooter.appendChild(interactionsContainer)
    interactionsContainer.appendChild(iconLike)
    interactionsContainer.appendChild(iconComment)
    interactionsContainer.appendChild(iconDm)
    postFooter.appendChild(likesEl)
    postFooter.appendChild(commentsList)
    commentsList.appendChild(commentEl)
    commentEl.appendChild(usernameSpan)
    
    
    // insert data
    iconLike.src = "images/icon-heart.png"
    iconComment.src = "images/icon-comment.png"
    iconDm.src = "images/icon-dm.png" 
    userImg.src = avatar
    userNameEl.textContent = name
    userLocation.textContent = location
    postImg.src = post
    usernameSpan.textContent = username;
    commentEl.append(` ${comment}`)
    likesEl.textContent = `${likes} likes`
    return container;
}

const main = document.getElementById('main-content')
postsDB.forEach(el => {
    main.appendChild(createPostFromData(el))
})
// main.appendChild(createPostFromData(postsDB[1]))

