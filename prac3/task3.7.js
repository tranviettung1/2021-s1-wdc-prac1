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

function addListMsgItem({ id, msg }) {
    const select = document.getElementById('list-msg');
    const option = document.createElement('option');
    option.text = msg;
    option.value = id;

    return select.options.add(option);
}

function createMsg() {
  const msg = document.getElementById("msg-input").value;
  const parentMessage = document.getElementById("list-msg").value;
  const post = document.getElementById("posts");

  const msgTemplate = document.createElement("div");
  const id = 'msg-' + msgId;
  msgTemplate.id = id;
  msgTemplate.innerHTML = `
            <div classname='msg-time'>${new Date()}</div>
            <p classname='message'>${msg}</p>
    `;
  msgTemplate.className = parentMessage !== '-1' ? 'children-msg' : null

  msgId++;

  if (parentMessage === "-1") {
    addListMsgItem({ id: id, msg: msg })
    return post.appendChild(msgTemplate);
  }

  addListMsgItem({ id: id, msg: msg });
  const parrentNode = document.getElementById(parentMessage);
  return parrentNode.appendChild(msgTemplate);
}
