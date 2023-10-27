export default function homeMain(img) {
    return `
    <div id="main-wrapper">
        <div id="main">
            <div class="main-cell">
                <div class="heading-wrapper">
                    <h2>The best <br>delicious <br>food</h2>
                    <p>that meets your needs</p>
                </div>
                <div id="menu" class="menu-wrapper"></div>
            </div>
            <div class="main-cell">
                <div id="img-wrapper">
                    <img src=${img} alt="" id="food-img">
                </div>
            </div>
        </div>
    </div>`;
}