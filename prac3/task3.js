let msgId = 0;

function incMcount() {
  var num = document.getElementById("mcount").innerText;
  if (num === "") {
    num = 0;
  } else {
    num = parseInt(num, 10);
  }
  document.getElementById("mcount").innerText = num + 1;
}

function createMsg() {
    const msg = document.getElementById("msg-input").value;
    const parentMessage = document.getElementById("list-msg").value;
    const post = document.getElementById("posts");
  
    const blogPost = document.createElement("div");

    const id = 'msg-' + msgId;
    blogPost.id = id;
    blogPost.innerHTML = `
                <div class='post-time'>${new Date()}</div>
                <p class='post-content'>${msg}</p>
      `;
    blogPost.className = 'blog-post'
  
    msgId++;
  
    post.appendChild(blogPost);
}

function onMenuClick() {
    const main = document.getElementById('main');
    const menu = document.getElementById('menu');

    if (main.classList.contains('hidden')) {
        main.classList.remove('hidden');
        return menu.classList.add('hidden');
    }

    main.classList.add('hidden');
    return menu.classList.remove('hidden');
}
