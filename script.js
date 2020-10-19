/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

setInterval("setBg()", 32);




 sourceImage = new Image();
        sourceImage.src = "https://cdn.glitch.com/70308672-f2f1-4e27-b4e0-9f58a0b7be15%2Fshrektransparent.png?v=1603096230719";




        function cloneImageA () {
            imageA = new Image();
            imageA.src = sourceImage.src;
            document.getElementById("content").appendChild(imageA);
        }