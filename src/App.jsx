function App() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Event Planner</h1>
        <p>Plan and organize your events effortlessly with Event Planner. From birthdays to corporate meetings, we've got you covered.</p>
        <button className="get-started-btn">Get Started</button>
      </section>

      {/* Event Categories */}
      <section className="events-section">
        <div className="category-card">
          <h3>Social Events:</h3>
          <ul>
            <li>Birthday parties</li>
            <li>Anniversary celebrations</li>
            <li>Wedding receptions</li>
            <li>Baby showers</li>
            <li>Graduation parties</li>
            <li>Family reunions</li>
          </ul>
        </div>

        <div className="category-card">
          <h3>Entertainment Events:</h3>
          <ul>
            <li>Concerts</li>
            <li>Music festivals</li>
            <li>Film screenings</li>
            <li>Comedy shows</li>
            <li>Art exhibitions</li>
            <li>Cultural events</li>
          </ul>
        </div>

        <div className="category-card">
          <h3>Community Events:</h3>
          <ul>
            <li>Fundraising events</li>
            <li>Charity galas</li>
            <li>Volunteer drives</li>
            <li>Neighborhood block parties</li>
            <li>Community festivals</li>
            <li>Community celebrations</li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Easy event creation and management</li>
          <li>Customizable event templates</li>
          <li>Guest list management</li>
          <li>Real-time collaboration</li>
          <li>Reminders and notifications</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
        <p className="author">- Emily Johnson</p>
        <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
        <p className="author">- John Smith</p>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>COMPUTER COMMUNICATION DEVELOPMENT INSTITUTE</p>
        <p>Rizal St., Sorsogon City</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="send-btn">Send</button>
        </form>
      </section>
    </div>
  )
}

export default App
