var properties = [
    {
        "title": "Property 1",
        "price": 125000,
        "location": "Atlanta, Georgia",
        "sqft": 2250,
        "picture": "property1.jpg"
    },
    {
        "title": "Property 2",
        "price": 729000,
        "location": "Miami, Florida",
        "sqft": 1742,
        "picture": "property2.jpg"
    },
    {
        "title": "Property 3",
        "price": 2888000,
        "location": "San Francisco, California",
        "sqft": 2856,
        "picture": "property3.jpg"
    },
    {
        "title": "Property 4",
        "price": 60000000,
        "location": "Dallas, Texas",
        "sqft": 27092,
        "picture": "property4.jpg"
    },
    {
        "title": "Property 5",
        "price": 409000,
        "location": "New York, New York",
        "sqft": 1250,
        "picture": "property5.jpg"
    },
    {
        "title": "Property 6",
        "price": 1400000,
        "location": "Colorado Springs, Colorado",
        "sqft": 3394,
        "picture": "property6.jpg"
    },
    {
        "title": "Property 7",
        "price": 1497000,
        "location": "Seattle, Washington",
        "sqft": 4155,
        "picture": "property7.jpg"
    },
    {
        "title": "Property 8",
        "price": 750000,
        "location": "Boston, Massachusetts",
        "sqft": 1804,
        "picture": "property8.jpg"
    },
    {
        "title": "Property 9",
        "price": 499000,
        "location": "Birmingham, Alabama",
        "sqft": 2037,
        "picture": "property9.jpg"
    },
    {
        "title": "Property 10",
        "price": 415760,
        "location": "Nashville, Tennessee",
        "sqft": 1774,
        "picture": "property10.jpg"
    },
	{
        "title": "Property 11",
        "price": 965000,
        "location": "Myrtle Beach, South Carolina",
        "sqft": 3983,
        "picture": "property11.jpg"
    },
    {
        "title": "Property 12",
        "price": 515000,
        "location": "Charlotte, North Carolina",
        "sqft": 3801,
        "picture": "property12.jpg"
    }
];
const logout = document.getElementById("logout");
logout.addEventListener("click", function(){window.location.href = "./index.html";
});

function createPropertyCard(property) {
  var propertyCard = document.createElement("div");
  propertyCard.className = "property-card";

  var propertyTitle = document.createElement("div");
  propertyTitle.className = "property-title";
  propertyTitle.textContent = property.title;
  propertyCard.appendChild(propertyTitle);

  // Create an anchor tag for the property image link
  var propertyLink = document.createElement("a");
  propertyLink.href = "property" + (properties.indexOf(property) + 1) + ".html"; // Use the index to construct the URL

  var propertyImage = document.createElement("img");
  propertyImage.className = "property-image";
  propertyImage.src = property.picture;

  // Append the image to the anchor tag
  propertyLink.appendChild(propertyImage);

  // Append the anchor tag to the property card
  propertyCard.appendChild(propertyLink);

  var propertyDetails = document.createElement("div");
  propertyDetails.className = "property-details";

  var detailsList = document.createElement("ul");
  var priceItem = document.createElement("li");
  priceItem.textContent = "Price: $" + property.price.toLocaleString();
  detailsList.appendChild(priceItem);

  var locationItem = document.createElement("li");
  locationItem.textContent = "Location: " + property.location;
  detailsList.appendChild(locationItem);

  var sqftItem = document.createElement("li");
  sqftItem.textContent = "Sqft: " + property.sqft;
  detailsList.appendChild(sqftItem);

  propertyDetails.appendChild(detailsList);
  propertyCard.appendChild(propertyDetails);

  var wishlistButton = document.createElement("button");
  wishlistButton.className = "wishlist-button";
  wishlistButton.textContent = "Add to Wishlist";
  wishlistButton.onclick = function () {
    addToWishlist(propertyCard);
  };
  propertyCard.appendChild(wishlistButton);

  var hideButton = document.createElement("button");
  hideButton.className = "hide-button";
  hideButton.textContent = "Hide";
  hideButton.onclick = function () {
    propertyCard.style.display = "none";
  };
  propertyCard.appendChild(hideButton);

  return propertyCard;
}

// Function to display all properties
function displayProperties() {
    var propertiesContainer = document.getElementById("properties-container");
    properties.forEach(function (property) {
        propertiesContainer.appendChild(createPropertyCard(property));
    });
}

// Wishlist functionality
var wishlist = [];

function addToWishlist(propertyCard) {
    wishlist.push(propertyCard);
    displayWishlist();
}

function displayWishlist() {
    var wishlistContainer = document.getElementById("wishlist");
    wishlistContainer.innerHTML = ""; // Clear the previous contents

    wishlist.forEach(function (propertyCard) {
        wishlistContainer.appendChild(propertyCard);
    });
}

// Search functionality
function searchProperties() {
    var input = document.getElementById("search-input").value.toLowerCase();
    var filteredProperties = properties.filter(function (property) {
        return (
            property.title.toLowerCase().includes(input) ||
            property.location.toLowerCase().includes(input)
        );
    });

    var propertiesContainer = document.getElementById("properties-container");
    propertiesContainer.innerHTML = ""; // Clear the previous contents

    filteredProperties.forEach(function (property) {
        propertiesContainer.appendChild(createPropertyCard(property));
    });
}

// Display all properties when the page loads
displayProperties();