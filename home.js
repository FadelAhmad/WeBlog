const posts = JSON.parse(localStorage.getItem("posts")) || [];
const postsList = document.getElementById("postsList");

function renderPosts(postsToRender) {
  postsList.innerHTML = "";
  if (postsToRender.length === 0) {
    postsList.innerHTML = "<p>No posts yet. Create one!</p>";
    return;
  }
  postsToRender.forEach(post => {
    const div = document.createElement("div");
    div.className = "post-card";
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p class="meta"><b>Category:</b> ${post.category} | <b>Tags:</b> ${post.tags.join(", ")}</p>
      <p>${post.content.substring(0, 100)}...</p>
      <button onclick="viewPost(${post.id})">Read More</button>
    `;
    postsList.appendChild(div);
  });
}

function viewPost(id) {
  window.location.href = `post.html?id=${id}`;
}

renderPosts(posts);