import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { TbSquareRoundedArrowUp } from "react-icons/tb";
import { zodResolver } from "@hookform/resolvers/zod";

const FormaData = z.object({
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

type FormData = z.infer<typeof FormaData>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormaData),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Logique d'envoi du formulaire ou traitement supplémentaire
  };

  return (
    <section className="md:bg-gradient-to-b md:from-green-800 md:to-green-700 bg-black my-12 ">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl text-white font-bold text-center mb-8">
          Contactez-nous
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl"
        >
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
              className={`w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

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
              className={`w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

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
              className={`w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none ${
                errors.subject ? "border-red-500" : ""
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

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
              className={`w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none ${
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

          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-green-700 focus:outline-none"
            >
              Envoyer le message
            </button>
          </div>
        </form>
        <div className="flex justify-end ">
          <TbSquareRoundedArrowUp className="text-5xl text-white cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
