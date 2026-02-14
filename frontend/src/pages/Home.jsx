import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ujjain from '../assets/ujjain.jpg';

const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage: `url(${ujjain})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '120px 40px',
          color: 'white'
        }}
      >
        <h1 style={{ fontSize: '48px', maxWidth: '700px' }}>
          Smart Kumbh Management System
        </h1>
        <p style={{ fontSize: '20px', maxWidth: '700px' }}>
          An AI-powered digital platform to manage crowd safety, route planning,
          and snan slot bookings during the sacred Mahakumbh Mela.
        </p>
      </div>

      <div className="container">

        {/* ABOUT MAHAKUMBH */}
        <div className="card" style={{ backgroundColor: '#eee9e4ff' }}>
          <h2>About Mahakumbh</h2>
          <p>
            The Mahakumbh Mela is one of the most sacred and grand religious gatherings in the world, held once every twelve years at four revered locations in India — Prayagraj, Haridwar, Nashik, and Ujjain. It is a unique confluence of spirituality, devotion, and culture, attracting millions of pilgrims, saints, and spiritual seekers from across the globe. Devotees gather to take a holy dip in the sacred rivers, which is believed to cleanse sins and grant spiritual liberation, while participating in various religious rituals, prayers, and cultural ceremonies. The festival is not just a religious congregation but a vibrant display of India’s rich heritage, with spiritual discourses, processions, music, and traditional crafts adding to the atmosphere. Managing such an enormous influx of people presents significant logistical and safety challenges, including crowd control, sanitation, traffic management, and emergency preparedness. Over the centuries, Mahakumbh has been celebrated with meticulous planning and immense devotion, guided by scriptures and local traditions. The gathering fosters a sense of communal harmony, spiritual reflection, and cultural exchange, providing an opportunity for people of all ages and backgrounds to witness and participate in one of the most remarkable spectacles of faith. With the integration of modern technology, such as AI-driven crowd prediction, real-time monitoring, and structured slot-based snan management, Smart Kumbh Management System aims to ensure the safety, comfort, and spiritual satisfaction of every pilgrim, making the holy experience both profound and secure. Ultimately, Mahakumbh stands as a testament to humanity’s enduring devotion, the organizational excellence of centuries-old traditions, and the harmony between faith and modern innovation.
          </p>
          
        </div>

        {/* UJJAIN SECTION */}
        <div className="card" style={{ backgroundColor: '#eee9e4ff' }}>
          <h2>Ujjain – The City of Mahakal</h2>
          <p>
            Ujjain, one of the seven sacred cities (Sapta Puri) of Hinduism,
            is home to the Mahakaleshwar Jyotirlinga, one of the twelve Jyotirlingas
            of Lord Shiva. Ujjain, one of the seven sacred cities (Sapta Puri) of Hinduism, holds immense religious and cultural significance. It is famously known for the Mahakaleshwar Jyotirlinga, one of the twelve Jyotirlingas of Lord Shiva, attracting thousands of devotees every year. The city is a hub of spiritual activities, hosting rituals, festivals, and religious ceremonies that have been observed for centuries. During the Mahakumbh Mela, Ujjain becomes the focal point for millions of pilgrims who gather along the ghats to take a holy dip in the Shipra River, seeking purification and blessings. The city’s ghats, temples, and sacred sites are meticulously maintained to accommodate large crowds, but the sheer scale of the gathering poses unique challenges in terms of crowd management, safety, and logistics. Ujjain’s rich heritage, historic architecture, and serene spiritual environment make it not only a center of devotion but also a cultural landmark. The Smart Kumbh Management System ensures that this sacred city remains organized, safe, and accessible, allowing devotees to experience the sanctity of Mahakal while minimizing risks and ensuring smooth navigation across the ghats. By blending technology with tradition, Ujjain continues to preserve its spiritual legacy while embracing modern solutions for crowd management and pilgrim welfare.
          </p>
          <p>
            During Mahakumbh, ghats like <b>Ram Ghat</b> and surrounding areas
            witness extremely high pilgrim density, making crowd management
            a critical challenge.
          </p>
        </div>

        {/* WHY SMART KUMBH */}
        <div className="card" style={{ backgroundColor: '#eee9e4ff' }}>
          <h2>Why Smart Kumbh Management?</h2>
          <ul>
            <li>🚨 Prevent stampede incidents using AI prediction</li>
            <li>🛕 Organize snan slots to avoid overcrowding</li>
            <li>🗺️ Provide safe navigation routes to pilgrims</li>
            <li>📊 Enable authorities with real-time monitoring dashboards</li>
            <li>📱 Reduce confusion through digital planning</li>
          </ul>
        </div>

        {/* SAFETY FOCUS */}
        <div className="card" style={{ backgroundColor: '#eee9e4ff' }}>
          <h2>Public Safety & Crowd Control</h2>
          <p>
            Stampede incidents during religious gatherings are often caused by
            poor planning and lack of predictive intelligence.
          </p>
          <p>
            Our AI model analyzes crowd density data to classify areas into:
          </p>
          <ul>
            <li><b>Low Risk</b> – Normal movement</li>
            <li><b>Medium Risk</b> – Controlled flow required</li>
            <li><b>High Risk</b> – Immediate administrative action</li>
          </ul>
        </div>

        {/* STATS */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div className="card" style={{ flex: 1 , backgroundColor: '#eee9e4ff' }} >
            <h3>10+ Crore</h3>
            <p>Expected Pilgrims</p>
          </div>
          <div className="card" style={{ flex: 1 , backgroundColor: '#eee9e4ff' }}>
            <h3>AI-Driven</h3>
            <p>Crowd Risk Prediction</p>
          </div>
          <div className="card" style={{ flex: 1 , backgroundColor: '#eee9e4ff'}}>
            <h3>24×7</h3>
            <p>Monitoring Support</p>
          </div>
        </div>

        {/* VISION */}
        <div className="card" style={{ backgroundColor: '#eee9e4ff' }}>
          <h2>Our Vision</h2>
          <p>
            Smart Kumbh Management System aims to blend faith with technology,
            ensuring a safe, peaceful, and well-organized Mahakumbh experience
            for every devotee.
          </p>
          <p>
            This project demonstrates how modern AI solutions can assist
            government authorities in managing large-scale religious events.
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
