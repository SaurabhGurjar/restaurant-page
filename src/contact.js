export default function contactForm(mapImg) {
    return `
    <div id="contact-form-wrapper">
        <div>
            <h4>Started(*) Fields are required</h4>
            <form id="contact-form">
            <div>
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Saurabh Choudhary" required autocomplete="off">
            </div>
            <div>
                <label for="e-mail">Email *</label>
                <input type="email" id="e-mail" name="email" placeholder="example@mail.com" required autocomplete="off">
            </div>
            <div>
                <label for="message">Message *</label>
                <input type="textarea" id="message" name="message" placeholder="Write your message here." required autocomplete="off">
            </div>
            <div>
                <input type="submit" value="Send" id="submit-btn">
            </div>
            </form>
            <h5 id="feedback"></h5>
        </div>
        <div class="contant-info-wrapper">
            <div class="contact-info-text-wrapper">
                <p class="contact-info">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1007 13.359L16.5562 12.9062C17.1858 12.2801 18.1672 12.1515 18.9728 12.5894L20.8833 13.628C22.1102 14.2949 
                            22.3806 15.9295 21.4217 16.883L20.0011 18.2954C19.6399 18.6546 19.1917 18.9171 18.6763 18.9651C17.4841 19.0763 15.0313 19.0163 12.1374 17.3223L16.1007 13.359ZM10.1907 
                            7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668
                            3.96765 5.12559 4.00289 5.74561C4.06761 6.88446 4.45582 8.9649 6.15176 11.5215L10.1907 7.48257Z" fill="#1C274C"></path> <path opacity="0.6" d="M12.0627 11.4971C9.11695 
                            8.56804 10.1836 7.48913 10.1903 7.48242L6.15137 11.5214C6.81756 12.5256 7.68554 13.6034 8.81497 14.7264C9.95468 15.8596 11.0755 16.7008 12.137 17.3222L16.1003 13.3589C16.1003 
                            13.3589 15.0177 14.4353 12.0627 11.4971Z" fill="#1C274C">
                            </path> 
                        </g>
                    </svg>
                    <span>9876543210</span>
                </p>
                <p class="contact-info">
                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><path d="M607.7 64.2c-102.9 0-186.3 83.4-186.3 186.3 0 30 15.9 66.6 38.3 103.3 15.2 24.8 33.3 49.7 51.7 
                        72.6C559 486 607.7 533 607.7 533s17.7-17.1 42.3-43.8c14-15.3 30.3-33.6 46.7-53.8 47.9-58.7 97.3-132 97.3-184.9 0-102.9-83.4-186.3-186.3-186.3z 
                        m77.8 353.2c-8 10-16.1 19.6-23.9 28.6-7.8 9-15.4 17.5-22.5 25.3-12.5 13.7-23.4 25.1-31.4 33.3-12.5-12.8-32.3-33.5-53.8-58.5-7.8-9-15.8-18.5-23.
                        8-28.5-13.5-16.7-25.5-32.7-36.1-48-10.1-14.6-18.8-28.4-26.1-41.5-17.6-31.6-26.6-57.8-26.6-77.8 0-44.4 17.3-86.2 48.7-117.6C521.4 101.3 563.2 84 
                        607.6 84c44.4 0 86.2 17.3 117.6 48.7 31.4 31.4 48.7 73.2 48.7 117.6 0 20-8.9 46.1-26.5 77.6-14.8 26.9-35.6 56.9-61.9 89.5z" fill="#ffa500">
                        </path>
                        <path d="M607.7 183.1c36.9 0 67 30.1 67 67s-30.1 67-67 67-67-30.1-67-67 30-67 67-67m0-20c-48 0-87 38.9-87 87 0 48 38.9 87 87 87 48 0 87-38.9 
                        87-87s-39-87-87-87z" fill="#ffa500"></path>
                        <path d="M927.9 352.4l-195.7 70.3-35.6 12.8c-16.4 20.1-32.7 38.5-46.7 53.8l1.9 0.9v416.6l-12.7-5.9-46.3-21.6-212.2-98.9-8.6-4v-415l139.4 
                        65c-18.4-23-36.5-47.8-51.7-72.6l-77.6-36.2-3.7-1.7-8.6-4-7.8-3.7-2.2 0.8L64 415.3v511.8L362 820l230.8 107.6 46.3 21.6 22.7 10.6L960 852.7V340.9l-32.1 
                        11.5zM352 776.9l-4.9 1.8L108 864.6V446.2l244-87.7v418.4z m564 44.9l-244.2 87.7V491.1l5.1-1.8L916 403.4v418.4z" fill="#39393A">
                        </path>
                        </g>
                    </svg>
                    <span>Suite 383 8400 Leopoldo Via, North Emilton, UT 02450</span>
                </p>
            </div>
            <img src=${mapImg} id="map-img">
        </div>
    </div>
    `;
}