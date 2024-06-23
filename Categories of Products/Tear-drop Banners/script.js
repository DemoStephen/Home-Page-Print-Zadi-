function toggleCustomOption(selectElement) {
    const customOptionDiv = document.getElementById('customOptionDiv-' + selectElement.id);
    if (selectElement.value === 'custom') {
        customOptionDiv.style.display = 'block';
    } else {
        customOptionDiv.style.display = 'none';
    }
}


document.getElementById('optionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selects = document.querySelectorAll('select');
    let finalOptions = [];
    selects.forEach(select => {
        let selectedOption = select.value;
        if (selectedOption === 'custom') {
            selectedOption = document.getElementById('customOption-' + select.id).value;
        }
        finalOptions.push(selectedOption);
    });
    alert('You selected: ' + finalOptions.join(', '));
});