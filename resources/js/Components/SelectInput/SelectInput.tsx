"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/Lib/utils";
import { Button } from "@/Components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];

type SelectInput = {
    value: string;
    label: string;
};

type SelectInputProps = {
    items: SelectInput[];
    label?: string;
    placeholder?: string;
    onChange: (value: string) => void;
};

export function SelectInput({
    items,
    label = "Select",
    placeholder = "Search...",
    onChange,
}: Readonly<SelectInputProps>) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between w-full"
                >
                    {value
                        ? items.find(
                              (data: SelectInput) => data.value === value
                          )?.label
                        : label}
                    <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 popover-content-width-full">
                <Command className="w-full">
                    <CommandInput
                        placeholder={placeholder}
                        className="w-full h-9"
                        onValueChange={(value) => onChange(value)}
                    />
                    <CommandList>
                        <CommandEmpty>No data found.</CommandEmpty>
                        <CommandGroup className="w-full">
                            {items.map((item) => (
                                <CommandItem
                                    className="w-full"
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ""
                                                : currentValue
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    {item.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === item.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
