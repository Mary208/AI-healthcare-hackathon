document.getElementById('triageForm').addEventListener('submit', function(event) {
    const symptoms = document.getElementById('symptoms').value.trim();
    const age = document.getElementById('age').value.trim();

    if (!symptoms || !age) {
        alert('Please fill in all fields');
        event.preventDefault(); // Prevent form submission
    }
});
