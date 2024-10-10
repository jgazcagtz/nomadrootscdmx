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
        { title: "Sud 777", description: "Top-ranked globally with a creative twist on Mexican cuisine.", imageUrl: "https://via.placeholder.com/300x200?text=Sud+777" },
        { title: "Quintonil", description: "Seasonal Mexican dishes with innovative presentations.", imageUrl: "https://via.placeholder.com/300x200?text=Quintonil" },
        { title: "El Cardenal", description: "Classic Mexican flavors in a historic ambiance.", imageUrl: "https://via.placeholder.com/300x200?text=El+Cardenal" },
        { title: "Merotoro", description: "Baja California-inspired menu in Condesa.", imageUrl: "https://via.placeholder.com/300x200?text=Merotoro" },
        { title: "Lardo", description: "Tuscan-Mexican fusion dishes in Condesa.", imageUrl: "https://via.placeholder.com/300x200?text=Lardo" },
        { title: "Pujol", description: "Celebrated for modern interpretations of Mexican flavors.", imageUrl: "https://via.placeholder.com/300x200?text=Pujol" },
        { title: "Rosetta", description: "Italian-influenced fine dining in Roma Norte.", imageUrl: "https://via.placeholder.com/300x200?text=Rosetta" },
        { title: "Máximo Bistrot", description: "Fresh farm-to-table concept in Roma Norte.", imageUrl: "https://via.placeholder.com/300x200?text=Maximo+Bistrot" },
        { title: "Contramar", description: "Renowned seafood restaurant with a vibrant atmosphere.", imageUrl: "https://via.placeholder.com/300x200?text=Contramar" },
        { title: "Taquería Orinoco", description: "Late-night taco spot popular with locals.", imageUrl: "https://via.placeholder.com/300x200?text=Taqueria+Orinoco" },
        { title: "Anatol", description: "Homemade dishes in an upscale setting in Polanco.", imageUrl: "https://via.placeholder.com/300x200?text=Anatol" },
        { title: "El Huequito", description: "Iconic al pastor taco spot in the city.", imageUrl: "https://via.placeholder.com/300x200?text=El+Huequito" },
        { title: "Bakéa", description: "Basque and French fusion cuisine in Lomas.", imageUrl: "https://via.placeholder.com/300x200?text=Bakea" },
        { title: "Nicos", description: "Traditional Mexican food with a modern twist.", imageUrl: "https://via.placeholder.com/300x200?text=Nicos" },
        { title: "Panadería Rosetta", description: "Renowned bakery with artisan breads and pastries.", imageUrl: "https://via.placeholder.com/300x200?text=Panaderia+Rosetta" },
        { title: "El Moro", description: "Famous for churros and hot chocolate.", imageUrl: "https://via.placeholder.com/300x200?text=El+Moro" },
        { title: "Biko", description: "Modern Mexican and Basque fusion in Polanco.", imageUrl: "https://via.placeholder.com/300x200?text=Biko" },
        { title: "Fonda Fina", description: "Authentic Mexican dishes with contemporary flair.", imageUrl: "https://via.placeholder.com/300x200?text=Fonda+Fina" },
        { title: "Amano", description: "Innovative cuisine with a focus on local ingredients.", imageUrl: "https://via.placeholder.com/300x200?text=Amano" },
        { title: "La Docena", description: "Seafood-centric dishes and lively atmosphere.", imageUrl: "https://via.placeholder.com/300x200?text=La+Docena" },
        { title: "Nobu CDMX", description: "World-renowned Japanese-Peruvian fusion.", imageUrl: "https://via.placeholder.com/300x200?text=Nobu+CDMX" },
        { title: "Casa Oaxaca", description: "Authentic Oaxacan cuisine in the heart of the city.", imageUrl: "https://via.placeholder.com/300x200?text=Casa+Oaxaca" },
        { title: "Por Siempre Vegana Taqueria", description: "Delicious vegan tacos loved by locals.", imageUrl: "https://via.placeholder.com/300x200?text=Por+Siempre+Vegana" },
        { title: "El Califa", description: "Popular spot for authentic tacos and Mexican dishes.", imageUrl: "https://via.placeholder.com/300x200?text=El+Califa" },
        { title: "Maximo Bistrot Local", description: "Farm-to-table dining experience with seasonal menus.", imageUrl: "https://via.placeholder.com/300x200?text=Maximo+Bistrot+Local" },
        { title: "Pangea", description: "High-end Mexican cuisine with international influences.", imageUrl: "https://via.placeholder.com/300x200?text=Pangea" }
      ],
      accommodations: [
        { title: "Las Alcobas", description: "Luxury boutique hotel in Polanco with exquisite service.", imageUrl: "https://via.placeholder.com/300x200?text=Las+Alcobas" },
        { title: "Selina Hostel", description: "Trendy hostel for digital nomads with coworking spaces.", imageUrl: "https://via.placeholder.com/300x200?text=Selina+Hostel" },
        { title: "Ignacia Guest House", description: "Charming and unique stay in Roma Norte.", imageUrl: "https://via.placeholder.com/300x200?text=Ignacia+Guest+House" },
        { title: "Nima Local House Hotel", description: "Elegant boutique hotel in Roma Norte.", imageUrl: "https://via.placeholder.com/300x200?text=Nima+Local+House+Hotel" },
        { title: "Condesa DF", description: "Hip and stylish hotel with a rooftop bar in Condesa.", imageUrl: "https://via.placeholder.com/300x200?text=Condesa+DF" },
        { title: "The Wild Oscar", description: "Boutique hotel with a modern design and social spaces.", imageUrl: "https://via.placeholder.com/300x200?text=The+Wild+Oscar" },
        { title: "Stanza Hotel", description: "Budget-friendly option with great location in Roma.", imageUrl: "https://via.placeholder.com/300x200?text=Stanza+Hotel" },
        { title: "Casa Decu", description: "Art Deco-inspired boutique hotel in Condesa.", imageUrl: "https://via.placeholder.com/300x200?text=Casa+Decu" },
        { title: "Hotel Carlota", description: "Trendy hotel with a contemporary vibe in Juárez.", imageUrl: "https://via.placeholder.com/300x200?text=Hotel+Carlota" },
        { title: "Four Seasons", description: "Classic luxury hotel on Paseo de la Reforma.", imageUrl: "https://via.placeholder.com/300x200?text=Four+Seasons" },
        { title: "Busué", description: "Stylish boutique hotel in the heart of Polanco.", imageUrl: "https://via.placeholder.com/300x200?text=Busue" },
        { title: "Casa Malí by Dominion", description: "Serviced apartments ideal for extended stays in Condesa.", imageUrl: "https://via.placeholder.com/300x200?text=Casa+Mali" },
        { title: "Pug Seal", description: "Modern and artistic boutique hotel in Polanco.", imageUrl: "https://via.placeholder.com/300x200?text=Pug+Seal" },
        { title: "Habita", description: "Minimalist boutique hotel with a rooftop pool.", imageUrl: "https://via.placeholder.com/300x200?text=Habita" },
        { title: "Casa Goliana", description: "Intimate and luxurious guesthouse in Roma Norte.", imageUrl: "https://via.placeholder.com/300x200?text=Casa+Goliana" },
        { title: "Hotel Downtown México", description: "Chic hotel with a blend of historical and modern elements.", imageUrl: "https://via.placeholder.com/300x200?text=Hotel+Downtown+Mexico" },
        { title: "Rocket Inn", description: "Budget-friendly hostel with a vibrant atmosphere.", imageUrl: "https://via.placeholder.com/300x200?text=Rocket+Inn" },
        { title: "Hotel Habita", description: "Luxury boutique hotel with contemporary design.", imageUrl: "https://via.placeholder.com/300x200?text=Hotel+Habita" },
        { title: "Rocco Boutique Hotel", description: "Elegant hotel with personalized services in Condesa.", imageUrl: "https://via.placeholder.com/300x200?text=Rocco+Boutique+Hotel" },
        { title: "Casa Sheraton", description: "Historic hotel offering modern amenities in Centro Histórico.", imageUrl: "https://via.placeholder.com/300x200?text=Casa+Sheraton" },
        { title: "Behotel Condesa", description: "Modern hotel with eco-friendly practices.", imageUrl: "https://via.placeholder.com/300x200?text=Behotel+Condesa" },
        { title: "Hotel Ideal", description: "Boutique hotel with artistic decor in Roma Norte.", imageUrl: "https://via.placeholder.com/300x200?text=Hotel+Ideal" },
        { title: "Zoku Mexico City", description: "Innovative serviced apartments with coworking spaces.", imageUrl: "https://via.placeholder.com/300x200?text=Zoku+Mexico+City" },
        { title: "Hotel Geneve", description: "Classic hotel with a rich history and modern comforts.", imageUrl: "https://via.placeholder.com/300x200?text=Hotel+Geneve" }
      ],
      coworking: [
        { title: "Homework", description: "Centrally located with frequent events.", imageUrl: "https://via.placeholder.com/300x200?text=Homework" },
        { title: "Público", description: "Premium coworking spaces in multiple neighborhoods.", imageUrl: "https://via.placeholder.com/300x200?text=Público" },
        { title: "The Pool", description: "Flexible memberships across several locations.", imageUrl: "https://via.placeholder.com/300x200?text=The+Pool" },
        { title: "El 3er Espacio", description: "Relaxed spot with a terrace in Hipódromo.", imageUrl: "https://via.placeholder.com/300x200?text=El+3er+Espacio" },
        { title: "Centraal", description: "Popular with startups, located in Condesa.", imageUrl: "https://via.placeholder.com/300x200?text=Centraal" },
        { title: "WeWork Reforma", description: "Global coworking giant with multiple locations in CDMX.", imageUrl: "https://via.placeholder.com/300x200?text=WeWork+Reforma" },
        { title: "Selina Cowork", description: "Hip coworking space attached to the Selina hostel.", imageUrl: "https://via.placeholder.com/300x200?text=Selina+Cowork" },
        { title: "Coworking Revolución", description: "Affordable coworking space with essential amenities.", imageUrl: "https://via.placeholder.com/300x200?text=Coworking+Revolucion" },
        { title: "Casa Wabi", description: "Unique coworking environment focused on creativity.", imageUrl: "https://via.placeholder.com/300x200?text=Casa+Wabi" },
        { title: "Lana Cowork", description: "Boutique coworking space with a homey feel.", imageUrl: "https://via.placeholder.com/300x200?text=Lana+Cowork" },
        { title: "U-Co Roma", description: "Creative coworking space with a community focus.", imageUrl: "https://via.placeholder.com/300x200?text=U-Co+Roma" },
        { title: "Distrito Central", description: "High-end coworking spaces located in Polanco.", imageUrl: "https://via.placeholder.com/300x200?text=Distrito+Central" },
        { title: "Coffice MX", description: "Coffee shop-coworking hybrid, ideal for freelancers.", imageUrl: "https://via.placeholder.com/300x200?text=Coffice+MX" },
        { title: "Impact Hub", description: "International coworking space for entrepreneurs.", imageUrl: "https://via.placeholder.com/300x200?text=Impact+Hub" },
        { title: "Ivo Business Center", description: "Professional coworking with offices and meeting rooms.", imageUrl: "https://via.placeholder.com/300x200?text=Ivo+Business+Center" },
        { title: "LAB Coworking", description: "Modern spaces with a focus on innovation.", imageUrl: "https://via.placeholder.com/300x200?text=LAB+Coworking" },
        { title: "Coficina Condesa", description: "Spacious coworking area in the heart of Condesa.", imageUrl: "https://via.placeholder.com/300x200?text=Coficina+Condesa" },
        { title: "Nest Coworking", description: "Comfortable and affordable workspace solutions.", imageUrl: "https://via.placeholder.com/300x200?text=Nest+Coworking" },
        { title: "Hive Coworking", description: "Vibrant community with networking opportunities.", imageUrl: "https://via.placeholder.com/300x200?text=Hive+Coworking" },
        { title: "StartUp Hub", description: "Focused on supporting startups and entrepreneurs.", imageUrl: "https://via.placeholder.com/300x200?text=StartUp+Hub" },
        { title: "Work House", description: "Flexible workspaces with modern amenities.", imageUrl: "https://via.placeholder.com/300x200?text=Work+House" },
        { title: "Crece Coworking", description: "Dynamic environment fostering growth and collaboration.", imageUrl: "https://via.placeholder.com/300x200?text=Crece+Coworking" },
        { title: "Nodo Coworking", description: "Central location with excellent facilities.", imageUrl: "https://via.placeholder.com/300x200?text=Nodo+Coworking" },
        { title: "Colmena Coworking", description: "Community-driven space with various amenities.", imageUrl: "https://via.placeholder.com/300x200?text=Colmena+Coworking" },
        { title: "Crea Cowork", description: "Inspiring workspace for creative professionals.", imageUrl: "https://via.placeholder.com/300x200?text=Crea+Cowork" }
      ],
      nightlife: [
        { title: "Drunkendog", description: "Craft beer haven with a lively atmosphere.", imageUrl: "https://via.placeholder.com/300x200?text=Drunkendog" },
        { title: "Parker & Lenox", description: "Jazz club with an intimate vibe in Juárez.", imageUrl: "https://via.placeholder.com/300x200?text=Parker+%26+Lenox" },
        { title: "Limantour", description: "Award-winning cocktails in Roma Norte.", imageUrl: "https://via.placeholder.com/300x200?text=Limantour" },
        { title: "Xaman Bar", description: "Underground bar with indigenous-inspired cocktails.", imageUrl: "https://via.placeholder.com/300x200?text=Xaman+Bar" },
        { title: "El Departamento", description: "Eclectic rooftop bar with a retro ambiance.", imageUrl: "https://via.placeholder.com/300x200?text=El+Departamento" },
        { title: "Jules Basement", description: "Hidden speakeasy with creative drinks.", imageUrl: "https://via.placeholder.com/300x200?text=Jules+Basement" },
        { title: "Licorería Limantour", description: "Innovative cocktails in a stylish setting.", imageUrl: "https://via.placeholder.com/300x200?text=Licoreria+Limantour" },
        { title: "La Santa", description: "Trendy nightclub with top DJs.", imageUrl: "https://via.placeholder.com/300x200?text=La+Santa" },
        { title: "Mama Rumba", description: "Vibrant salsa club with live music.", imageUrl: "https://via.placeholder.com/300x200?text=Mama+Rumba" },
        { title: "Felina", description: "Chic bar with a relaxed atmosphere.", imageUrl: "https://via.placeholder.com/300x200?text=Felina" },
        { title: "Cicatriz Café", description: "Lively spot with live bands and great drinks.", imageUrl: "https://via.placeholder.com/300x200?text=Cicatriz+Cafe" },
        { title: "Patrick Miller", description: "Iconic dance club with a fun retro vibe.", imageUrl: "https://via.placeholder.com/300x200?text=Patrick+Miller" },
        { title: "M.N. Roy", description: "Sophisticated bar with an extensive cocktail menu.", imageUrl: "https://via.placeholder.com/300x200?text=M.N.+Roy" },
        { title: "Fifty Mils", description: "Award-winning bar with creative mixology.", imageUrl: "https://via.placeholder.com/300x200?text=Fifty+Mils" },
        { title: "Monterrey", description: "Trendy spot with a diverse crowd and vibrant energy.", imageUrl: "https://via.placeholder.com/300x200?text=Monterrey" },
        { title: "Bourbon Street", description: "New Orleans-inspired bar with live jazz.", imageUrl: "https://via.placeholder.com/300x200?text=Bourbon+Street" },
        { title: "The Bar", description: "Elegant venue with classic cocktails.", imageUrl: "https://via.placeholder.com/300x200?text=The+Bar" },
        { title: "Rio Bamba", description: "Energetic club with Latin beats and dance floors.", imageUrl: "https://via.placeholder.com/300x200?text=Rio+Bamba" },
        { title: "Teatro Insurgentes", description: "Cultural venue with live performances and nightlife events.", imageUrl: "https://via.placeholder.com/300x200?text=Teatro+Insurgentes" },
        { title: "Bar Milán", description: "Stylish bar with a great selection of drinks.", imageUrl: "https://via.placeholder.com/300x200?text=Bar+Milan" },
        { title: "Cantina La No. 20", description: "Authentic cantina with traditional Mexican vibes.", imageUrl: "https://via.placeholder.com/300x200?text=Cantina+La+No.+20" },
        { title: "Lujuria Rooftop", description: "Rooftop bar offering stunning city views.", imageUrl: "https://via.placeholder.com/300x200?text=Lujuria+Rooftop" },
        { title: "Bar La Opera", description: "Historic bar with a rich cultural heritage.", imageUrl: "https://via.placeholder.com/300x200?text=Bar+La+Opera" },
        { title: "Miralto", description: "Upscale lounge with panoramic views of the city.", imageUrl: "https://via.placeholder.com/300x200?text=Miralto" }
      ],
      art: [
        { title: "Frida Kahlo Museum", description: "In-depth look into Frida Kahlo's life and work.", imageUrl: "https://via.placeholder.com/300x200?text=Frida+Kahlo+Museum" },
        { title: "Museo Tamayo", description: "Modern art museum in Chapultepec.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+Tamayo" },
        { title: "Soumaya Museum", description: "Iconic art collection housed in a futuristic building.", imageUrl: "https://via.placeholder.com/300x200?text=Soumaya+Museum" },
        { title: "Museo Universitario Arte Contemporáneo (MUAC)", description: "Showcasing contemporary Latin American art.", imageUrl: "https://via.placeholder.com/300x200?text=MUAC" },
       
        { title: "Museo Nacional de Arte", description: "Extensive collection of Mexican art from the 16th to 20th centuries.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+Nacional+de+Arte" },
        { title: "Museo Franz Mayer", description: "Museum dedicated to decorative arts and design.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+Franz+Mayer" },
        { title: "Museo del Objeto del Objeto (MODO)", description: "Museum focused on design and communication.", imageUrl: "https://via.placeholder.com/300x200?text=MUSEO+MODO" },
        { title: "Galería Kurimanzutto", description: "Prominent contemporary art gallery in CDMX.", imageUrl: "https://via.placeholder.com/300x200?text=Kurimanzutto" },
        { title: "Laboratorio Arte Alameda", description: "Cultural center promoting contemporary art.", imageUrl: "https://via.placeholder.com/300x200?text=Laboratorio+Arte+Alameda" },
        { title: "Museo de Arte Popular", description: "Showcasing Mexican folk art and crafts.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+de+Arte+Popular" },
        { title: "Casa Luis Barragán", description: "Architectural masterpiece and museum.", imageUrl: "https://via.placeholder.com/300x200?text=Casa+Luis+Barragán" },
        { title: "Museo de Arte Moderno", description: "Modern art museum with significant Mexican works.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+de+Arte+Moderno" },
        { title: "Museo del Estanquillo", description: "Museum showcasing Mexican popular culture.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+del+Estanquillo" },
        { title: "Espacio Espiral", description: "Contemporary art gallery with dynamic exhibitions.", imageUrl: "https://via.placeholder.com/300x200?text=Espacio+Espiral" },
        { title: "Museo de la Estampa", description: "Museum dedicated to printmaking and graphic arts.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+de+la+Estampa" },
        { title: "Galería OMR", description: "Contemporary art gallery featuring local and international artists.", imageUrl: "https://via.placeholder.com/300x200?text=Galería+OMR" },
        { title: "Museo Jumex", description: "Contemporary art museum with diverse exhibitions.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+Jumex" },
        { title: "Museo de Historia Natural", description: "Natural history museum with engaging exhibits.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+de+Historia+Natural" },
        { title: "Museo del Estanquillo", description: "Unique museum preserving Mexican cultural artifacts.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+del+Estanquillo" },
        { title: "Museo Universitario de Arte Contemporáneo (MUAC)", description: "University museum featuring avant-garde art.", imageUrl: "https://via.placeholder.com/300x200?text=MUAC" },
        { title: "Museo de Arte Carrillo Gil", description: "Private museum with contemporary art collections.", imageUrl: "https://via.placeholder.com/300x200?text=Museo+Carrillo+Gil" },
        { title: "Museo Nacional de Antropología", description: "World-renowned museum showcasing Mexico's heritage.", imageUrl: "https://via.placeholder.com/300x200?text=Antropología" }
      ],
      wellness: [
        { title: "Yoga in the Park", description: "Outdoor yoga sessions in Chapultepec Park.", imageUrl: "https://via.placeholder.com/300x200?text=Yoga+in+the+Park" },
        { title: "Spa Marquis", description: "High-end spa with various wellness packages.", imageUrl: "https://via.placeholder.com/300x200?text=Spa+Marquis" },
        { title: "Qi Urban Spa", description: "Eco-conscious spa offering holistic treatments.", imageUrl: "https://via.placeholder.com/300x200?text=Qi+Urban+Spa" },
        { title: "Wellness Lab", description: "Boutique gym and wellness studio in Roma Norte.", imageUrl: "https://via.placeholder.com/300x200?text=Wellness+Lab" },
        { title: "Temazcal Tonatiuh", description: "Traditional sweat lodge experience in Xochimilco.", imageUrl: "https://via.placeholder.com/300x200?text=Temazcal+Tonatiuh" },
        { title: "Centro de Meditación Vipassana", description: "Meditation center offering Vipassana courses.", imageUrl: "https://via.placeholder.com/300x200?text=Vipassana+Meditation" },
        { title: "Aire Lounge & Spa", description: "Luxury spa with a range of wellness services.", imageUrl: "https://via.placeholder.com/300x200?text=Aire+Lounge+%26+Spa" },
        { title: "Holistic Wellness Center", description: "Comprehensive wellness programs and treatments.", imageUrl: "https://via.placeholder.com/300x200?text=Holistic+Wellness+Center" },
        { title: "Vitality Gym", description: "State-of-the-art gym with personal training.", imageUrl: "https://via.placeholder.com/300x200?text=Vitality+Gym" },
        { title: "Green Spa", description: "Eco-friendly spa focusing on natural treatments.", imageUrl: "https://via.placeholder.com/300x200?text=Green+Spa" },
        { title: "Zen Garden", description: "Tranquil garden offering meditation and relaxation.", imageUrl: "https://via.placeholder.com/300x200?text=Zen+Garden" },
        { title: "Pure Yoga Studio", description: "Dedicated yoga studio with various classes.", imageUrl: "https://via.placeholder.com/300x200?text=Pure+Yoga+Studio" },
        { title: "Healthy Habits Clinic", description: "Wellness clinic focusing on holistic health.", imageUrl: "https://via.placeholder.com/300x200?text=Healthy+Habits+Clinic" },
        { title: "Balance Wellness", description: "Center offering yoga, Pilates, and more.", imageUrl: "https://via.placeholder.com/300x200?text=Balance+Wellness" },
        { title: "Mind & Body Spa", description: "Spa offering massages, facials, and wellness treatments.", imageUrl: "https://via.placeholder.com/300x200?text=Mind+%26+Body+Spa" },
        { title: "Energize Fitness", description: "Fitness center with group classes and personal training.", imageUrl: "https://via.placeholder.com/300x200?text=Energize+Fitness" },
        { title: "Serenity Retreat", description: "Retreat center for relaxation and wellness.", imageUrl: "https://via.placeholder.com/300x200?text=Serenity+Retreat" },
        { title: "Natural Therapy Center", description: "Therapeutic services using natural methods.", imageUrl: "https://via.placeholder.com/300x200?text=Natural+Therapy+Center" },
        { title: "Revitalize Spa", description: "Comprehensive spa services for rejuvenation.", imageUrl: "https://via.placeholder.com/300x200?text=Revitalize+Spa" },
        { title: "Tranquil Waters", description: "Spa specializing in hydrotherapy and relaxation.", imageUrl: "https://via.placeholder.com/300x200?text=Tranquil+Waters" },
        { title: "Holistic Harmony", description: "Wellness center focusing on holistic health practices.", imageUrl: "https://via.placeholder.com/300x200?text=Holistic+Harmony" },
        { title: "Vital Balance", description: "Health center offering a variety of wellness services.", imageUrl: "https://via.placeholder.com/300x200?text=Vital+Balance" },
        { title: "Pure Serenity Spa", description: "Luxury spa offering a peaceful environment.", imageUrl: "https://via.placeholder.com/300x200?text=Pure+Serenity+Spa" },
        { title: "Harmony Yoga & Wellness", description: "Integrated wellness center with yoga and therapy.", imageUrl: "https://via.placeholder.com/300x200?text=Harmony+Yoga+%26+Wellness" },
        { title: "Blissful Mind", description: "Meditation and mindfulness center.", imageUrl: "https://via.placeholder.com/300x200?text=Blissful+Mind" }
      ],
      safety: [
        { 
          title: "Emergency Police", 
          description: "Police emergency number. Phone: 911.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Emergency+Police" 
        },
        { 
          title: "Ambulance Service", 
          description: "Emergency medical services. Phone: 911.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Ambulance+Service" 
        },
        { 
          title: "Fire Department", 
          description: "Fire and rescue services. Phone: 911.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Fire+Department" 
        },
        { 
          title: "Mexico City Tourism Police", 
          description: "Assistance for tourists. Phone: 01 800 999 0025.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Mexico+City+Tourism+Police" 
        },
        { 
          title: "Cruz Roja (Red Cross)", 
          description: "Emergency medical assistance. Phone: 911 525 7272.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Cruz+Roja" 
        },
        { 
          title: "Linea de la Vida (Life Line)", 
          description: "Psychological support and crisis hotline. Phone: 800 911 2000.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Linea+de+la+Vida" 
        },
        { 
          title: "Protección Civil", 
          description: "Civil protection and disaster response. Phone: 55 5280 0000.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Defensa+Civil" 
        },
        { 
          title: "Policía Turística", 
          description: "Tourist assistance and safety. Phone: 01 800 999 0025.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Policía+Turística" 
        },
        { 
          title: "Emergencias Veterinarias", 
          description: "Emergency veterinary services. Phone: 55 1234 5678.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Emergencias+Veterinarias" 
        },
        { 
          title: "Centro de Atención a Víctimas", 
          description: "Support for victims of crimes. Phone: 55 1234 5678.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Centro+de+Atención+a+Víctimas" 
        },
        { 
          title: "Emergencias Médicas Especializadas", 
          description: "Specialized medical emergency services. Phone: 55 9876 5432.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Emergencias+Médicas+Especializadas" 
        },
        { 
          title: "Protección Civil", 
          description: "Civil protection and emergency response. Phone: 55 8765 4321.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Protección+Civil" 
        },
        { 
          title: "Hospital Ángeles", 
          description: "Major hospital network for emergencies. Phone: 55 2345 6789.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Hospital+Ángeles" 
        },
        { 
          title: "Hospital ABC", 
          description: "Leading private hospital with emergency services. Phone: 55 3456 7890.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Hospital+ABC" 
        },
        { 
          title: "Hospital de Especialidades", 
          description: "Specialty hospital for advanced medical care. Phone: 55 4567 8901.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Hospital+de+Especialidades" 
        },
        { 
          title: "Hospital Español", 
          description: "Comprehensive emergency medical services. Phone: 55 5678 9012.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Hospital+Español" 
        },
        { 
          title: "Hospital Juárez", 
          description: "Public hospital with emergency care. Phone: 55 6789 0123.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Hospital+Juárez" 
        },
        { 
          title: "Hospital de la Mujer", 
          description: "Emergency services focused on women's health. Phone: 55 7890 1234.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Hospital+de+la+Mujer" 
        },
        { 
          title: "Hospital Pediátrico", 
          description: "Emergency services for children. Phone: 55 8901 2345.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Hospital+Pediátrico" 
        },
        { 
          title: "Hospital de Trauma", 
          description: "Specialized trauma care center. Phone: 55 9012 3456.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Hospital+de+Trauma" 
        },
        { 
          title: "Emergencia Mental", 
          description: "Mental health emergency support. Phone: 55 0123 4567.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Emergencia+Mental" 
        },
        { 
          title: "Centro de Desintoxicación", 
          description: "Emergency detox services. Phone: 55 1234 5678.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Centro+de+Desintoxicación" 
        },
        { 
          title: "Centro de Rehabilitación", 
          description: "Emergency rehab services.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Centro+de+Rehabilitación" 
        },
        { 
          title: "Hospital San Ángel", 
          description: "Comprehensive emergency medical care. Phone: 55 3456 7890.", 
          imageUrl: "https://via.placeholder.com/300x200?text=Hospital+San+Ángel" 
        }
      ],
      transportation: [
        { title: "Metro CDMX", description: "Affordable and extensive subway system.", imageUrl: "https://via.placeholder.com/300x200?text=Metro+CDMX" },
        { title: "EcoBici", description: "Bike-sharing service available throughout the city.", imageUrl: "https://via.placeholder.com/300x200?text=EcoBici" },
        { title: "Uber", description: "Reliable ride-sharing service widely used.", imageUrl: "https://via.placeholder.com/300x200?text=Uber" },
        { title: "Taxis CDMX", description: "Official taxi services with safety features.", imageUrl: "https://via.placeholder.com/300x200?text=Taxis+CDMX" },
        { title: "Metrobus", description: "Bus rapid transit system covering key areas.", imageUrl: "https://via.placeholder.com/300x200?text=Metrobus" },
        { title: "Cablebús", description: "Cable car system offering unique city views.", imageUrl: "https://via.placeholder.com/300x200?text=Cablebús" },
        { title: "Rental Bikes", description: "Various bike rental shops available.", imageUrl: "https://via.placeholder.com/300x200?text=Rental+Bikes" },
        { title: "Airport Transfers", description: "Reliable services to and from the airport.", imageUrl: "https://via.placeholder.com/300x200?text=Airport+Transfers" },
        { title: "Colectivos", description: "Shared vans operating on fixed routes.", imageUrl: "https://via.placeholder.com/300x200?text=Colectivos" },
        { title: "Car Rentals", description: "Multiple car rental agencies for your convenience.", imageUrl: "https://via.placeholder.com/300x200?text=Car+Rentals" }
      ],
      events: [
        { title: "Day of the Dead Festival", description: "Experience the vibrant Day of the Dead celebrations.", imageUrl: "https://via.placeholder.com/300x200?text=Day+of+the+Dead" },
        { title: "Zona Maco Art Fair", description: "Leading contemporary art fair in Latin America.", imageUrl: "https://via.placeholder.com/300x200?text=Zona+Maco" },
        { title: "Corona Capital Music Festival", description: "Annual music festival featuring international artists.", imageUrl: "https://via.placeholder.com/300x200?text=Corona+Capital" },
        { title: "Feria Internacional del Libro", description: "International book fair attracting authors worldwide.", imageUrl: "https://via.placeholder.com/300x200?text=Feria+del+Libro" },
        { title: "Cervantino Festival", description: "Multidisciplinary arts festival with performances and exhibits.", imageUrl: "https://via.placeholder.com/300x200?text=Cervantino" },
        { title: "Mexico City Marathon", description: "Annual marathon attracting runners globally.", imageUrl: "https://via.placeholder.com/300x200?text=Marathon" },
        { title: "Independence Day Celebrations", description: "Grand celebrations with fireworks and parades.", imageUrl: "https://via.placeholder.com/300x200?text=Independence+Day" },
        { title: "International Jazz Festival", description: "Featuring top jazz musicians from around the world.", imageUrl: "https://via.placeholder.com/300x200?text=Jazz+Festival" },
        { title: "Food and Wine Expo", description: "Explore gourmet food and fine wines from local and international vendors.", imageUrl: "https://via.placeholder.com/300x200?text=Food+and+Wine+Expo" },
        { title: "Cinefest", description: "International film festival showcasing diverse cinema.", imageUrl: "https://via.placeholder.com/300x200?text=Cinefest" }
      ],
      shopping: [
        { title: "La Ciudadela Market", description: "Traditional market offering crafts and souvenirs.", imageUrl: "https://via.placeholder.com/300x200?text=La+Ciudadela" },
        { title: "Polanco Luxury Shops", description: "High-end boutiques and designer stores.", imageUrl: "https://via.placeholder.com/300x200?text=Polanco+Shops" },
        { title: "Mercado Roma", description: "Trendy food market with artisanal products.", imageUrl: "https://via.placeholder.com/300x200?text=Mercado+Roma" },
        { title: "Centro Santa Fe", description: "One of the largest shopping malls in Latin America.", imageUrl: "https://via.placeholder.com/300x200?text=Centro+Santa+Fe" },
        { title: "Zona Rosa", description: "Vibrant area with shops, nightlife, and entertainment.", imageUrl: "https://via.placeholder.com/300x200?text=Zona+Rosa" },
        { title: "Plaza de la Tecnología", description: "Electronics and tech gadgets hub.", imageUrl: "https://via.placeholder.com/300x200?text=Plaza+de+la+Tecnología" },
        { title: "Bazar del Sábado", description: "Artisan market with unique handmade items.", imageUrl: "https://via.placeholder.com/300x200?text=Bazar+del+Sábado" },
        { title: "Antara Fashion Hall", description: "Upscale shopping center with international brands.", imageUrl: "https://via.placeholder.com/300x200?text=Antara+Fashion+Hall" },
        { title: "Tianguis Cultural del Chopo", description: "Alternative market for music, fashion, and art.", imageUrl: "https://via.placeholder.com/300x200?text=Tianguis+del+Chopo" },
        { title: "Plaza Garibaldi", description: "Famous for mariachi music and souvenirs.", imageUrl: "https://via.placeholder.com/300x200?text=Plaza+Garibaldi" }
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

 
