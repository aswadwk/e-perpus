"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import { cn } from "@/Lib/utils";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import { toYearMonthDay } from "@/Shared/utils";

export default function DatePickerDemo({
  value,
  onChange,
}: Readonly<{
  value?: Date;
  onChange: (date: Date) => void;
}>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {value ? toYearMonthDay(value) : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(e: any) => onChange(e)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
