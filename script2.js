var gezgin = document.querySelector('.gezgin');
        let animolink = document.querySelector(".animolink"); 
        animolink.addEventListener("mousemove", function(event) 
          { 
            let alan = animolink.getBoundingClientRect(); 
            let dblMouseX = event.clientX - alan.left; 
            let dblMouseY = event.clientY - alan.top; 
            let dblGezginX = gezgin.offsetLeft;
            let dblGezginY = gezgin.offsetTop;
            let dblFarkX = dblMouseX - dblGezginX;
            let dblFarkY = dblMouseY - dblGezginY;
            let dblKatsayi = 0.08;
            gezgin.style.left = (dblGezginX + (dblFarkX * dblKatsayi)) + "px";
            gezgin.style.top = (dblGezginY + (dblFarkY * dblKatsayi)) + "px";
          }
        );