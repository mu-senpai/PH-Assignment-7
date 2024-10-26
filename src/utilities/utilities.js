const getEmail = id => {
    return document.getElementById(id).value;
}

const vacantInput = id => {
    document.getElementById(id).value = '';
}

export { getEmail, vacantInput };