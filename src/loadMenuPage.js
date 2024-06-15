export default function loadMenuPage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const menuPane = document.createElement('div');
    menuPane.setAttribute('id', 'menuPane')
    menuPane.innerHTML = `
    <div class="menu">
        <h1>Dumpling Basket Menu</h1>

        <div class="section">
            <h2>Appetizers</h2>
            <div class="item">
                <div>
                    <h3>Spring Rolls</h3>
                    <p>Fresh veggies wrapped in rice paper</p>
                </div>
                <div class="price">$5.99</div>
            </div>
            <div class="item">
                <div>
                    <h3>Fried Wontons</h3>
                    <p>Golden crispy wontons with savory filling</p>
                </div>
                <div class="price">$6.99</div>
            </div>
        </div>

        <div class="section">
            <h2>Main Dishes</h2>
            <div class="item">
                <div>
                    <h3>Pork Dumplings</h3>
                    <p>Juicy pork filling with a hint of ginger</p>
                </div>
                <div class="price">$8.99</div>
            </div>
            <div class="item">
                <div>
                    <h3>Chicken Dumplings</h3>
                    <p>Succulent chicken with scallions and herbs</p>
                </div>
                <div class="price">$8.99</div>
            </div>
            <div class="item">
                <div>
                    <h3>Vegetarian Dumplings</h3>
                    <p>A medley of fresh veggies and tofu</p>
                </div>
                <div class="price">$7.99</div>
            </div>
        </div>

        <div class="section">
            <h2>Sides</h2>
            <div class="item">
                <div>
                    <h3>Steamed Rice</h3>
                    <p>Fluffy white rice</p>
                </div>
                <div class="price">$2.99</div>
            </div>
            <div class="item">
                <div>
                    <h3>Pickled Vegetables</h3>
                    <p>Tangy and refreshing pickles</p>
                </div>
                <div class="price">$3.99</div>
            </div>
        </div>

        <div class="section">
            <h2>Desserts</h2>
            <div class="item">
                <div>
                    <h3>Mango Sticky Rice</h3>
                    <p>Sweet sticky rice with fresh mango slices</p>
                </div>
                <div class="price">$5.99</div>
            </div>
            <div class="item">
                <div>
                    <h3>Sesame Balls</h3>
                    <p>Fried sesame balls with sweet bean filling</p>
                </div>
                <div class="price">$4.99</div>
            </div>
        </div>
    </div>
    `;

    content.appendChild(menuPane);
    const footer = document.createElement('div');
    footer.textContent = 'Tsingtao Dumpling: Established 2005.'
    footer.setAttribute('id', 'footer');
    content.appendChild(footer)

}