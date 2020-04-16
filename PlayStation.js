window.onscroll = function() {
	backTop()
};

function backTop() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("backTop").style.display = "block";
  } else {
  	document.getElementById("backTop").style.display = "none";
  }
}