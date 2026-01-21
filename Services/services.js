const track = document.querySelector(".partners-track");
  const logos = Array.from(track.children);

  logos.forEach(logo => {
    const clone = logo.cloneNode(true);
    track.appendChild(clone);
  });