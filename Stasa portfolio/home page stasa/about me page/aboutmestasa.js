function hideAnimationAndShowContent() {
    const animationWrapper = document.getElementById('animation-wrapper');
    const contentWrapper = document.getElementById('content-wrapper');
   
    animationWrapper.style.display = 'none';
    contentWrapper.style.display = 'block';
   }
   setTimeout(hideAnimationAndShowContent, 1000);
   