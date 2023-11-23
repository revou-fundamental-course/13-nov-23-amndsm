<script>
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>
</head>
<body>

<h2>JavaScript Validation</h2>

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="SEND">
</form>

{/* var i = 0
function bannerSlide() {
  i += 1
  console.log("banner slide",i)
}

setInterval((bannerSlide, 1000) => {
  
}, interval); */}