const outfits = {

    college: [
        {
            top: "Oversized White T-Shirt",
            bottom: "Blue Straight Jeans",
            shoes: "White Sneakers",
            accessory: "Tote Bag"
        },
        {
            top: "Pastel Shirt",
            bottom: "Black Wide-Leg Pants",
            shoes: "Sneakers",
            accessory: "Small Shoulder Bag"
        },
        {
            top: "Crop Top",
            bottom: "Cargo Pants",
            shoes: "Chunky Sneakers",
            accessory: "Backpack"
        }
    ],

    office: [
        {
            top: "White Formal Shirt",
            bottom: "Black Trousers",
            shoes: "Black Flats",
            accessory: "Watch + Handbag"
        },
        {
            top: "Pastel Blouse",
            bottom: "Beige Trousers",
            shoes: "Low Heels",
            accessory: "Minimal Jewelry"
        }
    ],

    party: [
        {
            top: "Sequin Top",
            bottom: "Black Skirt",
            shoes: "Heels",
            accessory: "Statement Earrings"
        },
        {
            top: "Satin Top",
            bottom: "Wide-Leg Pants",
            shoes: "Heels",
            accessory: "Clutch"
        }
    ],

    date: [
        {
            top: "Floral Top",
            bottom: "White Jeans",
            shoes: "Sandals",
            accessory: "Small Handbag"
        },
        {
            top: "Elegant Midi Dress",
            bottom: "Bodycon",
            shoes: "Block Heels",
            accessory: "Simple Necklace"
        }
    ],

    casual: [
        {
            top: "Graphic T-Shirt",
            bottom: "Mom Jeans",
            shoes: "Sneakers",
            accessory: "Crossbody Bag"
        },
        {
            top: "Tank Top",
            bottom: "Cargo Jeans",
            shoes: "Canvas Shoes",
            accessory: "Cap"
        }
    ],

    traditional: [
        {
            top: "Printed Kurti",
            bottom: "Palazzo Pants",
            shoes: "Juttis",
            accessory: "Jhumkas"
        },
        {
            top: "Saree Half Saree",
            bottom: "skirts",
            shoes: "Heels",
            accessory: "Bangles + Earrings + Neck piece"
        }
    ],

    vacation: [
        {
            top: "Linen Shirt",
            bottom: "Wide-Leg Pants",
            shoes: "Sandals",
            accessory: "Sunglasses"
        },
        {
            top: "Summer Dress",
            bottom: "Skirts Jeans Maxi",
            shoes: "Flat Sandals",
            accessory: "Sun Hat Bracelet Chain"
        }
    ]
};


function pickOutfit() {

    const occasion = document.getElementById("occasion").value;

    const outfitCard = document.getElementById("outfitCard");

    const anotherBtn = document.getElementById("anotherBtn");


    if (occasion === "") {

        alert("Please select an occasion!");

        return;
    }


    const selectedOutfits = outfits[occasion];


    const randomIndex =
        Math.floor(Math.random() * selectedOutfits.length);


    const outfit = selectedOutfits[randomIndex];


    outfitCard.innerHTML = `

        <div class="outfit-icon">
            👗
        </div>

        <h2>✨ Your Outfit</h2>

        <div class="outfit-details">

            👚 <strong>Top/Dress:</strong>
            ${outfit.top}

            <br>

            👖 <strong>Bottom:</strong>
            ${outfit.bottom}

            <br>

            👟 <strong>Shoes:</strong>
            ${outfit.shoes}

            <br>

            👜 <strong>Accessory:</strong>
            ${outfit.accessory}

        </div>

    `;


    anotherBtn.style.display = "block";
}