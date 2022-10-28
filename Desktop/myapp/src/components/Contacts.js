function Contacts() {
  return (
    <section className="section">
      <h2 className="section-title">Contacts</h2>
      <div>
        <span className="section-main">Phone: </span>
        <span className="section-info">
          <a href="(123) 456-7890">(123) 456-7890</a>
        </span>
      </div>
      <div>
        <span className="section-main">Email: </span>
        <span className="section-info">
          <a href="mailto: shaveyoursef@google.com">shaveyoursef@google.com</a>
        </span>
      </div>
      <div>
        <span className="section-main">Web: </span>
        <span className="section-info">
          <a href="#">barbiebarber.net</a>
        </span>
      </div>
    </section>
  )
}

export default Contacts
