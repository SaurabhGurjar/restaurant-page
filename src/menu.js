export function createMenuItemBtn(menuItem, imgLink, price) {
    return `<button id=${menuItem.toLowerCase()} class="menu-item">
        <div class="menu-btn-price-wrapper">
        <p>$${price}</p>
        </div>
        <div class="menu-btn-icon-wrapper">
        <img src=${imgLink}>
        </div>
        <p>${menuItem}</p> 
    </button>`;
}

export function setFoodImg(imgLink) {
    return `<img id="food-img" src=${imgLink}>`;
}