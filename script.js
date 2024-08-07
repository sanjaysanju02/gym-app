let currentIndex = 0;
const contents = document.querySelectorAll(".content");
const totalContents = contents.length;

function showContent(index) {
  contents.forEach((content, i) => {
    content.classList.toggle("hidden", i !== index);
  });
}

function toggleContent(direction) {
  if (direction === "up") {
    currentIndex = (currentIndex - 1 + totalContents) % totalContents;
  } else if (direction === "down") {
    currentIndex = (currentIndex + 1) % totalContents;
  }
  showContent(currentIndex);
}

// Initialize the first content
showContent(currentIndex);
