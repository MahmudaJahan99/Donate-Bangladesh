// function to fetch data and convert to integer
function convertInnerTextToNumber(id) {
    const fetchedData = document.getElementById(id).innerText;
    const convertedToNumber = parseInt(fetchedData);

    return convertedToNumber;
}
function convertInputValueToNumber(id) {
    const fetchedData = document.getElementById(id).value;
    const convertedToNumber = parseInt(fetchedData);

    return convertedToNumber;
}

// Adding and Subtracting to update value
function subtractToUpdateValue(userTotal, donatedAmount) {
    const newUserTotal = userTotal - donatedAmount;

    return newUserTotal;
}
function addToUpdateValue(donationTotal, donatedAmount) {
    const newDonationTotal = donationTotal + donatedAmount;

    return newDonationTotal;
}

// Toggling between sections
function toggleBetweenSections(id, activeBtnColor){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById('show-donation-section').classList.remove('active-btn');
    document.getElementById('show-transaction-history').classList.remove('active-btn');
    

    document.getElementById(activeBtnColor).classList.add('active-btn');
    document.getElementById(id).classList.remove('hidden');
}

// Transaction History
function transactionHistory(causeName, userDonated) {
    const donationCause = document.getElementById(causeName).innerText;
    const div = document.createElement('div');
        const currentDateTime = new Date();
        div.innerHTML = `
            <div class="border rounded-lg p-5 space-y-4">
                <h5 class="font-bold">${userDonated} Taka is Donated for ${donationCause}</h5>
                <p>Date: ${currentDateTime}</p>
            </div>
        `
        return document.getElementById('transaction-section').appendChild(div);
}