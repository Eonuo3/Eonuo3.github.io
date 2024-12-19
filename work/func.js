let employees = [];

function addEmployee() {
    const name = document.getElementById('name').value;
    const team = document.getElementById('team').value;
    const score = parseInt(document.getElementById('score').value);
    
    employees.push({ name, team, score, shifts: Array(8).fill(0) });
    
    document.getElementById('name').value = '';
    document.getElementById('team').value = '';
    document.getElementById('score').value = '';
    
    alert('Employee added!');
}

function assignShifts() {
    for (let shift = 0; shift < 8; shift++) {
        let maxScore = -1;
        let selectedEmployee = null;
        
        for (let employee of employees) {
            if (employee.score > maxScore) {
                maxScore = employee.score;
                selectedEmployee = employee;
            }
        }
        
        if (selectedEmployee) {
            selectedEmployee.shifts[shift] = 1;
            selectedEmployee.score--;
        }
    }
    
    displaySchedule();
}

function displaySchedule() {
    const scheduleDiv = document.getElementById('schedule');
    scheduleDiv.innerHTML = '';
    
    for (let employee of employees) {
        const employeeDiv = document.createElement('div');
        employeeDiv.textContent = `${employee.name} (Team ${employee.team}): ${employee.shifts.join(' ')}`;
        scheduleDiv.appendChild(employeeDiv);
    }
}
