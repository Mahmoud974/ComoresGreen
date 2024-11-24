import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { TbSquareRoundedArrowUp } from "react-icons/tb";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useState } from "react";

// Définition du schéma de validation avec Zod
const FormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut dépasser 50 caractères"),
  email: z.string().email("Veuillez entrer une adresse e-mail valide"),
  subject: z
    .string()
    .min(5, "Le sujet doit contenir au moins 5 caractères")
    .max(100, "Le sujet ne peut dépasser 100 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(500, "Le message ne peut dépasser 500 caractères"),
});

type FormData = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    try {
      // Envoi de l'email via EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Message envoyé avec succès", response.status, response.text);
      setSuccessMessage("Votre message a été envoyé avec succès !");
      reset(); // Réinitialise le formulaire

      // Supprime le message après 5 secondes
      setTimeout(() => setSuccessMessage(null), 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="xl:bg-gradient-to-b xl:from-green-800 xl:to-green-700 bg-black my-12">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl text-white font-bold text-center mb-8">
          Contactez-nous
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl"
        >
          {/* Nom complet */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={`w-full px-3 py-2 border rounded-xl text-gray-700 focus:outline-none ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={`w-full px-3 py-2 border rounded-xl text-gray-700 focus:outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Sujet */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              className={`w-full px-3 py-2 border rounded-xl text-gray-700 focus:outline-none ${
                errors.subject ? "border-red-500" : ""
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              className={`w-full px-3 py-2 border rounded-xl text-gray-700 focus:outline-none ${
                errors.message ? "border-red-500" : ""
              }`}
              rows={5}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Bouton d'envoi */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-700"
              } text-white rounded-xl focus:outline-none`}
            >
              {isSubmitting ? "Envoi..." : "Envoyer le message"}
            </button>
          </div>
        </form>

        {/* Message de confirmation */}
        {successMessage && (
          <p className="text-green-500 text-center mt-4">{successMessage}</p>
        )}

        <div className="flex justify-end ">
          <TbSquareRoundedArrowUp className="text-5xl text-white cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
