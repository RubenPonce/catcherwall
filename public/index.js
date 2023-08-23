const link = document.querySelector('#forum');
const modal = document.querySelector('#emailSignUpModal');
document.getElementById('emailSignUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
closeModal();
});
function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}
document.addEventListener('keyup', function(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        closeModal();
    }
});