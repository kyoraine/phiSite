function protectpasscode() {
  var a = document.getElementById('input');
  var b = document.getElementById('tutorial');
  if (a.value === 'nya') {
     b.style.display = 'block';
  } else {
     b.style.display = 'none';
  }
}