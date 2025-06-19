document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMLoaded");

  const startLayout = document.getElementById('start-layout');
  const quizLayout = document.getElementById('quiz-layout');
  const endLayout = document.getElementById('end-layout');
  const startBtn = document.getElementById('start-button');
  const quizBtns = document.querySelectorAll('.answer-button');
  const retryBtn = document.getElementById('retry-button');

  function showLayout(layoutToShow) {
    startLayout.style.display = 'none';
    quizLayout.style.display = 'none';
    endLayout.style.display = 'none';
    layoutToShow.style.display = 'block';
    // Footer is always visible, so no need to toggle it
  }

  // Show start-layout at the beginning
  showLayout(startLayout);

  startBtn.addEventListener('click', () => {
    showLayout(quizLayout);
  });

  quizBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showLayout(endLayout);
    });
  });

  retryBtn.addEventListener('click', () => {
    showLayout(quizLayout);
  });
});