// // src/components/Home.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="home-page">

//       {/* PARALLAX HERO */}
//       <section className="parallax-hero">
//         <div className="hero-overlay"></div>

//         <div className="hero-content">
//           <h1>Welcome to FoodZone</h1>
//           <p>Delicious food delivered to your doorstep 🍽️</p>
//           <Link to="/veg" className="hero-btn">Explore Menu</Link>
//         </div>
//       </section>

//       {/* CATEGORY SECTION */}
//       <div className="categories">
//         <h2 className="section-title">Explore Our Menu</h2>

//         <div className="cards-grid">
//           {[
//             { src: "/images/veg.jpg", title: "Veg Items", link: "/veg", color: "success" },
//             { src: "/images/nonveg.jpg", title: "Non-Veg Items", link: "/nonveg", color: "danger" },
//             { src: "/images/sweets.jpg", title: "Sweets", link: "/sweets", color: "warning" },
//             { src: "/images/break.jpg", title: "Breakfast", link: "/breakfast", color: "info" },
//             { src: "/images/snacks.jpg", title: "Snacks", link: "/snacks", color: "primary" },
//             { src: "/images/drinks.jpg", title: "Drinks", link: "/drinks", color: "warning" },
//             { src: "/images/fastfood.jpg", title: "Fast Food Corner", link: "/fastfood", color: "info" },
//             { src: "/images/desserts.jpg", title: "Desserts", link: "/desserts", color: "primary" },
//             { src: "/images/soups.jpg", title: "Soups", link: "/soups", color: "success" },
//             { src: "/images/bakery.jpg", title: "Bakery", link: "/bakery", color: "danger" }
//           ].map((item, index) => (
//             <div className="card menu-card" key={index}>
//               <img src={item.src} alt={item.title} />
//               <h5>{item.title}</h5>
//               <Link to={item.link} className={`btn btn-${item.color} w-100`}>
//                 View {item.title}
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Home;


// //parallex effect  like zomato new code


// // src/components/Home.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   const categories = [
//     { title: "Veg", img: "/images/veg.jpg", link: "/veg" },
//     { title: "Non-Veg", img: "/images/nonveg.jpg", link: "/nonveg" },
//     { title: "Sweets", img: "/images/sweets.jpg", link: "/sweets" },
//     { title: "Drinks", img: "/images/drinks.jpg", link: "/drinks" },
//     { title: "Snacks", img: "/images/snacks.jpg", link: "/snacks" },
//     { title: "Breakfast", img: "/images/break.jpg", link: "/breakfast" },
//     { title: "Fast Food", img: "/images/fastfood.jpg", link: "/fastfood" },
//     { title: "Desserts", img: "/images/desserts.jpg", link: "/desserts" },
//   ];

//   const restaurants = [
//     {
//       name: "Paradise Biryani",
//       img: "/images/biryani1.jpg",
//       stars: "4.4",
//       eta: "25-30 mins",
//     },
//     {
//       name: "Domino’s Pizza",
//       img: "/images/pizza.jpg",
//       stars: "4.2",
//       eta: "20-25 mins",
//     },
//     {
//       name: "Cream Stone Ice Cream",
//       img: "/images/icecream.jpg",
//       stars: "4.5",
//       eta: "15-20 mins",
//     },
//     {
//       name: "Chutneys South Meals",
//       img: "/images/south.jpg",
//       stars: "4.6",
//       eta: "20-30 mins",
//     },
//   ];

//   return (
//     <div className="homepage">

//       {/* HERO SECTION */}
//       <section className="hero-section">
//         <div className="hero-text">
//           <h1>Order Food & Get It Delivered Fast</h1>
//           <p>Your favourite meals delivered in minutes 🚀</p>
//           <Link to="/veg" className="explore-btn">Explore Menu</Link>
//         </div>
//         <div className="hero-image">
//           <img src="/images/hero-food.png" alt="Food Banner" />
//         </div>
//       </section>

//       {/* CATEGORY SLIDER */}
//       <section className="category-section">
//         <h2>What’s on your mind?</h2>

//         <div className="category-slider">
//           {categories.map((cat, i) => (
//             <Link to={cat.link} className="category-card" key={i}>
//               <img src={cat.img} alt={cat.title} />
//               <p>{cat.title}</p>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* TOP RESTAURANTS SECTION */}
//       <section className="top-restaurants">
//         <h2>Top Restaurants Near You</h2>

//         <div className="restaurants-grid">
//           {restaurants.map((res, i) => (
//             <div className="restaurant-card" key={i}>
//               <img src={res.img} alt={res.name} />
//               <h4>{res.name}</h4>
//               <div className="rest-details">
//                 <span>⭐ {res.stars}</span>
//                 <span>{res.eta}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* OFFER BANNERS */}
//       <section className="offer-section">
//         <h2>Best Offers Today 🎉</h2>

//         <div className="offers-grid">
//           <img src="/images/offer1.jpg" alt="offer" />
//           <img src="/images/offer2.jpg" alt="offer" />
//           <img src="/images/offer3.jpg" alt="offer" />
//         </div>
//       </section>

//       {/* TOP PICKS */}
//       <section className="top-picks">
//         <h2>Top Picks For You</h2>

//         <div className="picks-grid">
//           {categories.slice(0, 6).map((item, i) => (
//             <Link to={item.link} className="pick-card" key={i}>
//               <img src={item.img} alt={item.title} />
//               <h4>{item.title}</h4>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;




import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* PARALLAX HERO */}
      <section className="parallax-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Welcome to FoodZone</h1>
          <p>Delicious food delivered to your doorstep 🍽️</p>
          <Link to="/veg" className="hero-btn">Explore Menu</Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <h2>Why Choose FoodZone?</h2>
        <p>
          We serve freshly cooked meals with the best ingredients.  
          Fast delivery, multiple categories and wide range of food items.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🔥 Freshly Cooked</h3>
            <p>We prepare everything fresh when you order.</p>
          </div>

          <div className="about-card">
            <h3>⏱️ Fast Delivery</h3>
            <p>Get your food hot within minutes.</p>
          </div>

          <div className="about-card">
            <h3>🍽️ 100+ Dishes</h3>
            <p>Explore a large variety across 10 categories.</p>
          </div>
        </div>
      </section>

      {/* MENU CATEGORIES */}
      <div className="categories">
        <h2 className="section-title">Explore Our Menu</h2>

        <div className="cards-grid">
          {[
            { src: "/images/veg.jpg", title: "Veg Items", link: "/veg", color: "success" },
            { src: "/images/nonveg.jpg", title: "Non-Veg Items", link: "/nonveg", color: "danger" },
            { src: "/images/sweets.jpg", title: "Sweets", link: "/sweets", color: "warning" },
            { src: "/images/break.jpg", title: "Breakfast", link: "/breakfast", color: "info" },
            { src: "/images/snacks.jpg", title: "Snacks", link: "/snacks", color: "primary" },
            { src: "/images/drinks.jpg", title: "Drinks", link: "/drinks", color: "warning" },
            { src: "/images/fastfood.jpg", title: "Fast Food Corner", link: "/fastfood", color: "info" },
            { src: "/images/desserts.jpg", title: "Desserts", link: "/desserts", color: "primary" },
            { src: "/images/soups.jpg", title: "Soups", link: "/soups", color: "success" },
            { src: "/images/bakery.jpg", title: "Bakery", link: "/bakery", color: "danger" }
          ].map((item, index) => (
            <div className="card menu-card" key={index}>
              <img src={item.src} alt={item.title} />
              <h5>{item.title}</h5>
              <Link to={item.link} className={`btn btn-${item.color} w-100`}>
                View {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* POPULAR ITEMS SECTION */}
      <section className="popular-section">
        <h2>Popular Items</h2>

        <div className="popular-grid">
          <div className="popular-card">
            <img src="/images/chicken-biryani.jpg" alt="biryani" />
            <h4>Chicken Biryani</h4>
          </div>

          <div className="popular-card">
            <img src="/images/paneer.jpg" alt="paneer" />
            <h4>Paneer Butter Masala</h4>
          </div>

          <div className="popular-card">
            <img src="/images/veg-burger.jpg" alt="burger" />
            <h4>Veg Burger</h4>
          </div>
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="offer-banner">
        <h2>🎉 Flat 20% Off on Your First Order!</h2>
        <p>Use code: <strong>WELCOME20</strong></p>
        <Link to="/snacks" className="btn btn-light mt-3">Order Now</Link>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <div className="test-grid">
          <div className="test-card">
            <p>"Amazing taste and super fast delivery!"</p>
            <h5>- Priya</h5>
          </div>

          <div className="test-card">
            <p>"Wide variety and everything is fresh."</p>
            <h5>- Akash</h5>
          </div>

          <div className="test-card">
            <p>"My go-to food delivery app now!"</p>
            <h5>- Sneha</h5>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip">
        <h2>Need Help or Want to Order Quickly?</h2>
        <p>Call us at: <strong>+91 98765 43210</strong></p>
        <Link to="/contact" className="btn btn-danger">Contact Us</Link>
      </section>

    </div>
  );
}

export default Home;
