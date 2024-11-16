import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/Lib/utils";
import { Button } from "@/Components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/Components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import { Label } from "../ui/label";
import { useState } from "react";

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
  error?: string;
  currentValue: string;
  isRequired?: boolean;
};

export default function SelectInput({
  items,
  label = "Select",
  placeholder = "Search...",
  onChange,
  error,
  currentValue,
  isRequired,
}: Readonly<SelectInputProps>) {
  console.log("currentValue", currentValue);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(currentValue || "");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Label className="mb-4">
        {label}
        {isRequired && (
          <span className="text-xs text-red-500"> * Wajib diisi</span>
        )}
      </Label>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full"
        >
          {value
            ? items.find((framework) => framework.value === value)?.label
            : placeholder}
          <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 popover-content-width-full">
        <Command className="w-full">
          <CommandList>
            <CommandEmpty>No data found.</CommandEmpty>
            <CommandGroup className="w-full">
              {items.map((item) => (
                <CommandItem
                  className="w-full"
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
      {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
    </Popover>
  );
}
