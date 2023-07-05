const setColor = (value, count) => {
    value.innerText = count;
    if (count > 0) {
        value.style.color = 'green';
    } else if (count < 0) {
        value.style.color = 'red';
    } else {
        value.style.color = '#222';
    }
};

export default setColor;
