const scrollToSection = (targetId) => {
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });
  }
};

export default scrollToSection;
