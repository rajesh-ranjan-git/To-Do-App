let itemTitleInput = document.querySelector(".itemTitleInput");
let addItem = document.querySelector(".addItem");
let reset = document.querySelector(".reset");
let deleteAll = document.querySelector(".deleteAll");
let mainContent = document.querySelector(".mainContent");
let itemsObj = "";
let storedItems = "";

let showItems = () => {
    let storedItems = localStorage.getItem("storedItems");
    storedItems = JSON.parse(storedItems);

    if (storedItems == null || storedItems.length == 0) {
        mainContent.innerHTML = "<h1>Lets start adding items...<h1>";
        document.querySelector(".mainContent h1").style.display = "block";
    } else {
        mainContent.innerHTML = "";
        for (let i=0; i<storedItems.length; i++) {
            let item = document.createElement("div");
            item.classList.add("item");
            item.innerHTML = `
                <div class="itemTitle">
                    <p class="title">${storedItems[i].itemTitle}</p>
                    <input class="editTitleInput" type="text" placeholder="${storedItems[i].itemTitle}">
                    <div>
                        <button class="editTitle">Edit Title</button>
                        <button class="addDesc">Add Description</button>
                        <svg id="delItem" width="2.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
                    </div>
                </div>
                <div class="itemDesc">
                    <p class="itemDescContent">${storedItems[i].itemDescription}</p>
                    <textarea name="itemDescInput" id="itemDescInput">${storedItems[i].itemDescription}</textarea>
                </div>`;
            mainContent.appendChild(item);
            itemTitleInput.value = "";
            let title = item.querySelector(".title");
            let editTitleInput = item.querySelector(".editTitleInput");
            let editTitle = item.querySelector(".editTitle");
            let addDesc = item.querySelector(".addDesc");
            let itemDesc = item.querySelector(".itemDesc");
            let itemDescContent = item.querySelector(".itemDescContent");
            let itemDescInput = item.querySelector("#itemDescInput");
            let delItem = item.querySelector("#delItem");

            if (storedItems[i].itemDescription !="") {
                itemDesc.style.display = "block";
                addDesc.innerHTML = "Edit Description";
            }
        
            editTitle.addEventListener ("click", () => {
                editTitleFunc(title, editTitle, editTitleInput, storedItems, i);
            });
        
            addDesc.addEventListener ("click", () => {
                addDescFunc(addDesc, itemDesc, itemDescContent, itemDescInput, storedItems, i);
            });
        
            delItem.addEventListener ("click", () => {
                delItemFunc(item, title, itemDescContent);
            });
        }    
    }
}

let editTitleFunc = (title, editTitle, editTitleInput, storedItems, i) => {
    title.style.display = "none";
    editTitleInput.style.display = "block";
    editTitle.innerHTML = "Done";
    editTitle.addEventListener ("click", () => {
        storedItems[i].itemTitle = editTitleInput.value;
        title.innerHTML = `${storedItems[i].itemTitle}`;
        localStorage.setItem("storedItems", JSON.stringify(storedItems));
        title.style.display = "block";
        editTitleInput.style.display = "none";
        editTitle.innerHTML = "Edit Title";
        editTitle.addEventListener ("click", () => {
            editTitleFunc(title, editTitle, editTitleInput, storedItems, i);
        });
    });
}

let addDescFunc = (addDesc, itemDesc, itemDescContent, itemDescInput, storedItems, i) => {
    addDesc.innerHTML = "Done";
    itemDesc.style.display = "block";
    itemDescContent.style.display = "none";
    itemDescInput.style.display = "block";
    addDesc.addEventListener ("click", () => {
        addDesc.innerHTML = "Edit Description";
        itemDescContent.innerHTML = `${itemDescInput.value}`;
        storedItems[i].itemDescription = itemDescInput.value;
        localStorage.setItem("storedItems", JSON.stringify(storedItems));     
        itemDescContent.style.display = "block";
        itemDescInput.style.display = "none";
        addDesc.addEventListener ("click", () => {
            addDescFunc(addDesc, itemDesc, itemDescContent, itemDescInput, storedItems, i);
        });
    });
}

let delItemFunc = (item, title, itemDescContent) => {
    let storedItems = localStorage.getItem("storedItems");
    storedItems = JSON.parse(storedItems);
    
    for (let j=0; j<storedItems.length; j++) {
        if (title.innerHTML == storedItems[j].itemTitle && itemDescContent.innerHTML == storedItems[j].itemDescription) {
            storedItems.splice(j, 1);
            localStorage.setItem("storedItems", JSON.stringify(storedItems));
        }
    }

    // if (storedItems.length == 0) {
    //     localStorage.clear(storedItems);
    // }

    mainContent.removeChild(item);

    if (storedItems.length == 0) {
        localStorage.clear(storedItems);
        mainContent.innerHTML = "<h1>Lets start adding items...<h1>";
    }
}

addItem.addEventListener ("click", () => {
    storedItems = localStorage.getItem("storedItems");

    if (storedItems == null) {
        storedItems = [];
    } else {
        storedItems = JSON.parse(storedItems);
    }

    let itemTitleInputValue = itemTitleInput.value;

    if (itemTitleInputValue == "") return;

    itemsObj = {
        itemTitle : itemTitleInputValue,
        itemDescription : ""
    };

    storedItems.push(itemsObj);

    localStorage.setItem("storedItems", JSON.stringify(storedItems));

    showItems();
});

showItems();

reset.addEventListener ("click", () => {
    itemTitleInput.value = "";
});

deleteAll.addEventListener ("click", () => {
    mainContent.innerHTML = "<h1>Lets start adding items...<h1>";
    localStorage.clear(storedItems);
});