const url = document.URL
const ar5ivUrl = url.replace("arxiv.org", "ar5iv.org");

const button = document.createElement("button");
button.id = "ar5iv_button";
button.innerHTML = "ar<font color='red'>5</font>iv";
button.onclick = () => {
    window.open(ar5ivUrl, "_blank").focus();
};
const headerElement = document.querySelector("h1.title");
headerElement.appendChild(button);
