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
        `
        // Append the row to the list
        planList.appendChild(row)

    }

    clearFields() {
        document.querySelector('.inputValue').value = '';
        document.querySelector('.dateValue').value  = '';
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
        alert('Fill in everything');

    } else {
        // Add plan
        ui.addPlantoList(plan);

        // Clear fields
        ui.clearFields();
    }
});