import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/Components/ui/chart";

function createRoundRobin(items: any) {
    let index = 0;

    return function () {
        if (items.length === 0) return null;

        const item = items[index];
        index = (index + 1) % items.length;
        return item;
    };
}

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

type ChartProps = {
    title?: string;
    description?: string;
    items: any[];
    onChangeTimeRange?: (value: string) => void;
    timeRange?: string;
    xAxisKey: string;
    yAxisKey: string;
};

export default function PieChartCustom({
    title = "Area Chart - Interactive",
    description = "Showing total visitors for the last 3 months",
    items,
    xAxisKey = "month",
    yAxisKey = "visitors",
    onChangeTimeRange,
    timeRange = "90",
}: Readonly<ChartProps>) {
    const totalVisitors = React.useMemo(() => {
        return items.reduce((acc, curr) => acc + curr.count, 0);
    }, []);

    const chartConfig: ChartConfig = {};
    const nextItem = createRoundRobin(colors);

    items.forEach((category: any, index: number) => {
        // set category name
        if (!category.category) {
            category.category = "Other";
        }

        const categoryName = category.category ? category.category : "Other";
        const categoryLabel = category.category ? category.category : "Other";

        chartConfig[categoryName] = {
            label:
                categoryLabel.charAt(0).toUpperCase() + categoryLabel.slice(1),
            color: colors[Math.min(index, colors.length - 1)],
        };

        // set fill color
        category.fill = nextItem();
    });

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={items}
                            dataKey={yAxisKey}
                            nameKey={xAxisKey}
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        "cx" in viewBox &&
                                        "cy" in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="text-3xl font-bold fill-foreground"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Expense
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
