// Plan Constructor 
class Plan {
    constructor(todo, date) {
        this.todo = todo;
        this.date = new Date(date);
    }
}

// UI constructor
class UI {
    addPlantoList(plan) {
        // Access to the plaList
        const planList = document.querySelector('.planList');
        // Create row
        const row = document.createElement('tr');

        // filter the date
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const date    = `${weekday[plan.date.getDay()]} ${plan.date.getMonth() + 1}/${plan.date.getDate()}`;
        // Put the value inside my row
        row.innerHTML = `
            <td>${plan.todo}</td>
            <td>${date}</td>
            <td>
                <button class="yes">YES</button>
                <button class="no">NO</button>
            </td>
        `
        // Append the row to the list
        planList.appendChild(row)

    }

    clearFields() {
        document.querySelector('.inputValue').value = '';
        document.querySelector('.dateValue').value  = '';
    }

    checkDone(target) {
        if(target.className === 'yes') {
            // Disabled Yes
            target.disabled = true;
            // Display done on the button
            target.textContent = 'YEP'
            // Display the text a little darker
            target.style.fontWeight = 'bold';
            // Show Yes
            const yes = target.nextElementSibling;
            // Remove the button NO
            yes.remove();

        } else {
            // Disabled Yes
            target.disabled = true;
            // Display done on the button
            target.textContent = 'NAH'
            // Display the text a little darker
            target.style.fontWeight = 'bold';
            // Show Yes
            const no = target.previousElementSibling;
            // Remove the button NO
            no.remove();
        }
    }
}


// Listen to the event

const fromADD = document.querySelector('form');
fromADD.addEventListener('submit', function(e) {
    e.preventDefault();
    const todo = document.querySelector('.inputValue').value;
    const date  = document.querySelector('.dateValue').value;

    // Instantiate plan
    const plan = new Plan(todo, date);

    // Instaniate UI
    const ui = new UI();

    // Valid 
    if(todo === '' || date === '') {
        alert('Make sure that you didn\'t miss anything');

    } else {
        // Add plan
        ui.addPlantoList(plan);

        // Clear fields
        ui.clearFields();
    }
});

// Event listen to the plan list
const planList = document.querySelector('.planList');
planList.addEventListener('click', function(e) {
    // Instantiate ui
    const ui = new UI();

    // Check click on the buttons
    if(e.target.className === 'yes' || e.target.className === 'no') {
        // Check if the plan done or no
        ui.checkDone(e.target);
    }
})