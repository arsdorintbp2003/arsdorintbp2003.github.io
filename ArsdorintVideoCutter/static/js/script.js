function handleEditOptionChange() {
    var selectedOption = document.getElementById("edit_option").value;
    var options = document.getElementsByClassName("edit-option");
    for (var i = 0; i < options.length; i++) {
        options[i].style.display = "none";
    }
    document.getElementById(selectedOption).style.display = "block";
}

function addSplitTime() {
    var splitTimesContainer = document.getElementById("split_times_container");

    var splitTimeDiv = document.createElement("div");

    var label = document.createElement("label");
    label.textContent = "Duration:";

    var input = document.createElement("input");
    input.type = "text";
    input.name = "split_duration[]";
    input.placeholder = "HH:MM:SS";

    splitTimeDiv.appendChild(label);
    splitTimeDiv.appendChild(input);

    splitTimesContainer.appendChild(splitTimeDiv);
}
