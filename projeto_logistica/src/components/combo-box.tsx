"use client"
import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useRouter } from "next/navigation";


export function Combobox({ transportadoras }: any) {
    const [open, setOpen] = React.useState(false)
    const router = useRouter();

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button role="combobox" aria-expanded={open} className="w-[300px] p-6 justify-between bg-black/90 text-white">
                    <span className="text-base lg:text-xl">
                    {transportadoras.nome ? transportadoras.find((transportadora: any) => transportadora.nome === transportadora.nome)?.label : "Transportadoras"}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 stroke-white" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-80 min-w-64 p-0">
                <Command className="max-w-80 min-w-64">
                    <CommandInput className="" placeholder="Pesquisar"/>
                    <CommandEmpty>
                        <span className="text-black/80 text-base">
                            Nenhuma transportadora encontrada.
                        </span>
                    </CommandEmpty>
                    <CommandGroup>
                    {transportadoras.map((transportadoras: any) => (
                        <CommandItem key={transportadoras.id}>
                            <span onClick={()=>{router.push(`/generalidades/${transportadoras.id}`)}} className="px-3 hover:text-green-simple transition-all duration-300 cursor-pointer capitalize text-base lg:text-lg">{transportadoras.nome}</span>
                        </CommandItem>
                    ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
