import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, ArrowUpRight, CalendarDays, CarFront, Check, ChevronDown, Clock3, Fuel, Gauge, MapPin, Menu, MessageCircle, Search, ShieldCheck, SlidersHorizontal, Users, X, Zap } from "lucide-react";
import "./styles.css";

const WHATSAPP_NUMBER = "212600000000"; // Remplace par le numéro WhatsApp de l'agence, sans + ni espaces.

const cars = [
  { id: 1, name: "Dacia Logan", category: "Économique", price: 250, seats: 5, fuel: "Diesel", transmission: "Manuelle", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1100&q=85", tag: "Populaire" },
  { id: 2, name: "Volkswagen Golf 8", category: "Berline", price: 450, seats: 5, fuel: "Diesel", transmission: "Automatique", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1100&q=85", tag: "Confort" },
  { id: 3, name: "Range Rover Evoque", category: "SUV", price: 850, seats: 5, fuel: "Diesel", transmission: "Automatique", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1100&q=85", tag: "Premium" },
];

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tous");
  const [selectedCar, setSelectedCar] = useState(null);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredCars = useMemo(() => cars.filter(car => {
    const matchesQuery = car.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "Tous" || car.category === category;
    return matchesQuery && matchesCategory;
  }), [query, category]);

  const bookingMessage = `Bonjour, je souhaite demander une réservation.%0APrise en charge: ${pickup || "À définir"}%0ARetour: ${dropoff || "À définir"}%0ADu: ${startDate || "À définir"}%0AAu: ${endDate || "À définir"}`;

  return (
    <div className="app">
      <div className="topbar"><div className="container topbar-inner"><span><MapPin size={14}/> Casablanca, Maroc</span><span className="top-note">Votre mobilité, notre priorité</span><a href={whatsappLink("Bonjour, je souhaite avoir des informations.")} target="_blank" rel="noreferrer"><MessageCircle size={14}/> +212 6 00 00 00 00</a></div></div>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#"><span className="brand-icon"><CarFront size={25}/></span><span>drive<span>now</span><small>CAR RENTAL</small></span></a>
          <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Ouvrir le menu">{mobileOpen ? <X/> : <Menu/>}</button>
          <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={() => setMobileOpen(false)}>Accueil</a><a href="#cars" onClick={() => setMobileOpen(false)}>Nos voitures</a><a href="#services" onClick={() => setMobileOpen(false)}>Nos services</a><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
            <a className="nav-cta" href="#booking">Réserver maintenant <ArrowUpRight size={16}/></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot"/> LOCATION SIMPLE & RAPIDE</div>
              <h1>La route vous<br/>appartient<span>.</span></h1>
              <p className="hero-text">Découvrez la liberté de voyager à votre rythme. Choisissez votre voiture idéale et prenez la route en toute sérénité.</p>
              <div className="hero-actions"><a className="btn btn-primary" href="#cars">Découvrir nos voitures <ArrowRight size={18}/></a><a className="text-link" href="#services">Pourquoi nous choisir ?</a></div>
              <div className="hero-proof"><div className="avatars"><i>✓</i><i>★</i><i>+</i></div><div><strong>Un service pensé pour vous</strong><small>Simple · Flexible · Fiable</small></div></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1500&q=90" alt="Voiture sportive sur une route"/></div>
              <div className="floating-card"><span className="floating-icon"><ShieldCheck size={20}/></span><div><strong>Voyagez sereinement</strong><small>Des véhicules sélectionnés</small></div><Check className="floating-check" size={18}/></div>
              <div className="hero-label"><span>01</span><div><b>Confort à chaque trajet</b><small>Votre prochaine aventure commence ici.</small></div></div>
            </div>
          </div>
          <div className="container booking-container" id="booking">
            <form className="booking-bar" onSubmit={e => {e.preventDefault(); window.open(whatsappLink(decodeURIComponent(bookingMessage)), "_blank", "noopener,noreferrer");}}>
              <div className="booking-title"><span className="booking-icon"><CalendarDays size={19}/></span><div><b>Planifiez votre trajet</b><small>Trouvez la voiture idéale</small></div></div>
              <label><span>Lieu de prise en charge</span><div><MapPin size={17}/><input value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="Ex. Casablanca"/></div></label>
              <label><span>Lieu de retour</span><div><MapPin size={17}/><input value={dropoff} onChange={e=>setDropoff(e.target.value)} placeholder="Ex. Aéroport"/></div></label>
              <label><span>Date de départ</span><div><CalendarDays size={17}/><input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)}/></div></label>
              <label><span>Date de retour</span><div><CalendarDays size={17}/><input type="date" value={endDate} onChange={e=>setEndDate(e.target.value)}/></div></label>
              <button className="btn btn-primary booking-submit" type="submit"><Search size={17}/> Rechercher</button>
            </form>
          </div>
        </section>

        <section className="section cars-section" id="cars">
          <div className="container">
            <div className="section-heading"><div><div className="eyebrow">NOTRE FLOTTE</div><h2>Choisissez votre <span>voiture.</span></h2><p>Un véhicule adapté à chaque envie et à chaque déplacement.</p></div><a className="outline-btn" href={whatsappLink("Bonjour, je souhaite découvrir toute votre flotte.")} target="_blank" rel="noreferrer">Voir toute la flotte <ArrowUpRight size={17}/></a></div>
            <div className="filters"><div className="search-box"><Search size={17}/><input placeholder="Rechercher une voiture..." value={query} onChange={e=>setQuery(e.target.value)}/></div><div className="category-filters"><SlidersHorizontal size={17}/>{["Tous","Économique","Berline","SUV"].map(c=><button key={c} className={category===c?"filter active":"filter"} onClick={()=>setCategory(c)}>{c}</button>)}</div></div>
            <div className="car-grid">{filteredCars.map(car=><article className="car-card" key={car.id}><div className="car-image"><img src={car.image} alt={car.name}/><span className="car-tag">{car.tag}</span><button className="quick-view" onClick={()=>setSelectedCar(car)} aria-label={`Voir ${car.name}`}><ArrowUpRight size={18}/></button></div><div className="car-info"><div className="car-type">{car.category}</div><h3>{car.name}</h3><div className="car-specs"><span><Users size={15}/>{car.seats} places</span><span><Fuel size={15}/>{car.fuel}</span><span><Gauge size={15}/>{car.transmission}</span></div><div className="car-bottom"><div className="price"><strong>{car.price} DH</strong><small>/ jour</small></div><button className="rent-btn" onClick={()=>setSelectedCar(car)}>Réserver <ArrowRight size={16}/></button></div></div></article>)}</div>
            {filteredCars.length===0 && <div className="empty">Aucune voiture ne correspond à votre recherche.</div>}
          </div>
        </section>

        <section className="services-section section" id="services"><div className="container"><div className="center-heading"><div className="eyebrow">POURQUOI DRIVENOW ?</div><h2>La location, en toute <span>simplicité.</span></h2><p>Tout est pensé pour rendre votre expérience agréable du début à la fin.</p></div><div className="benefits"><div className="benefit"><span><Zap/></span><h3>Réservation rapide</h3><p>Contactez notre équipe et recevez une réponse rapidement.</p></div><div className="benefit"><span><ShieldCheck/></span><h3>Confiance & sérénité</h3><p>Des véhicules entretenus pour prendre la route tranquillement.</p></div><div className="benefit"><span><Clock3/></span><h3>Flexibilité</h3><p>Des solutions adaptées à vos besoins et à votre planning.</p></div></div></div></section>

        <section className="contact-section" id="contact"><div className="container contact-inner"><div><div className="eyebrow light">PRÊT À PRENDRE LA ROUTE ?</div><h2>Votre prochaine aventure<br/>commence ici.</h2><p>Contactez-nous pour choisir votre voiture et préparer votre trajet.</p></div><a className="btn btn-white" href={whatsappLink("Bonjour DriveNow, je souhaite réserver une voiture.")} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Discuter sur WhatsApp</a></div></section>
      </main>
      <footer className="footer"><div className="container footer-inner"><a className="brand footer-brand" href="#"><span className="brand-icon"><CarFront size={24}/></span><span>drive<span>now</span><small>CAR RENTAL</small></span></a><p>© 2026 DriveNow. Démo de site web réalisée par Webora Studio.</p><a href="#home">Retour en haut ↑</a></div></footer>

      {selectedCar && <div className="modal-backdrop" onClick={()=>setSelectedCar(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelectedCar(null)}><X/></button><img src={selectedCar.image} alt={selectedCar.name}/><div className="modal-content"><div className="car-type">{selectedCar.category}</div><h2>{selectedCar.name}</h2><p>{selectedCar.seats} places · {selectedCar.fuel} · {selectedCar.transmission}</p><div className="modal-price">{selectedCar.price} DH <small>/ jour</small></div><a className="btn btn-primary full-btn" href={whatsappLink(`Bonjour, je souhaite réserver la ${selectedCar.name} à ${selectedCar.price} DH/jour.`)} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Demander une réservation</a></div></div></div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App/>);