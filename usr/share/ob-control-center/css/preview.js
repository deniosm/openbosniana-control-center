  document.addEventListener("DOMContentLoaded", function () {
    const previewBox = document.createElement("div");
    previewBox.id = "preview-overlay";
    document.body.appendChild(previewBox);

    document.querySelectorAll(".app.button.flatpak").forEach(el => {
      const previewImg = el.getAttribute("data-preview");

      el.addEventListener("mouseenter", () => {
        previewBox.style.backgroundImage = `url('${previewImg}')`;
        previewBox.style.display = "block";
      });

      el.addEventListener("mouseleave", () => {
        previewBox.style.display = "none";
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const previewBox = document.createElement("div");
    previewBox.id = "preview-overlay1";
    document.body.appendChild(previewBox);

    document.querySelectorAll(".app.button.flatpak").forEach(el => {
      const previewImg = el.getAttribute("data-preview1");

      el.addEventListener("mouseenter", () => {
        previewBox.style.backgroundImage = `url('${previewImg}')`;
        previewBox.style.display = "block";
      });

      el.addEventListener("mouseleave", () => {
        previewBox.style.display = "none";
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const previewBox = document.createElement("div");
    previewBox.id = "preview-overlay2";
    document.body.appendChild(previewBox);

    document.querySelectorAll(".app.button.flatpak").forEach(el => {
      const previewImg = el.getAttribute("data-preview2");

      el.addEventListener("mouseenter", () => {
        previewBox.style.backgroundImage = `url('${previewImg}')`;
        previewBox.style.display = "block";
      });

      el.addEventListener("mouseleave", () => {
        previewBox.style.display = "none";
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const previewBox = document.createElement("div");
    previewBox.id = "preview-overlay3";
    document.body.appendChild(previewBox);

    document.querySelectorAll(".app.button.flatpak").forEach(el => {
      const previewImg = el.getAttribute("data-preview3");

      el.addEventListener("mouseenter", () => {
        previewBox.style.backgroundImage = `url('${previewImg}')`;
        previewBox.style.display = "block";
      });

      el.addEventListener("mouseleave", () => {
        previewBox.style.display = "none";
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const previewBox = document.createElement("div");
    previewBox.id = "preview-overlay4";
    document.body.appendChild(previewBox);

    document.querySelectorAll(".app.button.flatpak").forEach(el => {
      const previewImg = el.getAttribute("data-preview4");

      el.addEventListener("mouseenter", () => {
        previewBox.style.backgroundImage = `url('${previewImg}')`;
        previewBox.style.display = "block";
      });

      el.addEventListener("mouseleave", () => {
        previewBox.style.display = "none";
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const previewBox = document.createElement("div");
    previewBox.id = "preview-overlay5";
    document.body.appendChild(previewBox);

    document.querySelectorAll(".app.button.flatpak").forEach(el => {
      const previewImg = el.getAttribute("data-preview5");

      el.addEventListener("mouseenter", () => {
        previewBox.style.backgroundImage = `url('${previewImg}')`;
        previewBox.style.display = "block";
      });

      el.addEventListener("mouseleave", () => {
        previewBox.style.display = "none";
      });
    });
  });
