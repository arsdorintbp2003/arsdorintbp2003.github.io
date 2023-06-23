const specialCharacters = /[.,?!“”‘’:'，。！：？]/g;

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
    const textNameElement = document.getElementById("output-text-name");

    if (textNameElement) textNameElement.textContent = textName;
    else {
        const newTextNameElement = document.createElement("div");
        newTextNameElement.classList.add("text-name");
        newTextNameElement.id = "output-text-name";
        newTextNameElement.textContent = textName;
        output.insertBefore(newTextNameElement, output.firstChild);
    }
    output.innerHTML = "";

    let previousSentenceBoxCount = 0;
    if (contentType === "poem" && poemStyle === "kieu-story") {
        transformTextKieuStory(sentences, contentType, poemStyle, output, previousSentenceBoxCount);
    } else {
        transformTextNormally(sentences, contentType, poemStyle, output, previousSentenceBoxCount);
    }

    if (textName) {
        const pageElement = document.createElement("div");
        pageElement.classList.add("page");

        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container");

        const textNameElement = document.createElement("div");
        textNameElement.classList.add("text-name");
        const words = textName.trim().split(/[ -]+/);
        words.forEach(function (word) {
            const wordElem = document.createElement("div");
            if (isLatinOrCyrillicCharacter(word) || isVietnameseWord(word)) {
                wordElem.innerText = word;
                textNameElement.appendChild(wordElem);
            } else {
                Array.from(word).forEach(function (character) {
                    const characterElement = document.createElement("div");
                    characterElement.innerText = character;
                    textNameElement.appendChild(characterElement);
                });
            }
        });
        pageElement.appendChild(textNameElement);
        const textContentElement = document.createElement("div");
        textContentElement.classList.add("text-content");
        pageElement.appendChild(textContentElement);
        output.insertBefore(pageElement, output.firstChild);
    }
}


function createPage() {
    const page = document.createElement("div");
    page.classList.add("page");
    return page;
}

function addMarginToNextRows(output, maxVisibleSentences) {
    const pages = output.getElementsByClassName("page");
    const lastPage = pages[pages.length - 1];
    const columns = lastPage.getElementsByClassName("column");
    const lastColumn = columns[columns.length - 1];
    const boxes = lastColumn.getElementsByClassName("box");
    if (boxes.length > 0) {
        const firstBox = boxes[0];
		firstBox.style.marginTop = "50px";
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
            box.classList.add("small-font");
            sentenceBoxCount++;

            if (contentType === "poem") if (poemStyle === "kieu-story") box.classList.add("kieu-story");
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

                if (contentType === "poem") if (poemStyle === "kieu-story") box.classList.add("kieu-story");
                box.style.fontWeight = fontWeight;
                column.appendChild(box);
            });
        }
    });
}

function transformTextKieuStory(sentences, contentType, poemStyle, output, previousSentenceBoxCount) {
    const maxColumnsPerPage = 12;
    let currentPage = createPage();
    let currentColumnCount = 0;
    const fontWeight = document.getElementById("font-weight-select").value;
    const textName = document.getElementById("text-name").value;
    const textNameWords = textName.trim().split(/[ -]+/);

    for (let i = 0; i < sentences.length; i += 2) {
        const sentence1 = sentences[i].replace(specialCharacters, "").trim();
        const sentence2 = sentences[i + 1] ? sentences[i + 1].replace(specialCharacters, "").trim() : "";
        const column = document.createElement("div");
        column.classList.add("column");
        let sentenceBoxCount = 0;
        processText(sentence1, contentType, poemStyle, column, sentenceBoxCount, fontWeight);
        addBoxBetweenSentences(column);
        processText(sentence2, contentType, poemStyle, column, sentenceBoxCount, fontWeight);
        currentPage.appendChild(column);
        currentColumnCount++;
        previousSentenceBoxCount = sentenceBoxCount;

        if (currentColumnCount === maxColumnsPerPage && i < sentences.length - 2) {
            output.appendChild(currentPage);
            currentPage = createPage();
            currentColumnCount = 0;
        }
    }
    output.appendChild(currentPage);
    mergeEmptyBoxes(output, maxColumnsPerPage);
}

function mergeEmptyBoxes(output, maxColumnsPerPage) {
    const columns = output.getElementsByClassName("column");
    const numColumns = columns.length;

    for (let i = 0; i < numColumns; i++) {
        const column = columns[i];
        const boxes = column.getElementsByClassName("box");
        const numBoxes = boxes.length;
        const numLastCol = numColumns - numColumns % maxColumnsPerPage;
        for (let j = 0; j < numBoxes; j++) {
            const box = boxes[j];
            if (box.innerText === "") {
                if (i < numLastCol) {
                    if (i % maxColumnsPerPage === 0 && i % maxColumnsPerPage !== numColumns - 1) box.style.borderLeft = "none";
                    if (i % maxColumnsPerPage === maxColumnsPerPage - 1 && i % maxColumnsPerPage !== 0 ||
                     i === numColumns - 1) box.style.borderRight = "none";
                    else if (i % maxColumnsPerPage !== 0 && i % maxColumnsPerPage !== maxColumnsPerPage - 1) {
                        box.style.borderLeft = "none";
                        box.style.borderRight = "none";
                    }
                } else {
                    if (i === numColumns - 1 && i !== numLastCol) box.style.borderRight = "none";
                    if (i === numLastCol && i !== numColumns - 1) box.style.borderLeft = "none";
                    else if (i !== numLastCol && i !== numColumns - 1) {
                        box.style.borderLeft = "none";
                        box.style.borderRight = "none";
                    }
                }
            }
        }
    }
}

function transformTextNormally(sentences, contentType, poemStyle, output, previousSentenceBoxCount) {
    const maxColumnsPerPage = 12;
    let currentPage = createPage();
    let currentColumnCount = 0;
    const fontWeight = document.getElementById("font-weight-select").value;
    const textName = document.getElementById("text-name").value;
    const textNameWords = textName.trim().split(/[ -]+/);


    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i].replace(specialCharacters, "").trim();
        const column = document.createElement("div");
        column.classList.add("column");
        let sentenceBoxCount = 0; // Number of boxes in the current sentence
        processText(sentence, contentType, poemStyle, column, sentenceBoxCount, fontWeight);
        currentPage.appendChild(column);
        currentColumnCount++;
        previousSentenceBoxCount = sentenceBoxCount;

        if (currentColumnCount === maxColumnsPerPage && i < sentences.length - 1) {
            output.appendChild(currentPage);
            currentPage = createPage();
            currentColumnCount = 0;
        }
    }
    output.appendChild(currentPage);
}

function addBoxBetweenSentences(column) {
    const gapBox = document.createElement("div");
    gapBox.classList.add("box", "gap");
    column.appendChild(gapBox);
}

function isLatinOrCyrillicCharacter(word) {
    const latinCyrillicRegex = /^[a-zA-Z\u00C0-\u024F\u0400-\u04FF]+$/;
    return latinCyrillicRegex.test(word);
}

function isVietnameseWord(word) {
    const vietnameseRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;
    return vietnameseRegex.test(word);
}
