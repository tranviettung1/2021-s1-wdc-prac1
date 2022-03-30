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
    // const parentMessage = document.getElementById("list-msg").value;
    const post = document.getElementById("posts");
  
    const postTime = document.createElement("div");
    postTime.innerText = new Date();
    postTime.className = 'post-time';

    const postContent = document.createElement('p');
    postContent.innerText = msg;
    postContent.className = 'post-content';
    // const id = 'msg-' + msgId;
    // msgTemplate.id = id;
    // msgTemplate.innerHTML = `
    //             <div class='post-time'>${new Date()}</div>
    //             <p class='post-content'>${msg}</p>
    //   `;
    // msgTemplate.className = parentMessage !== '-1' ? 'children-msg' : 'wrapper-message'
  
    // msgId++;
  
    post.appendChild(postTime);
    post.appendChild(postContent);
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
