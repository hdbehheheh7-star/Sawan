const input = document.getElementById("videoInput");
const button = document.getElementById("processBtn");
const statusText = document.getElementById("status");

button.addEventListener("click", () => {
  if (!input.files.length) {
    statusText.textContent = "Please select a video file.";
    return;
  }

  const file = input.files[0];
  statusText.textContent = "Processing video...";

  // Simulated export (legal demo)
  setTimeout(() => {
    const url = URL.createObjectURL(file);

    const a = document.createElement("a");
    a.href = url;
    a.download = "exported-" + file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    statusText.textContent = "Export complete. File downloaded.";
  }, 1500);
});
