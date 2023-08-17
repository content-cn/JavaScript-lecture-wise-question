function changeBackgroundColor(selector) {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "yellow";
      elements[i].style.color = "black";
    }
  }