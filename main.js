document.getElementById("submit").addEventListener("click", function(){
    let task = document.getElementById("input").value;
    let list = document.getElementById("list");
    let text = document.getElementById("text");

    if (task === ""){
        alert("Enter Task")
        return;
    }

    // Hide the placeholder text once there's a task
    if (text) {
        text.style.display = "none";
    }

    // Create a list item
    let listItem = document.createElement("li")
    listItem.textContent = task;

    // Create a delete button
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete";

    // Create a toggle button to mark as done
    let Toggle = document.createElement("button")
    Toggle.textContent = "Mark as done";

    // Append the buttons
    listItem.appendChild(deleteBtn)
    listItem.appendChild(Toggle)
    list.appendChild(listItem)

    // Add functionality to the delete button
    deleteBtn.addEventListener("click", function() {
        list.removeChild(listItem)
        emptyStateText();
    })

    // Add a line-through text decoration to cancel out items marked as done and alternate button between done and not done
    Toggle.addEventListener("click", function() {
        listItem.classList.toggle("completed");

        if (Toggle.textContent === "Mark as done") {
            Toggle.textContent = "Not Done";
        } else {
            Toggle.textContent = "Mark as done";
        }
    });

    document.getElementById("input").value = "";

})

function emptyStateText() {
    let list = document.getElementById("list");
    let text = document.getElementById("text");
    let items = list.querySelectorAll("li");

    if (items.length === 0 && text) {
        text.style.display = "block";
    }
}