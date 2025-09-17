"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Lock, Loader2, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// 📌 Esquema de validación con Zod
const formSchema = z.object({
  username: z.string().min(1, { message: "El nombre de usuario es requerido." }),
  password: z.string().min(1, { message: "La contraseña es requerida." }),
});

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // 📌 Configuración de react-hook-form con Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", password: "" },
  });

  // 📌 Manejo del submit
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setAuthError(null);

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación

    if (values.username === "1234" && values.password === "1234") {
      router.push("/Autoevaluacion");
    } else {
      setAuthError("Usuario o contraseña no válidos.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      {/* 📌 Formulario */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-sm">
          <Card className="shadow-xl rounded-2xl border border-gray-200 md:border-none md:shadow-none animate-fadeIn">
            <CardContent className="p-6 md:p-0 space-y-6">
              {/* 📌 Encabezado */}
              <div className="text-center transition-all duration-700 ease-out">
                <img
                  src="/logo_ogc.png"
                  alt="OGC Logo"
                  className="h-20 mx-auto mb-6 animate-fadeIn"
                />
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Bienvenido de Nuevo
                </h1>
                <p className="text-gray-500 text-sm md:text-base mt-2">
                  Sistema de Evaluación de Programas de Estudio para la
                  Acreditación
                </p>
              </div>

              {/* 📌 Formulario */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="space-y-5"
                >
                  {/* Usuario */}
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 text-sm font-medium">
                          Usuario
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                              placeholder="Ingrese su usuario"
                              className="pl-10 h-11 text-sm border-gray-300 focus:border-[#009CDE] focus:ring-[#009CDE] transition-all"
                              {...field}
                              disabled={isLoading}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Contraseña */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 text-sm font-medium">
                          Contraseña
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Ingrese su contraseña"
                              className="pl-10 pr-10 h-11 text-sm border-gray-300 focus:border-[#009CDE] focus:ring-[#009CDE] transition-all"
                              {...field}
                              disabled={isLoading}
                            />
                            {/* Toggle ver contraseña */}
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Error de autenticación */}
                  {authError && (
                    <p className="text-sm font-medium text-red-600 text-center animate-fadeIn">
                      {authError}
                    </p>
                  )}

                  {/* Botón submit */}
                  <Button
                    type="submit"
                    className="w-full bg-[#009CDE] hover:bg-blue-700 text-white font-semibold py-3 text-sm md:text-base rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        <span>Verificando...</span>
                      </>
                    ) : (
                      "Ingresar"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 📌 Imagen lateral */}
      <div className="hidden md:block md:w-1/2 lg:w-2/3 relative animate-fadeIn">
        <Image
          src="/unapuno.jpg"
          alt="Universidad Nacional del Altiplano"
          fill
          className="object-cover filter grayscale-[20%] transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
  );
}
