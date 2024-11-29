import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export function FormSignUp() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await fetch("http://localhost:5200/apis/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log(data);

            setModalMessage("Cuenta creada exitosamente ✅.");
            setModalOpen(true);

            form.reset();
        } catch (error) {
            setModalMessage("Error al crear la cuenta. Por favor, intenta nuevamente.");
            setModalOpen(true);
        }
    };

    const { isValid } = form.formState;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="password" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>

                <Button type="submit" className="w-full mt-5 bg-yellow-500 text-white hover:bg-yellow-600" disabled={!isValid}>
                    Registrarse
                </Button>
            </form>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-black p-6 rounded-md">
                        <h3 className="font-bold text-lg">Notificación</h3>
                        <br />
                        <p><strong>{modalMessage}</strong></p>
                        <Button
                            onClick={() => setModalOpen(false)}
                            className="mt-4 bg-yellow-500 text-white hover:bg-yellow-600"
                        >
                            Continuar
                        </Button>
                    </div>
                </div>
            )}
        </Form>
    );
}
