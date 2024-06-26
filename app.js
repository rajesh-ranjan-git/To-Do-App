let itemTitleInput = document.querySelector(".itemTitleInput");
let addItem = document.querySelector(".addItem");
let reset = document.querySelector(".reset");
let deleteAll = document.querySelector(".deleteAll");
let mainContent = document.querySelector(".mainContent");

let editTitleFunc = (title, editTitle, editTitleInput, itemTitleInputValue) => {
    title.style.display = "none";
    editTitleInput.style.display = "block";
    editTitle.innerHTML = "Done";
    editTitle.addEventListener ("click", () => {
        itemTitleInputValue = editTitleInput.value;
        title.innerHTML = `${itemTitleInputValue}`;
        title.style.display = "block";
        editTitleInput.style.display = "none";
        editTitle.innerHTML = "Edit Title";
        editTitle.addEventListener ("click", () => {
            editTitleFunc(title, editTitle, editTitleInput, itemTitleInputValue);
        });
    });
}

let addDescFunc = (addDesc, addDescText, itemDesc, itemDescContent, itemDescInput) => {
    addDescText = "Done";
    addDesc.innerHTML = `${addDescText}`;
    itemDesc.style.display = "block";
    itemDescContent.style.display = "none";
    itemDescInput.style.display = "block";
    addDesc.addEventListener ("click", () => {
        addDescText = "Edit Description";
        addDesc.innerHTML = `${addDescText}`;
        itemDescContent.innerHTML = `${itemDescInput.value}`;
        itemDescContent.style.display = "block";
        itemDescInput.style.display = "none";
        addDesc.addEventListener ("click", () => {
            addDescFunc(addDesc, addDescText, itemDesc, itemDescContent, itemDescInput);
        });
    });
}

addItem.addEventListener ("click", () => {
    let itemTitleInputValue = itemTitleInput.value;
    let editTitleText = "Edit Title";
    let addDescText = "Add Description";
    itemTitleInput.value = "";

    if (itemTitleInputValue == "") return;

    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
        <div class="itemTitle">
            <p class="title">${itemTitleInputValue}</p>
            <input class="editTitleInput" type="text" placeholder="${itemTitleInputValue}">
            <div>
                <button class="editTitle">${editTitleText}</button>
                <button class="addDesc">${addDescText}</button>
                <svg id="delItem" width="2.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
            </div>
        </div>
        <div class="itemDesc">
            <p class="itemDescContent"></p>
            <textarea name="itemDescInput" id="itemDescInput"></textarea>
        </div>`;

    let title = item.querySelector(".title");
    let editTitleInput = item.querySelector(".editTitleInput");
    let editTitle = item.querySelector(".editTitle");
    let addDesc = item.querySelector(".addDesc");
    let itemDesc = item.querySelector(".itemDesc");
    let itemDescContent = item.querySelector(".itemDescContent");
    let itemDescInput = item.querySelector("#itemDescInput");
    let delItem = item.querySelector("#delItem");

    editTitle.addEventListener ("click", () => {
        editTitleFunc(title, editTitle, editTitleInput, itemTitleInputValue);
    });

    addDesc.addEventListener ("click", () => {
        addDescFunc(addDesc, addDescText, itemDesc, itemDescContent, itemDescInput);
    });

    delItem.addEventListener ("click", () => {
        mainContent.removeChild(item);
    });
    
    mainContent.appendChild(item);
});

reset.addEventListener ("click", () => {
    itemTitleInput.value = "";
});

deleteAll.addEventListener ("click", () => {
    mainContent.innerHTML = "";
});