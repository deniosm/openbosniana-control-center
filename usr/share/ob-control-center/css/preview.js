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

