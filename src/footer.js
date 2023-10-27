export default function footer(face, insta, twitter) {
    return ` <div id="footer">
    <div class="footer-cell">
        <button class="social-icon"><img src=${face} alt=""></button>
        <button class="social-icon"><img src=${twitter} alt=""></button>
        <button class="social-icon"><img src=${insta} alt=""></button>
    </div>
    <div class="footer-cell"></div>
    <div class="footer-cell">
        <h4>Copywrite &copy; 2023 Saurabh Choudhary</h4>
    </div>
</div>`
};