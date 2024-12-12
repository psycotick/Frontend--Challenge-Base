"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const formSchema = z.object({
    input: z.string().min(2).max(30),
});

type FormValues = z.infer<typeof formSchema>;

export function SearchBox() {
    const router = useRouter();
    const methods = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    });

    const onSubmit = (values: FormValues) => {
        router.push(`/search/${encodeURIComponent(values.input)}`);
        methods.reset();
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold text-white mb-2">Search</h2>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="relative text-black space-y-1"
                >
                    <div className="relative">
                        <Input
                            {...methods.register("input")}
                            placeholder="Search ..."
                            className="w-full p-2 pr-12 rounded-md bg-[#1C1C1C] text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button
                            type="submit"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            <Search className="text-gray-400 hover:text-gray-200" />
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}
