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