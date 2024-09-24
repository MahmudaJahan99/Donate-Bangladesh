// Card 1 Donation when clicked
document.getElementById('donate-for-noakhali').addEventListener('click', function(event) {

    // Getting values for calculation
    const usersTotalCoins = convertInnerTextToNumber('user-total-coins');
    const TotalDonated = convertInnerTextToNumber('noakhali-amount');
    const userDonated = convertInputValueToNumber('donate-to-noakhali');

    // Updating Values after donation
    if(userDonated <= usersTotalCoins && userDonated >= 0) {
        const updatedTotalCoins = subtractToUpdateValue(usersTotalCoins, userDonated);
        document.getElementById('user-total-coins').innerText = updatedTotalCoins;
        const updatednoakhaliTotal = addToUpdateValue(TotalDonated, userDonated);
        document.getElementById('noakhali-amount').innerText = updatednoakhaliTotal;

        // Show the modal after successful donation
        document.getElementById('my_modal_5').showModal();

        // Add to Transaction History
        transactionHistory('noakhali-cause', userDonated);

        // Clearing out input field
        document.getElementById('donate-to-noakhali').value = '';
    }

    else {
        alert ("Invalid Donation");
    }
});

// Card 2 Donation when clicked
document.getElementById('donate-for-feni').addEventListener('click', function(event) {

    // Getting values for calculation
    const usersTotalCoins = convertInnerTextToNumber('user-total-coins');
    const TotalDonated = convertInnerTextToNumber('feni-amount');
    const userDonated = convertInputValueToNumber('donate-to-feni');

    // Updating Values after donation
    if(userDonated <= usersTotalCoins && userDonated >= 0) {
        const updatedTotalCoins = subtractToUpdateValue(usersTotalCoins, userDonated);
        document.getElementById('user-total-coins').innerText = updatedTotalCoins;
        const updatednoakhaliTotal = addToUpdateValue(TotalDonated, userDonated);
        document.getElementById('feni-amount').innerText = updatednoakhaliTotal;

        // Show the modal after successful donation
        document.getElementById('my_modal_5').showModal();

        // Add to Transaction History
        transactionHistory('feni-cause', userDonated);

        // Clearing out input field
        document.getElementById('donate-to-feni').value = '';
    }

    else {
        alert ("Invalid Donation");
    }
});

// Card 3 Donation when clicked
document.getElementById('donate-for-injured').addEventListener('click', function(event) {

    // Getting values for calculation
    const usersTotalCoins = convertInnerTextToNumber('user-total-coins');
    const TotalDonated = convertInnerTextToNumber('quota-movement-amount');
    const userDonated = convertInputValueToNumber('donate-to-injured');

    // Updating Values after donation
    if(userDonated <= usersTotalCoins && userDonated >= 0) {
        const updatedTotalCoins = subtractToUpdateValue(usersTotalCoins, userDonated);
        document.getElementById('user-total-coins').innerText = updatedTotalCoins;
        const updatednoakhaliTotal = addToUpdateValue(TotalDonated, userDonated);
        document.getElementById('quota-movement-amount').innerText = updatednoakhaliTotal;

        // Show the modal after successful donation
        document.getElementById('my_modal_5').showModal();

        // Add to Transaction History
        transactionHistory('quota-cause', userDonated);

        // Clearing out input field
        document.getElementById('donate-to-injured').value = '';
    }

    else {
        alert ("Invalid Donation");
    }
});