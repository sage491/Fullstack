let total = 0;

const form = document.getElementById("expense-form");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const totalDisplay = document.getElementById("total");
const expenseList = document.getElementById("expense-list");

let editingLi = null;

function createListItem(category, amount) {
    const li = document.createElement('li');
    li.dataset.amount = amount;
    li.dataset.category = category;

    const text = document.createElement('span');
    text.className = 'meta';
    text.innerText = `${category} - ₹${amount}`;
    li.appendChild(text);

    const btnWrap = document.createElement('div');
    btnWrap.style.display = 'flex';
    btnWrap.style.gap = '8px';

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.innerText = 'Edit';
    editBtn.onclick = function() {
        categoryInput.value = li.dataset.category;
        amountInput.value = li.dataset.amount;
        editingLi = li;
        amountInput.focus();
    };

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.innerText = 'Remove';
    removeBtn.onclick = function() {
        const amt = Number(li.dataset.amount);
        total -= amt;
        totalDisplay.innerText = total;
        if (editingLi === li) {
            editingLi = null;
            categoryInput.value = '';
            amountInput.value = '';
        }
        li.remove();
    };

    btnWrap.appendChild(editBtn);
    btnWrap.appendChild(removeBtn);
    li.appendChild(btnWrap);

    return li;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const category = categoryInput.value;
    const amount = Number(amountInput.value);

    if (!category || amount <= 0) return;

    if (editingLi) {
        const oldAmount = Number(editingLi.dataset.amount);
        editingLi.dataset.amount = amount;
        editingLi.dataset.category = category;
        const text = editingLi.querySelector('span.meta');
        if (text) text.innerText = `${category} - ₹${amount}`;
        total = total - oldAmount + amount;
        totalDisplay.innerText = total;
        editingLi = null;
    } else {
        total += amount;
        totalDisplay.innerText = total;
        const li = createListItem(category, amount);
        expenseList.appendChild(li);
    }

    categoryInput.value = '';
    amountInput.value = '';
});