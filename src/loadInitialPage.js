export default function loadInitialPage() {
        console.log('home')
        const content = document.querySelector('#content')
        content.innerHTML='';
        content.setAttribute('id', 'content');

        const image = document.createElement('div');
        image.setAttribute('id', 'image');
        const title = document.createElement('h1');
        title.textContent = 'Dumpling Basket';
        image.appendChild(title)
        content.appendChild(image)

        const description = document.createElement('div');
        description.setAttribute('id', 'description')
        const about = document.createElement('p')
        about.textContent = "Don't you just love those mfking dumplings? This place has the best fuckin dumplings west of Hunan - but don't take it from us, just here what President XiPing said during last year's stateside visit: \"Fuck a duck those are some good dumplings\". So come on by, and grab a basket - you won't ragret it!"
        description.appendChild(about)
        content.appendChild(description)

        const footer = document.createElement('div');
        footer.textContent = 'Tsingtao Dumpling: Established 2005.'
        footer.setAttribute('id', 'footer');
        content.appendChild(footer)
}

