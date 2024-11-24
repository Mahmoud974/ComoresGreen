import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { z } from "zod";

// Validation schema
const FormDataSchema = z.object({
  service: z.string(),
  surface: z.string(),
  email: z.string(),
  address: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  comment: z.string(),
});

type FormData = z.infer<typeof FormDataSchema>;

export default function Devis() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    service: "",
    surface: "",
    email: "",
    address: "",
    firstName: "",
    lastName: "",
    comment: "",
  });

  const handleStepChange = (direction: "next" | "prev") => {
    setStep((prev) => prev + (direction === "next" ? 1 : -1));
  };

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

  const StepNavigation = ({
    hasPrevious,
    hasNext,
    onSubmit,
  }: {
    hasPrevious: boolean;
    hasNext: boolean;
    onSubmit?: boolean;
  }) => (
    <div className="mt-6 flex justify-between">
      {hasPrevious && (
        <button
          type="button"
          onClick={() => handleStepChange("prev")}
          className="bg-white rounded-full w-12 h-12 mx-auto"
        >
          <p className="font-bold text-green-600">←</p>
        </button>
      )}
      {hasNext ? (
        <button
          type="button"
          onClick={() => handleStepChange("next")}
          className="bg-white rounded-full w-12 h-12 mx-auto"
        >
          <p className="font-bold text-green-600">→</p>
        </button>
      ) : (
        onSubmit && (
          <button
            type="submit"
            className="bg-green-900 shadow-xl rounded-full w-12 h-12 mx-auto"
          >
            <p className="font-bold text-white">→</p>
          </button>
        )
      )}
    </div>
  );

  return (
    <section className="md:flex md:justify-center text-black mb-12">
      <div className="bg-gradient-to-b from-green-800 to-green-700 xl:w-full w-screen xl:h-[45rem] flex items-center">
        <div className="max-w-xl mx-auto p-8 text-white">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="flex flex-col">
                <h2 className="xl:text-4xl text-2xl font-bold text-center my-12">
                  Vous souhaitez <span className="text-lime-500">aménager</span>{" "}
                  ou
                  <span className="text-lime-500"> entretenir</span> votre
                  jardin ?
                </h2>
                <p className="text-sm text-center mb-4">
                  Sélectionnez votre besoin pour recevoir des devis gratuits
                  personnalisés.
                </p>
                <div className="space-y-4">
                  {[
                    "Création et aménagement d’un jardin",
                    "Entretien d’un jardin",
                  ].map((service) => (
                    <label
                      key={service}
                      className="flex items-center justify-between bg-green-900 cursor-pointer rounded-full p-5"
                    >
                      <div className="flex">
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <p className="text-xs xl:text-xl">{service}</p>
                      </div>
                      <p className="font-bold">→</p>
                    </label>
                  ))}
                </div>
                <StepNavigation hasPrevious={false} hasNext />
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="xl:text-4xl text-2xl font-bold mb-2 text-center">
                  Quelle est la <span className="text-lime-500">surface</span>{" "}
                  de votre jardin ?
                </h2>
                <input
                  type="number"
                  name="surface"
                  value={formData.surface}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 mt-4 w-full rounded-xl outline outline-offset-1 outline-3"
                  placeholder="0 m²"
                />
                <StepNavigation hasPrevious hasNext />
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="xl:text-3xl xl:mb-6 mb-3 text-2xl font-bold   text-center">
                  <span className="text-lime-500">Informations</span>{" "}
                  personnelles
                </h2>
                {["firstName", "lastName", "email", "address"].map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 w-full rounded-xl mb-4"
                    placeholder={`${
                      field.charAt(0).toUpperCase() + field.slice(1)
                    } *`}
                  />
                ))}
                <StepNavigation hasPrevious hasNext />
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="xl:text-4xl text-2xl font-bold mb-2 text-center">
                  Validez votre <span className="text-lime-500">demande</span>
                </h2>
                {["service", "surface", "address"].map((key) => (
                  <p key={key} className="mt-2">
                    <strong>
                      {key.charAt(0).toUpperCase() + key.slice(1)} :
                    </strong>{" "}
                    {formData[key as keyof FormData]}
                  </p>
                ))}
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-xl mt-4"
                  placeholder="Ajoutez un commentaire, des précisions..."
                  maxLength={450}
                />
                <StepNavigation hasPrevious hasNext={false} onSubmit />
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="xl:flex hidden bg-green-200 w-full h-[45rem]">
        <Image
          width={1000}
          height={1000}
          src="/cut.jpg"
          alt="Élagage Image"
          className="shadow-xl w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
