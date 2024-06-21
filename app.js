
// App code

var browse = document.querySelector('.upload-area');
var fileInput = document.querySelector('.file-input');

browse.addEventListener('click', () => {
  fileInput.click();
});
fileInput.addEventListener('change', handleInputFile);

function handleInputFile(e) {
  console.log(e.target.files)
  let size = (e.target.files[0].size / 1000) / 1000;
  var element = document.createElement('div');
  element.className = 'file-item';
  element.innerHTML = `<div class="status">
          <span>${e.target.files[0].name.slice(0,20)+'...'}</span>
          <span>${size.toFixed(3)}</span>
          <span style="color:blue;" id="upload-status">Uploading</span>
        </div>`;
  var allFiles = document.getElementById('file-items');

  allFiles.appendChild(element);
  upload(e);
}

function upload() {
  var status = document.getElementById('upload-status');

  setTimeout(() => {
    status.textContent = 'Uploaded';
    status.style.color = 'green';
    status.removeAttribute('id');
  }, 3000);
}


