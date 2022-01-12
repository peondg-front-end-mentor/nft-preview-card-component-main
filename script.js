let imageSection = document.getElementById('img-section');
let eyeImage = document.getElementById('eyeImage');

imageSection.addEventListener('onmouseover', function () {
  eyeImage.style.display = 'block';
});

imageSection.addEventListener('onmouseout', function () {
  eyeImage.style.display = 'none';
});
