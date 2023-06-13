const specialCharacters = /[.,?!“”‘’，。！：？]/g;

function handleContentTypeChange() {
    const contentTypeSelect = document.getElementById("content-type");
    const poemStyleContainer = document.getElementById("poem-style-container");

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
    if (contentType === "poem" && poemStyle === "kieu-story") {
        transformTextKieuStory(sentences, contentType, poemStyle, output, previousSentenceBoxCount);
    } else {
        transformTextNormally(sentences, contentType,  poemStyle, output, previousSentenceBoxCount);
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

function processText(sentence, contentType, poemStyle, column, sentenceBoxCount) {
    Array.from(sentence).forEach(function (character) {
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
}

function transformTextKieuStory(sentences, contentType, poemStyle, output, previousSentenceBoxCount) {
    for (let i = 0; i < sentences.length; i += 2) {
        const sentence1 = sentences[i].replace(specialCharacters, "").trim();
        const sentence2 = sentences[i + 1] ? sentences[i + 1].replace(specialCharacters, "").trim() : "";
        const column = document.createElement("div");
        column.classList.add("column");
        let sentenceBoxCount = 0;
        processText(sentence1, contentType, poemStyle, column, sentenceBoxCount);
        addBoxBetweenSentences(column);
        processText(sentence2, contentType, poemStyle, column, sentenceBoxCount);
        output.appendChild(column);
        previousSentenceBoxCount = sentenceBoxCount;
    }

    if (contentType === "poem" && poemStyle === "kieu-story") {
        mergeEmptyBoxes(output);
    }
}

function mergeEmptyBoxes(output) {
    const columns = output.getElementsByClassName("column");
    const numColumns = columns.length;

    for (let i = 0; i < numColumns; i++) {
        const column = columns[i];
        const boxes = column.getElementsByClassName("box");
        const numBoxes = boxes.length;

        for (let j = 0; j < numBoxes; j++) {
            const box = boxes[j];
            if (box.innerText === "") {
                //column.removeChild(box);

                // Remove left border from empty box in the first column
                if (i % 25 === 0 && i % 25 !== numColumns - 1) {
                    box.style.borderLeft = "none";
                }
                // Remove right border from empty box in the last column
                else if (i % 25 === numColumns - 1 && i % 25 !== 0) {
                    box.style.borderRight = "none";
                }
                // Remove both left and right borders from empty boxes in the middle columns
                else if (i % 25 !== 0 && i % 25 !== numColumns - 1) {
                    box.style.borderLeft = "none";
                    box.style.borderRight = "none";
                }
            }
        }
    }
}

function transformTextNormally(sentences, contentType, poemStyle, output, previousSentenceBoxCount) {
    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i].replace(specialCharacters, "").trim();
        const column = document.createElement("div");
        column.classList.add("column");
        let sentenceBoxCount = 0; // Number of boxes in the current sentence
        processText(sentence, contentType, poemStyle, column, sentenceBoxCount);
        output.appendChild(column);
        previousSentenceBoxCount = sentenceBoxCount;
    }
}
function addBoxBetweenSentences(column) {
    // Add a gap between the two sentences
    const gapBox = document.createElement("div");
    gapBox.classList.add("box", "gap");
    column.appendChild(gapBox);
}

function isLatinCharacter(character) {
    const latinAlphabetRegex = /^[A-Za-z]+$/;
    return latinAlphabetRegex.test(character);
}
