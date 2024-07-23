document.addEventListener('DOMContentLoaded', () => {
    const updateTotal = () => {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = parseInt(item.querySelector('.qty').innerText);
            total += price * quantity;
        });
        document.getElementById('total').innerText = total.toFixed(2);
    };

    document.querySelectorAll('.plus').forEach(button => {
        button.addEventListener('click', () => {
            const qtyElem = button.previousElementSibling;
            let quantity = parseInt(qtyElem.innerText);
            qtyElem.innerText = ++quantity;
            updateTotal();
        });
    });

    document.querySelectorAll('.minus').forEach(button => {
        button.addEventListener('click', () => {
            const qtyElem = button.nextElementSibling;
            let quantity = parseInt(qtyElem.innerText);
            if (quantity > 1) {
                qtyElem.innerText = --quantity;
                updateTotal();
            }
        });
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.cart-item').remove();
            updateTotal();
        });
    });

    document.querySelectorAll('.like').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });

    updateTotal();
});
