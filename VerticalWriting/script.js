function transformText() {
    var input = document.getElementById("input").value;
    var sentences = input.split(/[.\n?!]+/);

    var output = document.getElementById("output");
    output.innerHTML = "";

    var previousSentenceBoxCount = 0; // Number of boxes in the previous sentence

    for (var i = sentences.length - 1; i >= 0; i--) {
        var sentence = sentences[i].replace(/[.,?!“”‘’]/g, "").trim();
        console.log(sentence);
        if (sentence !== "") {
            var column = document.createElement("div");
            column.classList.add("column");

            var sentenceBoxCount = 0; // Number of boxes in the current sentence

            Array.from(sentence).forEach(function(character) {
                if (character !== " ") {
                    var box = document.createElement("div");
                    box.classList.add("box");
                    box.innerText = character;
                    column.appendChild(box);
                    sentenceBoxCount++;
                }
            });

            if (sentenceBoxCount === 0) {
                // Empty sentence, create an empty box with width equal to normal box and height calculated based on previous sentence
                var emptyBox = document.createElement("div");
                emptyBox.classList.add("box", "empty");
                emptyBox.style.width = column.firstChild.offsetWidth + "px";
                emptyBox.style.height = previousSentenceBoxCount * 25 + "px";
                column.appendChild(emptyBox);
            }

            output.appendChild(column);
            previousSentenceBoxCount = sentenceBoxCount;
        }
    }
}


