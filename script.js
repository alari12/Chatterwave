// Glow Button Hover Effect
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.6)';
  });

  button.addEventListener('mouseout', () => {
    button.style.boxShadow = 'none';
  });
});