function handleContentTypeChange() {
    var contentTypeSelect = document.getElementById("content-type");
    var poemStyleContainer = document.getElementById("poem-style-container");

    if (contentTypeSelect.value === "poem") {
        poemStyleContainer.style.display = "block";
    } else {
        poemStyleContainer.style.display = "none";
    }
}

function transformText() {
    const contentType = document.getElementById("content-type").value;
    const poemStyle = document.getElementById("poem-style").value;
    const inputText = document.getElementById("input").value;
    const textName = document.getElementById("text-name").value;
    const sentences = inputText.split(/[.\n?!]+/);

    const output = document.getElementById("output");
    output.innerHTML = "";

    let previousSentenceBoxCount = 0; // Number of boxes in the previous sentence

    for (let i = 0; i < sentences.length; i += 2) {
        const sentence1 = sentences[i].replace(/[.,?!“”‘’]/g, "").trim();
        const sentence2 = sentences[i + 1] ? sentences[i + 1].replace(/[.,?!“”‘’]/g, "").trim() : "";

        const column = document.createElement("div");
        column.classList.add("column");

        let sentenceBoxCount = 0; // Number of boxes in the current sentence

        Array.from(sentence1).forEach(function (character) {
            if (character !== " ") {
                const box = document.createElement("div");
                box.classList.add("box");
                box.innerText = character;
                if (isLatinCharacter(character)) {
                    box.classList.add("latin");
                }
                if (contentType === "poem") {
                    if (poemStyle === "kieu-story") {
                        // Add additional styles for Kieu Story Style
                        box.classList.add("kieu-story");
                    }
                }
                column.appendChild(box);
                sentenceBoxCount++;
            }
        });

        if (sentenceBoxCount > 0 && sentence2 !== "") {
            // Add a gap between the two sentences
            const gapBox = document.createElement("div");
            gapBox.classList.add("box", "gap");
            column.appendChild(gapBox);
        }

        Array.from(sentence2).forEach(function (character) {
            if (character !== " ") {
                const box = document.createElement("div");
                box.classList.add("box");
                box.innerText = character;
                if (isLatinCharacter(character)) {
                    box.classList.add("latin");
                }
                if (contentType === "poem") {
                    if (poemStyle === "kieu-story") {
                        // Add additional styles for Kieu Story Style
                        box.classList.add("kieu-story");
                    }
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
