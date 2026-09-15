let q = 2;
function changeQty(d) { q = Math.max(1, q + d); document.getElementById('qty').innerText = q; document.getElementById('total').innerText = '₹' + (q * 100); }
function book() {
    let data = { name: document.getElementById('name').value, phone: document.getElementById('phone').value, email: document.getElementById('email').value, event: document.getElementById('event').value, date: document.getElementById('date').value, tickets: q, id: 'MYS' + Math.floor(100000 + Math.random() * 900000) };
    localStorage.setItem('dasaraBooking', JSON.stringify(data));
    window.location.href = 'Output.html';
}

