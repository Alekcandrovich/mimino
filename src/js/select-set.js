function customSelect() {
    const customSelects = document.querySelectorAll('.js-select');

    if (customSelects.length > 0) {
        customSelects.forEach(select => {
        NiceSelect.bind(select, {
        searchable: true,
        placeholder: 'select',
        searchtext: 'zoek',
        selectedtext: 'geselecteerd',
        });
    });
    }
}
customSelect();
