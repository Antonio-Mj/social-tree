import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { SIGNUPVALIDATION } from '@/lib/validation'
import { z } from 'zod'
import Loader from '@/components/shared/Loader'
import { Link } from 'react-router-dom'
import { createUserAccount } from '@/lib/appwrite/api'
import { useToast } from "@/components/ui/use-toast"



const SigninUp = () => {
  const { toast } = useToast()
  const isLoading = false
  // 1. Define your form.
  const form = useForm<z.infer<typeof SIGNUPVALIDATION>>({
    resolver: zodResolver(SIGNUPVALIDATION),
    defaultValues: {
      name: '',
      email: "",
      password: "",
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  //agregar ASYNC
  async function onSubmit(values: z.infer<typeof SIGNUPVALIDATION>){
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor.
    const newUser = await createUserAccount(values);
    console.log(newUser);

    if(!newUser){
      return toast({title: "Error al crear la cuenta, por favor prueba de nuevo" })
    }

    // const session = await signInAccount();
    
  }

  return (
      <Form {...form}>
        <div className='sm:w-420 flex-center flex-col'>
          <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Crear una cuenta nueva </h2>
          <p className='text-gray-300 small-medium md:base-regular mt-2'>¡Para usar social tree necesitas una cuenta!</p>
     
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input className='shad-input' {...field} />
                </FormControl>    
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' className='shad-input'  {...field} />
                </FormControl>    
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de usuario</FormLabel>
                <FormControl>
                  <Input  className='shad-input'  {...field} />
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
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type='password' className='shad-input'  {...field} />
                </FormControl>    
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='shad-button_primary'>
            {
              isLoading
               ?  
               <div className="flex gap-2">
                <Loader />
                Creando cuenta...
               </div>
                : "Crear cuenta"
            }
          </Button>
          <p className='text-small-regular text-light-2 text-center mt-2'>
            ¿Ya tienes cuenta?
            <Link to='/signin' className='text-blue-500 hover:text-blue-600 ml-2 text-small-semibold'>
              Iniciar sesión
            </Link>
            </p>
        </form>
        </div>
      </Form> 
  );
}

export default SigninUp;
