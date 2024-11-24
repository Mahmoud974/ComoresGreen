import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { z } from "zod";
type FormData = {
  service: string;
  surface: string;
  email: string;
  address: string;
  firstName: string;
  lastName: string;
  comment: string;
};

export default function Block() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    service: "",
    surface: "",
    email: "",
    address: "",
    firstName: "",
    lastName: "",
    comment: "",
  });

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handlePrevious = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Demande de devis soumise avec succès!");
  };

  return (
    <section className="flex text-black mb-12">
      {/* Colonne gauche : Formulaire */}

      <div className="bg-gradient-to-b from-green-800 to-green-700 w-full h-[45rem] flex items-center  ">
        <div className="max-w-xl mx-auto p-8 text-white">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="step-1 flex flex-col">
                <h2 className="text-4xl font-bold mb-2 text-center mt-12">
                  Vous souhaitez{" "}
                  <span className="text-green-400">aménager</span> ou
                  <span className="text-green-400"> entretenir</span> votre
                  jardin ?
                </h2>

                <p className="text-sm mb-4">
                  Sélectionnez votre besoin pour recevoir des devis gratuits
                  personnalisés.
                </p>
                <div className="mt-4 space-y-4">
                  <label className="flex justify-between  bg-green-900 cursor-pointer hover:border-black hover:border-3 rounded-full p-5">
                    <div className="flex">
                      <input
                        type="radio"
                        name="service"
                        value="Création et aménagement d’un jardin"
                        checked={
                          formData.service ===
                          "Création et aménagement d’un jardin"
                        }
                        onChange={handleChange}
                        className="mr-2 "
                      />
                      <p>Création et aménagement d’un jardin</p>
                    </div>
                    <p className="font-bold">→</p>
                  </label>
                  <label className="flex justify-between bg-green-900 cursor-pointer rounded-full p-5">
                    <div className="flex ">
                      <input
                        type="radio"
                        name="service"
                        value="Entretien d’un jardin"
                        checked={formData.service === "Entretien d’un jardin"}
                        onChange={handleChange}
                        className="mr-2 "
                      />
                      <p>Entretien d’un jardin</p>
                    </div>
                    <p className="font-bold">→</p>
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="mt-6 bg-white rounded-full w-12 h-12 mx-auto "
                >
                  <p className="font-bold text-green-600">→</p>
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="step-2">
                <h2 className="text-2xl font-bold mb-2">
                  Quelle est la <span className="text-green-400">surface</span>{" "}
                  de votre <span className="text-green-400">jardin</span> ?
                </h2>

                <input
                  type="number"
                  name="surface"
                  value={formData.surface}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 mt-4 w-full rounded-xl outline outline-offset-1 outline-3"
                  placeholder="0 m²"
                />
                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="mt-6 bg-white rounded-full w-12 h-12 mx-auto"
                  >
                    <p className="font-bold text-green-600">←</p>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="mt-6 bg-white rounded-full w-12 h-12 mx-auto "
                  >
                    <p className="font-bold text-green-600">→</p>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="step-3">
                <h2 className="text-2xl font-bold mb-2 text-center">
                  <span className="text-green-400">Informations</span>{" "}
                  personnelles
                </h2>

                <div className="mt-4 space-y-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 w-full rounded-xl"
                    placeholder="Prénom *"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 w-full rounded-xl"
                    placeholder="Nom *"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 w-full rounded-xl"
                    placeholder="E-mail *"
                  />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 w-full rounded-xl"
                    placeholder="Adresse du jardin *"
                  />
                </div>
                <div className="mt-6 flex justify-around">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-white rounded-full w-12 h-12 mx-auto"
                  >
                    <p className="font-bold text-green-600">←</p>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-green-900 shadow-xl rounded-full w-12 h-12 mx-auto"
                  >
                    <p className="font-bold ext-white">→</p>
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="step-4">
                <h2 className="text-2xl font-bold mb-2">
                  Validez votre demande
                </h2>
                <p className="mt-2">
                  <strong>Service :</strong> {formData.service}
                </p>
                <p className="mt-2">
                  <strong>Surface :</strong> {formData.surface} m²
                </p>
                <p className="mt-2">
                  <strong>Adresse :</strong> {formData.address}
                </p>
                <div className="mt-4">
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 w-full rounded-xl"
                    placeholder="Ajoutez un commentaire, des précisions..."
                    maxLength={450}
                  />
                </div>

                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-white rounded-full w-12 h-12 mx-auto"
                  >
                    <p className="font-bold text-green-600">←</p>
                  </button>
                  <button
                    type="submit"
                    className="bg-green-900 shadow-xl rounded-full w-12 h-12 mx-auto"
                  >
                    <p className="font-bold text-white">→</p>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Colonne droite : Image */}
      <div className="bg-green-200 w-full h-[45rem]">
        <Image
          width={1000}
          height={1000}
          src="/cut.jpg" // Remplace cette image par la tienne
          alt="Élagage Image"
          className="shadow-xl w-full h-full object-cover "
        />
      </div>
    </section>
  );
}
