const specialCharacters = /[.,?!“”‘’'，。！：？]/g;

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
        transformTextNormally(sentences, contentType, poemStyle, output, previousSentenceBoxCount);
    }

    if (textName) {
        const textNameElement = document.createElement("div");
        textNameElement.classList.add("text-name");
        const words = textName.trim().split(/[ -]+/);
        words.forEach(function (word) {
            const wordElem = document.createElement("div");
            if (isLatinOrCyrillicCharacter(word)) {
                wordElem.innerText = word;
                textNameElement.appendChild(wordElem);
            } else {
                Array.from(word).forEach(function (character) {
                    const characterElement = document.createElement("div");
                    characterElement.innerText = character;
                    //wordElem.appendChild(characterElement);
                    textNameElement.appendChild(characterElement);
                });
            }
            //textNameElement.appendChild(wordElem);
        });

        const textNameWrapper = document.createElement("div");
        textNameWrapper.appendChild(textNameElement);
        output.insertBefore(textNameWrapper, output.firstChild); // Insert text name at the top
    }
}


function processText(sentence, contentType, poemStyle, column, sentenceBoxCount, fontWeight) {
    const words = sentence.trim().split(/[ -]+/);
    words.forEach(function (word) {
        if (isLatinOrCyrillicCharacter(word) || isVietnameseWord(word)) {
            // Process Latin / Cyrillic / Vietnamese words
            const box = document.createElement("div");
            box.classList.add("box");
            const wordBox = document.createElement("div");
            wordBox.innerText = word;
            box.appendChild(wordBox);
            box.classList.add("latin");
            sentenceBoxCount++;
            if (contentType === "poem") {
                if (poemStyle === "kieu-story") {
                    box.classList.add("kieu-story");
                }
            }
            box.style.fontWeight = fontWeight;
            column.appendChild(box);
        } else {
            // Process CJKV characters or other characters
            Array.from(word).forEach(function (character) {
                const box = document.createElement("div");
                box.classList.add("box");
                const characterBox = document.createElement("div");
                characterBox.innerText = character;
                box.appendChild(characterBox);
                sentenceBoxCount++;
                if (contentType === "poem") {
                    if (poemStyle === "kieu-story") {
                        box.classList.add("kieu-story");
                    }
                }
                box.style.fontWeight = fontWeight;
                column.appendChild(box);
            });
        }
    });
}

function transformTextKieuStory(sentences, contentType, poemStyle, output, previousSentenceBoxCount) {
    const fontWeight = document.getElementById("font-weight-select").value;
    for (let i = 0; i < sentences.length; i += 2) {
        const sentence1 = sentences[i].replace(specialCharacters, "").trim();
        const sentence2 = sentences[i + 1] ? sentences[i + 1].replace(specialCharacters, "").trim() : "";
        const column = document.createElement("div");
        column.classList.add("column");
        let sentenceBoxCount = 0;
        processText(sentence1, contentType, poemStyle, column, sentenceBoxCount, fontWeight);
        addBoxBetweenSentences(column);
        processText(sentence2, contentType, poemStyle, column, sentenceBoxCount, fontWeight);
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
                if (i % 25 === 0 && i % 25 !== numColumns - 1) {
                    box.style.borderLeft = "none";
                }
                if (i % 25 === 24 && i % 25 !== 0 || i === numColumns - 1) {
                    box.style.borderRight = "none";
                } else if (i % 25 !== 0 && i % 25 !== 24) {
                    box.style.borderLeft = "none";
                    box.style.borderRight = "none";
                }
            }
        }
    }
}

function transformTextNormally(sentences, contentType, poemStyle, output, previousSentenceBoxCount) {
    const fontWeight = document.getElementById("font-weight-select").value;
    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i].replace(specialCharacters, "").trim();
        const column = document.createElement("div");
        column.classList.add("column");
        let sentenceBoxCount = 0; // Number of boxes in the current sentence
        processText(sentence, contentType, poemStyle, column, sentenceBoxCount, fontWeight);
        output.appendChild(column);
        previousSentenceBoxCount = sentenceBoxCount;
    }
}

function addBoxBetweenSentences(column) {
    const gapBox = document.createElement("div");
    gapBox.classList.add("box", "gap");
    column.appendChild(gapBox);
}

function isLatinCharacter(character) {
    const latinAlphabetRegex = /^[A-Za-z]+$/;
    return latinAlphabetRegex.test(character);
}

function isLatinOrCyrillicCharacter(word) {
    const latinCyrillicRegex = /^[a-zA-Z\u00C0-\u024F\u0400-\u04FF]+$/;
    return latinCyrillicRegex.test(word);
}

function isVietnameseWord(word) {
    const vietnameseRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;
    return vietnameseRegex.test(word);
}
