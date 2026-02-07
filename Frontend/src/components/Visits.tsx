const Visits = () => {
  return (
    <div className="w-full p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-2">Visit Us</h2>
      <p className="text-gray-600 mb-6">
        Find us at our location or reach out through any of the contact methods below.
      </p>

      {/* Google Map */}
      <div className="mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0860232443627!2d-73.97615048459472!3d40.68499727933379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c87214e1715%3A0x444d9a6fc3b15d0!2sFlavorBox!5e0!3m2!1sen!2sus!4v1670563880376!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 bg-white shadow rounded-lg p-6">
        <div className="flex items-center gap-3">
          <span className="p-2 bg-orange-100 rounded-full">📍</span>
          <div>
            <h4 className="font-semibold">Address</h4>
            <p>FlavorBox, 123 Culinary Ave, Food City, FC 45678</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="p-2 bg-green-100 rounded-full">📞</span>
          <div>
            <h4 className="font-semibold">Phone</h4>
            <p>(555) 987-6543</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="p-2 bg-cyan-100 rounded-full">📧</span>
          <div>
            <h4 className="font-semibold">Email</h4>
            <p>contact@flavorbox.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="p-2 bg-orange-100 rounded-full">⏰</span>
          <div>
            <h4 className="font-semibold">Hours</h4>
            <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visits;
