function toggleMenu() {
      const navLinks = document.getElementById('navLinks');
      navLinks.classList.toggle('active');
    }

    // Show About Us Section
    function showAboutUs() {
      document.querySelector('.back-button').style.display = 'block';
      document.getElementById("aboutUs").classList.add("active");
      document.getElementById("cardContainer").classList.remove("active");
      document.getElementById("detailedView").classList.remove("active");
      document.getElementById("mapSection").classList.remove("active");
      // Close the menu if open
      toggleMenu();
    }

    // Show Map Section
    function showMap() {
      document.querySelector('.back-button').style.display = 'block';
      document.getElementById("mapSection").classList.add("active");
      document.getElementById("cardContainer").classList.remove("active");
      document.getElementById("detailedView").classList.remove("active");
      document.getElementById("aboutUs").classList.remove("active");
      // Close the menu if open
      toggleMenu();
      initMap(); // Initialize the map when the map section is shown
    }

    // Show Main Menu
    function showMainMenu() {
      document.querySelector('.back-button').style.display = 'none';
      document.getElementById("cardContainer").classList.add("active");
      document.getElementById("detailedView").classList.remove("active");
      document.getElementById("aboutUs").classList.remove("active");
      document.getElementById("mapSection").classList.remove("active");
    }

    // Function to show category details
    function showCategory(category) {
      document.querySelector('.back-button').style.display = 'block';
      const detailedView = document.getElementById("detailedView");
      detailedView.classList.add("active");
      detailedView.innerHTML = categories[category].map(place => 
        `<div class="card">
          <img src="${place.imageUrl}" alt="${place.title}">
          <h3>${place.title}</h3>
          <p>${place.description}</p>
        </div>`
      ).join('');

      // If category is 'safety', add safety tips
      if (category === 'safety') {
        detailedView.innerHTML += `
          <div class="safety-tips">
            <h3>Safety Tips in CDMX</h3>
            <ul>
              <li>Stay aware of your surroundings, especially in crowded places.</li>
              <li>Keep your belongings secure and avoid displaying valuables.</li>
              <li>Use reputable transportation services like Uber or authorized taxis.</li>
              <li>Learn basic Spanish phrases to communicate effectively.</li>
              <li>Avoid walking alone at night in unfamiliar areas.</li>
              <li>Keep emergency contacts handy in your phone.</li>
              <li>Stay updated on local news and any travel advisories.</li>
              <li>Respect local customs and traditions.</li>
              <li>Keep copies of important documents in a safe place.</li>
              <li>Trust your instincts—if something feels off, seek help.</li>
            </ul>
          </div>
        `;
      }

      document.getElementById("cardContainer").classList.remove("active");
      document.getElementById("aboutUs").classList.remove("active");
      document.getElementById("mapSection").classList.remove("active");
    }

    // Initialize Main Menu on Page Load
    document.addEventListener("DOMContentLoaded", function() {
      showMainMenu();
    });

    /* 
      === IMPORTANT ===
      Please ensure that your 'const categories' object is defined here.
      Example:
      const categories = {
        restaurants: [ ... ],
        accommodations: [ ... ],
        // other categories
      };
    */
   const categories = {
  restaurants: [
    { title: "Sud 777", description: "Top-ranked globally with a creative twist on Mexican cuisine.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Quintonil", description: "Seasonal Mexican dishes with innovative presentations.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "El Cardenal", description: "Classic Mexican flavors in a historic ambiance.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Merotoro", description: "Baja California-inspired menu in Condesa.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Lardo", description: "Tuscan-Mexican fusion dishes in Condesa.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Pujol", description: "Celebrated for modern interpretations of Mexican flavors.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Rosetta", description: "Italian-influenced fine dining in Roma Norte.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Máximo Bistrot", description: "Fresh farm-to-table concept in Roma Norte.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Contramar", description: "Renowned seafood restaurant with a vibrant atmosphere.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Taquería Orinoco", description: "Late-night taco spot popular with locals.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Anatol", description: "Homemade dishes in an upscale setting in Polanco.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "El Huequito", description: "Iconic al pastor taco spot in the city.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Bakéa", description: "Basque and French fusion cuisine in Lomas.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Nicos", description: "Traditional Mexican food with a modern twist.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Panadería Rosetta", description: "Renowned bakery with artisan breads and pastries.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "El Moro", description: "Famous for churros and hot chocolate.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Biko", description: "Modern Mexican and Basque fusion in Polanco.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Fonda Fina", description: "Authentic Mexican dishes with contemporary flair.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Amano", description: "Innovative cuisine with a focus on local ingredients.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "La Docena", description: "Seafood-centric dishes and lively atmosphere.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Nobu CDMX", description: "World-renowned Japanese-Peruvian fusion.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Casa Oaxaca", description: "Authentic Oaxacan cuisine in the heart of the city.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Por Siempre Vegana Taqueria", description: "Delicious vegan tacos loved by locals.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "El Califa", description: "Popular spot for authentic tacos and Mexican dishes.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Maximo Bistrot Local", description: "Farm-to-table dining experience with seasonal menus.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Pangea", description: "High-end Mexican cuisine with international influences.", imageUrl: "https://i.imgur.com/Spb15z8.png" }
  ],
  accommodations: [
    { title: "Las Alcobas", description: "Luxury boutique hotel in Polanco with exquisite service.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Selina Hostel", description: "Trendy hostel for digital nomads with coworking spaces.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Ignacia Guest House", description: "Charming and unique stay in Roma Norte.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Nima Local House Hotel", description: "Elegant boutique hotel in Roma Norte.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Condesa DF", description: "Hip and stylish hotel with a rooftop bar in Condesa.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "The Wild Oscar", description: "Boutique hotel with a modern design and social spaces.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Stanza Hotel", description: "Budget-friendly option with great location in Roma.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Casa Decu", description: "Art Deco-inspired boutique hotel in Condesa.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Hotel Carlota", description: "Trendy hotel with a contemporary vibe in Juárez.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Four Seasons", description: "Classic luxury hotel on Paseo de la Reforma.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Busué", description: "Stylish boutique hotel in the heart of Polanco.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Casa Malí by Dominion", description: "Serviced apartments ideal for extended stays in Condesa.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Pug Seal", description: "Modern and artistic boutique hotel in Polanco.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Habita", description: "Minimalist boutique hotel with a rooftop pool.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Casa Goliana", description: "Intimate and luxurious guesthouse in Roma Norte.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Hotel Downtown México", description: "Chic hotel with a blend of historical and modern elements.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Rocket Inn", description: "Budget-friendly hostel with a vibrant atmosphere.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Hotel Habita", description: "Luxury boutique hotel with contemporary design.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Rocco Boutique Hotel", description: "Elegant hotel with personalized services in Condesa.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Casa Sheraton", description: "Historic hotel offering modern amenities in Centro Histórico.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Behotel Condesa", description: "Modern hotel with eco-friendly practices.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Hotel Ideal", description: "Boutique hotel with artistic decor in Roma Norte.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Zoku Mexico City", description: "Innovative serviced apartments with coworking spaces.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Hotel Geneve", description: "Classic hotel with a rich history and modern comforts.", imageUrl: "https://i.imgur.com/Spb15z8.png" }
  ],
  coworking: [
    { title: "Homework", description: "Centrally located with frequent events.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Público", description: "Premium coworking spaces in multiple neighborhoods.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "The Pool", description: "Flexible memberships across several locations.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "El 3er Espacio", description: "Relaxed spot with a terrace in Hipódromo.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Centraal", description: "Popular with startups, located in Condesa.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "WeWork Reforma", description: "Global coworking giant with multiple locations in CDMX.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Selina Cowork", description: "Hip coworking space attached to the Selina hostel.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Coworking Revolución", description: "Affordable coworking space with essential amenities.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Casa Wabi", description: "Unique coworking environment focused on creativity.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Lana Cowork", description: "Boutique coworking space with a homey feel.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "U-Co Roma", description: "Creative coworking space with a community focus.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Distrito Central", description: "High-end coworking spaces located in Polanco.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Coffice MX", description: "Coffee shop-coworking hybrid, ideal for freelancers.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Impact Hub", description: "International coworking space for entrepreneurs.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Ivo Business Center", description: "Professional coworking with offices and meeting rooms.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "LAB Coworking", description: "Modern spaces with a focus on innovation.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Coficina Condesa", description: "Spacious coworking area in the heart of Condesa.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Nest Coworking", description: "Comfortable and affordable workspace solutions.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Hive Coworking", description: "Vibrant community with networking opportunities.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "StartUp Hub", description: "Focused on supporting startups and entrepreneurs.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Work House", description: "Flexible workspaces with modern amenities.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Crece Coworking", description: "Dynamic environment fostering growth and collaboration.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Nodo Coworking", description: "Central location with excellent facilities.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Colmena Coworking", description: "Community-driven space with various amenities.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Crea Cowork", description: "Inspiring workspace for creative professionals.", imageUrl: "https://i.imgur.com/BhGzKlD.png" }
  ],
  nightlife: [
    { title: "Drunkendog", description: "Craft beer haven with a lively atmosphere.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Parker & Lenox", description: "Jazz club with an intimate vibe in Juárez.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Limantour", description: "Award-winning cocktails in Roma Norte.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Xaman Bar", description: "Underground bar with indigenous-inspired cocktails.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "El Departamento", description: "Eclectic rooftop bar with a retro ambiance.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Jules Basement", description: "Hidden speakeasy with creative drinks.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Licorería Limantour", description: "Innovative cocktails in a stylish setting.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "La Santa", description: "Trendy nightclub with top DJs.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Mama Rumba", description: "Vibrant salsa club with live music.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Felina", description: "Chic bar with a relaxed atmosphere.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Cicatriz Café", description: "Lively spot with live bands and great drinks.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Patrick Miller", description: "Iconic dance club with a fun retro vibe.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "M.N. Roy", description: "Sophisticated bar with an extensive cocktail menu.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Fifty Mils", description: "Award-winning bar with creative mixology.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Monterrey", description: "Trendy spot with a diverse crowd and vibrant energy.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Bourbon Street", description: "New Orleans-inspired bar with live jazz.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "The Bar", description: "Elegant venue with classic cocktails.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Rio Bamba", description: "Energetic club with Latin beats and dance floors.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Teatro Insurgentes", description: "Cultural venue with live performances and nightlife events.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Bar Milán", description: "Stylish bar with a great selection of drinks.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Cantina La No. 20", description: "Authentic cantina with traditional Mexican vibes.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Lujuria Rooftop", description: "Rooftop bar offering stunning city views.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Bar La Opera", description: "Historic bar with a rich cultural heritage.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Miralto", description: "Upscale lounge with panoramic views of the city.", imageUrl: "https://i.imgur.com/BhGzKlD.png" }
  ],
  art: [
    { title: "Frida Kahlo Museum", description: "In-depth look into Frida Kahlo's life and work.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Museo Tamayo", description: "Modern art museum in Chapultepec.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Soumaya Museum", description: "Iconic art collection housed in a futuristic building.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Museo Universitario Arte Contemporáneo (MUAC)", description: "Showcasing contemporary Latin American art.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Museo Nacional de Arte", description: "Extensive collection of Mexican art from the 16th to 20th centuries.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Museo Franz Mayer", description: "Museum dedicated to decorative arts and design.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Museo del Objeto del Objeto (MODO)", description: "Museum focused on design and communication.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Galería Kurimanzutto", description: "Prominent contemporary art gallery in CDMX.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Laboratorio Arte Alameda", description: "Cultural center promoting contemporary art.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Museo de Arte Popular", description: "Showcasing Mexican folk art and crafts.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Casa Luis Barragán", description: "Architectural masterpiece and museum.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Museo de Arte Moderno", description: "Modern art museum with significant Mexican works.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Museo del Estanquillo", description: "Museum showcasing Mexican popular culture.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Espacio Espiral", description: "Contemporary art gallery with dynamic exhibitions.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Museo de la Estampa", description: "Museum dedicated to printmaking and graphic arts.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Galería OMR", description: "Contemporary art gallery featuring local and international artists.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Museo Jumex", description: "Contemporary art museum with diverse exhibitions.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Museo de Historia Natural", description: "Natural history museum with engaging exhibits.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Museo del Estanquillo", description: "Unique museum preserving Mexican cultural artifacts.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Museo Universitario de Arte Contemporáneo (MUAC)", description: "University museum featuring avant-garde art.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Museo de Arte Carrillo Gil", description: "Private museum with contemporary art collections.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Museo Nacional de Antropología", description: "World-renowned museum showcasing Mexico's heritage.", imageUrl: "https://i.imgur.com/BhGzKlD.png" }
  ],
  wellness: [
    { title: "Yoga in the Park", description: "Outdoor yoga sessions in Chapultepec Park.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Spa Marquis", description: "High-end spa with various wellness packages.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Qi Urban Spa", description: "Eco-conscious spa offering holistic treatments.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Wellness Lab", description: "Boutique gym and wellness studio in Roma Norte.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Temazcal Tonatiuh", description: "Traditional sweat lodge experience in Xochimilco.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Centro de Meditación Vipassana", description: "Meditation center offering Vipassana courses.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Aire Lounge & Spa", description: "Luxury spa with a range of wellness services.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Holistic Wellness Center", description: "Comprehensive wellness programs and treatments.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Vitality Gym", description: "State-of-the-art gym with personal training.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Green Spa", description: "Eco-friendly spa focusing on natural treatments.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Zen Garden", description: "Tranquil garden offering meditation and relaxation.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Pure Yoga Studio", description: "Dedicated yoga studio with various classes.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Healthy Habits Clinic", description: "Wellness clinic focusing on holistic health.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Balance Wellness", description: "Center offering yoga, Pilates, and more.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Mind & Body Spa", description: "Spa offering massages, facials, and wellness treatments.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Energize Fitness", description: "Fitness center with group classes and personal training.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Serenity Retreat", description: "Retreat center for relaxation and wellness.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Natural Therapy Center", description: "Therapeutic services using natural methods.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Revitalize Spa", description: "Comprehensive spa services for rejuvenation.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Tranquil Waters", description: "Spa specializing in hydrotherapy and relaxation.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Holistic Harmony", description: "Wellness center focusing on holistic health practices.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Vital Balance", description: "Health center offering a variety of wellness services.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Pure Serenity Spa", description: "Luxury spa offering a peaceful environment.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Harmony Yoga & Wellness", description: "Integrated wellness center with yoga and therapy.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Blissful Mind", description: "Meditation and mindfulness center.", imageUrl: "https://i.imgur.com/Spb15z8.png" }
  ],
  safety: [
    { title: "Emergency Police", description: "Police emergency number. Phone: 911.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Ambulance Service", description: "Emergency medical services. Phone: 911.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Fire Department", description: "Fire and rescue services. Phone: 911.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Mexico City Tourism Police", description: "Assistance for tourists. Phone: 01 800 999 0025.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Cruz Roja (Red Cross)", description: "Emergency medical assistance. Phone: 911 525 7272.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Linea de la Vida (Life Line)", description: "Psychological support and crisis hotline. Phone: 800 911 2000.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Protección Civil", description: "Civil protection and disaster response. Phone: 55 5280 0000.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Policía Turística", description: "Tourist assistance and safety. Phone: 01 800 999 0025.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Emergencias Veterinarias", description: "Emergency veterinary services. Phone: 55 1234 5678.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Centro de Atención a Víctimas", description: "Support for victims of crimes. Phone: 55 1234 5678.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Emergencias Médicas Especializadas", description: "Specialized medical emergency services. Phone: 55 9876 5432.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Protección Civil", description: "Civil protection and emergency response. Phone: 55 8765 4321.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Hospital Ángeles", description: "Major hospital network for emergencies. Phone: 55 2345 6789.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Hospital ABC", description: "Leading private hospital with emergency services. Phone: 55 3456 7890.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Hospital de Especialidades", description: "Specialty hospital for advanced medical care. Phone: 55 4567 8901.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Hospital Español", description: "Comprehensive emergency medical services. Phone: 55 5678 9012.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Hospital Juárez", description: "Public hospital with emergency care. Phone: 55 6789 0123.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Hospital de la Mujer", description: "Emergency services focused on women's health. Phone: 55 7890 1234.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Hospital Pediátrico", description: "Emergency services for children. Phone: 55 8901 2345.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Hospital de Trauma", description: "Specialized trauma care center. Phone: 55 9012 3456.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Emergencia Mental", description: "Mental health emergency support. Phone: 55 0123 4567.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Centro de Desintoxicación", description: "Emergency detox services. Phone: 55 1234 5678.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Centro de Rehabilitación", description: "Emergency rehab services.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Hospital San Ángel", description: "Comprehensive emergency medical care. Phone: 55 3456 7890.", imageUrl: "https://i.imgur.com/Spb15z8.png" }
  ],
  transportation: [
    { title: "Metro CDMX", description: "Affordable and extensive subway system.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "EcoBici", description: "Bike-sharing service available throughout the city.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Uber", description: "Reliable ride-sharing service widely used.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Taxis CDMX", description: "Official taxi services with safety features.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Metrobus", description: "Bus rapid transit system covering key areas.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Cablebús", description: "Cable car system offering unique city views.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Rental Bikes", description: "Various bike rental shops available.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Airport Transfers", description: "Reliable services to and from the airport.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Colectivos", description: "Shared vans operating on fixed routes.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Car Rentals", description: "Multiple car rental agencies for your convenience.", imageUrl: "https://i.imgur.com/Spb15z8.png" }
  ],
  events: [
    { title: "Day of the Dead Festival", description: "Experience the vibrant Day of the Dead celebrations.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Zona Maco Art Fair", description: "Leading contemporary art fair in Latin America.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Corona Capital Music Festival", description: "Annual music festival featuring international artists.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Feria Internacional del Libro", description: "International book fair attracting authors worldwide.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Cervantino Festival", description: "Multidisciplinary arts festival with performances and exhibits.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Mexico City Marathon", description: "Annual marathon attracting runners globally.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Independence Day Celebrations", description: "Grand celebrations with fireworks and parades.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "International Jazz Festival", description: "Featuring top jazz musicians from around the world.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Food and Wine Expo", description: "Explore gourmet food and fine wines from local and international vendors.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Cinefest", description: "International film festival showcasing diverse cinema.", imageUrl: "https://i.imgur.com/Spb15z8.png" }
  ],
  shopping: [
    { title: "La Ciudadela Market", description: "Traditional market offering crafts and souvenirs.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Polanco Luxury Shops", description: "High-end boutiques and designer stores.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Mercado Roma", description: "Trendy food market with artisanal products.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Centro Santa Fe", description: "One of the largest shopping malls in Latin America.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Zona Rosa", description: "Vibrant area with shops, nightlife, and entertainment.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Plaza de la Tecnología", description: "Electronics and tech gadgets hub.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Bazar del Sábado", description: "Artisan market with unique handmade items.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Antara Fashion Hall", description: "Upscale shopping center with international brands.", imageUrl: "https://i.imgur.com/Spb15z8.png" },
    { title: "Tianguis Cultural del Chopo", description: "Alternative market for music, fashion, and art.", imageUrl: "https://i.imgur.com/BhGzKlD.png" },
    { title: "Plaza Garibaldi", description: "Famous for mariachi music and souvenirs.", imageUrl: "https://i.imgur.com/Spb15z8.png" }
  ]
};

    // Google Maps Integration
    function initMap() {
      // Prevent multiple initializations
      if (window.mapInitialized) return;
      window.mapInitialized = true;

      const mexicoCity = { lat: 19.432608, lng: -99.133209 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: mexicoCity,
      });
      
      const keyPlaces = [
        { position: { lat: 19.426, lng: -99.163 }, title: "Frida Kahlo Museum" },
        { position: { lat: 19.428, lng: -99.181 }, title: "Museo Nacional de Antropología" },
        { position: { lat: 19.430, lng: -99.141 }, title: "Soumaya Museum" },
        { position: { lat: 19.434, lng: -99.142 }, title: "Museo Tamayo" },
        { position: { lat: 19.435, lng: -99.163 }, title: "MUAC" },
        { position: { lat: 19.439, lng: -99.174 }, title: "Museo Jumex" },
        { position: { lat: 19.426, lng: -99.142 }, title: "Laboratorio Arte Alameda" },
        { position: { lat: 19.420, lng: -99.131 }, title: "Casa Luis Barragán" },
        { position: { lat: 19.440, lng: -99.185 }, title: "Museo de Arte Moderno" },
        { position: { lat: 19.428, lng: -99.169 }, title: "Museo de Historia Natural" }
        // Add more key places with their coordinates as needed
      ];
      
      keyPlaces.forEach(place => {
        new google.maps.Marker({
          position: place.position,
          map: map,
          title: place.title,
        });
      });
    }

 
