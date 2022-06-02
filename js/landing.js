console.log("Java script code active");

//Index for current background
let currentIndexBackgroundImage = 2;

setInterval("loadNewBackground()", 4500);


function loadNewBackground()
{
  if (currentIndexBackgroundImage == 7)
    currentIndexBackgroundImage = 1;

  //Create string to load correct image
  let pathToBackGroundImage = "url('./img/0" + currentIndexBackgroundImage + ".jpg')";
  console.log("Path to image is:" + pathToBackGroundImage);
  console.log("Changing background to:" + pathToBackGroundImage);
  document.body.style.backgroundImage = pathToBackGroundImage;
  currentIndexBackgroundImage++;
}
