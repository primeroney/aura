window.onload = () => {

  function autoScroll() {
    window.scrollBy({
      top: 300,
      behavior: "smooth"
    });
  }

  function randomClick() {
    const buttons = document.querySelectorAll("button, a");

    if (buttons.length > 0) {
      const random =
        buttons[Math.floor(Math.random() * buttons.length)];

      random.click();
      console.log("Clicked:", random.innerText);
    }
  }

  setInterval(() => {
    autoScroll();
    randomClick();
  }, 3000);

};
