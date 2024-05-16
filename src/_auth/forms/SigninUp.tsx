import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { SIGNUPVALIDATION } from '@/lib/validation'
import { z } from 'zod'



const SigninUp = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof SIGNUPVALIDATION>>({
    resolver: zodResolver(SIGNUPVALIDATION),
    defaultValues: {
      name: 'rafita',
      email: "example@example.com",
      password: "",
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof SIGNUPVALIDATION>) => {
    console.log(values);
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor.
  }

  return (
      <Form {...form}>
        <div className='sm:w-420 flex-center flex-col'>
          <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Crear una cuenta nueva </h2>
          <p className='text-gray-300 small-medium md:base-regular mt-2'>¡Para usar social tree necesitas una cuenta!</p>
     
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input className='text-black' placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
        </div>
      </Form> 
  );
}

export default SigninUp;
