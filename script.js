const input = document.getElementById('photo-input');
const img = document.getElementById('profile-pic');

if (input) {
  input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    img.src = url;
    img.alt = file.name;
    img.onload = () => URL.revokeObjectURL(url);
  });
}
