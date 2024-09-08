"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    // ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/Components/ui/chart";

const itemLabels = ["desktop", "mobile"];

// const chartConfig = {
//     desktop: {
//         label: "Desktop",
//         color: "hsl(var(--chart-1))",
//     },
//     mobile: {
//         label: "Mobile",
//         color: "hsl(var(--chart-2))",
//     },
// } satisfies ChartConfig;

type ChartProps = {
    title?: string;
    description?: string;
    items: any[];
    onChangeTimeRange?: (value: string) => void;
    timeRange?: string;
    xAxisKey: string;
    categories: string[];
};

const colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
];

type ChartConfig = {
    [key: string]: {
        label: string;
        color: string;
    };
};

export function CategoryChart({
    title = "Area Chart - Interactive",
    description = "Showing total visitors for the last 3 months",
    items,
    onChangeTimeRange,
    timeRange = "90",
    xAxisKey = "month",
    categories,
}: Readonly<ChartProps>) {
    const chartConfig: ChartConfig = {};

    categories.forEach((category, index) => {
        chartConfig[category] = {
            label: category.charAt(0).toUpperCase() + category.slice(1),
            color: colors[Math.min(index, colors.length - 1)],
        };
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={items}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey={xAxisKey}
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        {/* <Bar dataKey="desktop" fill="var(--color-desktop)" />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" /> */}
                        {categories.map((category) => (
                            <Bar
                                key={category}
                                dataKey={category}
                                fill={chartConfig[category].color}
                            />
                        ))}
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
