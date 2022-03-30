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

function createMessageNode({ content, color }) {
  const postTime = document.createElement("div");
  postTime.innerText = new Date();
  postTime.className = "post-time";

  const postContent = document.createElement("p");
  postContent.innerText = content;
  postContent.className = "post-content";

  if (color) {
    postContent.style.color = color;
  }

  const postWrap = document.createElement('div');
  postWrap.appendChild(postTime);
  postWrap.appendChild(postContent);
  postWrap.className = 'post';
  postWrap.id = 'msg-' + msgId;

  msgId++;

  return postWrap;
}

function createMsg() {
  const msg = document.getElementById("msg-input").value;
  const post = document.getElementById("posts");
  const colors = document.getElementsByName('color');
  const quantity = document.getElementById('quantity').value;

  let color = null;
  for (let i = 0; i< colors.length; i++) {
    if(colors[i].checked) {
      color = colors[i].value;
      break;
    }
  }

  if (quantity > 0) {
    for (let i = 0; i < quantity; i++) {
      const postNode = createMessageNode({content: msg, color});
      post.appendChild(postNode);
    }
  }
}

function onMenuClick() {
  const main = document.getElementById("main");
  const menu = document.getElementById("menu");

  if (main.classList.contains("hidden")) {
    main.classList.remove("hidden");
    return menu.classList.add("hidden");
  }

  main.classList.add("hidden");
  return menu.classList.remove("hidden");
}

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function changeColor(){
  const backgroundColor = document.getElementById('background-color-input').value;

  document.body.style.backgroundColor = backgroundColor;
}
const processChange = debounce(() => changeColor(), 300);
