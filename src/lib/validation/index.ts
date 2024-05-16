import * as z from "zod"

export const SIGNUPVALIDATION = z.object({
    name: z.string().min(2, {message: 'Muy corto'}).max(10, {message: 'Muy largo'}),
    username: z.string().min(5, {message: 'Muy corto'}).max(30, {message: 'Muy largo'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Debe contener al menos 8 caracteres'}),
  })