const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment:
            "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
    },
];

const mainEl = document.getElementById("main-el");

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    const section = document.createElement("section");
    section.classList.add("container");

    if (i !== posts.length - 1)
        section.classList.add("border-bottom-10px-gray");

    const postLabel = document.createElement("div");
    postLabel.classList.add("post-label");

    const avatar = document.createElement("img");
    avatar.src = post.avatar;
    avatar.classList.add("avatar");
    avatar.alt = `${post.username}'s avatar`;

    const div = document.createElement("div");
    const boldText = document.createElement("p");
    boldText.classList.add("bold-text");
    boldText.textContent = post.name;
    const smallText = document.createElement("p");
    smallText.classList.add("small-text");
    smallText.textContent = post.location;
    div.appendChild(boldText);
    div.appendChild(smallText);

    postLabel.appendChild(avatar);
    postLabel.appendChild(div);

    const postedImg = document.createElement("img");
    postedImg.src = post.post;
    postedImg.classList.add("posted-img");
    postedImg.alt = `${post.username}'s photo`;

    const postLabel2 = document.createElement("div");
    postLabel2.classList.add("post-label");

    const icon1 = document.createElement("img");
    icon1.src = "images/icon-heart.png";
    icon1.classList.add("icon");
    icon1.alt = "heart icon";

    let likes = post.likes;

    const likePost = () => {
        likes++;
        boldText2.textContent = `${likes} likes`;
        icon1.removeEventListener("click", likePost);
        icon1.classList.add("red-icon");
    };

    icon1.addEventListener("click", likePost);

    const icon2 = document.createElement("img");
    icon2.src = "images/icon-comment.png";
    icon2.classList.add("icon");
    icon2.alt = "comment icon";

    const icon3 = document.createElement("img");
    icon3.src = "images/icon-dm.png";
    icon3.classList.add("icon");
    icon3.alt = "message icon";

    postLabel2.appendChild(icon1);
    postLabel2.appendChild(icon2);
    postLabel2.appendChild(icon3);

    const boldText2 = document.createElement("p");
    boldText2.classList.add("bold-text");

    if (post.likes === 1) {
        boldText2.textContent = `${post.likes} like`;
    } else {
        boldText2.textContent = `${post.likes} likes`;
    }

    const pTag = document.createElement("p");
    pTag.innerHTML = `<span class="bold-text">${post.username}</span> ${post.comment}`;

    section.appendChild(postLabel);
    section.appendChild(postedImg);
    section.appendChild(postLabel2);
    section.appendChild(boldText2);
    section.appendChild(pTag);

    mainEl.appendChild(section);
}
