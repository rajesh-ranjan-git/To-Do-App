let addItem = document.querySelector(".addItem");
let reset = document.querySelector(".reset");
let deleteAll = document.querySelector(".deleteAll");

let showitemList = () => {
    let itemList = localStorage.getItem("itemList");
    itemList = JSON.parse(itemList);
    let mainContent = document.querySelector(".mainContent");
    let editTitleText = "Edit Title";
    let addDescText = "Add Description";
    
    let item = "";
    let title = "";
    let editTitleInput = "";
    let editTitle = "";
    let addDesc = "";
    let itemDesc = "";
    let itemDescContent = "";
    let itemDescInput = "";
    let delItem = "";

    if (itemList == null || itemList.length == 0) {
        mainContent.innerHTML = "<h1>Lets add some items here...</h1>";
    } else {
        let temp = "";
        for (let i=0; i<itemList.length; i++) {
            // temp += `<div class="item">
            //             <div class="itemTitle">
            //                 <p class="title">${itemList[i].itemTitle}</p>
            //                 <input class="editTitleInput" type="text" placeholder="${itemList[i].itemTitle}">
            //                 <div>
            //                     <button class="editTitle">${editTitleText}</button>
            //                     <button class="addDesc">${addDescText}</button>
            //                     <svg id="delItem" width="2.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
            //                 </div>
            //             </div>
            //             <div class="itemDesc">
            //                 <p class="itemDescContent">${itemList[i].itemDescription}</p>
            //                 <textarea name="itemDescInput" id="itemDescInput">${itemList[i].itemDescription}</textarea>
            //             </div>
            //         </div>`;
            
            item = document.createElement("div");
            item.classList.add("item");
            item.innerHTML = `
                <div class="itemTitle">
                    <p class="title">${itemList[i].itemTitle}</p>
                    <input class="editTitleInput" type="text" placeholder="${itemList[i].itemTitle}">
                    <div>
                        <button class="editTitle">${editTitleText}</button>
                        <button class="addDesc">${addDescText}</button>
                        <svg id="delItem" width="2.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
                    </div>
                </div>
                <div class="itemDesc">
                    <p class="itemDescContent">${itemList[i].itemDescription}</p>
                    <textarea name="itemDescInput" id="itemDescInput">${itemList[i].itemDescription}</textarea>
                </div>`;
            mainContent.appendChild(item);
        }
        // mainContent.innerHTML = temp;
        title = item.querySelector(".title");
        editTitleInput = item.querySelector(".editTitleInput");
        editTitle = item.querySelector(".editTitle");
        addDesc = item.querySelector(".addDesc");
        itemDesc = item.querySelector(".itemDesc");
        itemDescContent = item.querySelector(".itemDescContent");
        itemDescInput = item.querySelector("#itemDescInput");
        delItem = item.querySelector("#delItem");
    
        editTitle.addEventListener ("click", () => {
            editTitleFunc(title, editTitle, editTitleInput, itemList);
        });
    
        addDesc.addEventListener ("click", () => {
            addDescFunc(addDesc, addDescText, itemDesc, itemDescContent, itemDescInput, itemList);
        });
    
        delItem.addEventListener ("click", () => {
            mainContent.removeChild(item);
        });
    }
}

let editTitleFunc = (title, editTitle, editTitleInput, itemList) => {
    title.style.display = "none";
    editTitleInput.style.display = "block";
    editTitle.innerHTML = "Done";
    let temp = itemList[i].itemTitle;
    editTitle.addEventListener ("click", () => {
        itemList[i].itemTitle = editTitleInput.value;
        title.innerHTML = `${itemList[i].itemTitle}`;
        for (let j=0; j<itemList.length; j++) {
            if (itemList[j].itemTitle == temp) {
                itemList[j].itemTitle = title.innerHTML;
            }
        }
        localStorage.setItem("itemList", JSON.stringify(itemList));
        title.style.display = "block";
        editTitleInput.style.display = "none";
        editTitle.innerHTML = "Edit Title";
        editTitle.addEventListener ("click", () => {
            editTitleFunc(title, editTitle, editTitleInput, itemList);
        });
    });
}

let addDescFunc = (addDesc, addDescText, itemDesc, itemDescContent, itemDescInput, itemList) => {
    addDescText = "Done";
    addDesc.innerHTML = `${addDescText}`;
    itemDesc.style.display = "block";
    itemDescContent.style.display = "none";
    itemDescInput.style.display = "block";
    let temp = itemDescContent.innerHTML;
    addDesc.addEventListener ("click", () => {
        addDescText = "Edit Description";
        addDesc.innerHTML = `${addDescText}`;
        itemDescContent.innerHTML = `${itemDescInput.value}`;
        for (let j=0; j<itemList.length; j++) {
            if (itemList[j].itemDescription == temp) {
                itemList[j].itemDescription = itemDescContent.innerHTML;
            }
        }
        localStorage.setItem("itemList", JSON.stringify(itemList));     
        itemDescContent.style.display = "block";
        itemDescInput.style.display = "none";
        addDesc.addEventListener ("click", () => {
            addDescFunc(addDesc, addDescText, itemDesc, itemDescContent, itemDescInput, itemList);
        });
    });
}

addItem.addEventListener ("click", () => {
    let itemList = localStorage.getItem("itemList");

    if (itemList == null) {
        itemList = [];
    } else {
        itemList = JSON.parse(itemList);
    }

    let itemTitleInput = document.querySelector(".itemTitleInput").value;
    // let itemDescription = document.querySelector("itemDescription").value;

    let itemObj = {
        itemTitle : itemTitleInput,
        itemDescription : ""
    }

    itemList.push(itemObj);

    localStorage.setItem("itemList", JSON.stringify(itemList));

    showitemList();
});

showitemList();

reset.addEventListener ("click", () => {
    itemTitleInput.value = "";
});

deleteAll.addEventListener ("click", () => {
    mainContent.innerHTML = "";
});