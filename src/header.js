export default function header(logo, notify) {
    return `<div id="header">
    <div class="header-cell">
        <img src=${logo} alt="" id="logo">
    </div>
    <div class="header-cell" id="harder-link-wrapper">
        <a href="#" class="header-link header-active" id="home">Home</a>
        <a href="#" class="header-link" id="contact">Contact</a>
    </div>
    <div class="header-cell">
        <button class="notification-wrapper">
            <img src=${notify} alt="" id="notify-icon">
        </button>
    </div>
</div>`;
}

