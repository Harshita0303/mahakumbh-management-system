const Footer = () => {
  return (
    <div
      style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#1e293b',
        color: '#ffffff',
        textAlign: 'center'
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Smart Kumbh Management System
      </p>
      <p style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>
        Designed for Mahakumbh Crowd Safety & Management
      </p>
    </div>
  );
};

export default Footer;
