// Capture de l'application : si assets/capture.jpg existe, elle remplace la maquette HTML.
const capture = document.querySelector(".capture");
const showCapture = () => {
  capture.hidden = false;
  document.querySelector(".mock").remove();
};
if (capture.complete && capture.naturalWidth) showCapture();
else capture.addEventListener("load", showCapture, { once: true });
