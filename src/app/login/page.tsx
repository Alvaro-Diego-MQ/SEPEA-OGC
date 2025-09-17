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

// Esquema de validación con Zod (sin cambios)
const formSchema = z.object({
  username: z.string().min(1, { message: "El nombre de usuario es requerido." }),
  password: z.string().min(1, { message: "La contraseña es requerida." }),
});

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", password: "" },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setAuthError(null);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (values.username === "1234" && values.password === "1234") {
      router.push("/Autoevaluacion");
    } else {
      setAuthError("Usuario o contraseña no válidos.");
    }
    setIsLoading(false);
  };

  return (
    // CAMBIO: Usa el color de fondo del tema
    <div className="flex flex-col md:flex-row h-screen bg-background">
      {/* 📌 Formulario */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-sm">
          {/* CAMBIO: Usa los colores de la Card del tema. No necesita borde explícito */}
          <Card className="shadow-xl rounded-2xl md:border-none md:shadow-none animate-fadeIn bg-card">
            <CardContent className="p-6 md:p-0 space-y-6">
              {/* 📌 Encabezado */}
              <div className="text-center transition-all duration-700 ease-out">
                <img
                  src="/logo_ogc.png"
                  alt="OGC Logo"
                  className="h-20 mx-auto mb-6 animate-fadeIn"
                />
                {/* CAMBIO: Usa los colores de texto del tema */}
                <h1 className="text-2xl md:text-3xl font-semibold text-card-foreground">
                  Bienvenido de Nuevo
                </h1>
                <p className="text-muted-foreground text-sm md:text-base mt-2">
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
                        <FormLabel className="text-sm font-medium text-foreground">
                          Usuario
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            {/* CAMBIO: Se eliminan colores fijos para que el componente Input use los del tema */}
                            <Input
                              placeholder="Ingrese su usuario"
                              className="pl-10 h-11 text-sm transition-all"
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
                        <FormLabel className="text-sm font-medium text-foreground">
                          Contraseña
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Ingrese su contraseña"
                              className="pl-10 pr-10 h-11 text-sm transition-all"
                              {...field}
                              disabled={isLoading}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
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
                    // CAMBIO: Usa el color 'destructive' para errores
                    <p className="text-sm font-medium text-destructive text-center animate-fadeIn">
                      {authError}
                    </p>
                  )}

                  {/* Botón submit */}
                  {/* CAMBIO: El botón ahora usa los colores primarios del tema */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-sm md:text-base rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95"
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

      {/* 📌 Imagen lateral (sin cambios) */}
      <div className="hidden md:block md:w-1/2 lg:w-2/3 relative animate-fadeIn">
        <Image
          src="/unapuno.jpg"
          alt="Universidad Nacional del Altiplano"
          fill
          className="object-cover filter grayscale-[20%] transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/10"></div>
      </div>
    </div>
  );
}