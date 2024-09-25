// Toggling between pages 
document.getElementById('leads-to-blog').addEventListener('click', function() {
    window.location.href = "blog.html";
});

// Toggles to Donation
document.getElementById('show-donation-section').addEventListener('click', function(){
    toggleBetweenSections('donation-section', 'show-donation-section');
});

// Toggles to Transaction
document.getElementById('show-transaction-history').addEventListener('click', function(){
    toggleBetweenSections('transaction-section', 'show-transaction-history');
});