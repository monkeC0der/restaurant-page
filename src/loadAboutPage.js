export default function loadAboutPage() {
    console.log('about page')
    content = document.querySelector('#content')
    content.innerHTML = '';

    const about = document.createElement('div')
    about.setAttribute('id', 'aboutPane')
    const aboutText = document.createElement('p')
    aboutText.innerHTML = `
        <h2>Welcome to Dumpling Basket, Chicago's premier hub for all things stuffed and delicious.</h2>
        <p>Nestled in the heart of the Windy City, Dumpling Basket isn't just a restaurant—it's a culinary adventure born from an unlikely blend of serendipity, sheer stubbornness, and an unhealthy obsession with perfectly pleated dough.</p>

        <h3>The Not-So-Epic Saga</h3>

        <p>Our story begins in a cramped apartment kitchen with a broken air conditioner, a cat that thought it was a sous chef, and two college roommates who couldn't boil water without setting off the smoke alarm. One fateful night, after a disastrous attempt at making instant noodles, they had an epiphany: why not take their culinary ineptitude to the next level and start a dumpling restaurant?</p>

        <p>Armed with nothing but a YouTube tutorial and a borrowed rolling pin, they embarked on a journey to create the perfect dumpling. The early days were filled with more failures than a bad reality TV show. There were dumplings that exploded, ones that resembled abstract art, and a particularly memorable batch that sent one roommate to the emergency room (don't ask).</p>

        <h3>From Kitchen Catastrophe to Culinary Triumph</h3>

        <p>After countless trials, tribulations, and a brief consideration of abandoning their dreams to start a sock puppet business, they finally struck gold. The perfect balance of tender dough, flavorful filling, and a pinch of magic (or maybe just MSG) was achieved. Friends and family were cautiously optimistic, and the local food critics were, well, mostly just confused.</p>

        <p>Encouraged by their modest success and a tax refund they were supposed to use responsibly, they opened the first Dumpling Basket location. Despite a grand opening that featured a power outage and a rogue raccoon, Chicagoans couldn't resist the charm and flavor of their dumplings. Word spread faster than a kitchen grease fire, and soon, Dumpling Basket became a beloved spot for foodies and curious passersby alike.</p>

        <h3>Our Philosophy</h3>

        <p>At Dumpling Basket, we believe in the power of perseverance, the importance of laughter, and the undeniable truth that everything tastes better wrapped in dough. We source our ingredients locally whenever possible, except for that one special spice blend we smuggle in from a secretive grandma in Shanghai.</p>

        <h3>Join the Dumpling Revolution</h3>

        <p>So come on down to Dumpling Basket, where every dumpling tells a story, and every bite is a testament to what happens when culinary ambition meets complete lack of common sense. Enjoy the fruits (or rather, dumplings) of our labor and savor the delicious irony that what started as a culinary disaster has now become a Chicago staple.</p>

        <p>And remember, if you leave our restaurant without at least one dumpling-induced nap, you’re doing it wrong.</p>
    `;
    aboutText.setAttribute('id', 'aboutText')
    about.appendChild(aboutText)
    content.appendChild(about);

    const footer = document.createElement('div');
    footer.textContent = 'Tsingtao Dumpling: Established 2005.'
    footer.setAttribute('id', 'footer');
    content.appendChild(footer)
}