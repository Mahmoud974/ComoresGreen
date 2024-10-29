"use client";
import { useState } from "react";

export default function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prestationType: "",
    details: "",
    date: "",
  });

  const prestationOptions = [
    "Élagage",
    "Taille des haies",
    "Abattage d'arbres",
    "Dessouchage",
    "Débroussaillage",
    "Entretien paysager",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Devis form submitted:", formData);
    // Ici tu peux ajouter une logique pour envoyer les données du formulaire à une API
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8">
          Demande de devis
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Numéro de téléphone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="prestationType"
            >
              Type de prestation
            </label>
            <select
              name="prestationType"
              id="prestationType"
              value={formData.prestationType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none"
              required
            >
              <option value="">-- Sélectionnez une prestation --</option>
              {prestationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="details"
            >
              Détails supplémentaires
            </label>
            <textarea
              name="details"
              id="details"
              value={formData.details}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none"
              rows={4}
              placeholder="Décrivez votre projet en quelques mots..."
              required
            ></textarea>
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date souhaitée d'intervention
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
            >
              Envoyer la demande de devis
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
