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
  
    const msgTemplate = document.createElement("div");
    const id = 'msg-' + msgId;
    msgTemplate.id = id;
    msgTemplate.innerHTML = `
              <div class='message'>
                <div class='post-time'>${new Date()}</div>
                <p class='post-content'>${msg}</p>
              </div>
      `;
    msgTemplate.className = parentMessage !== '-1' ? 'children-msg' : 'wrapper-message'
  
    msgId++;
  
    post.appendChild(msgTemplate);
  }
