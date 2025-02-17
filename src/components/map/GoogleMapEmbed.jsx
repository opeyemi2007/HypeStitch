const GoogleMapEmbed = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317713.36663267326!2d3.1994013499999996!3d6.5243792999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b07c891209%3A0x95c0ac4c9115d301!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1710447894123"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
