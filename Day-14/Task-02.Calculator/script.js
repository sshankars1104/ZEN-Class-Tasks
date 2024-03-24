        document.addEventListener('DOMContentLoaded', function () {
            const display = document.querySelector('.display');
            const buttons = document.querySelectorAll('.buttons button');

            buttons.forEach(button => {
                button.addEventListener('click', function () {
                    if (button.dataset.value === '=') {
                        try {
                            display.value = eval(display.value);
                        } catch (error) {
                            display.value = 'Error';
                        }
                    } else if (button.dataset.value === 'AC') {
                        display.value = '';
                    } else if (button.dataset.value === 'DEL') {
                        display.value = display.value.slice(0, -1);
                    } else {
                        display.value += button.dataset.value;
                    }
                });
            });

            document.addEventListener('keydown', function(event) {
                const key = event.key;
                if (!/[0-9]/.test(key) && !['+', '-', '*', '/', '=', 'Enter', 'Backspace'].includes(key)) {
                    event.preventDefault();
                    alert("Only numbers and operators are allowed");
                } else {
                    if (key === 'Enter' && display.value.trim() !== '') {
                        try {
                            display.value = eval(display.value);
                        } catch (error) {
                            display.value = 'Error';
                        }
                    } else if (key === 'Backspace') {
                        display.value = display.value.slice(0, -1);
                    } else if (/[0-9\+\-\*\/\=]/.test(key)) {
                        display.value += key;
                    }
                }
            });
        });