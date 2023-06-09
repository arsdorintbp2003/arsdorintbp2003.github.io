function transformText() {
    const inputText = document.getElementById("input").value;
    const textName = document.getElementById("text-name").value;
    const sentences = inputText.split(/[.\n?!]+/);

    const output = document.getElementById("output");
    output.innerHTML = "";

    let previousSentenceBoxCount = 0; // Number of boxes in the previous sentence

    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i].replace(/[.,?!“”‘’]/g, "").trim();

        if (sentence !== "") {
            const column = document.createElement("div");
            column.classList.add("column");

            let sentenceBoxCount = 0; // Number of boxes in the current sentence

            Array.from(sentence).forEach(function (character) {
                if (character !== " ") {
                    const box = document.createElement("div");
                    box.classList.add("box");
                    box.innerText = character;
                    if (isLatinCharacter(character)) {
                        box.classList.add("latin");
                    }
                    column.appendChild(box);
                    sentenceBoxCount++;
                }
            });

            if (sentenceBoxCount === 0) {
                // Empty sentence, create an empty box with width equal to normal box and height calculated based on previous sentence
                const emptyBox = document.createElement("div");
                emptyBox.classList.add("box", "empty");
                emptyBox.style.width = column.firstChild.offsetWidth + "px";
                emptyBox.style.height = previousSentenceBoxCount * 25 + "px";
                column.appendChild(emptyBox);
            }

            output.appendChild(column);
            previousSentenceBoxCount = sentenceBoxCount;
        }
    }

    if (textName) {
        const textNameElement = document.createElement("div");
        textNameElement.classList.add("text-name");

        Array.from(textName).forEach(function (character) {
            const characterElement = document.createElement("div");
            characterElement.innerText = character;
            if (isLatinCharacter(character)) {
                characterElement.classList.add("latin");
            }
            textNameElement.appendChild(characterElement);
        });

        const textNameWrapper = document.createElement("div");
        textNameWrapper.appendChild(textNameElement);
        output.insertBefore(textNameWrapper, output.firstChild); // Insert text name at the top
    }
}

function isLatinCharacter(character) {
    const latinAlphabetRegex = /^[A-Za-z]+$/;
    return latinAlphabetRegex.test(character);
}

