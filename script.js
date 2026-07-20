```javascript
// スクロールフェード

const sections = document.querySelectorAll(".content");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const top = section.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }

  });

});

// 初期状態
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "1s";
});
```
