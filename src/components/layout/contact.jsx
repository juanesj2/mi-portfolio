const Contact = ({ children }) => {
  return (
    <section id="contact" className="relative py-16 px-4 flex flex-col items-center">
      {/* Aquí renderizamos cualquier cosa que venga como children */}
      {children}
    </section>
  );
};

export default Contact;
