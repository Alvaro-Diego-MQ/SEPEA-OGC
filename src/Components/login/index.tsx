"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { User, Lock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// 1. Define el esquema de validación con Zod
const formSchema = z.object({
  username: z.string().min(1, { message: 'El nombre de usuario es requerido.' }),
  password: z.string().min(1, { message: 'La contraseña es requerida.' }),
});

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const router = useRouter();

  // 2. Configura el formulario con react-hook-form y Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // 3. Maneja el envío del formulario
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setAuthError(null);

    // Simula una llamada a la API
    await new Promise(resolve => setTimeout(resolve, 1000));

    const validUsername = "1234";
    const validPassword = "1234";

    if (values.username === validUsername && values.password === validPassword) {
      console.log('Login exitoso');
      router.push('/Autoevaluacion');
    } else {
      console.log('Usuario o contraseña incorrectos');
      setAuthError('Usuario o contraseña no válidos.');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      {/* Contenedor del Formulario */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Encabezado */}
          <div className="text-center">
            <img src="/logo_ogc.png" alt="OGC Logo" className="h-24 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900">Bienvenido de Nuevo</h1>
            <p className="text-gray-500 mt-2">
              Sistema de Evaluación de Programas de Estudio para la Acreditación
            </p>
          </div>

          {/* Formulario */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Usuario</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="Ingrese su usuario"
                          className="pl-10 h-12 border-gray-300 focus:border-[#009CDE] focus:ring-[#009CDE]"
                          {...field}
                          disabled={isLoading}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Contraseña</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="password"
                          placeholder="Ingrese su contraseña"
                          className="pl-10 h-12 border-gray-300 focus:border-[#009CDE] focus:ring-[#009CDE]"
                          {...field}
                          disabled={isLoading}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {authError && (
                  <p className="text-sm font-medium text-red-600 text-center">{authError}</p>
              )}

              <Button type="submit" className="w-full bg-[#009CDE] hover:bg-blue-700 text-white font-bold py-3 text-base rounded-lg transition-colors duration-300" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    <span>Verificando...</span>
                  </>
                ) : (
                  'INGRESAR'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Contenedor de la Imagen */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/unapuno.jpg"
          alt="Universidad Nacional del Altiplano"
          layout="fill"
          objectFit="cover"
          priority
          className="filter grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Superposición oscura para mejorar contraste */}
      </div>
    </div>
  );
}